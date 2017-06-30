<!--





//롤오버 관련 시작 

function MM_swapImgRestore() { //v3.0

  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;

}



function MM_findObj(n, d) { //v4.01

  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {

    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}

  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];

  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);

  if(!x && d.getElementById) x=d.getElementById(n); return x;

}



function MM_swapImage() { //v3.0

  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)

   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}

}



//롤오버 관련 끝



<!--



// size of AdCorner image 

// You should change this when you change the image. 

var     nAdCornerWidth          = 75; 

var     nAdCornerHeight         = 130; 



// right and bottom margin 

var nAdCornerMarginX = 2; 

var nAdCornerMarginY = 250; 



// window's scrollbar width and height 

var nScrollBarWidth = 16; 

var nScrollBarHeight = 16; 



// refresh interval of AdCorner 

var nInterval = 200; 



var isLoaded = 0; 


function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}



function setup () 
{ 
  var version = detectIE();

  if (version === false) { // IE/Edge
    console.log("A")
  } else if (version >= 12) {
    console.log("B")
  } else {
    console.log("C")
  } // IE

  // window.setInterval ("AdCornerMove();", nInterval); 
} 



function AdCornerMove () 

{ 

if (isLoaded == 0) 

{ 

return; 

} 

if (isMSIE) 

{ 

nAdCornerOriginX = document.body.clientWidth - idAdCorner.width - nAdCornerMarginX; 

nAdCornerOriginY = document.body.clientHeight - idAdCorner.height - nAdCornerMarginY; 



nAdCornerOriginX += document.body.scrollLeft; 

nAdCornerOriginY += document.body.scrollTop; 



idAdCorner.style.pixelLeft = nAdCornerOriginX; 

idAdCorner.style.pixelTop = nAdCornerOriginY; 

} 

else 

{ 

nAdCornerOriginX = window.innerWidth + window.pageXOffset - nAdCornerWidth - nAdCornerMarginX; 

nAdCornerOriginY = window.innerHeight + window.pageYOffset - nAdCornerHeight - nAdCornerMarginY; 



if (window.scrollbars.visible == true) 

{ 

nAdCornerOriginX -= nScrollBarWidth; 

nAdCornerOriginY -= nScrollBarHeight; 

} 



document.getElementById("idAdCorner").style.left = nAdCornerOriginX; 

document.getElementById("idAdCorner").style.top = nAdCornerOriginY; 

} 

} 



//-->





 //<!-- 

window.onload=setup; 

isLoaded = 1; 

//--> 



//-->
