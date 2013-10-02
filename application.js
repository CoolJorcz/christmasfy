
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
    flake.innerHTML = ".";
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
    new Christmas("square", "http://www.christmasgifs.org/artists/menard/full.gif"),
    new Christmas("vertical", "http://www.christmasgifs.org/artists/stockdale/full.gif"),
    new Christmas("horizontal", "http://www.christmasgifs.org/artists/dear/full.gif"),
    new Christmas("horizontal", "http://31.media.tumblr.com/bb9645bde39d7705ff13a5ffc4dd386c/tumblr_mfulpjEYoJ1rev1g5o1_500.gif"),
    new Christmas("horizontal", "http://24.media.tumblr.com/f05527c3cdaa1cdabbc7cc41e2cc9140/tumblr_mflqkpkQ8Q1r4uycao1_250.gif"),
    new Christmas("horizontal", "http://24.media.tumblr.com/623f269461eaa6c7ecf56ae3d74ee0d3/tumblr_mfiui7EfBq1qck7l0o1_r1_500.gif"),
    new Christmas("horizontal", "http://24.media.tumblr.com/8c19d8f533db5ebb433f9b9834b4c861/tumblr_mfgzzsWLIU1rmk138o1_400.gif"),
    new Christmas("horizontal", "http://31.media.tumblr.com/425ae242c2b1c258c8de8d0802c5aa9e/tumblr_mfkqlcMpS51r5ge8lo8_250.gif"),
    new Christmas("horizontal", "http://media3.giphy.com/media/4txbdOMP0CdP2/giphy.gif")
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
      
      document.getElementsByTagName('body')[0].style.backgroundImage = 'url("http://crazy-frankenstein.com/free-wallpapers-files/christmas-santa-claus-wallpapers/santa-claus-arrived.jpg")'
      document.getElementsByTagName('body')[0].innerHTML += '<canvas id="canvas"></canvas>'
      document.getElementsByTagName('head')[0].innerHTML += '<audio loop="loop" autoplay="autoplay" controls="hidden"><source src="http://www.merry-christmas.com/christmas-music/music_files/twelv.mp3"/></audio>'

      var iconSource = ["src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Stocking-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Present-3-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Snowman-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Present-2-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Present-4-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Tree-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Santa-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Present-1-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Ornament-3-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Ornament-2-icon.png>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Ornament-1-icon.png'>", 
      "src='http://icons.iconarchive.com/icons/instatuts/christmas-theme/256/Christmas-Letter-icon.png'>"]

      function Randomer(iconSource){
        return Math.floor(Math.random() * iconSource.length);
      }

      function getRandomIcon(iconSource) {
        return iconSource[Randomer(iconSource)];
      }

      window.addEventListener("click", function(e) {
        
        e.stopPropagation();

        var imageTag = '<img class="christmas" style="position:absolute;z-index:10;top:'+ e.y + 'px;left:' + e.x +'px" '+ getRandomIcon(iconSource);

        document.getElementsByTagName('body')[0].innerHTML += imageTag
        letItSnow();
      });
    }



  
