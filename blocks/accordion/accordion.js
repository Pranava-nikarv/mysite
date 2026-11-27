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
        const imagePara = picture.closest('p');
        (imagePara ?? picture).before(imageCol);
        imageCol.append(imagePara ?? picture);
        const textCol = document.createElement('div');
        textCol.classList.add('item-text');
        imageCol.after(textCol);
        // move everything else into the text column
        [...content.children].forEach((child) => {
          if (child !== imageCol && child !== textCol) textCol.append(child);
        });
      }
    }
    // toggle open/close on click
    title.addEventListener('click', () => {
      title.classList.toggle('open');
    });
  });
}
