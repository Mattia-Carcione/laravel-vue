const mix = require('laravel-mix');

mix.setPublicPath('laravel/vue-client/public');

mix.copy('storage/app/public', 'laravel/vue-client/public')
   .vue();

mix.copy('resources/images', 'public/images') // Copia le immagini
   .sass('resources/sass/app.scss', 'public/css'); // Compila i file Sass in CSS

if (mix.inProduction()) {
   mix.version();
}