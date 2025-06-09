import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <svg width="31" height="40" viewBox="0 0 31 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.60377 12.3861L1.25337 6.17274L7.64555 0L13.996 6.21335L7.60377 12.3861ZM12.9515 26.9719V28.5963H7.22776L2.92454 24.8196V17.2593H0V15.619H9.06604L12.9515 19.4116V26.9719Z" fill="#FAFEF5"/>
            <path d="M8.64825 21.2865L12.9515 25.0632V40H6.80997L2.92454 36.2233V22.9109V21.2865H8.64825ZM31 38.3756V40H19.2183L13.5782 27.7764V26.1926L23.0202 15.619H27.8248V17.2583H23.9811L16.0013 26.1926H23.3127L28.911 38.3756H31Z" fill="#FAFEF5"/>
          </svg>
        </div>
        <h1 className="font-title text-4xl font-bold mb-2">About the Blog</h1>
        <h3 className="font-body text-subheading mb-6">A little intro of my corner of the internet</h3>
        <nav className="flex justify-center gap-6 mb-6">
          <Link href="/" className="text-subheading hover:text-foreground transition-colors">Home</Link>
          <a href="https://irfankurnia.com/" target="_blank" rel="noopener noreferrer" className="text-subheading hover:text-foreground transition-colors">UX Portfolio</a>
          <a href="mailto:hello@irfankurnia.com" target="_blank" rel="noopener noreferrer" className="text-subheading hover:text-foreground transition-colors">Email Me</a>
        </nav>
        <div className="border-b border-[#343434]"></div>
      </div>
      <div className="flex justify-center mb-8">
        <Image 
          src="/blog-intro.png" 
          alt="Erratic Thoughts and More" 
          width={800}
          height={400}
          className="max-w-full"
          priority
        />
      </div>
      <div className="font-body space-y-6">
        <section className="border border-subheading/20 p-6 rounded-lg">
          <h2 className="font-title text-2xl font-semibold mb-4">Jotting down my screams, one sentence at a time.</h2>
          <p className="text-subheading text-xl leading-8 mb-8">
            As the title reads, you will be immersed in my hikikomori-bedroom-like mess of a mind. Here I write true reflections of what I think and feel. I won&apos;t try to be as diplomatic as I am on X or any other platforms.
          </p>
          <p className="text-subheading text-xl leading-8 mb-8">
            Well, that&apos;s why anyone set up blogs of their own in the first place, right?
          </p>
          <p className="text-subheading text-xl leading-8">
            So here it is, my honest thoughts on music, design, politics(?), and life in general. All are written with no grammar checks, AI suggestions, or any sort of effort to be aligned with the current trends.
          </p>
        </section>
      </div>
    </main>
  );
} 