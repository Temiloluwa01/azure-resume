window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl ='https://getresumecounter002.azurewebsites.net/api/GetResumeCounter?code=hSEv-UJTcEBqxpsVvcqLBTzaljcI_JyBR_dv93noWfgAAzFuA8nFTQ==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count =  response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}