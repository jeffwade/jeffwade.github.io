import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";

export default [
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  { ignores: ["dist/", ".astro/", "node_modules/"] },
];
