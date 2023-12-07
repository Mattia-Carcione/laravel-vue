import './bootstrap';

document.getElementById('acceptButton').addEventListener('click', function () {
    const user = JSON.parse(this.getAttribute('data-user'));

    fetch('/make/revisor/' + user.id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer ' + yourAccessToken,
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 200) {
                window.location.href = `{{env('APP_URL')}}`;
            }
        })
        .catch(error => {
            console.error('Errore durante la richiesta API:', error);
        });
});

