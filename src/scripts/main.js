'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const MAX_ROWS = 10;
const MAX_COLUMNS = 10;
const MIN_ROWS = 2;
const MIN_COLUMNS = 2;

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
  if (rowCount < MAX_ROWS) {
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
  if (colCount < MAX_COLUMNS) {
    removeColumn.disabled = false;
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
  }

  if (table.rows.length <= MIN_ROWS) {
    removeRow.disabled = true;
  }

  if (table.rows.length > MIN_ROWS) {
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

  if (colCount <= MIN_COLUMNS) {
    removeColumn.disabled = true;
  }

  if (colCount > MIN_COLUMNS) {
    appendColumn.disabled = false;
  }
});
