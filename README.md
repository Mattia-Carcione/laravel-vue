<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# About Laravel Vue Project

see the documentation to know the project build:

### For Laravel Sanctum and Cors

https://laravel.com/docs/10.x/sanctum#spa-authentication

### For Laravel Fortify

https://laravel.com/docs/10.x/fortify#installation

## Install and Setup 

### Add in .env:

```sh
APP_URL=http://localhost:8000 // with your backend port
SANCTUM_STATEFUL_DOMAINS=localhost:8000 // backend port
SPA_URL=http://localhost:5173 // frontend port
SESSION_DOMAIN=localhost
```

### Create Migration

```sh
php artisan migrate:fresh
```

### Generate the key

```sh
php artisan key:generate
```

### start the server

```sh
php artisan serve
```

# vue-client


This template should help get you started developing with Vue 3 in Vite.

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

### change directory

```sh
cd vue-client/
```

### Install the dependiencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
