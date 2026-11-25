export default function decorate(block) {
  // each accordion item = one title row followed by one content row
  const titles = block.querySelectorAll(':scope > div:nth-child(odd)');
  titles.forEach((title) => {
    // add a class to the title row
    title.classList.add('item-title');
    // remove the extra (empty) cell inside the title row
    const empty = title.querySelector(':scope > div:last-of-type');
    if (empty) empty.remove();
    // add a class to the content row
    const content = title.nextElementSibling;
    if (content) content.classList.add('item-content');
    // toggle open/close on click
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}