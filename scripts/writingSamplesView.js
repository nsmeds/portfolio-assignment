'use strict';

// Configure articleView to hold all functions for dynamic updates and article-related event handlers
var articleView = {};

articleView.populateFilters = function() {
  $('article').not('template').each(function() {
    var authorName, category, optionTag;

    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '<option>';
    $('#author-filter').append(optionTag);

    category = $(this).attr('data-category');
    optionTag = '<option value"' + category + '">' + category + '</option>';

    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('author-filter').on('change', function() {
    var $selectedAuthor = $(this).val();
    if ($selectedAuthor) {
      var $samples = $('#samples', 'article');
      $samples.each(function() {
        $(this).hide();
        if (selectedValue === $(this).attr('data-category')) {
          $(this).fadeIn('slow');
        }
      });
    }
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    var selectedValue = $(this).val();
    if (selectedValue) {
      var $samples = $('#samples', 'article');
      $samples.each(function() {
        $(this).hide();
        if (selectedValue === $(this).attr('data-category')) {
          $(this).fadeIn('slow');
        }
      });
    } else {
      var $samples = $('#samples article');
      $samples.not('template').each(function() {
        $(this).show();
      });
    }
    $('#category-filter').val('');
  });
};

articleView.handleMainNav = function(event) {
  $('.main-nav').on('click', '.tab', function() {
    var selectedContent = $(this).data('content');
    $('.tab-content').hide();
    event.preventDefault();
    $('#' + $selectedContent).fadeIn('slow');
  });

  $('.main-nav .tab:first').click();
};

articleView.populateFilters();
articleView.handleCategoryFilter();
articleView.handleMainNav();
