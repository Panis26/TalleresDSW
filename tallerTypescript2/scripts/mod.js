import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
mostrarCard();
function renderSeriesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                                <td><a id = \"").concat(s.id, "\" href = \"javascript:void(0);\" onclick = \"mostrarCard(x)\" >").concat(s.name, "</a></td>\n                                <td>").concat(s.channel, "</td>\n                                <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Seasons avarage: ".concat(getAvgSeasons(series), "</td>");
    seriesTbody.appendChild(trElement);
}
function getAvgSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return Math.round(totalSeasons / series.length);
}
var detailDiv = document.getElementById('detail');
function mostrarCard() {
    series.forEach(function (s) {
        var idElem = document.getElementById(s.id.toString());
        if (idElem != null) {
            idElem.onclick = function (event) {
                renderDetail(s);
            };
        }
    });
}
function renderDetail(laSerie) {
    var cardElement = document.createElement("div");
    cardElement.innerHTML = "<div class = \"card\" style = \"width: 25rem;\">\n                            <img class = \"card-img-top\" src =\"".concat(laSerie.img, "\"alt=\"Card image cap\">\n                            <div class = \"card-body\">\n                            <h5 class = \"card-tittle\">").concat(laSerie.name, "</h5>\n                            <p class = \"card-text\">").concat(laSerie.info, "</p>\n                            <a href=\"").concat(laSerie.link, "\">").concat(laSerie.link, "</a>\n                            </div></div>");
    detailDiv.appendChild(cardElement);
    detailDiv.replaceChild(cardElement, detailDiv.childNodes[0]);
}
