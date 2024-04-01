import chalk from 'chalk';

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
            console.log("ada data prepend=>", this.head)
        }
        this.size++
    }

    // O(n) linear 
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
            // prev data dapat dari prtma kali head saat data size 0
            let prev = this.head

            // apabila next tidak null akan terus ngeloop
            while(prev.next){
                // console.log("ga kosong",prev.next)
                // Node { value: 20, next: null}
                prev = prev.next
            }
            
            // Node {val: 10, next: null} atau kalo ditambah menjadi
            // Node {val: 10, next: Node {value:20, next: null}} atau kalo ditambah
            // update prev.next dengan data node terbaru
            prev.next = node
            console.log("diluar while",prev)
            

        }
        
        this.size++
    }

    // insert
    // menambhkan nilai sesuai indexinya
    insert(value,index){
        // kembali ke fungsinya
        if(index < 0 || index > this.size) {
            return
        }

        // insert data apabila index = 0 
        if(index === 0){
            // menggunakan funsgi prepend apabila indexi === 0
            this.prepend(value)
        } else {
            const node = new Node(value)
            console.log(chalk.red("data insert baru masuk=>"), node)

            let prev = this.head
            // looping agar inserting sesuai dengan extepasinya
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            console.log(chalk.blue("head insertion: "),prev)
            node.next = prev.next
            console.log(chalk.greenBright("node insert after: "),node)

            prev.next= node
            console.log("prev result after: ",prev)

            
            this.size++
        }
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
linked.insert(10,0)
linked.insert(20,0)
// linked.insert(30,0)
linked.insert(500,1)
// linked.insert(300,1)




// linked.print()
// linked.append(10)
// linked.print()
// linked.append(20)
// linked.print()
// linked.append(30)
// linked.print()




