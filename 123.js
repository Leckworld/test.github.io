const apiUrl = "https://blynk.cloud/external/api/get?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&";
const PORT0 = "v0";
const PORT1 = "v1";
const PORT2 = "v2";
const PORT3 = "v3";
const PORT4 = "v4";
const PORT5 = "v5";
const PORT6 = "v6";


//color picck
const redInput = document.getElementById('slider_R');
const greenInput = document.getElementById('slider_G');
const blueInput = document.getElementById('slider_B');
const colorInput = document.getElementById('color-picker');



function toggleButton(light) {
    var pinValue0 = light.checked ? 1 : 0;
    var url0 = "https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v0=" + pinValue0;
    var request = new XMLHttpRequest();
    request.open("GET", url0);
    request.send();

};
// f_light swicth function

function toggleButton1(f_light) {
  var pinValue1 = f_light.checked ? 0 : 1;
  var url1 = "https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v1=" + pinValue1;
  var request = new XMLHttpRequest();
  request.open("GET", url1);
  request.send();
  console.log(url1)
};

function toggleButton2(fan) {
  var pinValue2 = fan.checked ? 0 : 1;
  var url2 = "https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v2=" + pinValue2;
  var request = new XMLHttpRequest();
  request.open("GET", url2);
  request.send();
  console.log(url2)

};

function toggleButton3(extra) {
  var pinValue3 = extra.checked ? 0 : 1;
  var url3 = "https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v3=" + pinValue3;
  var request = new XMLHttpRequest();
  request.open("GET", url3);
  request.send();
  console.log(url3)
};

function updateSliderValue() {
  var slider_R = document.getElementById("slider_R");
  var svr = slider_R.value;
  var request = new XMLHttpRequest();
  request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v4="+svr );
  request.send();
  var slider_G = document.getElementById("slider_G");
  var svg = slider_G.value;
  var request = new XMLHttpRequest();
  request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v5="+svg );
  request.send();
  var slider_B = document.getElementById("slider_B");
  var svb = slider_B.value;
  var request = new XMLHttpRequest();
  request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v6="+svb );
  request.send();

  console.log(svr); 
  console.log(svg); 
  console.log(svb); 


  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;
  const color = `rgb(${red}, ${green}, ${blue})`;
  colorInput.value = color;

}

async function getApiResponse() {
const response0 = await fetch(apiUrl+PORT0);
const data0 = await response0.json();


const response1 = await fetch(apiUrl+PORT1);
const data1 = await response1.json();

const response2 = await fetch(apiUrl+PORT2);
const data2 = await response2.json();

const response3 = await fetch(apiUrl+PORT3);
const data3 = await response3.json();

const response4 = await fetch(apiUrl+PORT4);
const data4 = await response4.json();

const response5 = await fetch(apiUrl+PORT5);
const data5 = await response5.json();

const response6 = await fetch(apiUrl+PORT6);
const data6 = await response6.json();


// Update the page with the response data
if (data0 == 0)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    light.checked = false;
    console.log("v0"+ data0)
  };
if (data0 == 1)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    light.checked = true;
    console.log("v0"+ data0)
  };

  if (data1 == 0)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    f_light.checked = false;
    console.log("v1" + data1)
  };
if (data1 == 1)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    f_light.checked = true;
    console.log("v1" + data1)
  };
//document.getElementById("response-container").innerHTML = JSON.stringify(data);

if (data2 == 0)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    fan.checked = false;
    console.log("v2" + data2)
  };
if (data2 == 1)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    fan.checked = true;
    console.log("v2" + data2)
  };

if (data3 == 0)
  {
    // document.getElementById("response-container").innerHTML = "OFF"
    document.getElementById("light");
    extra.checked = false;
    console.log("v3" + data3)
  };
if (data3 == 1)
  {
    // document.getElementById("response-container").innerHTML = "ON"
    document.getElementById("light");
    extra.checked = true;
    console.log("v3" + data3)
  };
  document.getElementById("slider_R");
    slider_R.value = data4;
    console.log("v4" + data4);
  document.getElementById("slider_G");
    slider_G.value = data5;
    console.log("v5" + data5);
  document.getElementById("slider_B");
    slider_B.value = data6;
    console.log("v6" + data6);

    var re = data4;
    var gr = data5;
    var bl = data6;
    var rgb = "rgb("+re + "," + gr + "," + bl+")" ; 
    
    document.body.style.backgroundColor = rgb;


}

// color picker

function getColor() {
  // Get the color picker element
 
  var colorPicker = document.getElementById("colorPicker");
  
  // Get the value of the color picker
  var hexColor = colorPicker.value;
 // Log the color value to the console
  console.log("Color value: " + hexColor);
// Remove '#' if it exists
hex = hexColor.replace('#', '');
console.log("HEX" + hex);
// Get RGB values
var r = parseInt(hex.substring(0, 2), 16);
var g = parseInt(hex.substring(2, 4), 16);
var b = parseInt(hex.substring(4, 6), 16);

  
// backgroud color set



//   REQUEST
var request = new XMLHttpRequest();
request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v4="+ r );
request.send();
console.log("R" + r);
var request = new XMLHttpRequest();
request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v5="+ g );
request.send();
console.log("G" + g);
var request = new XMLHttpRequest();
request.open("GET","https://blynk.cloud/external/api/update?token=MSXaYilPABXsmhXA4EDwO4JStHxUj1P5&v6="+ b );
request.send();
console.log("B" + b);
}


var firebaseConfig = {
        apiKey: "AIzaSyAmvWtPCfVh8Mm4WkPy1SKu6BQAMTtm-kE",
        authDomain: "home-b28fd.firebaseapp.com",
        databaseURL: "https://home-b28fd-default-rtdb.firebaseio.com",
        projectId: "home-b28fd",
        storageBucket: "home-b28fd.appspot.com",
        messagingSenderId: "487868980428",
        appId: "1:487868980428:web:af634b774933ff66eeb669",
        measurementId: "G-95ZTXMGX52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();



firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})




setInterval(getApiResponse, 500); // Call the function every second 1000 mili sec =  1s
