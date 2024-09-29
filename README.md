# PlayVideo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
## PASOS PARA GITHUB PAGE

::::::::::::::: seguir los pasos de GitHub:::::::::::::::::::
```code

  PS C:> git add README.md
  PS C:> git commit -m "first commit play video"
  PS C:> git branch -M main
  PS C:> git remote add origin https://github.com/Artur2000LP/PlayVideo.git
  PS C:> git push -u origin main
```
::::::::::::::: para activar GitHub Pages :::::::::::::::::::
``` code
PS C:> git add .
PS C:> git commit -m "first commit play video Actualizado"
PS C:> git push -u origin main   
PS C:> ng add angular-cli-ghpages
PS C:> ng deploy --base-href=https://Artur2000LP.github.io/PlayVideo/
```

📦 Building "playVideo"
```code
📦 Build target "playVideo:build:production"
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-HWNPT52J.js      | main          | 321.22 kB |                78.74 kB
polyfills-SCHOHYNV.js | polyfills     |  34.52 kB |                11.29 kB
styles-EPMVOGKS.css   | styles        |   1.73 kB |               485 bytes

                      | Initial total | 357.48 kB |                90.52 kB

Application bundle generation failed. [6.263 seconds]
```
X [ERROR] css-inline-fonts:https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap exceeded maximum budget. Budget 4.10 kB was not met by 10.52 kB with a total of 14.61 kB.

❌ An error occurred when trying to deploy:
Error while building the app.


________________ "angular.json"   para ese error tuve que aumentar ___________________
```code
"budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kB",
                  "maximumError": "1MB"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "30kB",  // aqui aunmente el tamaño
                  "maximumError": "50kB"  // aqui tambien aumente 
                }
              ],
```

:::  solución ChatGPT ::::::::::::
```code

____visualizamos 

PS C:> git init
PS C:> git remote -v 
____visualizamos 
origin  https://github.com/Artur2000LP/PlayVideo.git (fetch)
origin  https://github.com/Artur2000LP/PlayVideo.git (push)
PS C:> git add .
PS C:> git commit -m "Preparando para el despliegue"
PS C:> git push origin main
PS C:> ng deploy --base-href=https://Artur2000LP.github.io/PlayVideo/ --repo=https://github.com/Artur2000LP/PlayVideo.git
```
📦 Building "playVideo"
```code
📦 Build target "playVideo:build:production"
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-HWNPT52J.js      | main          | 321.22 kB |                78.74 kB
polyfills-SCHOHYNV.js | polyfills     |  34.52 kB |                11.29 kB
styles-EPMVOGKS.css   | styles        |   1.73 kB |               485 bytes

                      | Initial total | 357.48 kB |                90.52 kB
```
🌟 Successfully published via angular-cli-ghpages! Have a nice day!  
//esto significa que logramos solucionar 
