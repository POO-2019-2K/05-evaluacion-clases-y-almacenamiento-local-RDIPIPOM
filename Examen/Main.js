import TableStock from './TableStock.js'

export default class Main {
    constructor() {
        let tableStock = new TableStock(document.querySelector('#tableStock'));
        this._wares = new Array();
        if(localStorage.getItem('wares') != null){
            this._wares = JSON.parse(localStorage.getItem('wares'));
        }

        document.querySelector('#btnIn').addEventListener('click', () => {
            let objWare = this._createObjectWare(Number(document.querySelector('#stockNumber').value), document.querySelector('#name').value, Number(document.querySelector('#amount').value), Number(document.querySelector('#cost').value));
            tableStock.addWareToLocalStorangeAndTable(objWare); 
            this._wares.push(objWare);           
        });

        document.querySelector('#btnOut').addEventListener('click', () => {
            let objWare = this._createObjectWare(Number(document.querySelector('#stockNumber').value), document.querySelector('#name').value, 0, 0);
            if(this._existInLocalStorange){
                this._wares.forEach((ware) => {
                    if(ware.stockNumber === objWare.stockNumber){
                        ware.amount -= Number(document.querySelector('#amount').value);
                    }
                });
                localStorage.setItem('wares', JSON.stringify(this._wares));
                this._wares = JSON.parse(localStorage.getItem('wares'));
                tableStock.update();
            }else{
                alert('El producto no existe');
            }
        });
    }

    _createObjectWare(stockNumber, name, amount, cost) {
        let objWare = {
            stockNumber: stockNumber,
            name: name,
            amount: amount,
            cost: cost
        };
        return objWare;
    }

    _existInLocalStorange(objWare){
        let exist = false
        this._wares.forEach((ware) => {
            if(ware.stockNumber === objWare.stockNumber){
                exist = true;
            }
        });
        return exist;
    }
}

let m = new Main();