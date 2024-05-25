'use client';

import Script from 'next/script';

const Umami = () => {
  return <Script async src="https://umami.konyan.dev/script.js" data-website-id={process.env.UMAMI_TRACKING_ID} />;
};

export default Umami;
