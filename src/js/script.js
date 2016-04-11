function navigationFunction(){
    console.log(navigator.userAgent.toString());
    //iPhone and iOS devices
    if( (navigator.userAgent.match(/iPhone/i))
        || (navigator.userAgent.match(/iPod/i))
        || (navigator.userAgent.match(/iPad/i))
    ){
         window.open("maps://maps.google.com/maps?daddr=60.170404, 24.941284999999993&amp;ll=");
    //Lumia / other Nokia phones
    }else if( (navigator.userAgent.match(/NOKIA/))
          || (navigator.userAgent.match(/iemobile/i))
    ){
      window.open("https://maps.here.com/directions/drive//60.170404,24.941284999999993?x=ep") //Is this the correct URL?
    }else{
      //Android / everything else, also desktop
         window.open("http://maps.google.com/maps?daddr=60.170404, 24.941284999999993&amp;ll=");
}}
