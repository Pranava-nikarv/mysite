export default function decorate(block) {
  // each row is one accordion item: first cell = title, second cell = content
  [...block.children].forEach((row) => {
    const title = row.firstElementChild;
    const content = row.lastElementChild;
    if (!title) return;
    title.classList.add('item-title');
    if (content && content !== title) {
      content.classList.add('item-content');
      // if the content cell has an image, split it: image left, text right
      const picture = content.querySelector('picture');
      if (picture) {
        content.classList.add('has-media');
        const imageCol = document.createElement('div');
        imageCol.classList.add('item-image');
        const textCol = document.createElement('div');
        textCol.classList.add('item-text');
        // move only the picture, so text sharing its paragraph stays behind
        imageCol.append(picture);
        content.prepend(imageCol);
        content.append(textCol);
        // move everything else into the text column
        [...content.children].forEach((child) => {
          if (child !== imageCol && child !== textCol) textCol.append(child);
        });
        // drop paragraphs left empty by the move
        content.querySelectorAll('p').forEach((p) => {
          if (!p.textContent.trim() && !p.querySelector('picture, img')) p.remove();
        });
      }
    }
    // toggle open/close on click
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}
