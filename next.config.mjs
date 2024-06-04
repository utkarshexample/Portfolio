import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Any other Next.js configuration options can go here
  output: 'export', // Ensure this is correct and intended
};

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses source map uploading logs during build
  org: "javascript-mastery",
  project: "javascript-nextjs",
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options
};

const sentryInitOptions = {
  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  widenClientFileUpload: true, // Upload a larger set of source maps for prettier stack traces (increases build time)
  transpileClientSDK: true, // Transpiles SDK to be compatible with IE11 (increases bundle size)
  // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-side errors will fail.
  // tunnelRoute: "/monitoring",

  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
  automaticVercelMonitors: true, // Enables automatic instrumentation of Vercel Cron Monitors.
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryInitOptions);
