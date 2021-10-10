import { Component , ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopMe';
  flag : boolean = false;

  @ViewChild('sidebar')
  sidebar!: SidebarComponent;
  public open() {
    console.log("Sidebar Opened");
  }
  public close() {
      console.log("Sidebar Closed");
  }

  public toggle() : any{
    this.flag = !this.flag;
    console.log("menu icon clicked.. ");
  }
  closeClick() {
      this.sidebar.hide();
  }
}
