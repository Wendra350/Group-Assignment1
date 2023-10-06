let product_id = ''
function update(name){
    product_id = name
    const productName = document.getElementById('n'+name)
    const productPrice = document.getElementById('p'+name)
    const productQuantity = document.getElementById('q'+name)
    const productSupplier = document.getElementById('s'+name)
    const supplierEmail = document.getElementById('sE'+name)

    document.getElementById('data-container').style.display = 'none'
    document.getElementById('update-container').style.display = 'block'

    

    document.getElementById('productName').value = productName.innerText
    document.getElementById('price').value = productPrice.innerText
    document.getElementById('quantity').value = productQuantity.innerText
    document.getElementById('supplier').value = productSupplier.innerText
    document.getElementById('supplierEmail').value = supplierEmail.innerText
    document.getElementById('id').value = product_id
    

}