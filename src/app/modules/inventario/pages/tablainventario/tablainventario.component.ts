import { Component,Inject } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-tablainventario',
  templateUrl: './tablainventario.component.html',
  styleUrls: ['./tablainventario.component.css']
})
export class TablainventarioComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
