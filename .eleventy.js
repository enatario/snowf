const htmlMinify = require('./src/transforms/htmlMinifiy');
const dateFormatted = require('./src/filters/dateFormatted');

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/sass/');
  eleventyConfig.addWatchTarget('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('./src/js');

  // Transforms
  eleventyConfig.addTransform('htmlmin', htmlMinify);
  
  // Filters
  eleventyConfig.addFilter('dateFormatted', dateFormatted);
  
  return {
    dir: {
      input: 'src',
      output: '_site'
    },
    markdownTemplateEngine: 'njk'
  }
}