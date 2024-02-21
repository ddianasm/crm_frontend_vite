import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  const load_env = loadEnv(mode, process.cwd());
  process.env = { ...process.env, ...load_env };

  return defineConfig({
    define: {
      "process.env": process.env,
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      host: true,
      port: Number.parseInt(process.env.PORT!) || 3000,
    },
  });
};
