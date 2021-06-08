// header functions
const header = {};

const initMenuButton = function () {
  $("#close-menu-btn").click(function () {
    $("#mobile-menu").toggle();
  });
  $("#menu-btn").click(function () {
    $("#mobile-menu").toggle();
  });
};

header.init = function () {
  initMenuButton();
};

const chroma = function () {
  const blocks = document.querySelectorAll(".highlight > .chroma");
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const afterHighLight = block.querySelector("pre.chroma > code[data-lang]");
    const lang = afterHighLight ? afterHighLight.className : "";
    block.className += " " + lang;
  }
};

chroma();

// ------------------ toc ------------------------
const toc = {};

const tocScroll = function () {
  $(window).scroll(function () {
    $("#TableOfContents a").removeClass("current");
    currentAnchor().addClass("current");
  });
};

const getAnchors = function () {
  if (toc.anchors == null) {
    var _anchors = $("#TableOfContents a").map(function () {
      return $(this).attr("href");
    });
    toc.anchors = _anchors;
  }
  return toc.anchors;
};

const tocItem = function (anchor) {
  return $('[href="' + anchor + '"]');
};

const heading = function (anchor) {
  return $("[id=" + anchor.substr(1) + "]");
};

const currentAnchor = function () {
  var winY = window.pageYOffset;
  var currAnchor = null;
  getAnchors().each(function () {
    // var currentPos = winY;
    // var anchorPos = heading(this).position().top;
    var y = heading(this).position().top;
    // console.log("heading y:" + y);
    // console.log("winY y:" + winY);
    // console.log("innerh:" + window.innerHeight);
    // if (y < winY + window.innerHeight * 0.23) {
    if (y < winY + 40) {
      currAnchor = this;
      return;
    }
  });
  return tocItem(currAnchor);
};

const initFirstHeadingPosition = function () {
  var _anchors = getAnchors();
  toc.firstHeadTop = heading(_anchors[0]).position().top;
};

toc.anchors = null;
toc.firstHeadTop = 0;

toc.init = function () {
  getAnchors();
  initFirstHeadingPosition();
  tocScroll();
};

// ---------------- heading anchor -----------------

postHeading = {
  buildAnchor: function () {
    for (let num = 1; num <= 6; num++) {
      const headers = document.querySelectorAll(".article-content>h" + num);
      for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        header.innerHTML = `${header.innerHTML}<a href="#${header.id}" class="anchor">#</a>`;
      }
    }
  },
};

$(document).ready(function () {
  header.init();
  toc.init();
  postHeading.buildAnchor();
});
