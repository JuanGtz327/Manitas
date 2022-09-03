class Stack{
    constructor(){
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        this.count+=1;
        console.log(element);
        return this.count - 1
    }
}

module.exports = Stack