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
  
  constructor(private GetDataService:GetDataService){
}

// get data on init
  ngOnInit(): void {
    console.log("App works!!");
    console.log("items", this.items)
    // set lenght order list status array
    this.orderListStatus.length = this.items.length;
    // set to "0" order list status array
    this.orderListStatus.fill(0);
    console.log("this.orderListStatus", this.orderListStatus);
    this.GetDataService.getData().subscribe((data:any) => {
    this.dataFromAPI = data;
    console.log("this.dataFromAPI", this.dataFromAPI);
  })

  }


  showItem(data:any){
    console.log("showItem show element", data);
    (this.orderListStatus[data] == 0) ? this.orderListStatus[data] = 1 : this.orderListStatus[data] = 0;
  }

}

function function1(){
  console.log("function run");
}
