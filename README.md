# services.common

Services Angular partagés entre plusieurs applications Ionic / Capacitor.

## Installation

Cloner dans le dossier `src/app/services/common` du projet cible :

```bash
git clone https://github.com/Revan027/services.common.git src/app/services/common
```

## Services disponibles

| Service | Description |
|---|---|
| `StorageService` | Gestion de la base de données SQLite (Capacitor) |
| `FileService` | CRUD fichiers et répertoires (Capacitor Filesystem) |
| `MediaService` | Accès caméra et galerie photos (Capacitor Camera) |
| `HttpService` | Wrapper HttpClient pour les appels API externes |
| `ToastService` | Notifications visuelles |
| `ConfirmationService` | Dialogues de confirmation (ex: suppression) |
| `AmountService` | Formatage des montants avec debounce |
| `ErrorService` | Global error handler Angular |

## Enums

| Enum | Description |
|---|---|
| `MessageEnum` | Messages standards de l'application |
| `StatusEnum` | Statuts (Success, Danger, etc.) |

## Prérequis

Les projets utilisant ces services doivent avoir les dépendances suivantes installées :

```bash
npm install @capacitor/core @capacitor/filesystem @capacitor/camera
npm install @capacitor-community/sqlite
```
