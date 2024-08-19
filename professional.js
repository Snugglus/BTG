const url = "https://raider.io/api/v1/mythic-plus/affixes?region=us&locale=en";
const members = "https://raider.io/api/v1/guilds/profile?region=us&realm=%22Bleeding%20Hollow%22&name=%20the%20blacktooth%20grin&fields=members";


fetch(url)
    .then(response => response.json(response))
    .then(data => {
        const affixesArray = data;
        const affixDetails = affixesArray['affix_details'];
        let affixCards = affixDetails.map((
            { name, description, icon }) => ({ name, description, icon }));
        console.log(affixCards);
    })

fetch(members)
    .then(response => response.json(response))
    .then(data=> {
        const membersArray = data;
        const membersOnly = membersArray['members'];
        console.log(membersOnly);
    })





