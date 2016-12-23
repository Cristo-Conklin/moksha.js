//var asanas = [];
$.getJSON('./asanas.js')
	.done(function(levels) {
		//links = [];
		$.each(levels, function(level_key, level) {
			html = '';
			//links[level_key] = [];
			//$('#flow').append('<div class="row">');
			$.each(level, function(k, asana) {				
				//links[level_key].push = asana;	
				html += updateImages(level_key, asana);
				if ((k + 1) % 4 == 0) html += '<div class="clearfix"><hr></div>';
			
console.log('h', k, k + 1, k % 4, (k + 1) % 4 == 0, level_key, asana, html);	
			});	
			
		
			if (typeof(html) != "undefined" ) {
				$('#flow').append('<hr><h1>' + level_key  + '</h1>' + '<div class="row">' + html + '</div>');
			}

		});
		
	//asanas = links; // extract divs rows when this works like vue templates. an object flow should take the elements on a higher layer as whole array to be shown on page

});	

// separate to project specific js file or embed on index
function updateImages (level_key, asana) {
	// todo: test items and update only changes instead rebuild div from 0
	//document.getElementById("flow").innerHTML = "";
	var br = '<br />'; // <br /> asana_display
	
	//asana_display = asana.toUpperCase().replace(".JPG", ""); 
	var searchMask = ".jpg";
	var regEx = new RegExp(searchMask, "ig");
	var replaceMask = "";
	asana_display = asana.replace(regEx, replaceMask);
	
	return '<div class="col-md-3">' +  '<img title="'+ asana_display +'" src="'+ level_key +'/'+ asana +'" class="img-responsive" />' + br + asana_display + br + '</div>';
				
}


