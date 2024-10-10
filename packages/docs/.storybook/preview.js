import { themes } from '@storybook/theming'

/** @type { import('@storybook/react').Preview } */
export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}
