const myButton = document.getElementById('button')
myButton.addEventListener('click', processData)

function processData(event){
    event.preventDefault()
    const tBody = document.getElementById('inputData')
    const addData = document.createElement('tr')
    const dataName = document.createElement('td')
    const dataAge = document.createElement('td')
    const dataGender = document.createElement('td')
    const dataIsSmoke = document.createElement('td')
    const dataVariant = document.createElement('td')
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const gender = document.getElementsByName('gender').value
    const isSmoke = document.getElementsByName('smoke').value
    const variant = document.getElementsByName('variant').value
    console.log()
    // dataName.appendChild(name)
    // dataAge.appendChild(age)
    // dataGender.appendChild(gender)
    // dataIsSmoke.appendChild(isSmoke)
    // dataVariant.appendChild(variant)
    // addData.appendChild(dataName)
    // tBody.appendChild(addData)
}