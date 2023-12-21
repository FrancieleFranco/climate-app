import { Component, OnDestroy, OnInit } from '@angular/core';
import { ClimateService } from '../../services/climate.service';
import { ClimateDatas } from 'src/app/models/interfaces/climateIDatas';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-climate-home',
  templateUrl: './climate-home.component.html',
  styleUrls: [],
})
export class ClimateHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'Butia';
  climateDatas!: ClimateDatas;
  searcIcon = faMagnifyingGlass;

  constructor(private climateService: ClimateService) {}

  ngOnInit(): void {
    this.getClimateDate(this.initialCityName);
  }

  getClimateDate(cityName: string): void {
    this.climateService
      .getClimateDate(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.climateDatas = response);
          console.log(this.climateDatas);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getClimateDate(this.initialCityName);
    this.initialCityName = '';
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
