let books = [];
class Book {
    constructor(maDau, maDuoi, name, year, quantity) {
        this._maSachDau = maDau;
        this._maSachDuoi = maDuoi;
        this._name = name;
        this._year = year;
        this._quantity = quantity;
        this._status = true;
    }

    getStatus() {
        return this._status;
    }

    showTable() {
        let table = ''
        for (let i = 0; i < books.length; i++) {
            table += `<tr>`
            table += `<td>${books[i]._maSachDau}${books[i]._maSachDuoi}</td>`
            table += `<td>${books[i]._name}</td>`
            table += `<td>${books[i]._year}</td>`
            table += `<td>${books[i]._quantity}</td>`
            table += `<td>${books[i].getStatus()}</td>`
            table += `</tr>`
        }
        document.getElementById('list-product').innerHTML = table;
    }

}

function add() {
    let maDau = document.getElementById('maDau').value
    let maDuoi = document.getElementById('maDuoi').value
    let name = document.getElementById('name').value
    let year = document.getElementById('year').value
    let quantity = document.getElementById('quantity').value
    let book = new Book(maDau,maDuoi,name,year,quantity);
    books.push(book);
    book.showTable()
}

