import { defineConfig, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineConfig({
  test: {
    hookTimeout: 20000,
    testTimeout: 20000,
    include: ['test/**/*.test.ts'],
  },
});

export default config;
