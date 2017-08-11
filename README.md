# Keepalive-web
Front end for [keepalive-service](https://github.com/gangstead/keepalive-service)

## Current state
- [x] Retrieves a list of buttons from the back end and puts them in a table
- [ ] Add/remove buttons
- [ ] Authentication

## Running with backend service
The proxy is expecting [keepalive-service](https://github.com/gangstead/keepalive-service) running the API locally
- In one console tab start the service with `npm run dcr start`
- In another console tab start the front end (this project), with `npm run start`

## Useful commands
- `npm install` - first time setup after cloning this repo. Easy to forget
- `npm run ng serve` - dev server at `http://localhost:4200/`. The app will automatically reload if you change any of the source files
- `npm run ng build` - build project and put artifacts in `dist/`.  Use `--prod` for production build
- `npm run ng test` - unit tests
- `npm run ng e2e` to execute the end-to-end tests. Before running the tests make sure you are serving the app via `ng serve` in another console

## Angular CLI
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.
