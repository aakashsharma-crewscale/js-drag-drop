const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
  const item = list_items[i];
  item.addEventListener('dragstart', function (e) {
    console.log('dragstart e:', e);
    draggedItem = item;
    setTimeout(function () {
      item.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', function (e) {
    console.log('dragend e:', e);

    setTimeout(function () {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  for (let j = 0; j < lists.length; j++) {
    const list = lists[j];
    list.addEventListener('dragover', function (e) {
      console.log('dragover e:', e);
      e.preventDefault();
    });

    list.addEventListener('dragenter', function (e) {
      e.preventDefault();
      this.style.backgroundColor = 'rgba(0,0,0,0.6)';
    });

    list.addEventListener('dragleave', function (e) {
      this.style.backgroundColor = 'rgba(0,0,0,0.4)';
    });

    list.addEventListener('drop', function (e) {
      console.log('drop');
      this.append(draggedItem);
      this.style.backgroundColor = 'rgba(0,0,0,.8)';
    });
  }
}
