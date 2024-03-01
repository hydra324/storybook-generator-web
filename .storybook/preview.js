/** @type { import('@storybook/react').Preview } */
import { initialize, mswLoader } from 'msw-storybook-addon'; 
import { rest } from 'msw'

// initialize msw
initialize({},[
  rest.post('*/generate_images', (req, res, ctx) => {
    return res(ctx.delay(2000),ctx.json({
      imageUrls: [
          'https://img.freepik.com/free-photo/plain-smooth-green-wall-texture_53876-129746.jpg?w=1800&t=st=1709193157~exp=1709193757~hmac=0cdc78c6010047eb8bf6317582afbf917928ee64623fde49006fac3d41238e5f',
          'https://img.freepik.com/free-photo/black-brick-wall-textured-background_53876-63572.jpg?w=1800&t=st=1709193226~exp=1709193826~hmac=7df57d18d8244f4007979ab92bbe46d299f1eff33edc63f4d7a11f4c1ef8fea8',
          'https://img.freepik.com/free-photo/plain-smooth-red-wall-texture_53876-129747.jpg?w=1800&t=st=1709193284~exp=1709193884~hmac=4033b5a357af0389539292f1ca746f63e14424589d750efe7a49ee6d5ff3e349',
      ]
  }))
  }),
]);
const { theme } = require('@chakra-ui/react');
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
    loaders: [mswLoader],
  },
};

export default preview;
