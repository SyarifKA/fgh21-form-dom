const myButton = document.getElementById('button')
myButton.addEventListener('click', processData)

const myForm = document.getElementById('data-survey')


function processData(event) {
    event.preventDefault()
    const tBody = document.getElementById('inputData')
    const addData = document.createElement('tr')
    const dataName = document.createElement('td')
    const dataAge = document.createElement('td')
    const dataGender = document.createElement('td')
    const dataSmoke = document.createElement('td')
    const dataBrand = document.createElement('td')

    // name
    const name = document.getElementById('name')
    const valueName = name.value
    dataName.textContent = valueName

    // Age
    const age = document.getElementById('age')
    const valueAge = age.value
    dataAge.textContent = valueAge

    // Gender
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked
    if (male == true) {
        const maleData = document.getElementById('male')
        const maleValue = maleData.value
        dataGender.textContent = maleValue
    }else if (female == true) {
        const femaleData = document.getElementById('female')
        const femaleValue = femaleData.value
        dataGender.textContent = femaleValue
    }

    // isSmoke
    const smoke = document.getElementById('yes').checked
    const noSmoke = document.getElementById('no').checked
    if (smoke == true) {
        const smokeData = document.getElementById('yes')
        const smokeValue = smokeData.value
        dataSmoke.textContent = smokeValue
    }else if (noSmoke == true) {
        const noSmokeData = document.getElementById('no')
        const noSmokeValue = noSmokeData.value
        dataSmoke.textContent = noSmokeValue
    }

    // Cigar Variant

    const brand = document.getElementsByName('variant')
    let result = []
    for (let i = 0; i < brand.length; i++){
        if (brand[i].checked == true) {
            result.push(brand[i].value)
        }
    }

    let brandValue = ''
    for (let i = 0; i < result.length; i++){
        brandValue += result[i]+'; '
    }
    dataBrand.textContent = brandValue

    if (dataName.textContent == '' || dataAge.textContent == '' || dataGender.textContent == '' || dataSmoke.textContent == '' || dataBrand.textContent == ''){
        alert('All data must be filled in')
    } else {
        addData.appendChild(dataName)
        addData.appendChild(dataAge)
        addData.appendChild(dataGender)
        addData.appendChild(dataSmoke)
        addData.appendChild(dataBrand)
        tBody.appendChild(addData)
    }
    myForm.reset()
}
