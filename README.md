# services.common

Services Angular partagés entre plusieurs applications Ionic / Capacitor.

## Installation

Cloner dans le dossier `src/app/services/services.common` du projet cible :

```bash
git clone https://github.com/Revan027/services.common.git src/app/services/services.common
```

## Configuration AppModule

Tous les prérequis à déclarer dans l'`AppModule` :

```typescript
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { ErrorService } from './services/services.common/error.service';

@NgModule({
  imports: [
    IonicModule.forRoot(), // requis par ToastService et ConfirmationService
    ...
  ],
  providers: [
    provideHttpClient(),          // requis par HttpService
    CurrencyPipe,                 // requis par AmountService
    { provide: ErrorHandler, useClass: ErrorService }, // requis par ErrorService
    ...
  ]
})
export class AppModule {}
```

---

## Services

### HttpService

Wrapper autour de `HttpClient` pour les appels GET vers des APIs externes.

**Utilisation :**
```typescript
constructor(private httpService: HttpService) {}

// Observable
this.httpService.get<MyType>(url).subscribe({ next: (data) => ... });

// Promise
const data = await firstValueFrom(this.httpService.get<MyType>(url));
```

---

### ToastService

Affiche une notification Ionic en haut de l'écran pendant 4 secondes.

**Utilisation :**
```typescript
constructor(private toastService: ToastService) {}

await this.toastService.get(MessageEnum.AppSuccess, StatusEnum.Success);
await this.toastService.get(MessageEnum.AppError, StatusEnum.Danger);
```

---

### ConfirmationService

Affiche une modale de confirmation Ionic (ex : avant une suppression).

**Utilisation :**
```typescript
constructor(private confirmationService: ConfirmationService) {}

await this.confirmationService.getModalDelete(async () => {
  await this.myService.delete(id);
});
```

Le callback est exécuté uniquement si l'utilisateur clique sur **Confirmer**.

---

### ErrorService

Handler global Angular qui intercepte toutes les erreurs non catchées.

- Sur mobile (Capacitor) : affiche le message via `ToastService`
- Sur web : log dans la console
- Ignore les erreurs liées à la fermeture de la caméra

---

### AmountService

Formate un champ montant dans un `FormGroup` au format `1.234,56` (EUR).

**Utilisation :**
```typescript
constructor(private amountService: AmountService) {}

// À brancher sur l'event (input) du champ
onAmountInput(value: string) {
  this.amountService.formatAmountInput('amount', value, this.formGroup);
}
```

---

## Enums

### MessageEnum

```typescript
MessageEnum.AppSuccess  // "L'opération a été effectuée avec succès"
MessageEnum.AppError    // "Une erreur est survenue dans l'application"
```

### StatusEnum

```typescript
StatusEnum.Success  // "success"  → toast vert
StatusEnum.Danger   // "danger"   → toast rouge
```
