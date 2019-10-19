/** layuiAdmin.pro-v1.2.1 LPPL License By http://www.layui.com/admin/ */
 ;!function(){var e,t=$G("J_title"),o=$G("J_titleCol"),n=$G("J_caption"),a=$G("J_sorttable"),i=$G("J_autoSizeContent"),r=$G("J_autoSizePage"),l=$G("J_tone"),d=$G("J_preview"),c=function(){e=this,e.init()};c.prototype={init:function(){var d=new UE.ui.ColorPicker({editor:editor}),c=new UE.ui.Popup({editor:editor,content:d});t.checked=editor.queryCommandState("inserttitle")==-1,o.checked=editor.queryCommandState("inserttitlecol")==-1,n.checked=editor.queryCommandState("insertcaption")==-1,a.checked=1==editor.queryCommandState("enablesort");var m=editor.queryCommandState("enablesort"),s=editor.queryCommandState("disablesort");a.checked=!!(m<0&&s>=0),a.disabled=!!(m<0&&s<0),a.title=m<0&&s<0?lang.errorMsg:"",e.createTable(t.checked,o.checked,n.checked),e.setAutoSize(),e.setColor(e.getColor()),domUtils.on(t,"click",e.titleHanler),domUtils.on(o,"click",e.titleColHanler),domUtils.on(n,"click",e.captionHanler),domUtils.on(a,"click",e.sorttableHanler),domUtils.on(i,"click",e.autoSizeContentHanler),domUtils.on(r,"click",e.autoSizePageHanler),domUtils.on(l,"click",function(){c.showAnchor(l)}),domUtils.on(document,"mousedown",function(){c.hide()}),d.addListener("pickcolor",function(){e.setColor(arguments[1]),c.hide()}),d.addListener("picknocolor",function(){e.setColor(""),c.hide()})},createTable:function(e,t,o){var n=[];if(n.push("<table id='J_example'>"),o&&n.push("<caption>"+lang.captionName+"</caption>"),e){n.push("<tr>"),t&&n.push("<th>"+lang.titleName+"</th>");for(var a=0;a<5;a++)n.push("<th>"+lang.titleName+"</th>");n.push("</tr>")}for(var i=0;i<6;i++){n.push("<tr>"),t&&n.push("<th>"+lang.titleName+"</th>");for(var r=0;r<5;r++)n.push("<td>"+lang.cellsName+"</td>");n.push("</tr>")}n.push("</table>"),d.innerHTML=n.join(""),this.updateSortSpan()},titleHanler:function(){var o=$G("J_example"),n=document.createDocumentFragment(),a=domUtils.getComputedStyle(domUtils.getElementsByTagName(o,"td")[0],"border-color"),i=o.rows[0].children.length;if(t.checked){o.insertRow(0);for(var r,l=0;l<i;l++)r=document.createElement("th"),r.innerHTML=lang.titleName,n.appendChild(r);o.rows[0].appendChild(n)}else domUtils.remove(o.rows[0]);e.setColor(a),e.updateSortSpan()},titleColHanler:function(){var t=$G("J_example"),n=domUtils.getComputedStyle(domUtils.getElementsByTagName(t,"td")[0],"border-color"),a=t.rows,i=a.length;if(o.checked)for(var r,l=0;l<i;l++)r=document.createElement("th"),r.innerHTML=lang.titleName,a[l].insertBefore(r,a[l].children[0]);else for(var l=0;l<i;l++)domUtils.remove(a[l].children[0]);e.setColor(n),e.updateSortSpan()},captionHanler:function(){var e=$G("J_example");if(n.checked){var t=document.createElement("caption");t.innerHTML=lang.captionName,e.insertBefore(t,e.firstChild)}else domUtils.remove(domUtils.getElementsByTagName(e,"caption")[0])},sorttableHanler:function(){e.updateSortSpan()},autoSizeContentHanler:function(){var e=$G("J_example");e.removeAttribute("width")},autoSizePageHanler:function(){var e=$G("J_example"),t=e.getElementsByTagName(e,"td");utils.each(t,function(e){e.removeAttribute("width")}),e.setAttribute("width","100%")},updateSortSpan:function(){var e=$G("J_example"),t=e.rows[0],o=domUtils.getElementsByTagName(e,"span");utils.each(o,function(e){e.parentNode.removeChild(e)}),a.checked&&utils.each(t.cells,function(e,t){var o=document.createElement("span");o.innerHTML="^",e.appendChild(o)})},getColor:function(){var e,t=editor.selection.getStart(),o=domUtils.findParentByTagName(t,["td","th","caption"],!0);return e=o&&domUtils.getComputedStyle(o,"border-color"),e||(e="#DDDDDD"),e},setColor:function(e){var t=$G("J_example"),o=domUtils.getElementsByTagName(t,"td").concat(domUtils.getElementsByTagName(t,"th"),domUtils.getElementsByTagName(t,"caption"));l.value=e,utils.each(o,function(t){t.style.borderColor=e})},setAutoSize:function(){var e=this;r.checked=!0,e.autoSizePageHanler()}},new c,dialog.onok=function(){editor.__hasEnterExecCommand=!0;var e={title:"inserttitle deletetitle",titleCol:"inserttitlecol deletetitlecol",caption:"insertcaption deletecaption",sorttable:"enablesort disablesort"};editor.fireEvent("saveScene");for(var t in e){var o=e[t].split(" "),n=$G("J_"+t);n.checked?editor.queryCommandState(o[0])!=-1&&editor.execCommand(o[0]):editor.queryCommandState(o[1])!=-1&&editor.execCommand(o[1])}editor.execCommand("edittable",l.value),i.checked?editor.execCommand("adaptbytext"):"",r.checked?editor.execCommand("adaptbywindow"):"",editor.fireEvent("saveScene"),editor.__hasEnterExecCommand=!1}}();