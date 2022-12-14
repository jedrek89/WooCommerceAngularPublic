import { Component } from '@angular/core';
import { GetDataService } from './services/get-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'WooCommerceAngular';
  dataFromAPI: any[] = [];
  items: any[] = ["item1", "item2"];
  orderListStatus: any [] = [];
  itemList : any [] = [];
  constructor(private GetDataService:GetDataService){
}

// get data on init
  ngOnInit(): void {
    this.GetDataService.getData().subscribe((data:any) => {
    this.dataFromAPI = data;
    this.orderListStatus.length = this.dataFromAPI.length;
    this.orderListStatus.fill(0);
  })

  }

  showItem(data:any){
    (this.orderListStatus[data] === 1) ? this.orderListStatus[data] = 0 : this.orderListStatus[data] = 1;
  }


}
