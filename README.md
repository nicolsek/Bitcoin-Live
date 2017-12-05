# [Bitcoin-Live](http://nicoletusek/me/Bitcoin-Live)
--------------

Bitcoin! The cryptocurrency that has taken the world by storm. I decided one very gay and tired night (December 4th) to create a dynamically generating and updating web page.
It hosts information about Bitcoin and facts about what it's doing currentlly. It's kind of like a MadLibs but a little bit more complicated with JSON objects.

# Why?
-------

Do you ever get that itchy feeling on the back of your neck? Yeah it's nothing like that. I just decided randomly that this would be a nice project to partake on and get in some more
practice with the wonder (in that I wonder why I picked this language) of the amalgamation of JavaScript's innate capabilities and jQuery :)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Code-Samples?
```javascript
var resp = $.getJSON("https://api.blockchain.info/stats", function(data) {
        var json = resp.responseJSON;
        
        var mined = $('#mined'); //# of Bitcoin mined.
        var revenue = $("#revenue"); //Amount of revenue in USD.
        var usdval = $("#usdval");
        var transaction = $("#transaction");

        mined.text(json.n_btc_mined);
        revenue.text(json.miners_revenue_usd);
    }); //Response from stats;
```