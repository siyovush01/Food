const food = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 500,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 700,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 800,
        get calcSum() {
            return this.amount * this.price
        },
        get kcallSum() {
            return this.amount * this.kcall
        }
    }
}
const btn = [...document.querySelectorAll('.main__product-btn')]
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        prepere(this)
        // console.log(this)
    })
}
function prepere(item) {
    const parent = item.closest(".main__product");
    const parentId = parent.getAttribute('id');
    const price = parent.querySelector('.main__product-price span');
    const num = parent.querySelector('.main__product-num');
    const kcall = parent.querySelector('.main__product-kcall span')
    const sym = item.getAttribute('data-symbol');
    // console.log(kcall)

    let count = food[parentId].amount
    if (sym == "+") {
        count++;
    } else if (sym == '-' && count > 0) {
        count--
    }
    food[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = food[parentId].calcSum
    kcall.innerHTML = food[parentId].kcallSum
}


// {
//     let a=10;
// }
// console.log(a)
// function myName(paras) {
//     let nam='it live'
//     console.log(nam)
// }
// myName();

// let a = 20;

// var b = 23;

// const c = 30;


const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptWindowOut = document.querySelector('.receipt__window-out')
const receiptWindowBtn = document.querySelector('.receipt__window-btn')
const addCart = document.querySelector('.addCart')

addCart.addEventListener('click', function () {
    receipt.style.display = 'block'
    receiptWindow.style.top = '20%'
    setTimeout(() => {
        receipt.style.opacity = 1
    }, 100)
    let menu = "Sizning chekingiz: \n\n"
    let totalPrice = 0;
    let totalKcall = 0;
    for (const key in food) {
        menu = menu + `${food[key].name} ${food[key].amount} ${food[key].price} = ${food[key].calcSum} \n\n`

        totalPrice = totalPrice + food[key].calcSum;
        totalKcall = totalKcall + food[key].kcallSum;
    }
    receiptWindowOut.innerHTML = `${menu} \n Total price: ${totalPrice} sum \n Total kcall: ${totalKcall} calo'ria`
})

receiptWindowBtn.addEventListener('click', function (e) {
    location.reload();
    if (e.target) {
        receiptWindow.style.top = '-100%'
        setTimeout(() => {
            receipt.style.display = 'nane'
            receipt.style.opacity = '0'
        },200)
    }
})

// --------------------------------------//

// function person(ism,fam,yosh){
//     this.name=ism
//     this.username=fam;
//     this.age=yosh;

// }
// const ismoil=new person('ismoil','Inomjonov',17)
// console.log(ismoil)
const headerTimerExtra=document.querySelector('.header__timer-extra')

function Lvl(){
   

if(headerTimerExtra.innerHTML<=69){
 setTimeout(()=>{
    headerTimerExtra.innerHTML++;
    Lvl();

 },100)
    
}else if(headerTimerExtra.innerHTML<=79){
    setTimeout(()=>{
        headerTimerExtra.innerHTML++;
        Lvl();
    
     },200)
}else if(headerTimerExtra.innerHTML<=89){
    setTimeout(()=>{
        headerTimerExtra.innerHTML++;
        Lvl();
    
     },300)
}else if(headerTimerExtra.innerHTML<=99){
    setTimeout(()=>{
        headerTimerExtra.innerHTML++;
        Lvl();
    
     },400)
}


}
Lvl();

let infoImg = [...document.querySelectorAll('.main__product-info')]

for (let i = 0; i < infoImg.length; i++) {
    infoImg[i].addEventListener('click', function(e) {
        showImg(this)
    })
}


function showImg(view) {
    let parent = view.closest('.main__product')
    let viewImg = document.querySelector('.view')
    let image = document.querySelector('.view img')
    let proImg = parent.querySelector('.main__product-info img')
    let close = document.querySelector('.view__close')

    viewImg.classList.add('active')

    let x = proImg.getAttribute('src')
    // console.log(x);
    image.removeAttribute('src')
    // console.log(image);


    if(proImg.hasAttribute('src')) {
        image.setAttribute('src', `${x}`)
    }

    viewImg.addEventListener('click',function(e){
        if(e.target == e.currentTarget) {
            viewImg.classList.remove('active')
       }
    })
    
    close.addEventListener('click',function(e){
        viewImg.classList.remove('active')

    })
}
