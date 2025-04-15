const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(
	withPWA({
		productionBrowserSourceMaps: true,
		i18n: {
			locales: ["en"],
			defaultLocale: "en",
		},
		pwa: {
			dest: "public",
			register: true,
			skipWaiting: true,
			runtimeCaching,
			disable: process.env.NODE_ENV === "development",
		},
		swcMinify: true,
		reactStrictMode: true,
		images: {
			// domains: [
			// 	"*",
			// 	"source.unsplash.com",
			// 	"lh3.googleusercontent.com",
			// 	"images.unsplash.com",
			// ],
			remotePatterns: [
				{
					protocol: 'https',
					hostname: 'source.unsplash.com',
					port: '',
					pathname: '',
					search: '',
				},
				{
					protocol: 'https',
					hostname: 'lh3.googleusercontent.com',
				},
				{
					protocol: 'https',
					hostname: 'images.unsplash.com',
					port: '',
					pathname: '',
					search: '',
				},
			],
		},
	})
);
