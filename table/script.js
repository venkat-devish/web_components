const tableData = document.getElementById('tableData')
const id = document.getElementById('sort')

let sortDirection = false;

let personData = [
    { name: 'Venkat', age: 23 },
    { name: 'Surya', age: 20 },
    { name: 'Kiran', age: 19 },
    { name: 'Vudutha', age: 15 },
]

window.onload = () => {
    loadTableData(personData)
}

function loadTableData(personData) {
    let tableHtml = ''
    for (let person of personData) {
        tableHtml += `
        <tr>
            <td>${person.name}</td>
            <td>${person.age}</td>
        </tr>`
    }
    tableData.innerHTML = tableHtml;
}

id.addEventListener('click', () => {
    personData = personData.sort((a, b) => a.age - b.age)
    console.log(personData)
    loadTableData(personData)
})
