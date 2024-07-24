import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  serviceData!: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   // this.serviceData = this.dataService.getData();
  }
 
  count = 0;
  updateData(){
    this.count++
  }
  parentData: string = 'Initial Parent Data';
  updateParentData() {
    this.parentData = 'Updated Parent Data';
  }
}
