$(function(){function n(){function n(){$.getJSON("js/"+o+".json",function(n){e=n})}var t=$("select#region"),o="usa";n(),t.on("change",function(){$("select option:selected").each(function(){o=$(this).val()}),n()})}function t(){for(var n=$(".fiveLetterInput").val().toUpperCase(),t=0;t<e.length;t++){var o=e[t].Address,c=e[t].City,a=e[t].State;if(n==e[t].code)var i=o+", "+c+", "+a}var r=$("#dest");r.val(i)}var e,o=$("#searchStore");n(),o.on("click",function(){t()})});