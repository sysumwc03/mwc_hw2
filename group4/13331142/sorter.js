window.onload = function() {
    var todo = document.getElementById('todo');
    todo.rows[0].cells[0].addEventListener('click',SortByWhat);
    todo.rows[0].cells[1].addEventListener('click',SortByWhen);
    todo.rows[0].cells[2].addEventListener('click',SortByLocation);
    var staff = document.getElementById('staff');
    staff.rows[0].cells[0].addEventListener('click',SortByFName);
    staff.rows[0].cells[1].addEventListener('click',SortByLName);
    staff.rows[0].cells[2].addEventListener('click',SortByLcheckin);
}

function SortByWhat(event) {
    sortTable("todo", 0);
    titleBackground("todo", 0);
}

function SortByWhen(event) {
    sortTable("todo", 1);
    titleBackground("todo", 1);
}

function SortByLocation(event) {
    sortTable("todo", 2);
    titleBackground("todo", 2);
}

function SortByFName(event) {
    sortTable("staff", 0);
    titleBackground("staff", 0);
}

function SortByLName(event) {
    sortTable("staff", 1);
    titleBackground("staff", 1);
}

function SortByLcheckin(event) {
    sortTable("staff", 2);
    titleBackground("staff", 2);
}

function sortTable(tableId, Icol) {
    var table = document.getElementById(tableId);
    var tbody = table.tBodies[0];
    var tr = tbody.rows;

    var trValue = new Array();
    for (var i=0; i<tr.length; i++ ) {
        trValue[i] = tr[i];
    }

    if (tbody.sortCol == Icol) {
        trValue.reverse();
    } else {
        trValue.sort(function(tr1, tr2) {
            var value1 = tr1.cells[Icol].innerHTML;
            var value2 = tr2.cells[Icol].innerHTML;
            return value1.localeCompare(value2);
        });
    }  
    var fragment = document.createDocumentFragment();
    for (var i=0; i<trValue.length; i++ ) {
        fragment.appendChild(trValue[i]);
        if (i%2 == 1) {
            trValue[i].className = "alternate";
        } else {
            trValue[i].className = "";
        }
    }
    tbody.appendChild(fragment);
    tbody.sortCol = Icol;
}

function titleBackground(tableId, Icol) {
    var table = document.getElementById(tableId);
    var AltTable
    if (tableId == "todo")
        AltTable = document.getElementById("staff");
    else
        AltTable = document.getElementById("todo");
    for (var i = 0; i < 3; i++) {
        AltTable.rows[0].cells[i].id = "";
        if (i != Icol)
            table.rows[0].cells[i].id = "";
    }
    if (table.rows[0].cells[Icol].id == "upSort") {
        table.rows[0].cells[Icol].id = "downSort";
    } else {
        table.rows[0].cells[Icol].id = "upSort";
    }
}