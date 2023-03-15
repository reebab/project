import { Component } from '@angular/core';
import { PackerService } from 'src/app/packer.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
single:any
constructor(private movers:PackerService){}
ngOnInit():void{
  let id:any=localStorage.getItem('id')
  let dataset=this.movers.getData()
  this.single=dataset.filter(e=>e.title==id)
  console.log(this.single)
}
}
