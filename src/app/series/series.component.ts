import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];
  aveg: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;
      this.getAverageSeasons(this.series);
    }); 
  }

  getAverageSeasons(series: Serie[]){
    let totalSeasons = 0;
    series.forEach(serie => {
      totalSeasons += serie.seasons;
    });
    this.aveg = totalSeasons / this.series.length;
  }
  

  ngOnInit() {
    this.getSeries();
  }

}

