import { Serie } from "./claseSerie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
renderSeriesInTable(series);
mostrarCard();

function renderSeriesInTable(series: Serie[]): void{
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                                <td><a id = "${s.id}" href = "javascript:void(0);" onclick = "mostrarCard(x)" >${s.name}</a></td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Seasons avarage: ${getAvgSeasons(series)}</td>`;
    seriesTbody.appendChild(trElement);
}

function getAvgSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    return Math.round(totalSeasons/series.length);
}

const detailDiv: HTMLElement = document.getElementById('detail')!;

function mostrarCard():void{
    series.forEach(s => {
        let idElem = document.getElementById(s.id.toString())
        if (idElem != null){
            idElem.onclick = (event) => {
                renderDetail(s);
            }
        }
    });
}


function renderDetail(laSerie: Serie): void{
    let cardElement = document.createElement("div");
    cardElement.innerHTML = `<div class = "card" style = "width: 24rem;">
                            <img class = "card-img-top" src ="${laSerie.img}"alt="Card image cap">
                            <div class = "card-body">
                            <h5 class = "card-tittle">${laSerie.name}</h5>
                            <p class = "card-text">${laSerie.info}</p>
                            <a href="${laSerie.link}">${laSerie.link}</a>
                            </div></div>`;
    detailDiv.appendChild(cardElement);
    detailDiv.replaceChild(cardElement, detailDiv.childNodes[0])
}

