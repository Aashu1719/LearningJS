const form = document.querySelector('form');

form.addEventListener('submit', function(e) // here we use submit event
{
    e.preventDefault() // yahan hum action ko stop kar rha hai jahan ye form jana chnahta hai
    
    const height =  parseInt(document.querySelector('#height').value)
    const weight =  parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    // here we add some checks
    if(height === "" || height < 0 || isNaN(height))
    {
        results.innerHTML = `PLease give a valid height ${height}`
    }

    else if(weight === "" || weight < 0 || isNaN(weight))
    {
            results.innerHTML = `PLease give a valid weight ${weight}`
    }

    else
    {
        const bmi = (weight / ((height * weight) / 10000)).toFixed(2)

        // show the result
        results.innerHTML = `<span>${bmi}</spna>`;
    }

        

});
