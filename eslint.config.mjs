import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Relax some strict rules for faster development
      "@typescript-eslint/no-explicit-any": "warn", // Changed from error to warning
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/prefer-const": "warn",
      "react-hooks/exhaustive-deps": "warn",
      // Disable some overly strict Next.js rules
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
    }
  }
];

export default eslintConfig;