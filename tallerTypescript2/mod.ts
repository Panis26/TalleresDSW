import { Serie } from "./claseSerie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
renderSeriesInTable(series);
function renderSeriesInTable(series: Serie[]): void{
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${s.id}</td>
                                <td>${s.name}</td>
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