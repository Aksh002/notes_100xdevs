export default {
    stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
    core: {
      builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    },
    async viteFinal(config) {
        // Merge custom configuration into the default config
        const { mergeConfig } = await import('vite');
    
        return mergeConfig(config, {
          // Add dependencies to pre-optimization
          optimizeDeps: {
            include: ['storybook-dark-mode'],
          },
        });
      },
};
// THese lines will state where will all of the story logic for storybook resides
