import Ware from "./Ware.js";

export default class{
    constructor(table){
        this._table = table;
        this._wares = new Array();
        this._fillWithLocalStorange();
    }

    _fillWithLocalStorange(){
        if(localStorage.getItem('wares') != null){
            this._wares = JSON.parse(localStorage.getItem('wares'));
            this._wares.forEach((ware) => {
                this._addWare(new Ware(ware));
            });
        }
    }

    _addWare(ware){
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = ware.stockNumber;
        cell = row.insertCell(1);
        cell.innerHTML = ware.name;
        cell = row.insertCell(2);
        cell.innerHTML = ware.amount;
        cell = row.insertCell(3);
        cell.innerHTML = ware.cost;
    }

    addWareToLocalStorangeAndTable(ware){
        let objWare = {
            stockNumber: ware.stockNumber,
            name: ware.name,
            amount: ware.amount,
            cost: ware.cost
        };

        this._wares.push(objWare);
        localStorage.setItem('wares', JSON.stringify(this._wares));
        this._wares = JSON.parse(localStorage.getItem('wares'));
        this._addWare(ware);
    }

    update() {
        for (let i = this._table.rows.length - 1; i > 0; i--) {
            this._table.deleteRow(i);
        }

        this._fillWithLocalStorange();
    }
}