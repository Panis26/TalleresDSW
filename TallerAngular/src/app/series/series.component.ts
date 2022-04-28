import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  avg: number = 0;
  getSeries(){
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;
      this.getAvgSeasons(series);
    });
  }
  getAvgSeasons(series: Serie[]): void {
    let totalSeasons: number = 0;
    series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
    this.avg = Math.round(totalSeasons/series.length);
  }
  ngOnInit() {
    this.getSeries();
  }

}

