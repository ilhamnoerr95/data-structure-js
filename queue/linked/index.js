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

    //  O(1) CONSTANT
    prepend(val){
        // initialization the node data akan masuk pertama
        const node = new Node(val)
        if(this.isEmpty()){
            // data head akan keupdate dari node
            this.head =node
            console.log("node kalo kosong=>",node)
        }
        else {
            // setiap penambhan node, node.next akan diambil dari data head yg sudah disimpan seblmnya
            node.next = this.head
            // data diupdate kembali kedalam head agar ketika ada penambhan data
            // maka data akan bisa dipake kedalam node selanjutnya
            this.head = node
            console.log("ada data", this.head)
        }
        this.size++
    }

    append(val){
        // initialization the node data akan masuk pertama
        const node = new Node(val)
        // apabila size masih kosong maka head akan di update oleh node pertama kalinya
        if(this.isEmpty()){
            // data head akan keupdate dari node
            this.head =node
            console.log("node kalo kosong=>",node)
        }
        else {
            let prev = this.head

            // apabila next tidak null akan terus ngeloop
            while(prev.next){
                // console.log("ga kosong",prev.next)
                prev = prev.next
            }
            
            
            prev.next = node
            console.log("diluar while",prev)
            

        }
        
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("print is empty")
        }else {
            // awal mula curr ada pada head
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += ` ${curr.value}`
                // setiap next node akan update current position ke next agar while tidak selalu true
                curr = curr.next
            }
            console.log("data yg ada=>",listValues)
        }
    }
}

const linked = new LinkedList()
console.log("list Empty",linked.isEmpty())
console.log("list size",linked.getSize())
linked.print()
linked.append(10)
linked.print()
linked.append(20)
linked.print()
linked.append(30)
linked.print()




