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
new Christmas("square", "http://www.christmasgifs.org/artists/dear/full.gif"),
new Christmas("horizontal", "http://31.media.tumblr.com/bb9645bde39d7705ff13a5ffc4dd386c/tumblr_mfulpjEYoJ1rev1g5o1_500.gif"),
new Christmas("horizontal", "http://24.media.tumblr.com/f05527c3cdaa1cdabbc7cc41e2cc9140/tumblr_mflqkpkQ8Q1r4uycao1_250.gif"),
new Christmas("vertical", "http://24.media.tumblr.com/623f269461eaa6c7ecf56ae3d74ee0d3/tumblr_mfiui7EfBq1qck7l0o1_r1_500.gif"),
new Christmas("square", "http://24.media.tumblr.com/8c19d8f533db5ebb433f9b9834b4c861/tumblr_mfgzzsWLIU1rmk138o1_400.gif"),
new Christmas("rectangle", "http://31.media.tumblr.com/425ae242c2b1c258c8de8d0802c5aa9e/tumblr_mfkqlcMpS51r5ge8lo8_250.gif"),
new Christmas("rectangle", "http://media3.giphy.com/media/4txbdOMP0CdP2/giphy.gif")
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

  implementHoliday.init(christmasGif);
  var width;
  var height;
  var images = document.getElementsByTagName('img');
  
  for (var i = 0; i < images.length; i ++) {
    images[i].onload = function(){ 
      width = this.width;
      height = this.height;
    }}

    imageCount = images.length;

    // document.getElementsByTagName('body')[0].innerHTML += letItSnow();

    var image = document.getElementsByTagName('img')[0];
    // for (property in image) {
    //   console.log(property + ": " + image[property]);
    // }


    for(var i = 0; i < imageCount; i++) {

      var ratio = imageRatio(images[i]);
      var number = Randomize(implementHoliday[ratio]);
      var img = implementHoliday[ratio]()[number];
      images[i].src = img.imageurl;
    }

    transformToChristmas();  

  })(document);


  function transformToChristmas(){
    
    // document.getElementsByTagName('body').innerHTML += '<canvas id="canvas"></canvas>'
    
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url("http://crazy-frankenstein.com/free-wallpapers-files/christmas-santa-claus-wallpapers/santa-claus-arrived.jpg")'
    document.getElementsByTagName('body')[0].innerHTML += '<canvas id="canvas"></canvas>'

    document.getElementsByTagName('body')[0].innerHTML += '<audio loop="loop" autoplay="autoplay"><source src="All I Want For Christmas Is You_MIDI.mp3"/></audio>'
    


    var iconSource = ["src='./icons/bells.png'>", "src='./icons/candles.png'>", "src='./icons/candycane.png'>", 
    "src='./icons/christmas_tree.png'>", "src='./icons/dooffy_ikony_christmas_0008_candles.png'>", 
    "src='./icons/hat.png'>", "src='./icons/ipod_black_gift.png'>", "src='./icons/mistletoe.png'>", 
    "src='./icons/santa_clause256.png'", "src='./icons/sock.png'>", "src='./icons/tree_1.png'>", 
    "src='./icons/tree.png'>", "src='./icons/xmas_14.png'>", "src='./icons/xmas_sticker_02.png'>", 
    "src='./icons/tree_1.png'>", "src='./icons/tree.png'>", "src='./icons/xmas_14.png'>", "src='./icons/xmas_sticker_02.png'>", 
    "src='./icons/xmas_sticker_03.png'>", "src='./icons/xmas_sticker_15.png'>"]

    function Randomer(iconSource){
      return Math.floor(Math.random() * iconSource.length);
    }

    function getRandomIcon(iconSource) {
      return iconSource[Randomer(iconSource)];
    }


    document.getElementsByTagName('body')[0].addEventListener("click", function(e) {
      
      e.preventDefault();

      var imageTag = '<img class="christmas" style="position:absolute;z-index:10;top:'+ e.y + 'px;left:' + e.x +'px" '+ getRandomIcon(iconSource);

      
      document.getElementsByTagName('body')[0].innerHTML += imageTag

    });


  }


  
