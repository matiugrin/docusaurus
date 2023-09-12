// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi-docs
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    plugins: [
      [
        "docusaurus-plugin-openapi-docs",
        {
          id: "openapi",
          docsPluginId: "classic",
          config: {
            petstore_versioned: {
              specPath: "examples/petstore.yaml",
              outputDir: "docs/petstore_versioned", // No trailing slash
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag",
              },
              version: "2.0.0", // Current version
              label: "v2.0.0", // Current version label
              baseUrl: "/petstore_versioned/swagger-petstore-yaml", // Leading slash is important
              versions: {
                "1.0.0": {
                  specPath: "examples/petstore-1.0.0.yaml",
                  outputDir: "docs/petstore_versioned/1.0.0", // No trailing slash
                  label: "v1.0.0",
                  baseUrl: "/petstore_versioned/1.0.0/swagger-petstore-yaml", // Leading slash is important
                },
              },
            },
            petstore: {
              specPath: "examples/petstore.yaml",
              proxy: "https://cors.pan.dev",
              outputDir: "docs/petstore",
              sidebarOptions: {
                groupPathsBy: "tag",
                categoryLinkSource: "tag",
              },
              template: "api.mustache", // Customize API MDX with mustache template
              downloadUrl:
                "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/examples/petstore.yaml",
              hideSendButton: false,
            },
            cos: {
              specPath: "examples/openapi-cos.json",
              outputDir: "docs/cos",
              sidebarOptions: {
                groupPathsBy: "tag",
              },
            },
            burgers: {
              specPath: "examples/food/burgers/openapi.yaml",
              outputDir: "docs/food/burgers",
            },
            yogurt: {
              specPath: "examples/food/yogurtstore/openapi.yaml",
              outputDir: "docs/food/yogurtstore",
            },
          },
        },
      ],
    ],
    themes: ["docusaurus-theme-openapi-docs"],
    stylesheets: [
      {
        href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
        type: "text/css",
      },
    ],
};

module.exports = config;
