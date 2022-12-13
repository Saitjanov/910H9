let arr = ['Aleksey', 'Kartoshka', 'Margarin', 'MOrgenshtern', 'Monica']

let index = +prompt()

let finded = arr.find( (item, idx) => index === idx)

if(finded) {
    arr.splice(index, 1)
    console.log(arr)
} else {
    alert('Такого элемента нет')
}

let arr2 = [[{a:{price: 20}}][{a:{price: 35}}][{a:{price: 44}}]]

let total = 0