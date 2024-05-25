import Script from 'next/script';

const Umami = () => {
  return (
    <Script
      id="umami"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function() { var el = document.createElement('script'); el.setAttribute('src', 'https://umami.konyan.dev/script.js'); el.setAttribute('data-website-id', '1bf6a85a-9f1f-4591-95cc-3a8b53cdd09f'); document.body.appendChild(el); })();
    `,
      }}
    />
  );
};

export default Umami;
