import { defineProject, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineProject({
  test: {
    include: ['test/**/*.test.ts'],
    hookTimeout: 20000,
    testTimeout: 20000,
  },
});

export default config;
