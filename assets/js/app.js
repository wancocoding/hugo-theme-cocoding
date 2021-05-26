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

$(document).ready(function () {
  header.init();
});