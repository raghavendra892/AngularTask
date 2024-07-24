import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit{
  @Input() data!: number;
  serviceData!:string;
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    //this.serviceData = this.dataService.getData();
  }
   detectChange(){
    console.log('detecting changes');
  }
}
