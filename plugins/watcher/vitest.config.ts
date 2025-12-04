import { defineProject, type UserWorkspaceConfig } from '@voidzero-dev/vite-plus';

const config: UserWorkspaceConfig = defineProject({
  test: {
    testTimeout: 20000,
    hookTimeout: 20000,
  },
});

export default config;
