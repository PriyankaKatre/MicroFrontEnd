import faker from 'faker';

let cartText = `<div>Youn have ${faker.random.number()} items in your cart</div>`;

const mount = (el) => {
    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    let el = document.querySelector('#dev-cart')
    if (el) {
        mount(el)
    }
}

export { mount}
