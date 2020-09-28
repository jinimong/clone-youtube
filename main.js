const expandBtn = document.querySelector(
  '.infoAndUpNext .metadata .titleAndButton .expandBtn'
);
const title = document.querySelector(
  '.infoAndUpNext .metadata .titleAndButton .title'
);

expandBtn.addEventListener('click', () => {
  title.classList.toggle('clamp');
  expandBtn.classList.toggle('clicked');
});
