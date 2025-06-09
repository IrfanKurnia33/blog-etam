import Link from 'next/link';
import { getPosts } from '@/lib/wordpress';

export default async function Home() {
  const posts = await getPosts();

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
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.60377 12.3861L1.25337 6.17274L7.64555 0L13.996 6.21335L7.60377 12.3861ZM12.9515 26.9719V28.5963H7.22776L2.92454 24.8196V17.2593H0V15.619H9.06604L12.9515 19.4116V26.9719Z" fill="#FAFEF5"/>
            <path d="M8.64825 21.2865L12.9515 25.0632V40H6.80997L2.92454 36.2233V22.9109V21.2865H8.64825ZM31 38.3756V40H19.2183L13.5782 27.7764V26.1926L23.0202 15.619H27.8248V17.2583H23.9811L16.0013 26.1926H23.3127L28.911 38.3756H31Z" fill="#FAFEF5"/>
          </svg>
        </div>
        <h1 className="font-title text-4xl font-bold mb-2">Erratic Thoughts and More</h1>
        <h3 className="font-body text-subheading mb-6">A personal journal of Irfan Kurnia. Writing in 🇮🇩 and 🇺🇸 🇬🇧.</h3>
        <nav className="flex justify-center gap-6 mb-6">
          <Link href="/about" className="text-subheading hover:text-foreground transition-colors">About</Link>
          <a href="https://irfankurnia.com/" target="_blank" rel="noopener noreferrer" className="text-subheading hover:text-foreground transition-colors">UX Portfolio</a>
          <a href="mailto:hello@irfankurnia.com" target="_blank" rel="noopener noreferrer" className="text-subheading hover:text-foreground transition-colors">Email Me</a>
        </nav>
        <div className="border-b border-[#343434]"></div>
      </div>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Link 
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block hover:no-underline"
          >
            <article 
              className="font-body border border-subheading/20 p-6 rounded-lg transition-all duration-200 hover:border-subheading/40 hover:shadow-lg hover:shadow-subheading/5 hover:-translate-y-0.5"
            >
              <div className="font-mono text-subheading/80 text-sm mb-3">
                {formatDate(post.date)}
              </div>
              <h2 className="font-title text-2xl font-semibold mb-2">
                {cleanContent(post.title.rendered)}
              </h2>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}