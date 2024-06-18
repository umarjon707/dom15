const body = document.body

for(let i =0 ; i < 4 ; i++ ) {

    const box = document.createElement('div')
    const name = document.createElement('div')
    const price = document.createElement('div')


    box.classList.add('box')
    name.classList.add('name')
    price.classList.add('price')

    name.innerText='Nicola Rivera'
    price.innerHTML = '1878$'

    box.append(name, price)
    body.append(box)
    const sec_box = document.createElement('div')
    const sec_name = document.createElement('div')
    const min_box = document.createElement('div')
    const min_num = document.createElement('div')
    const age = document.createElement('div')
    
    age.classList.add('age')
    sec_box.classList.add('sec_box')
    sec_name.classList.add('sec_name')
    min_box.classList.add('min_box')
    min_num.classList.add('min_num')
    
    sec_name.innerText="Alan Adams"
    min_num.innerText="89"
    age.innerHTML="age"
    min_num.innerHTML="89"
    
    body.append(sec_box)
    sec_box.append(sec_name,min_box)
    min_box.append(age,min_num)

}


    






