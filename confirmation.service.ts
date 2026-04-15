import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationService {
    constructor(private alertController: AlertController) {}

    async getModalDelete(callback: Function){
        const alert = await this.alertController.create({
            header: 'Confirmation',
            message: 'Confirmer la suppression ?',
            buttons:[
                { 
                    text: 'Annuler', 
                    role: 'false',
                    handler: async () => {
                        await alert.dismiss()
                    },
                },
                {
                    text: 'Confirmer',
                    role: 'true',
                    handler: () => {
                        callback();
                    }
                }
            ],
        });

        await alert.present();   
    }
}
