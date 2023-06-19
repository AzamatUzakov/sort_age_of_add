

let products = [
    {
        name: "milk",
        price: 25
    },
    {
        name: "Joe Banks",
        price: 1702
    },
    {
        name: "Louis Marshall",
        price: 1425
    },
    {
        name: "Ronald Cooper",
        price: 1972
    },
    {
        name: "Ethan Brewer",
        price: 815
    },
    {
        name: "Will Bro",
        price: 8444
    },
    {
        name: "Steve Reid",
        price: 1302
    },
    {
        name: "Alex Lawson",
        price: 1015
    },
    {
        name: "Roy Garrett",
        price: 1678
    },
    {
        name: "Georgi Garrett",
        price: 1145
    },
    {
        name: "Aaron Henderson",
        price: 874
    },
    {
        name: "Lois ottam",
        price: 1581
    },
    {
        name: "Nicolas Rivera",
        price: 1878
    },
    {
        name: "Jerry Diaz",
        price: 750
    },
    {
        name: "Ronald Garrett",
        price: 1509
    },
    {
        name: "Carles Fuller",
        price: 304
    },
    {
        name: "Chris Wallace",
        price: 551
    },
]


let forma = document.forms.get
let form_modal = document.forms.change
let body = document.querySelector('body')
let ot = document.querySelector('.names')
let doyo = document.querySelector('.ages')
let dis = document.querySelector('.dis')
let flex = document.querySelector('.flex')
let butoon = document.querySelector('button')
let button_app = document.querySelector('.button_app')
let modal = document.querySelector('.modal')
let button_close = document.querySelector('.close')
let inp_name = document.querySelector('.chiken')
let inp_price = document.querySelector('.price')
let show = document.querySelector('.yes')
let todos = []

console.log(button_close);
let mas = []

function reload(apen) {
    flex.innerHTML = ''
    for (let item of apen) {
        let block = document.createElement('div')
        let h1 = document.createElement('h1')
        let p = document.createElement('p')
        let dis = document.createElement('div')

        dis.classList.add('dis')
        block.classList.add('block')
        h1.classList.add('h1')
        p.classList.add('p')


        h1.innerHTML = item.name
        p.innerHTML = item.price + " $"

        body.append(flex)
        flex.append(dis)
        dis.append(block)
        block.append(h1, p)
    }

}

reload(products)




forma.onsubmit = (e) => {
    e.preventDefault()

    if (ot.value.length !== 0 && doyo.value.length !== 0) {
        let filtered = products.filter((i) => {
            if (i.price > +ot.value && i.price < +doyo.value) {
                return i
            }
        })
        reload(filtered)
    }

}

form_modal.onsubmit = (e) => {
    e.preventDefault()


    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    products.push(todo)
    reload(products)
}


button_app.onclick = () => {
    modal.style.display = 'block'
}

button_close.onclick = () => {
    modal.style.display = 'none'
}
show.onclick = () => {
    modal.style.display = 'none'

}