var samples = [];

function Article (opts) {
  this.title = opts.title;
  this.cateogry = opts.category;
  this.publication = opts.publication;
  this.body = opts.body;
}

var firstArticle = myLocalData[0];
new Article(firstArticle);

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.find('header h1').text(this.title);

  $newArticle.attr('data-category', this.category);

  $newArticle.find('time[pubdate]').attr('title', this.publishedOn);
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');

  $newArticle.find('.article-body').html(this.body);

  $newArticle.removeClass('template');

  return $newArticle;
};

myLocalData.sort(function(curElem, nextElem) {
  return (new Date(nextElem.publication)) - (new Date(curElem.publication));
});

myLocalData.forEach(function(ele) {
  samples.push(new Article(ele));
});

samples.forEach(function(a) {
  $('#samples').append(a.toHtml());
});
