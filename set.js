// SET 
// Prinsipnya beda dnenga array, karena value dari set tidak bisa duplikat
// remove atau add value lebih cepat daripada array

const set = new Set([1,2,3])
set.add(4)
console.log(set.has(4))
for(const d of set) {

    console.log(d)
}