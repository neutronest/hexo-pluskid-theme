var navs = [
  ['Home', 'index.html'],
  ['About', 'about.html'],
  ['Research', 'research.html'],
  ['MISC', 'misc.html'],
  ['Resume', 'assets/chiyuan-resume.pdf'],
  ['Blog', 'http://freemind.pluskid.org']
];

$(document).ready(function () {
  var list = $('<ul></ul>');
  for (var i = 0; i < navs.length; ++i) {
    var link = $('<li><a href="' + navs[i][1] + '">' +
                navs[i][0] + '</a></li>');
    var url = document.URL;
    if (url.search('.html') < 0) {
      url = 'index.html';
    }
    if (url.search(navs[i][1]) >= 0) {
      link.children('a').addClass('current');
    }
    list.append(link);
  }
  $('#nav').prepend(list);
});
