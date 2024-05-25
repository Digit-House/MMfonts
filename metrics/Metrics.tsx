import { GoogleAnalytics } from '@next/third-parties/google';
import Umami from './Umami';

const Metrics = () => (
  <>
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRAKCING_ID as string} />
    <Umami />
  </>
);

export default Metrics;
