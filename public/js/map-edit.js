!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}({2:function(e,t,n){e.exports=n("Dbiy")},Dbiy:function(e,t){var n=L.map("map").setView([10.6079209,105.1175397],11),o=document.getElementById("close-btn"),a=document.getElementById("panel"),i=document.getElementById("panel-update"),r=document.getElementById("show-btn"),s=document.getElementById("accept-new-info"),c=document.getElementById("panel-title"),d=document.getElementById("layer-content"),l=document.getElementById("info-content"),m=document.getElementById("input-name"),p=document.getElementById("input-info"),u=document.getElementById("img-slider"),g=document.getElementById("close-update-btn"),h="http://35.240.232.121/",y=0,f=0,b="http://35.240.232.121:8080/geoserver/angiang/wms",v="http://35.240.232.121/storage/uploadedimages/",S=[],w=[];function E(){a.style.right="10px",r.classList.add("hidden")}function x(e,t){t.on("click",(function(t){console.log(e.properties);var n=e.properties.Id;c.innerHTML="Thông tin điểm khảo sát",d.classList.add("hidden"),l.classList.remove("hidden"),u.innerHTML="",m.value=e.properties.Name,p.value=e.properties.Info;var o=JSON.parse(e.properties.Photos).img,a=JSON.parse(e.properties.Photos).imgmc;console.log(o),console.log(a);for(var i=0;i<o.length;i++)0==i&&k(n,!0,"img",o[i]),k(n,!1,"img",o[i]);for(var r=0;r<a.length;r++)k(n,!1,"imgmc",o[r])}))}function k(e,t,n,o){var a=document.createElement("div");a.className=1==t?"carousel-item active":"carousel-item";var i=document.createElement("img");i.className="d-block w-100",i.src=v+e+"/"+n+"/"+o,a.appendChild(i),u.appendChild(a)}w=L.layerGroup(),o.addEventListener("click",function(){a.style.right="-450px",r.classList.remove("hidden")}.bind(this)),g.addEventListener("click",function(){i.style.right="-450px"}.bind(this)),r.addEventListener("click",E.bind(this)),s.addEventListener("click",function(){var e=new FormData,t=document.getElementById("input-name"),n=document.getElementById("input-info"),o=document.getElementById("input-images"),a=document.getElementById("input-images-mc"),i=f+" "+y;console.log(i);var r=h+"api/insert-data-point";e.set("name",t.value),e.set("info",n.value),e.set("xy",i);for(var s=0;s<o.files.length;s++)e.append("photos[]",o.files[s]);for(var c=0;c<a.files.length;c++)e.append("photomc[]",a.files[c]);axios({method:"post",url:r,data:e,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){alert("Cập nhật điểm thành công"),console.log(e)})).catch((function(e){console.log(e)}))}.bind(this)),axios({method:"get",url:h+"/api/get-all-imgpoint"}).then((function(e){var t=e.data;S=[];for(var o=0;o<t.length;o++)console.log(t[o]),S.push({type:"Feature",geometry:{type:JSON.parse(t[o].st_asgeojson).type,coordinates:JSON.parse(t[o].st_asgeojson).coordinates},properties:{Name:t[o].name,Info:t[o].info,Id:t[o].gid,Photos:t[o].photos}});for(o=0;o<S.length;o++){var a=L.geoJson(S[o],{onEachFeature:x.bind(this)});w.addLayer(a)}w.addTo(n)})),n.on("click",(function(e){E(),i.style.right="10px";new L.marker(e.latlng).addTo(n);y=e.latlng.lat,f=e.latlng.lng})),L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",{maxZoom:18,attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox.streets"}).addTo(n);var I=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:dangsau_2009_line",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),T=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:diemdosau_2019_point",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),_=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:diemdosau_2009_point",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),B=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:satlo_mohinhthuyluc_line",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),F=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:satlo_truottongthe_line",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),P=L.tileLayer.wms(b,{Format:"image/png",Layers:"angiang:satloduongbo_gis_line",Version:"1.1.1",Transparent:!0,SRS:"EPSG:900913",maxZoom:21}),N={minZoom:10,maxZoom:16,opacity:1,attribution:'Rendered with <a href="http://www.maptiler.com/">MapTiler Desktop</a>',tms:!1},O=L.tileLayer("bandobosungvadieuchinh/{z}/{x}/{y}.png",N),j=L.tileLayer("bandophantich/{z}/{x}/{y}.png",N),C=L.tileLayer("bandotheoketqua/{z}/{x}/{y}.png",N);function G(e,t,n){1==n?(n=$(this).is(":checked"),t.addLayer(e)):(n=$(this).is(":checked"),t.removeLayer(e))}$("#rungngapman").on("change",(function(){G(w,n,this.checked)})),$("#bandobosung").on("change",(function(){G(O,n,this.checked)})),$("#bandoketqua").on("change",(function(){G(C,n,this.checked)})),$("#bandophantich").on("change",(function(){G(j,n,this.checked)})),$("#2009line").on("change",(function(){G(I,n,this.checked)})),$("#diemdosau2019").on("change",(function(){G(T,n,this.checked)})),$("#satlomohinhthuyluch").on("change",(function(){G(B,n,this.checked)})),$("#diemdosau").on("change",(function(){G(_,n,this.checked)})),$("#satlotruottongthe").on("change",(function(){G(F,n,this.checked)})),$("#satloduongbo").on("change",(function(){G(P,n,this.checked)})),n.addControl(new L.Control.Fullscreen),L.control.ruler().addTo(n),L.control.locate().addTo(n),n.pm.addControls({position:"topleft",drawCircle:!1});var M=L.esri.Geocoding.geosearch().addTo(n),Z=L.layerGroup().addTo(n);M.on("results",(function(e){Z.clearLayers();for(var t=e.results.length-1;t>=0;t--)Z.addLayer(L.marker(e.results[t].latlng))}));var J=L.control.elevation();J.addTo(n);L.geoJson({name:"NewFeatureType",type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:[[105.13693,10.696476,296],[105.134602,10.69764,295],[105.129983,10.701164,299],[105.131292,10.702382,303],[105.13376,10.704533,315],[105.135568,10.705574,336],[105.136179,10.70934,338],[105.137011,10.714066,344],[105.136984,10.719489,342],[105.136898,10.725235,350],[105.136801,10.730143,353],[105.135632,10.734853,354],[105.131882,10.738989,363],[105.129688,10.744241,363],[105.123937,10.746982,361],[105.118509,10.750286,371],[105.112763,10.753113,374],[105.107807,10.755356,378],[105.103467,10.758086,386],[105.098902,10.760956,388],[105.096429,10.764642,397],[105.094197,10.768246,401],[105.091955,10.773037,402],[105.089251,10.777194,408],[105.086215,10.780939,410],[105.083227,10.785498,412],[105.079778,10.788926,423],[105.076913,10.7923,429],[105.074059,10.795938,429],[105.071495,10.800213,435],[105.069505,10.804263,442],[105.067574,10.809322,436],[105.065508,10.812728,450],[105.063277,10.817299,451],[105.062,10.822073,447],[105.06023,10.826622,464],[105.058905,10.831729,459],[105.05553,10.835645,460],[105.051888,10.83933,467],[105.048626,10.842817,476],[105.045467,10.846106,480],[105.042028,10.849287,485],[105.037672,10.851776,493],[105.033477,10.854367,495],[105.029974,10.856373,502],[105.027324,10.857559,514],[105.023832,10.859275,518],[105.020587,10.861743,524],[105.017615,10.864414,526],[105.015748,10.868888,520],[105.013119,10.872059,529],[105.009879,10.874521,536],[105.00798,10.87598,553],[105.005073,10.878158,556],[105.00452,10.878609,557],[105.004488,10.878619,554],[105.004477,10.878619,553],[105.004483,10.878619,552],[105.004477,10.878619,551],[105.004477,10.878619,550],[105.004477,10.878619,551],[105.004483,10.878614,551],[105.004488,10.878614,551],[105.004488,10.878614,552],[105.004558,10.878598,556],[105.004011,10.880808,556],[105.002584,10.884032,570],[105.001033,10.886172,583]]},properties:null}]},{onEachFeature:J.addData.bind(J)}).addTo(n)}});