fetch("https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=e")
    .then(response => response.json(response))
    .then(data => console.log(data))
    .catch(errir => console.error(error));