import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend Next.js and TypeScript configs
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Disable specific rules
  {
    rules: {
      // Disable the rule for unescaped entities in JSX/TSX
      "react/no-unescaped-entities": "off",

      // Disable the rules for hooks
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",

      // Disable prefer-const rule
      "prefer-const": "off",

      // Disable Next.js img optimization warning
      "@next/next/no-img-element": "off",

      // Disable alt text warning for img elements
      "jsx-a11y/alt-text": "off",

      // Disable unused variable warning for 'e'
      "@typescript-eslint/no-unused-vars": "off",

      // Disable anonymous default export warning
      "import/no-anonymous-default-export": "off",

      // Disable missing display name for components
      "react/display-name": "off",
    },
  },
];

export default eslintConfig;
