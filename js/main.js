var table = $('#table'); //The market val thing.
var marketval = $('#market_val');

function update(first) {
    let now = new Date();

    $(".remove").remove(); //Remove all children.

    let resp = $.getJSON("https://blockchain.info/ticker", function(data) {
        var it = 0;

        $.each(data, function(key, val) {
            if (first) {
                var rowStart = "<tr>"                
                var rowContents = ("<td>" + val.symbol + " - " + key + "</td>" + "<td id='cell" + it + "'>" + "<i class='fa fa-btc' aria-hidden='true'></i> " + val.sell + "</td>");
                var rowEnd = "</tr>"
                
                var rowFull = rowStart + rowContents + rowEnd;
    
                marketval.append(rowFull);
            }
            
            if (!first) {
                var rowContents = ("<td id='cell" + it + "'>" + "<i class='fa fa-btc' aria-hidden='true'></i> " + val.sell + "</td>");                
                $("#cell" + it).replaceWith(rowContents);
            }

            it++;
        })
    }); //Response from conversion stuff.
}


setInterval(update, 5000);