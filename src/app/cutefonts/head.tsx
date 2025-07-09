export default function Head() {
    const title = 'Cute Fonts Generator 🧸 | FancyLetters';
    const description = 'Copy and paste cute font styles like hearts, soft letters, pastel bubbles, and kawaii text for Instagram, names, or bios.';
  
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
  
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cutefonts.fancyletters.org/" />
        <meta property="og:image" content="https://cutefonts.fancyletters.org/og-image.png" />
  
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://cutefonts.fancyletters.org/og-image.png" />
  
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
  