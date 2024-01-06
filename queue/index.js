const masak = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        resolve("masak dong")
    },2000)
})


const start = async ()=>{
    
    console.log('buka')
    console.log(await masak)
    console.log("tutup")
}

// start()


class Queue {
    
    constructor(){
    this.item= {}
    this.rear = 0
    this.front = 0
    }

    enqueue(element){
        this.item[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.item[this.front]
        delete this.item[this.front]
        this.front ++
        return item
    }

    isEmpty(){
     return this.rear- this.front === 0
    }
    peek(){
        return this.item[this.front]
    }

    size(){
        console.log("size",this.rear - this.front, "front=>", this.front, ",tail:",this.rear)
    }

    print(){
        console.log(this.item)
    }

}

const q = new Queue()
q.enqueue(2)
q.enqueue(10)
q.enqueue(30)
console.log("dequeue =>",q.dequeue())


q.size()
q.print()
// console.log("peek", q.peek())
