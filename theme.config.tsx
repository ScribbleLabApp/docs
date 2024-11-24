import { useConfig } from 'nextra-theme-docs'
import { Footer } from '@/components/ui/footer'

/* eslint sort-keys: error */
/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
export default {
  logo: <strong>ScribbleLabApp</strong>,
  i18n: [
    { locale: 'en-us', name: 'English' },
    { locale: 'zh-cn', name: '中文' },
    { locale: 'de-de', name: 'Deutsch' },
    { locale: 'it-it', name: 'Italiano' },
  ],
  banner: {
    content: '🚀 Join Us in Improving the Docs: Your Contributions Can Make a Difference!',
    key: 'Product Docs',
    dismissible: true
  },
  chat: {
    link: 'https://discord.gg/Y5mUJbNC8h'
  },
  docsRepositoryBase:
    'https://github.com/ScribbleLabApp/docs/tree/main',
  editLink: {
    content: 'Edit this page on GitHub'
  },
  project: {
    link: 'https://github.com/ScribbleLabApp/docs'
  },
  footer: {
    component: <Footer />,
  },
  faviconGlyph: '✦',
  head: function useHead() {
    const config = useConfig()
    const title = `${config.title} – ScribbleLabApp Docs`
    const description =
      config.frontMatter.description || 'Innovate your school life forever with our powerful tools - build by students for students'
    const image = config.frontMatter.image || ''
    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="ScribbleLabApp Docs" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </>
    )
  }
}