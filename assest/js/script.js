const settings = {
	"headers": {
		"X-RapidAPI-Key": "cb1dfc912fmsh7c75694e9d13feep17a5cbjsn3a56cc27d342",
		"X-RapidAPI-Host": "covid-193.p.rapidapi.com"
	}
};

let selectedOption = null

const states = document.getElementById('inputGroupSelect01');
states.innerHTML = '<option value="" disabled selected>Select State</option>';

fetch("https://covid-193.p.rapidapi.com/countries", settings)
    .then(res => res.json())
    .then(res => {

        res.response.forEach(state => {   
            const option = document.createElement('option'); 
            option.value = state;
            option.innerHTML = state;
            states.appendChild(option);
        });

    });
  

const getData = () => {
    fetch(`https://covid-193.p.rapidapi.com/statistics?country=${states.value}`, settings) 
    // fetch("https://covid-193.p.rapidapi.com/statistics?" + new URLSearchParams({country:states.value}), settings) 
        .then(res => res.json())
        .then(res => {
            console.log(res.response);
        
            document.getElementById("active-cases").innerHTML = res.response[0].cases.active;
            document.getElementById("new-cases").innerHTML = res.response[0].cases.new || 0;
            document.getElementById("recovered-cases").innerHTML = res.response[0].cases.recovered;
            document.getElementById("total-cases").innerHTML = res.response[0].cases.total;
            document.getElementById("total-deaths").innerHTML = res.response[0].deaths.total;
            document.getElementById("total-tests").innerHTML = res.response[0].tests.total;
            
            

        });
}



// fetch("https://covid-193.p.rapidapi.com/countries", settings)
//     .then((Response) => {
//         return Response.json();
//     })
//     .then((data) => {
//         data.forEach(todo => {
//             let option = new Option(todo.title, todo.id)
//             console.log(option)
//             todos.add(option)
//         });
//     });


 

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res => res.json())
//   .then(res => {
//     console.log(res)
   
//       res.forEach(state => {
//         const option = document.createElement('option');
//         option.value = state.id;
//         option.innerHTML = state.title;
//         states.append(option)
//       });

//   });


   


