import { Injectable } from "@angular/core";
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toastController: ToastController) { }

  public createToast(message: string) {
    this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    }).present();
  }
}
