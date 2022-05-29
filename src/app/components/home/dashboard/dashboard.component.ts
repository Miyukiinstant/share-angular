import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ItemDataService } from 'src/app/services/get/item-data.service';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private getItem:ItemDataService, private _snackBar: MatSnackBar , private clipboard: Clipboard) { }
  array:any

  copyToClipboard(text:string):void {
    if(this.clipboard.copy(text)){      
        this._snackBar.open("Copiato nei appunti ✅",undefined,
        { horizontalPosition:'center',
          verticalPosition:'bottom',
          duration:2000})      
    }
    
  }

  ngOnInit(): void {  
    this.getItem.getItem().subscribe(result=>{
      this.array = result
    })
  }

}
