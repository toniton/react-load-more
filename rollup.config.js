
export default {
    input: ["dist/react-load-more-hook.js"],
    output: [
      {
        dir: "dist/es6",
        format: "es",
        sourcemap: true
      },
      {
        dir: "dist/umd",
        format: "umd",
        sourcemap: true
      },
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true
      }
    ]
  };