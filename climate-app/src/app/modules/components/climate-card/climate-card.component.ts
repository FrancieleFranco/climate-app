import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { ClimateDatas } from 'src/app/models/interfaces/climateIDatas';

@Component({
  selector: 'app-climate-card',
  templateUrl: './climate-card.component.html',
  styleUrls: [],
})
export class ClimateCardComponent {
  @Input() climateDatasInput!: ClimateDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
