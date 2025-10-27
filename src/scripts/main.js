'use strict';

// write code here

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    const first = a.dataset.salary.replace(/\$/g, '').split(',').join('');
    const second = b.dataset.salary.replace(/\$/g, '').split(',').join('');

    return Number(second) - Number(first);
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(list) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent,
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace(/\$/g, '').split(',').join('')),
    age: Number(item.dataset.age),
  }));
}
sortList(document.querySelector('ul'));
getEmployees(document.querySelector('ul'));
