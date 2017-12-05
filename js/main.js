var pastVals = [];

function update(first) {
    let now = new Date();

    $(".remove").remove(); //Remove all children.

    var resp = $.getJSON("https://blockchain.info/ticker", function(data) {
        var table = $('#table'); //The market val thing.
        var marketval = $('#market_val');        
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
                let tail = "";
                let change = ((val.sell - pastVals[it]) / pastVals[it]) * 100;

                if (change < 0) {
                    tail = "<p style='color : red'>" + change.toFixed(3) + "%</p>"
                }

                if (change > 0) {
                    tail = "<p style='color : green'>" + "+" + change.toFixed(3) + "%</p>"                    
                }

                if (change == 0){
                    tail = "<p style='color : grey'>" + "+" + 0 + "%</p>"                                        
                }
                
                var rowContents = ("<td id='cell" + it + "'>" + "<i class='fa fa-btc' aria-hidden='true'></i> " + val.sell + tail + "</td>");                
                $("#cell" + it).replaceWith(rowContents);
            }

            pastVals[it] = val.sell;

            it++;
        });

    }); //Response from conversion stuff.

    var resp = $.getJSON("https://api.blockchain.info/stats", function(data) {
        var json = resp.responseJSON;
        
        var mined = $('#mined'); //# of Bitcoin mined.
        var revenue = $("#revenue"); //Amount of revenue in USD.
        var usdval = $("#usdval");
        var transaction = $("#transaction");

        mined.text(json.n_btc_mined);
        revenue.text(json.miners_revenue_usd);
    }); //Response from stats;
}


setInterval(update, 1000 * 30);