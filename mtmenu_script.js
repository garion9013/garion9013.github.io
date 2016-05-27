	//*******************
	//*****Top Menu*****
	//*******************
	
	var im, imag, loaded;
	window.onerror = null;
	imag = new Array();
	
	imag[0] = "http://jini.inames.kr/oldhome/img/top_img.gif" ;
	imag[9] = "http://jini.inames.kr/oldhome/img/top_img.gif" ; 
	
	im = new Array();
	for (var i = 0; i < imag.length ; i++){
		im[i] = new Image();
	   	im[i].src = imag[i];
	}
	loaded = 1;
	
	function swapImage(imgname,num) {
		var objImg=eval("document.images['"+imgname+"']");
		objImg.src = im[num].src;
	}
	//Grobal Variables
  var layerRef="null",layerStyleRef="null",styleSwitch="null";

	<!----- General Setup And Starting -->
					layerStyleRef="layer.style";
					layerRef="document.all";
					styleSwitch=".style";
	
	<!------- Show And Hide Funcion ----------->
	
	function showLayer(layerName){
					console.log(layerRef)
	        eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="visible"');
	}
	
	function hideLayer(layerName){
	        eval(layerRef+'["'+layerName+'"]'+styleSwitch+'.visibility="hidden"');
	}
	
	
	/*
	function showLayer(layername) {
		var objLayer=eval("document.all."+layername+".style");
		for(i=1; i<=6; i++) {
			var thisLayer=eval("document.all.sub0"+i+".style");
			if(thisLayer==objLayer)	thisLayer.visibility="visible";
			else					thisLayer.visibility="hidden";
		}
	}
	*/
	function goUrl(theUrl) {
		window.open(theUrl,'_new');
	}