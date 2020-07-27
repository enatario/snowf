module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/static");
  
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    markdownTemplateEngine: "njk"
  }
}
