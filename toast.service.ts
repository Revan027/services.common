import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StatusEnum } from './enum/status.enum';

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    constructor(private toastController: ToastController) {}

    async get(message: string, status: StatusEnum) {
        const toast = await this.toastController.create({
            message: message,
            duration: 4000,
            position: 'top',
            color: status,
        });

        await toast.present();
    }
}
