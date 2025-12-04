import { defineConfig, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
  },
});

export default config;
