import { getPost, getPosts } from '@/lib/wordpress';
import Link from 'next/link';

export const revalidate = 600; // Check for updates every 10 minutes

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props) {
  const { slug } = await props.params;
  const post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const cleanContent = (content) => {
    // Replace different formats of non-breaking spaces
    return content
      .replace(/&nbsp;/gi, ' ') // Case insensitive &nbsp;
      .replace(/\u00A0/g, ' ') // Unicode non-breaking space
      .replace(/\xA0/g, ' ') // Hex non-breaking space
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim(); // Remove leading/trailing spaces
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Back to all posts
      </Link>
      <article className="font-body">
        <h1 className="font-title text-4xl font-bold mb-6">{cleanContent(post.title.rendered)}</h1>
        <div className="font-mono text-subheading mb-10 text-lg flex items-center gap-3">
          <span>{formatDate(post.date)}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span className="text-subheading/50">•</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag.id} className="text-subheading/80 hover:text-subheading transition-colors">
                    #{tag.name}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="border-b border-[#343434]"></div>
        <div className="h-8"></div>
        <div 
          className="prose prose-invert prose-lg max-w-none
            [&_h1]:font-title [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-8 [&_h1]:mt-12
            [&_h2]:font-title [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mb-6 [&_h2]:mt-10
            [&_h3]:font-title [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mb-5 [&_h3]:mt-8
            [&_h4]:font-title [&_h4]:text-2xl [&_h4]:font-bold [&_h4]:mb-4 [&_h4]:mt-6
            [&_h5]:font-title [&_h5]:text-xl [&_h5]:font-bold [&_h5]:mb-3 [&_h5]:mt-5
            [&_h6]:font-title [&_h6]:text-lg [&_h6]:font-bold [&_h6]:mb-3 [&_h6]:mt-4
            [&_p]:font-body [&_p]:text-xl [&_p]:leading-8 [&_p]:mb-8
            [&_ul]:font-body [&_ul]:text-xl [&_ul]:leading-8 [&_ul]:mb-8 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_ol]:font-body [&_ol]:text-xl [&_ol]:leading-8 [&_ol]:mb-8 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-2
            [&_li]:mb-2
            [&_code]:font-mono [&_code]:text-base
            [&_figure]:mb-8 [&_figure]:mt-8
            [&_figcaption]:font-body [&_figcaption]:text-base [&_figcaption]:italic [&_figcaption]:text-subheading/80 [&_figcaption]:mt-2 [&_figcaption]:text-center
            prose-headings:mt-0
            prose-p:mt-0
            prose-ul:mt-0
            prose-ol:mt-0
            prose-li:mt-0
            prose-figure:mt-0
            prose-figcaption:mt-2
            prose-a:text-link hover:prose-a:opacity-80"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </article>
    </main>
  );
}