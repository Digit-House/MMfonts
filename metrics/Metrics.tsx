import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'

const Metrics = () => (
  <>
    <Analytics />
    <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRAKCING_ID as string} />
  </>
)

export default Metrics
