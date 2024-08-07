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
            this.head = node
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
        
        // setiap prepend selalu tambah sizenya
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
        }
        // apabila index > 0
        else {
            const node = new Node(value)
            console.log(chalk.bgRed("first data node=>"), node)

            let prev = this.head
            // looping agar inserting sesuai dengan extepasinya
        //    looping jalan apbila index lebih besar dari 0
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }

            console.log(chalk.bgBlue("this.Data head: "),prev)
            node.next = prev.next
            console.log(chalk.bgMagenta("node insert after: "),node)
            console.log(chalk.bgCyan("prev.next==>"), prev)
            prev.next= node
            console.log(chalk.bgYellowBright("the result: "),prev)

            
            this.size++
        }
    }

    // remove data
    removeFrom(index){
        if(index< 0 || index >= this.size){
            return null
        }
        // nampung node
        let removeNode
        // apabila index 0, maka isi var remove node dng headnya
        // lanjut dengan update this.head dengan this.head.next
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        } else {
            // untuk menampung nilai sebelumnya
            let prev = this.head;
            console.log(chalk.green("ini remove from:"), prev)
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            console.log(chalk.bgBlueBright("remove from prev:"), prev)
            removeNode = prev.next
            console.log(chalk.bgMagenta("removeNode:"), removeNode)
            // pre.next diupdate jadi nilai removenode.nextnya 
            // apakah itu null atau ada nilainya
            prev.next = removeNode.next
            console.log("prev.next remove:", prev)

        }
        this.size --
        return removeNode.value
    }

    // remove based on value 
    removeValue(value){
        if(this.isEmpty()) {
            return null
        }
        // remove value nodes pertama
        if(this.head.value === value){
            this.head = this.head.next
            this.size --
            return value
        }
         else {
            let prev = this.head
            // apbila prev.next ada && prev.next.value tidak sm dngn value
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }

            // parameter untuk index terkahir
            if(prev.next){
                const removeNode = prev.next
                console.log("remove",removeNode)
                console.log("prev",prev)
                prev.next = removeNode.next
                console.log(prev)
                this.size--
                return value
            }
            return null
         }

    }

    // search berdasarkan index
    search(value){
        if(this.isEmpty()) return - 1

        else {
            let index = 0
            let curr = this.head
            while(curr){
                if(curr.value === value) return index
                curr = curr.next
                index++
            }
            return -1
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("print is empty")
        }else {
            // awal mula curr ada pada head
            let curr = this.head
            // console.log(curr)
            // nampung nilai value
            let listValues = ''
            while(curr){
                // update nilai valuenya
                listValues += ` ${curr.value}`
                // setiap next node akan update current position ke next agar while tidak selalu true
                curr = curr.next
            }
            console.log(chalk.bgCyan("data yg ada=>"),listValues)
        }
    }
}

const linked = new LinkedList()
// console.log("list Empty",linked.isEmpty())
linked.insert(10,0)
linked.insert(20,0)
linked.insert(30,1)
linked.insert(40,2)
// console.log("list size",linked.getSize())

// linked.insert(500,1)
// linked.print()
// // linked.insert(300,1)
// linked.removeFrom(2)
console.log(chalk.bgBlue("remove from valiue"),linked.removeValue(10))
linked.print()





// linked.print()
// linked.append(10)
// linked.print()
// linked.append(20)
// linked.print()
// linked.append(30)
// linked.print()
console.log(linked.search(40))




