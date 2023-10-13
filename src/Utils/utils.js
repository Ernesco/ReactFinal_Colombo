export const getData = (url) =>
    fetch(url)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log (error))
