import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  dataImg: string =
    'https://s3.amazonaws.com/angularminds.com/blog/media/data%20binding%20in%20angular-20241007123249034.png';
  userEnteredValue: string = '';
  displayedValue: string = '';

  displayVal() {
    this.displayedValue = this.userEnteredValue;
  }
}
