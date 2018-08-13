function EUR() { 
      let dropdown_price = document.getElementById("dropdown_price");
      let dropdown_menu = document.getElementById("dropdown_menu");
      dropdown_price.innerHTML = "EUR";
      dropdown_menu.innerHTML = `<li><a id="usd" href="#" onclick="USD()">USD</a></li>
                <li><a id="rub" href="#" onclick="RUB()">RUB</a></li>
                <li><a id="gbp" href="#" onclick="GBP()">GBP</a></li>`;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responseBody = this.responseText;
            let data = JSON.parse(responseBody);
            let price = document.querySelectorAll(".price");
            for(let i=0; i<price.length; i++) {
                price[i].innerHTML =  "&euro;" +  data.bid;
            }
        }
      };
      xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
      xhttp.send(); 
    }
    function USD() { 
      let dropdown_price = document.getElementById("dropdown_price");
      let dropdown_menu = document.getElementById("dropdown_menu");
      dropdown_price.innerHTML = "USD";
      dropdown_menu.innerHTML = `<li><a id="eur" href="#" onclick="EUR()">EUR</a></li>
                <li><a id="rub" href="#" onclick="RUB()">RUB</a></li>
                <li><a id="gbp" href="#" onclick="GBP()">GBP</a></li>`;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responseBody = this.responseText;
            let data = JSON.parse(responseBody);
            let price = document.querySelectorAll(".price");
            for(let i=0; i<price.length; i++) {
                price[i].innerHTML = "&#36;" +  data.bid;
            }
        }
      };
      xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
      xhttp.send();           
    }
    function RUB() { 
      let dropdown_price = document.getElementById("dropdown_price");
      let dropdown_menu = document.getElementById("dropdown_menu");
      dropdown_price.innerHTML = "RUB";
      dropdown_menu.innerHTML = `<li><a id="eur" href="#" onclick="EUR()">EUR</a></li>
                <li><a id="usd" href="#" onclick="USD()">USD</a></li>
                <li><a id="gbp" href="#" onclick="GBP()">GBP</a></li>`;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responseBody = this.responseText;
            let data = JSON.parse(responseBody);
            let price = document.querySelectorAll(".price");
            for(let i=0; i<price.length; i++) {
                price[i].innerHTML = "&#8381;" +  data.bid;
            }
        }
      };
      xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
      xhttp.send(); 
    }
    function GBP() { 
      let dropdown_price = document.getElementById("dropdown_price");
      let dropdown_menu = document.getElementById("dropdown_menu");
      dropdown_price.innerHTML = "GBP";
      dropdown_menu.innerHTML = `<li><a id="eur" href="#" onclick="EUR()">EUR</a></li>
                <li><a id="usd" href="#" onclick="USD()">USD</a></li>
                <li><a id="rub" href="#" onclick="RUB()">RUB</a></li>`;
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let responseBody = this.responseText;
            let data = JSON.parse(responseBody);
            let price = document.querySelectorAll(".price");
            for(let i=0; i<price.length; i++) {
                price[i].innerHTML = "	&pound;" +  data.bid;
            }
        }
      };
      xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
      xhttp.send(); 
    }