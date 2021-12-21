
function handleErrors(response) {
    if (!response.ok) {
        alert('Incorrect City Name')
    }
    return response;
}



document.getElementById('btn-click').addEventListener('click',function(){

    let city=document.getElementById("city").value
    document.getElementById("city").value=""
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=56bc1f389d45541025646f22634f133e')
    .then(handleErrors)
    .then(response=>response.json()).
    catch(e=>{console.log(e);})

    .then(data=>display(data))
    
})

function display(data)
{
    if(data===undefined)
    {
        console.log("undefined");
    }
    else
    {
    let tempreture=data['main']['temp']
    let weather=data['weather'][0]['main']
    let description=data['weather'][0]['description']
    console.log(description);
    // if(description.includes('scattered'))
    // {
    //     document.body.style.backgroundImage="url('/scattered_clouds.jpg')"
    // }
    // if(description.includes('overcaste'))
    // {
        
    //     document.body.style.backgroundImage="url('/overcaste_cloud.jpg')"
    // }
    // if(description.includes('broken'))
    // {
    //     console.log("sss");
       
    //     document.body.style.backgroundImage="url('/broken.jpeg')"
    // }
    // if(description.includes('clear'))
    // {
    //     console.log("sss");
       
    //     document.body.style.backgroundImage="url('/clear-skies.jpg')"
    // }
    // console.log(tempreture,weather,description);
    document.getElementById('Container').innerHTML=`<h1>Weather Details</h1><h3>Tempreture:-${tempreture}</h3><h3>Weather:-${weather}</h3><h3>Description:-${description}</h3>`
    }
    }