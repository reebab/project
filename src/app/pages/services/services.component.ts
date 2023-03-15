import { Component } from '@angular/core';
import { PackerService } from 'src/app/packer.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  constructor(private movers:PackerService,private Router:Router){}
  packers=this.movers.getData()

  gotoHere(id:any){
    localStorage.setItem('id',id)
    this.Router.navigate(['/single'])
  }
  
}

  
   