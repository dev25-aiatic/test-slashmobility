import { OnInit, Component } from '@angular/core';
import { LocationServiceService } from 'src/app/services/location-service/location-service.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.scss' ]
})
export class MapComponent implements OnInit {
	latitude = 0;
	longitude = 0;
  mapType = 'roadmap';
  zoom = 17;

	constructor(private locationService: LocationServiceService) {}

	ngOnInit() {
		
  }
  
  getMyLocation(){
    this.locationService.getPosition().then((pos) => {
			this.latitude = pos.lat;
			this.longitude = pos.lng;
		});
  }
}
