d3.csv('world_data_v1.csv', function(error,rows) {
	var myTableContent = new Array();
	var i = 0;
	rows.forEach(function(d){
		myTableContent[i]=[d[Object.keys(d)[0]],
			d[Object.keys(d)[1]],
			d[Object.keys(d)[2]],
			d[Object.keys(d)[3]],
			d[Object.keys(d)[4]],
			d[Object.keys(d)[5]],
			d[Object.keys(d)[9]]];
		i++;
	});
	var tableBody = document.getElementById("tableBody");

	for (i = 0; i < myTableContent.length; i++) {
		var tr = document.createElement('TR');
		for (j = 0; j < myTableContent[i].length; j++) {
			var td = document.createElement('TD')
			td.appendChild(document.createTextNode(myTableContent[i][j]));
			tr.appendChild(td)
		}
		tableBody.appendChild(tr);
	}
});	

var table = document.getElementById('dataTable');
var cols = table.getElementsByTagName('col');
for(var i =0;i<cols.length;i++){
	cols[i].style.visibility = "visible";
}

function getLastVisCol(){
	var col = cols[1];
	for(var i =cols.length-1;i>=0;i--){
		if(cols[i].style.visibility == "visible"){
			col = cols[i];
			break;
		}
	}
	console.log(col);
}


   
function showHide(colNumber){
   var table = document.getElementById('dataTable');
   var col = table.getElementsByTagName('col')[colNumber];
   if (col) {
	   if(col.style.visibility == "visible") {
			col.style.visibility = "collapse";
		}
		else {
			col.style.visibility = "visible";
		}
   }
}

function sortTable(ascDesc,col) {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("dataTable");
	switching = true;
	/* Make a loop that will continue until
	no switching has been done: */
	while (switching) {
		// Start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/* Loop through all table rows (except the
		first, which contains table headers): */
		for (i = 1; i < (rows.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Get the two elements you want to compare,
			one from current row and one from the next: */
			x = rows[i].getElementsByTagName("TD")[col];
			y = rows[i + 1].getElementsByTagName("TD")[col];
			// Check if the two rows should switch place:
			if(ascDesc == "asc"){
				if(isNumber(x.innerHTML)){
					if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML)) {
						// If so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
				else{
					if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
						// If so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
				
			}
			else{
				if(isNumber(x.innerHTML)){
					if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML)) {
						// If so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}
				}
				else{
					if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
						// If so, mark as a switch and break the loop:
						shouldSwitch = true;
						break;
					}	
				}
			}
			
		}
		if (shouldSwitch) {
			/* If a switch has been marked, make the switch
			and mark that a switch has been done: */
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}



function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/*
(function () {

    var jsOffset = document.getElementById("js-offset"),
        jsOffsetY = document.getElementById("js-offset").offsetTop,
        navFiller = document.getElementById("navFiller");

    function checkScroll(ev) {
        if (window.pageYOffset > jsOffsetY && jsOffset.className === "") {
            jsOffset.className = "follow";
            navFiller.style.display = "block";
        } else if (window.pageYOffset < jsOffsetY && navFiller.style.display === "block") {
            jsOffset.className = "";
            navFiller.style.display = "none";
        }
    }
    window.onscroll = checkScroll;

}());
*/

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
navbar.classList.add("sticky");