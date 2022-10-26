import faker from 'faker';

const mount = (el)=>{
let products = '';

for(let i=0 ; i< 5 ;i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}

el.innerHTML = products

/* For Eg  in Case of React we Could Use
  ReactDom.render(<App /> , el);
*/
}

export {mount};

// By Exporting the Mount Function , Now our Containre can import the Mount Function and Make Use of it

/*
Context Situation 1

1 We are Running this file in Development in Isolation
2 We are Using our local index.html file which has an element of id 'dev-products
3 We want to Immediately render our app into that element
*/

if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-products');
    // Assuming our Container Doesn't have an Element with Id 'dev-products'
    if(el){
        // We are Probably Running in isolation
        mount(el)
    }
}
/*
Context Situation 2

1. We are Running this file in development or production through the Container app
2. No Guaranteee that an element with an id of 'dev-products' is present inside container app index.html
3. We Do not want try to Immediately render the app
*/