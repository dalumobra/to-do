const url = 'https://6302cbb89eb72a839d73e69f.mockapi.io/:endpoint'

fetch(url).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err))

