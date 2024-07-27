function showflag()
{       let countries=document.getElementById('c')
        
        let c=countries.value
        let response=confirm(`do you want to show ${c} flag?`)
        if (response==true)

        {   
           

           fetch('https://restcountries.com/v3.1/all')
             .then(response=>response.json())
             .then(json => { json.forEach(element=> {
              if (element.name.common==countries.value)
            {
                
                let im=document.getElementById('f')
                im.src=element.flags.png
                
                
                
                

                
                im.addEventListener('click',()=>{
                    
                let span=document.getElementById('spn')
                span.innerHTML=`Population of ${element.name.common}:${element.population}`
                

                })
                

                
                


            }
                    
        })



                
                


                
                

                
   

            
            
            
          

             
        
        })}

   
    
}    






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

   