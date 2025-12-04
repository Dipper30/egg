import { defineConfig, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineConfig({
  test: {
    testTimeout: 20000,
    hookTimeout: 20000,
  },
});

export default config;
