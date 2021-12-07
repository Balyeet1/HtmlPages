
$(document).ready(function () {
    $.ajax({
        url: 'https://api.coinbase.com/v2/currencies',
        async: true,
        success: successCallback,
        error: errorCallback
    });

    function successCallback(response) {
        var select = $('#select')[0];
        response["data"].forEach(coin => {
            var opt = document.createElement("option");
            opt.appendChild(document.createTextNode(coin["name"]));
            select.appendChild(opt);
        });

    }

    function errorCallback(request, status, error) {
        console.log(error);
    }
});



var ShowCrypto = function () {

    $.ajax({
        url: 'https://api.coinbase.com/v2/currencies',
        async: true,
        success: successCallback,
        error: errorCallback
    });

    function successCallback(response) {
        var dropdownValue = $("#select").val();
        $("#row1").remove();
        var newRow = table.insertRow();
        newRow.id = "row1";
        var rigthCoin;

        response["data"].forEach(coin => {
            if(coin["name"] === dropdownValue){
                rigthCoin = coin;
            }
        });

        for (const propety in rigthCoin) {
            var newCell = newRow.insertCell();
            var newText = document.createTextNode(rigthCoin[propety]);
            newCell.appendChild(newText);
        }
    }

    function errorCallback(request, status, error) {
        console.log(error);
    }
}