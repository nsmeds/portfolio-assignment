'use strict';

var samples = [];

// Create template object for portfolioExamples
function Article (opts) {
  this.title = opts.title;
  this.cateogry = opts.category;
  this.author = opts.author;
  this.authorUrl = opts.author;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

// Create prototype with methods to generate new Article object for each item in writingSamples.js fake array myLocalData
Article.prototype.toHtml = function() {
  // Creates copy of new article template for each Article object
  var $newArticle = $('article.template').clone();

  // Removes .template so only Articles with data render
  $newArticle.removeClass('template');

  // Create new data-category attribute for category value
  $newArticle.attr('data-category', this.category);

  // Find and add writingSamples properties to each new Article template
  $newArticle.find('header h1').text(this.title);
  $newArticle.find('.byline a').text(this.author);
  $newArticle.find('.byline a').attr('href, this.authorUrl');
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newArticle.find('.article-body').html(this.body);

  return $newArticle;
};

// Sort writingSamples data by .publishedOn
portfolioExamples.sort(function(a, b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

// Create new Article object to push to samples array
portfolioExamples.forEach(function(a) {
  samples.push(new Article(a));
});

// Append each Article in samples array to html element with id 'samples'
samples.forEach(function(b) {
  $('#samples').append(b.toHtml());
});
