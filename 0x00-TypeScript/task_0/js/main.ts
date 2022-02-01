interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 68,
  location: "Decatur",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 34,
  location: "Atlanta",
};

const myArray: Array<Student> = [student1, student2];
const myList: String[] = ["firstname", "location"];
const table: HTMLTableElement = document.createElement('table');
const tableHead: HTMLTableSectionElement = document.createElement('thead');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');
document.body.appendChild(table);
table.appendChild(tableHead);
table.appendChild(tableBody);
for (let i: Number = 0; i < myList.length; i++) {
  const tableHeader: HTMLTableCellElement = document.createElement('th');
  tableHeader.appendChild(document.createTextNode(myList[i]));
  tableHead.appendChild(tableHeader);
}
for (let i: Number = 0; i < myArray.length; i++) {
  const tableRow: HTMLTableRowElement = document.createElement('tr');
  tableBody.appendChild(tableRow);
  const values: String[] = [myArray[i].firstName, myArray[i].location];
  for (let j: Number = 0; j < values.length; j++) {
    const tableData: HTMLTableCellElement = document.createElement('td');
    tableData.appendChild(document.createTextNode(values[j]));
    tableRow.appendChild(tableData);
  }
}
