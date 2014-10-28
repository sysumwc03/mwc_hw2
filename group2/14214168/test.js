/*********************************************************
 *Date:2014.10.27
 *Author:Panbin
 *********************************************************/
 //获取表格所有数据
 function getAllTables()
 {
  return document.getElementsByTagName('table');
}

 //设置点击事件的处理
 window.onload = function ()
 {
  var tables = getAllTables();
  makeAllTablesSortable(tables);
  getData(tables)
}

//表格排序
function makeAllTablesSortable(tables)
{
    var sortType = 'asc';         //排序类型-升序(asc)，降序(desc)

    if(sortType==" ")
      sortType='asc';
    else if(sortType=='asc')
      sortType='desc';
    else
      sortType='asc';
    var arr = getData(tables);
    console.log(arr.length);
  }

  function getData(tables){
      var data = [ ];         //用于存储表格数据
      var tableNum = tables.length;
      console.log("make_table_length = "+tables.length);
            for(var t = 0 ; t < tableNum ; t++)             //遍历每个表格
            {
        for (var r = 1 ; r < tables.item(t).rows.length ; r++)              //遍历表行
        {
          setBackground(r)
            for(var c = 0 ; c < tables.item(t).rows[r].cells.length ; c++)              //遍历表列
            {
              data.push(tables.item(t).rows[r].cells[c].innerHTML);
            }
          }
        }
        return data;
      }

      function setBackground(r){
        if(r%2 == 0 )
          tables.item(t).rows[r].style.backgroundColor = "lightgray";
        else
          tables.item(t).rows[r].style.backgroundColor = "white";
      }

      function sortArray(array,type,index){
        if(type=='asc')
          array.sort(function(x,y){return x[index]-y[index];});
        if(type=='desc')
          array.sort(function(x,y){return -(x[index]-y[index])});
      }

      function eventDeal(){
        var tHead = document.getElementById('th');
        tHead.addEventListener('cilck',function(e){console.log("clicked!");});
      }