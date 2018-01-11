import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from "primeng/components/common/confirmationservice";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(private confirmationService: ConfirmationService) { }

  confirm() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        console.log('Clicked on accepted');
      },
      reject: () => {
        console.log('Clicked on reject');
      }
    });
  }

  ngOnInit() {
  }

}
