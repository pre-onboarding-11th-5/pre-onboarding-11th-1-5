/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "Feat",
        "Fix",
        "Style",
        "Design",
        "Refactor",
        "Docs",
        "Chore",
        "Rename",
        "Remove",
      ],
    ],
    "type-case": [2, "always", "pascal-case"],
  },
};
