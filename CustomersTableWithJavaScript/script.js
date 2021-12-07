var customerData = [
    {"id":1,"firstName":"Rui","lastName":"Ferrão","email":"rui@gmail.com","phone":"777888"},
    {"id":2,"firstName":"Sergio","lastName":"Gouveia","email":"sergio@gmail.com","phone":"777999"},
    {"id":3,"firstName":"Bruno","lastName":"Ferreira","email":"bruno@gmail.com","phone":"777666"},
    {"id":4,"firstName":"Rodolfo","lastName":"Matos","email":"rodolfo@gmail.com","phone":"777333"}
];

window.onload = function() {
    
var usersTable = document.getElementById('table');

customerData.forEach(customer => {
    var row = usersTable.insertRow(-1); 

    for (const property in customer) {
        var cell = row.insertCell(-1);
        cell.innerText = customer[property]; 
      } 
   });
};
