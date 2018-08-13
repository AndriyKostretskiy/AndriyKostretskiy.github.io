function loadPercent() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let price = document.querySelectorAll(".price");
        for(let i=0; i<price.length; i++) {
            price[i].innerHTML = "$" +  data.bid;
        }
        let result_hour = document.querySelectorAll(".result_hour");
        for(let i=0; i<result_hour.length; i++) {
            if(data.changes.percent.hour > 0) {
               result_hour[i].innerHTML = "+" + data.changes.percent.hour + "%";
            } else {
               result_hour[i].innerHTML = data.changes.percent.hour + "%";
               result_hour[i].style.color = "#bf0e22";
            }
        }
        let result_day = document.querySelectorAll(".result_day");
        for(let i=0; i<result_day.length; i++) {
            if(data.changes.percent.day > 0) {
               result_day[i].innerHTML = "+" + data.changes.percent.day + "%";
            } else {
               result_day[i].innerHTML = data.changes.percent.day + "%";
               result_day[i].style.color = "#bf0e22";
            }
        }
        let result_week = document.querySelectorAll(".result_week");
        for(let i=0; i<result_week.length; i++) {
            if(data.changes.percent.week > 0) {
               result_week[i].innerHTML = "+" + data.changes.percent.week + "%";
            } else {
               result_week[i].innerHTML = data.changes.percent.week + "%";
               result_week[i].style.color = "#bf0e22";
            }
        }
        let result_month = document.querySelectorAll(".result_month");
        for(let i=0; i<result_month.length; i++) {
            if(data.changes.percent.month > 0) {
               result_month[i].innerHTML = "+" + data.changes.percent.month + "%";
            } else {
               result_month[i].innerHTML = data.changes.percent.month + "%";
               result_month[i].style.color = "#bf0e22";
            }
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
loadPercent();