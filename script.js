"use strict";

let btn = document.querySelector(".btn");

btn.addEventListener("click", async (e) => {
  let display = document.querySelector(".display");
  e.preventDefault();

  const result = await fetch(`https://api.chucknorris.io/jokes/random`);
  const data = await result.json();
  console.log(data);

  const html = `<div>
  <h4>Word : ${data.value}</h4>
 
  </div>`;

  document.querySelector(".display").innerHTML = html;
});
