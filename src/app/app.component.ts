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
    this.orderListStatus.fill("hideItem");
    console.log("this.orderListStatus", this.orderListStatus);
  })

  }

  showItem(data:any){
    console.log("showItem show element", data);
  }


}
