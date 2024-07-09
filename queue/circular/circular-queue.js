import chalk from 'chalk';


// que akan berhenti sesuai dengan sizenya = circular-queue
class CirculaQueue {
    // parameter capacity mewakili maks size pada circular queue
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity;
        // length saat ini dimulai dari 0
        this.currentLength = 0;

        // track fron and rear
        // artinya -1 agar tidak menunjuk kepada position didalam queue
        this.rear = -1
        this.front = -1
    }

    isFull(){
        // console.log(this.currentLength)
        return this.currentLength == this.capacity;
    }

    isEmpty(){
        return this.currentLength == 0;
    }

    enqueue(element){
        // untuk unqueu item kita harus makesure si queu tidak full
        if(!this.isFull()) {
            
            // membuat rear pertama kali dr -1 menjadi index 0
            this.rear = (this.rear + 1) % this.capacity
            console.log(this.rear)
            // nambahin item
            this.items[this.rear] = element
            // nambah current valuenya 
            this.currentLength += 1 
            // prepare utnk front pointer untuk menghapus element menggunakan dequeue operation
            // cek apabila front -1/blm ada data seetelah element dibuat 
            if (this.front === -1 ){
                // lalu membuat poin indext yg sama dengan rear pointer
                this.front = this.rear 
            }
        }
    }

    dequeue(){
        if(!this.isEmpty()){
           const item = this.items[this.front]
           console.log("delete from front", this.front)
           this.items[this.front] = null
           this.front = (this.front + 1 ) % this.capacity

            // lengthnya berkurang karena dihapus elemenya
            this.currentLength -=1
            return item;
        }
        else if(this.isEmpty()){
            this.front = -1
            this.rear = -1
            return null
        }
    }
    peek(){
        if(!this.isEmpty()){
            console.log("peek=>",this.front,this.items[this.front])
        }
        return null
    }
    size(){
        console.log("size", this.currentLength)
    }
    print(){
        if(this.isEmpty()){

            console.log(chalk.bgRedBright('the queue is empty'))
        }
         else {
            console.log(chalk.bgGreen("print This Item =>"), this.items)
         }
    }
}

const Cq = new CirculaQueue(5);
Cq.enqueue(10)
Cq.enqueue(20)
Cq.enqueue(30)
Cq.enqueue(40)
Cq.enqueue(50)
// Cq.enqueue(70)



console.log("remove",Cq.dequeue())
console.log("remove",Cq.dequeue())
// console.log("remove",Cq.dequeue())
// console.log("remove",Cq.dequeue())
// console.log("remove",Cq.dequeue())


// Cq.peek()
console.log("isFull queue =>",Cq.isFull())
console.log("isEmpty=>",Cq.isEmpty())
Cq.peek()
Cq.print()
Cq.size()
console.log( 4 % 5)