
fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(json => {
        json.forEach(element=> {
        console.log(element.name.common);
        let countries=document.getElementById('c')
        let country=document.createElement('option')
        country.innerHTML=element.name.common 
        
        countries.appendChild(country)


        
        });
    
    })

   