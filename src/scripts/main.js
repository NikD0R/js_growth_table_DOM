'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;

appendRow.addEventListener('click', () => {
  const rowCount = table.rows.length;
  const colCount = table.rows[0].cells.length;

  if (rowCount >= MAX_ROWS) {
    appendRow.disabled = true;

    return;
  }

  const newRow = table.insertRow();

  for (let i = 0; i < colCount; i++) {
    newRow.insertCell();
  }

  // Вмикаємо removeRow, якщо є більше ніж 2 рядки
  if (table.rows.length > 2) {
    removeRow.disabled = false;
  }
});

appendColumn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount >= MAX_COLUMNS) {
    appendColumn.disabled = true;

    return;
  }

  Array.from(table.rows).forEach((row) => {
    row.insertCell();
  });

  // Вмикаємо removeColumn, якщо є більше ніж 2 колонки
  if (table.rows[0].cells.length > 2) {
    removeColumn.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }

  if (table.rows.length > 2) {
    appendRow.disabled = false;
  }
});

removeColumn.addEventListener('click', () => {
  const colCount = table.rows[0].cells.length;

  if (colCount > 2) {
    Array.from(table.rows).forEach((row) => {
      row.deleteCell(-1);
    });
  }

  if (colCount <= 2) {
    removeColumn.disabled = true;
  }

  if (colCount > 2) {
    appendColumn.disabled = false;
  }
});
