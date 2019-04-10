export default class Ware{
    constructor(objWare){
        this._stockNumber = objWare.stockNumber;
        this._name = objWare.name;
        this._amount = objWare.amount;
        this._cost = objWare.cost;
    }

    get stockNumber(){
        return this._stockNumber;
    }

    get name(){
        return this._name;
    }

    get amount(){
        return this._amount;
    }

    get cost(){
        return this._cost;
    }
}