const log = console.log

log('client side js file is loaded')

// select elements
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

// asigne values
// msg1.textContent = 'loading'
weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const location = search.value
    msg1.textContent = 'loading ... '
    msg2.textContent = ''
    // fetch('http://localhost:3000/weather?address=' + location)
    fetch('/weather?address=' + location)
        .then((res)=>{
            res.json().then((data) => {
                if(data.error){
                    msg1.textContent = data.error
                }
                msg1.textContent = data.address
                msg2.textContent = data.forecast
            })
        })
})
