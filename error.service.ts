import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageEnum } from './enum/MessageEnum';
import { Capacitor } from '@capacitor/core';
import { ToastService } from './toast.service';
import { StatusEnum } from './enum/status.enum';

@Injectable({
    providedIn: 'root',
})
export class ErrorService implements ErrorHandler {
    constructor(private toastService: ToastService) {}

    async handleError(error: any) {
        let message = '';
    
        if (error instanceof HttpErrorResponse) {
            //erreur http
        } 
        else {
            // On ne prend une erreur venant de la fermeture de la caméra
            if(error?.message?.includes('cancel') && error?.message?.includes('photos app')) return;

            message = error.message!
                ? `${MessageEnum.AppError} : ${error.message!}`
                : error;
        }

        if (Capacitor.isNativePlatform()) {
            await this.toastService.get(message, StatusEnum.Danger);
        }
        else{
            console.error(message);
        }
    }
}
