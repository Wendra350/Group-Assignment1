let inputText = document.getElementById('searchInput')

inputText.addEventListener('input', function(event){
    
    let inputValue = event.target.value.toLowerCase().trim().replace(/\s+/g, ' ');

    let numberOfData = document.getElementById('total-records')

    if (numberOfData != null){
        numberOfData = numberOfData.innerText
        for(let i = 0; i < numberOfData; i++){
            const record = document.getElementById('r'+i)
            const recordData = record.innerText.toLowerCase()
            console.log(typeof recordData)
            
            if (recordData.includes(inputValue)){
                record.style.display = 'flex'
            }
            else{
                record.style.display = 'none'
            }
        }
    }
    
})
