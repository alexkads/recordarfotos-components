import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  treeshake: true,
  splitting: false,
  entry: ["src/**/*.tsx"],
  format: ["cjs"],
  dts: true,
  minify: true,
  clean: false,
  external: ["react"],
  ...options,
}));
