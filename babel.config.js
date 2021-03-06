module.exports = (api) => {
  api.cache(false);

  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            browsers: "Last 2 Chrome versions, Firefox ESR",
            node: "10.16"
          }
        }
      ],
      [
        "@babel/preset-react",
        {
          development: process.env.BABEL_ENV !== "build"
        }
      ],
      "@babel/preset-typescript"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/proposal-object-rest-spread",
      "babel-plugin-syntax-dynamic-import"
    ],
    env: {
      build: {
        ignore: [
          "**/*.test.tsx",
          "**/*.test.ts",
          "**/*.story.tsx",
          "__snapshots__",
          "__tests__",
          "__stories__"
        ]
      }
    },
    ignore: ["node_modules"]
  };
};
