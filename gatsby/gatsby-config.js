import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

// This file is empty, but some people were reporting that it would not start unless they had an empty file. So here it is! You can delete the comment. Or replace it with your favourite shania twain lyrics.
export default {
  siteMetadata: {
    title: `Clint's Slices`,
    site: `https://some.url.here`,
    description: `The best pizza in Lane End!`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `4l9auqee`,
        dataset: `production`,
        watchMode: true, // realtime hot-reload while developing
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
