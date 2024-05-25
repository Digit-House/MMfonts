import Script from 'next/script';

const Umami = () => {
  return (
    <Script
      id="umami"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() { var el = document.createElement('script'); el.setAttribute('src', 'https://umami.konyan.dev/script.js'); el.setAttribute('data-website-id', '23b54e7d-4714-436f-9647-f1760484adca'); document.body.appendChild(el); })();
    `,
      }}
    />
  );
};

export default Umami;
