class Node {
    constructor(value){
        this.value = value
        // point for null 
        this.next = null
    }
}


class LinkedList {
    constructor(){
        // saat membuat instance baru head akan null 
        this.head = null
        // maintain number node di dalam linkedinlist
        this.size= 0
        // apabil kita menambahkan node maka kita akan increment size 
        // apbila remove akan decrement sizenya

    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
            return this.size
    }
}

const linked = new LinkedList()
console.log("list Empty",linked.isEmpty())
console.log("list size",linked.getSize())