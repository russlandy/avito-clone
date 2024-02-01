const form = document.querySelector(".form");
const btn = document.querySelector(".btn");
const select = document.querySelector(".select");
//как выбрать событие выбора категории? и получить value options - решено
//как отображать на одной странице все товары выбранной категории
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  // try {
  //   const value = select.value; //category.id
  //   const data = await fetch("/categories", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(value),
  //   });

  //   const result = await data.json();

  //   // а дальше можно ли тут прочитать все articles из базы данных и вывести на страницу?
  //   // или лучше сначала вывести все карточки, а дальше при выборе категории отображать только определенные
  //   const allItems = ``;
  //   console.log(value);
  // } catch (err) {
  //   console.log(err);
  // }
});
