<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- @vite(['resources/css/app.css', 'resources/js/app.js']) --}}
    <title>Snaplist</title>
</head>
<body>
    <main>
        <section>
            <div id="header">
                <h1>Nuova candidatura per ruolo di <span>REVISORE</span></h1>
            </div>

            <div id="content">
                <h2>SnapList</h2>
                <hr>
                <div>
                    <p id="message">L'utente {{ $user->name }} ha inviato una richiesta per poter diventare revisore. <br> Clicca sul pulsante "Accetta" per accettare la richiesta e renderlo revisore. <br>
                    Una volta accettata, verrà inviata una mail a {{ $user->email }} di notifica.</p>
                    <p>Ecco i dati utente:</p>
                    <p><span>Nome:</span> {{ $user->name }} {{ $user->surname }}</p>
                    <p><span>Email:</span> {{ $user->email }}</p>
                    <p><span>Telefono:</span> {{ $user->phone }}</p>
                    <p><span>Qualifica:</span> {{ $user->about }}</p>

                    <button id="acceptButton" data-user="{{ json_encode($user) }}">
                        <a href="{{ Route('makeRevisor', compact('user')) }}">Accetta</a>
                    </button>
                </div>
            </div>
        </section>
    </main>
</body>
</html>