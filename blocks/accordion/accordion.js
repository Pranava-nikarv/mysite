export default function decorate(block) {
  // each row is one accordion item: first cell = title, second cell = content
  [...block.children].forEach((row) => {
    const title = row.firstElementChild;
    const content = row.lastElementChild;
    if (!title) return;
    title.classList.add('item-title');
    if (content && content !== title) content.classList.add('item-content');
    // toggle open/close on click
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}