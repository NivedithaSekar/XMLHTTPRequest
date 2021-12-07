/**
 * XML HTTP Request - important JavaScript object 
 * allows us to make network requests to retrieve resources from a server via JavaScript
 */

//Create a new request object instance from XMLHTTPRequest constructor using "new" keyword 
const req = new XMLHttpRequest();
//Open the request with required 2 parameters - HTTP method & URL
req.open("GET","https://restcountries.com/v2/all")
//send the request
req.send();
//the given function will be excecuted when request completes successfully
req.onload = function(){
    const result = JSON.parse(req.response);
    //printing values via console
    console.log("List of Country and its flag")
    for(let i=0;i<result.length;i++){
        console.log(`${result[i].name} - ${result[i].flag}`); 
     }
     //passing on the parsed response to a function to use and display in the HTML page
     display(result);
    }

//Q3 - Displaying details    
function display(restcountries){
    //selecting the Q3 div to create and append the answer value elements
    const div = document.getElementById('Q3');

    //creating and appending title(h1 tag) onto Q3 div
    const title = document.createElement('h1');
    title.textContent = "List of Country - Region - Subregion - Population";
    div.appendChild(title);
    
    // creating a div to hold collection of answers
    const ans = document.createElement('div');
    for(let i=0;i<restcountries.length;i++){
        //creating para(p tag) for every object(countries name, region, sub region and population) in response
        const para = document.createElement('p');
        //values added to the para element via elementName.textContent
        para.textContent = `${restcountries[i].name} - ${restcountries[i].region} - ${restcountries[i].subregion} - ${restcountries[i].population}`;
        //appending para to ans
        ans.appendChild(para);
    }
    //appending ans to Q3 div
    div.appendChild(ans);
}
