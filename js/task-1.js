const items = [...document.querySelectorAll('li.item')];

console.log(`В списке ${items.length} категории.`);

items.forEach(entry => {
  console.log(
    `Категория: ${entry.title} \r\nКоличество элементов: ${entry.count}`,
  );
});
