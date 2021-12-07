
$(document).ready(function () {
  showCustomers();

  $("#add").click(function () {
    addNewCustomer();
  });

  $("#update").click(function () {
    updateCustomer();
  });
  $("#reset").click(function () {
    reset();
  });

});

//Edit butom
var editButom = function(id) {
  $.ajax({
    url: 'http://127.0.0.1:8080/javabank5/api/customer/'+id,
    async: true,
    success: successCallback,
    error: errorCallback
  });

  function successCallback(response) {
    $("#id").val(response.id);
    $("#firstName").val(response.firstName);
    $("#lastName").val(response.lastName);
    $("#email").val(response.email);
    $("#phone").val(response.phone);
  }

  function errorCallback(request, status, error) {
   console.log(error);
  }
} 



//Add a new customer
addNewCustomer = function () {
  $.ajax({
    url: 'http://127.0.0.1:8080/javabank5/api/customer/',
    type: 'POST',
    data: JSON.stringify({
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      phone: $("#phone").val()
    }),
    async: true,
    contentType: 'application/json',
    success: successCallback,
    error: errorCallback
  });
  function successCallback(response) {
    $("[id*=row]").remove();
    showCustomers();
  }
  function errorCallback(response) {

  }
}

//Show a table with all customers
showCustomers = function () {
  $.ajax({
    url: 'http://127.0.0.1:8080/javabank5/api/customer/',
    async: true,
    success: successCallback,
    error: errorCallback
  });

  function successCallback(response) {
    var customerTable = $('#customerTable');


    response.forEach(element => {
      var markup = "<tr id=row" + element.id + ">" +
        "<td> " + element.firstName + " </td>" +
        "<td> " + element.lastName + " </td>" +
        "<td> " + element.email + " </td>" +
        "<td> " + element.phone + " </td>" +
        "<td><button type='button' id=edit" + element.id + " class='btn btn-success'>Edit</button></td>" +
        "<td><button type='button' id='delete" + element.id + "' class='btn btn-danger'>Delete</button></td>" +
        "</tr>"
      customerTable.append(markup);

      $("#delete" + element.id).click(function () {
        deleteCustomer(element.id);
      });
      $("#edit" + element.id).click(function () {
        editButom(element.id);
      });
    });
  }

  function errorCallback(request, status, error) {
    console.log(error);
  }
}

//Delete customer finction
deleteCustomer = function (id) {
  $.ajax({
    url: 'http://127.0.0.1:8080/javabank5/api/customer/' + id,
    type: 'DELETE',
    async: true,
    success: successCallback,
    error: errorCallback
  });

  function successCallback(response) {
    $("[id*=row]").remove();
    showCustomers();
  }
  function errorCallback(response) {

  }
}

var updateCustomer = function(){
  $.ajax({
    url: 'http://127.0.0.1:8080/javabank5/api/customer/'+$("#id").val(),
    type: 'PUT',
    data: JSON.stringify({
      id: $("#id").val(),
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      phone: $("#phone").val()
    }),
    async: true,
    contentType: 'application/json',
    success: successCallback,
    error: errorCallback
  });
  function successCallback(response) {
    $("[id*=row]").remove();
    showCustomers();
  }
  function errorCallback(response) {

  } 
}

var reset = function(){
  $("#id").val("");
  $("#firstName").val("");
  $("#lastName").val("");
  $("#email").val("");
  $("#phone").val("");
}

