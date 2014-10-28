window.onload = function() {
	var tables = getAllTables();
	makeAllTablesSortable(tables);
}

function getAllTables() {
	return document.getElementsByTagName("table");
}

var sort_way1 = 1, sort_way2 = 1, sort_way3 = 1;

function makeAllTablesSortable(tables) {
	tables[0].rows[0].cells[0].onclick = function() {
		changeStyle(tables[0].rows[0].cells[0], sort_way1);
		mySort(tables[0].childNodes[3], 0, sort_way1);
		sort_way1 *= -1;
	}
	tables[0].rows[0].cells[1].onclick = function() {
		changeStyle(tables[0].rows[0].cells[1], sort_way2);
		mySort(tables[0].childNodes[3], 1, sort_way2);
		sort_way2 *= -1;
	}
	tables[0].rows[0].cells[2].onclick = function() {
		changeStyle(tables[0].rows[0].cells[2], sort_way3);
		mySort(tables[0].childNodes[3], 2, sort_way3);
		sort_way3 *= -1;
	}
	tables[1].rows[0].cells[0].onclick = function() {
		changeStyle(tables[1].rows[0].cells[0], sort_way1);
		mySort(tables[1].childNodes[3], 0, sort_way1);
		sort_way1 *= -1;
	}
	tables[1].rows[0].cells[1].onclick = function() {
		changeStyle(tables[1].rows[0].cells[1], sort_way2);
		mySort(tables[1].childNodes[3], 1, sort_way2);
		sort_way2 *= -1;
	}
	tables[1].rows[0].cells[2].onclick = function() {
		changeStyle(tables[1].rows[0].cells[2], sort_way3);
		mySort(tables[1].childNodes[3], 2, sort_way3);
		sort_way3 *= -1;
	}
}

function mySort(tbody, col, sort_way) {

	var i, j, new_table = new Array();

	for (i = 0; i < tbody.rows.length; i++) {
		new_table[i] = new Array();
		for (j = 0; j < tbody.rows[i].cells.length; j++) {
			new_table[i][j] = tbody.rows[i].cells[j].innerHTML;
		}
	}

	new_table.sort(function (a, b) {
		return (a[col] == b[col]) ? 0 : ((a[col] > b[col]) ? sort_way : -1 * sort_way);
	});

	for (i = 0; i < tbody.rows.length; i++) {
		tbody.rows[i].innerHTML = "<td>" + new_table[i].join("</td><td>") + "</td>";
	}
}

function changeStyle(th, sort_way) {
	var x = th.parentNode.cells, i;

	for (i = 0; i < x.length; i++) {
		if (x[i] != th) {
			x[i].style.backgroundColor = "#00008B";
			x[i].style.backgroundImage = "";
			x[i].style.border = "1px solid gray";
		}
	}

	th.style.backgroundColor = "#C2C2E3";
	if (sort_way == 1) {
		th.style.backgroundImage = "url('ascend.png')";
	} else {
		th.style.backgroundImage = "url('descend.png')";
	}
	
	th.style.backgroundRepeat = "no-repeat";
	th.style.backgroundPosition = "right";
	th.style.borderColor = "#C2C2E3";
}