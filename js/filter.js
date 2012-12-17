var icons = [
  'icon-cross',
  'icon-video',
  'icon-twitterbird',
  'icon-tv4playicon',
  'icon-tv',
  'icon-tickets',
  'icon-tag',
  'icon-star',
  'icon-speechbubbles',
  'icon-speechbubble',
  'icon-speakersound',
  'icon-smartphone',
  'icon-search',
  'icon-quotationmark',
  'icon-questionmark',
  'icon-play',
  'icon-person',
  'icon-people',
  'icon-pen',
  'icon-paperstack',
  'icon-o_thumbup',
  'icon-o_tag',
  'icon-o_star',
  'icon-o_speechbubble',
  'icon-o_speakerx',
  'icon-o_search',
  'icon-o_roundarrow',
  'icon-o_persondetails',
  'icon-o_person',
  'icon-o_openarrowup',
  'icon-o_openarrowright',
  'icon-o_openarrowleft',
  'icon-o_openarrowdown',
  'icon-o_heart',
  'icon-o_fullarrow',
  'icon-o_filmframes',
  'icon-o_closedarrowup',
  'icon-o_closedarrowright',
  'icon-o_closedarrowleft',
  'icon-o_closedarrowdown',
  'icon-newspaper',
  'icon-megaphonealt',
  'icon-megaphone',
  'icon-list',
  'icon-linkarrow',
  'icon-letter',
  'icon-layers',
  'icon-keyhole',
  'icon-heart',
  'icon-hdmark',
  'icon-football',
  'icon-facebookf',
  'icon-eye',
  'icon-cloud',
  'icon-clockhollow',
  'icon-clock',
  'icon-check',
  'icon-checkboard',
  'icon-camera',
  'icon-box',
  'icon-blankcircle',
  'icon-barchart',
  'icon-arrowright',
  'icon-arrow',
  'icon-linkarrow-up',
  'icon-linkarrow-left',
  'icon-linkarrow_down',
  'icon-play_up',
  'icon-play_left',
  'icon-play_down',
  'icon-o_camera',
  'icon-no_phone',
  'icon-no_globe'
];

function createList () {

  var div;

  $.each(icons, function (i, item) {
    div = $('<div />', {
      'class': 'item ' + item,
      text: '$' + item,
      id: item
    });
    $('body').append(div);
  });

}

function collectFound (items) {
  var $container = $('.js-found-items');
  if (items) {
    $container.append(items);
  } else {
    $container.empty();
  }
}

function filterList (filter) {
  var regex = new RegExp(filter);
  var matches;

  $('.found').removeClass('found');
  
  collectFound();

  $('.item').filter(function () {
    matches = $(this).text().match(regex);
    if (matches && filter.length >= 2) {
      $(this).addClass('found');
      collectFound($(this).clone());
    }
  });
}

function init () {
  
  $('.js-typer').bind('keyup', function () {
    var text = $(this).val();
    filterList(text);
  });

  createList();

}

$(document).ready(function () {
  init();
});

