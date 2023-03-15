import { Injectable } from '@angular/core';
import { movers } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class PackerService {

  constructor() { }
  getData(){
    return movers
  }
}
