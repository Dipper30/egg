import { defineProject, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineProject({
  test: {
    include: ['test/**/*.test.ts'],
    exclude: ['test/fixtures/**', '**/node_modules/**', '**/dist/**'],
  },
});

export default config;
