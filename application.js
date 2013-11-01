
function setBody(){
  var dv = document.createElement("div");
  var divs = document.getElementsByTagName('div');
  var bd = document.getElementsByTagName('body')[0];
  
  dv.setAttribute('id', 'snowglobe');
  dv.style.width = '100%';
  dv.style.height = '100%';
  dv.style.position = 'relative';
  dv.style.top = '0';
  dv.style.left = '0';
  dv.style.overflow = 'hidden';

  for(var i = 0; i < divs.length; i++)
  {
    dv.appendChild(divs[i]);
  }

  bd.appendChild(dv);
}
function letItSnow(){
  //source: http://sutherlandboswell.com/2012/11/creating-pretty-snow-with-javascript-html-css/

  function browserWidth() {
    var x = 0;
    if (self.innerHeight) {
      x = self.innerWidth;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
      x = document.documentElement.clientWidth;
    }
    return x;
  }

  function browserHeight() {
    var y = 0;
    if (self.innerHeight) {
      y = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) {
      y = document.documentElement.clientHeight;
    }
    else if (document.body) {
      y = document.body.clientHeight;
    }
    return y;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var width = browserWidth();
  var height = browserHeight();
  var flakeCount = 50;
  var gravity = 0.7;
  var windSpeed = 20;
  var flakes = [];

  var currentFlake = 0;

  var snowglobe = document.getElementById("snowglobe");
  
  while (currentFlake < flakeCount) {
    var flake = document.createElement("div");
    flake.className = 'flake';
    flake.style.position = 'absolute';
    flake.style.width = '1px';
    flake.style.height = '1px';
    flake.style.color = '#99C8FE';
    flake.style.textShadow = '0 0 3px rgba(255,255,255,1)';
    flake.style.fontSize = getRandom(12, 24) + 'px';
    flake.style.top = getRandom(0, height) + 'px';
    flake.style.left = getRandom(0, width) + 'px';
    flake.innerHTML = "•";
    newFlake = snowglobe.appendChild(flake);
    newFlake.speed = getRandom(1, 100);
    flakes.push(newFlake);
    currentFlake++;
  }

  function snowFall() {
    for (var i = 0; i < flakes.length; i++) {
      newX = false;
      newY = false;
      //Calculate Y position
      newY = parseFloat(flakes[i].style.top) + (flakes[i].speed / 100) * gravity;
      if (newY > height) {
        newY = 0 - parseInt(flakes[i].style.fontSize)
        // if Y is at bottom, randomize X
        newX = getRandom(0, width);
      }
      // Calculate X position if it hasn't been set randomly
      if (!newX) newX = parseFloat(flakes[i].style.left) + Math.sin(newY /windSpeed);
      if (newX < -20) newX = width + 20;
      if (newX > width + 20) newX = -20;
      //Set new position
      flakes[i].style.top = newY + 'px';
      flakes[i].style.left = newX + 'px';
    }
  }

  setInterval(snowFall, 10);

  window.onresize = function(event) {
    width = browserWidth();
    height = browserHeight();
  }
}
 function Christmas(ratio, imageurl){
    this.ratio = ratio;
    this.imageurl = imageurl;
  }

  var implementHoliday = {
    init: function(christmasGif){
      this.christmasGif = christmasGif;
    },

    horizontal: function(){
      return this.christmasGif.filter(function(christmasGif){
        return christmasGif.ratio === "horizontal";
      });
    },

    vertical: function(){
      return this.christmasGif.filter(function(christmasGif){
        return christmasGif.ratio === "vertical";
      });
    }, 

    square: function (){
      return this.christmasGif.filter(function(christmasGif){
        return christmasGif.ratio === "square";
      });  
    }
  }

  function Randomize(images){
    return Math.floor(Math.random() * images.length)
  }

  var christmasGif = [
    new Christmas("vertical", "https://s3-us-west-2.amazonaws.com/christmasfy/vertical1.gif"),
    new Christmas("horizontal", "https://s3-us-west-2.amazonaws.com/christmasfy/horizontal2.gif"),
    new Christmas("horizontal", "https://s3-us-west-2.amazonaws.com/christmasfy/horizontal1.gif"),
    new Christmas("horizontal", "https://s3-us-west-2.amazonaws.com/christmasfy/horizontal3.gif"),
    new Christmas("horizontal", "https://s3-us-west-2.amazonaws.com/christmasfy/horizontal4.gif"),
    new Christmas("square", "https://s3-us-west-2.amazonaws.com/christmasfy/square3.gif"),
    new Christmas("square", "https://s3-us-west-2.amazonaws.com/christmasfy/square2.gif"),
    new Christmas("square", "https://s3-us-west-2.amazonaws.com/christmasfy/square4.gif"),
  ]

  function imageRatio(image) {

    var proportion = image.height/image.width;
    
    if(proportion > 1) {
      return "vertical";
    } else if(proportion === 1) {
      return "square"
    } else if(proportion < 1) {
      return "horizontal";
    }
  }

  (function (document){
    setBody();
    transformToChristmas();  
    letItSnow();
    implementHoliday.init(christmasGif);

    var width;
    var height;
    var chrismages = document.getElementsByTagName('img')

    imageCount = chrismages.length;
    for (var i = 0; i < chrismages.length; i ++) {
      chrismages[i].onload = function(){ 
        width = this.width;
        height = this.height;
    }}
      

      var image = document.getElementsByTagName('img')[0];

      for(var i = 0; i < imageCount; i++) {
        var image = chrismages[i]
        if(image.attributes['src']) {
          var ratio = imageRatio(image);
          var number = Randomize(implementHoliday[ratio]);
          var img = implementHoliday[ratio]()[number];
          chrismages[i].src = img.imageurl;  
        }
      }
    })(document);

    function transformToChristmas(){
      
      document.getElementsByTagName('body')[0].style.backgroundImage = 'url("https://s3-us-west-2.amazonaws.com/christmasfy/santa-claus-arrived.jpg")'
      document.getElementsByTagName('head')[0].innerHTML += '<audio loop="loop" autoplay="autoplay" controls="hidden"><source src="https://s3-us-west-2.amazonaws.com/christmasfy/twelv.mp3"/></audio>'

      var iconSource = ["src='https://s3-us-west-2.amazonaws.com/christmasfy/xmas_14.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/xmas_sticker_02.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/xmas_sticker_03.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/xmas_sticker_07.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/xmas_sticker_15.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/sock.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/santa_claus256.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/mistletoe.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/ipod_black_gift.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/dooffy_ikony_christmas_0008_candles.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/christmas_tree.png'>", 
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/candles.png'>",
      "src='https://s3-us-west-2.amazonaws.com/christmasfy/bells.png'>"]

      function Randomer(iconSource){
        return Math.floor(Math.random() * iconSource.length);
      }

      function getRandomIcon(iconSource) {
        return iconSource[Randomer(iconSource)];
      }

      window.addEventListener("click", function(e) {
        
        e.stopPropagation();

        var imageTag = '<img class="christmas" style="position:absolute;z-index:10;top:'+ (e.y - 50) +  'px;left:' + (e.x - 60) +'px" '+ getRandomIcon(iconSource);
        console.log(imageTag)
        document.getElementsByTagName('body')[0].innerHTML += imageTag
        letItSnow();
      });
    }



  
