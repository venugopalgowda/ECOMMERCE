import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSucess(message: string): void {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'success-snackbar'

    });

  }

  showError(message: string) : void {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: 'error-snackbar'
    });
  }
}
