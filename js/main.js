var table = $('#table'); //The market val thing.
var marketval = $('#market_val');

function update(first) {
    let now = new Date();

    table.find("tr:gt(0)").remove();

    let resp = $.getJSON("https://blockchain.info/ticker", function(data) {
        $.each(data, function(key, val) {
            var rowStart = "<tr>"
            var rowContents = ("<td>" + val.symbol + " - " + key + "</td>" + "<td>" + val.sell + "</td>");
            var rowEnd = "</tr>"

            var rowFull = rowStart + rowContents + rowEnd;
            marketval.append(rowFull);
        })
    }); //Response from conversion stuff.
}