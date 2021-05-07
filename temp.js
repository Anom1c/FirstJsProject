function newFb (a) {
    a[0] = 0
}
function newFa (a) {
    a[1] = 2
    newFb(a);
}
const obj = {x:0}

const arrayTop = [obj,obj,obj,obj,obj]
console.log(arrayTop)
obj.x = 10
console.log(arrayTop)





