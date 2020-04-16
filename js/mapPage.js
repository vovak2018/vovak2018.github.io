
let mapImageLink = mapDownloadLink.replace("https://drive.google.com/open?id=", "https://drive.google.com/uc?export=download&confirm=no_antivirus&id=");
document.write('<div class="articlename">' + mapName + '</div>');
document.write('<div class="container"> ');
document.write('<div class="Merits">');
document.write('<h2>Описание:</h2>');
document.write('<ul>');
document.write('<li>Тип местности: ' + mapLocalType + '</li>');
document.write('<li>Масштаб: 1:' + mapScale + '</li>');
document.write('<li>Дорожная сеть: ' + mapRoads + '</li>');
document.write('<li>Формы рельефа: ' + mapRelief + '</li>');
document.write('<li>год рисовки: ' + mapYearOfDrawing + '</li>');
document.write('</ul></div></div></div>');
document.write('<img src="' + mapImageLink + '" style="margin: auto" width = 90% id="mapPreviewImage">')
document.write('<a href="' + mapDownloadLink + '" download target="_blank">');
document.write('<div class="order">Скачать</div>');
document.write('</a><px10>');
mapPreviewImage.oncontextmenu = function (){return false};