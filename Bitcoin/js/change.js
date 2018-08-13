let slider1 = document.getElementById("myRange1");
   slider1.oninput = function() {
      if(slider1.value == 1) {
         slider1.style.background = "#d3d3d3";
         loadPrice1();
      } else {
         slider1.style.background = "#3db2ed";
         loadPercent1();
      } 
   } 
   let slider2 = document.getElementById("myRange2");
   slider2.oninput = function() {
      if(slider2.value == 1) {
         slider2.style.background = "#d3d3d3";
         loadPrice2();
      } else {
         slider2.style.background = "#3db2ed";
         loadPercent2();
      } 
   } 
   let slider3 = document.getElementById("myRange3");
   slider3.oninput = function() {
      if(slider3.value == 1) {
         slider3.style.background = "#d3d3d3";
         loadPrice3();
      } else {
         slider3.style.background = "#3db2ed";
         loadPercent3();
      } 
   } 
  function loadPrice1() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour1");
        if(data.changes.price.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.price.hour + "$";
        } else {
           result_hour.innerHTML = data.changes.price.hour + "$";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day1");
        if(data.changes.price.day > 0) {
           result_day.innerHTML = "+" + data.changes.price.day + "$";
        } else {
           result_day.innerHTML = data.changes.price.day + "$";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week1");
        if(data.changes.price.week > 0) {
           result_week.innerHTML = "+" + data.changes.price.week + "$";
        } else {
           result_week.innerHTML = data.changes.price.week + "$";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month1");
        if(data.changes.price.month > 0) {
           result_month.innerHTML = "+" + data.changes.price.month + "$";
        } else {
           result_month.innerHTML = data.changes.price.month + "$";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
function loadPrice2() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour2");
        if(data.changes.price.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.price.hour + "$";
        } else {
           result_hour.innerHTML = data.changes.price.hour + "$";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day2");
        if(data.changes.price.day > 0) {
           result_day.innerHTML = "+" + data.changes.price.day + "$";
        } else {
           result_day.innerHTML = data.changes.price.day + "$";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week2");
        if(data.changes.price.week > 0) {
           result_week.innerHTML = "+" + data.changes.price.week + "$";
        } else {
           result_week.innerHTML = data.changes.price.week + "$";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month2");
        if(data.changes.price.month > 0) {
           result_month.innerHTML = "+" + data.changes.price.month + "$";
        } else {
           result_month.innerHTML = data.changes.price.month + "$";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
function loadPrice3() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour3");
        if(data.changes.price.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.price.hour + "$";
        } else {
           result_hour.innerHTML = data.changes.price.hour + "$";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day3");
        if(data.changes.price.day > 0) {
           result_day.innerHTML = "+" + data.changes.price.day + "$";
        } else {
           result_day.innerHTML = data.changes.price.day + "$";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week3");
        if(data.changes.price.week > 0) {
           result_week.innerHTML = "+" + data.changes.price.week + "$";
        } else {
           result_week.innerHTML = data.changes.price.week + "$";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month3");
        if(data.changes.price.month > 0) {
           result_month.innerHTML = "+" + data.changes.price.month + "$";
        } else {
           result_month.innerHTML = data.changes.price.month + "$";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
function loadPercent1() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour1");
        if(data.changes.percent.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.percent.hour + "%";
        } else {
           result_hour.innerHTML = data.changes.percent.hour + "%";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day1");
        if(data.changes.percent.day > 0) {
           result_day.innerHTML = "+" + data.changes.percent.day + "%";
        } else {
           result_day.innerHTML = data.changes.percent.day + "%";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week1");
        if(data.changes.percent.week > 0) {
           result_week.innerHTML = "+" + data.changes.percent.week + "%";
        } else {
           result_week.innerHTML = data.changes.percent.week + "%";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month1");
        if(data.changes.percent.month > 0) {
           result_month.innerHTML = "+" + data.changes.percent.month + "%";
        } else {
           result_month.innerHTML = data.changes.percent.month + "%";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
function loadPercent2() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour2");
        if(data.changes.percent.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.percent.hour + "%";
        } else {
           result_hour.innerHTML = data.changes.percent.hour + "%";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day2");
        if(data.changes.percent.day > 0) {
           result_day.innerHTML = "+" + data.changes.percent.day + "%";
        } else {
           result_day.innerHTML = data.changes.percent.day + "%";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week2");
        if(data.changes.percent.week > 0) {
           result_week.innerHTML = "+" + data.changes.percent.week + "%";
        } else {
           result_week.innerHTML = data.changes.percent.week + "%";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month2");
        if(data.changes.percent.month > 0) {
           result_month.innerHTML = "+" + data.changes.percent.month + "%";
        } else {
           result_month.innerHTML = data.changes.percent.month + "%";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}
function loadPercent3() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let responseBody = this.responseText;
        let data = JSON.parse(responseBody);
        let result_hour = document.getElementById("result_hour3");
        if(data.changes.percent.hour > 0) {
           result_hour.innerHTML = "+" + data.changes.percent.hour + "%";
        } else {
           result_hour.innerHTML = data.changes.percent.hour + "%";
           result_hour.style.color = "#bf0e22";
        }
        let result_day = document.getElementById("result_day3");
        if(data.changes.percent.day > 0) {
           result_day.innerHTML = "+" + data.changes.percent.day + "%";
        } else {
           result_day.innerHTML = data.changes.percent.day + "%";
           result_day.style.color = "#bf0e22";
        }
        let result_week = document.getElementById("result_week3");
        if(data.changes.percent.week > 0) {
           result_week.innerHTML = "+" + data.changes.percent.week + "%";
        } else {
           result_week.innerHTML = data.changes.percent.week + "%";
           result_week.style.color = "#bf0e22";
        }
        let result_month = document.getElementById("result_month3");
        if(data.changes.percent.month > 0) {
           result_month.innerHTML = "+" + data.changes.percent.month + "%";
        } else {
           result_month.innerHTML = data.changes.percent.month + "%";
           result_month.style.color = "#bf0e22";
        }
    }
  };
  xhttp.open("GET", "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", true);
  xhttp.send();
}