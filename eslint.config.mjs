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
    },
  },
];

export default eslintConfig;
