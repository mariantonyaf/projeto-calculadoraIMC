const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value

    const bmi = (weight / (height * height)).toFixed(2)

    const value = document.getElementById('value')
    let description = ''

    document.getElementById('infos').classList.remove('hidden')

    if(bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!'
    }

    document.getElementById('description').textContent = description
})

