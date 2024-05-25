'use client';

import Script from 'next/script';

const Umami = () => {
  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() { var el = document.createElement('script'); el.setAttribute('src', 'https://umami.konyan.dev/script.js'); el.setAttribute('data-website-id', process.env.UMAMI_TRACKING_ID as string); document.body.appendChild(el); })();
    `,
      }}
    />
  );
};

export default Umami;
