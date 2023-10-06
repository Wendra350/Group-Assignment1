const form = document.getElementById('productForm')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    const quantity = document.getElementById('quantity').value
    const price = document.getElementById('price').value

    if(isNaN(quantity) || isNaN(price)){
        document.getElementById('validator').style.display = 'block'
    }
    else{    
         form.submit()
    }

})