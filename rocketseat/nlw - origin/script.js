const linksSocialMedia = {
    userName:'Roberto Araujo',
    github :'BlueMage-Code',
    twitter: 'LucaDamaceno',
    instagram: 'lyncaster_lyn'
}


changeSocialMediaLinks = () =>{
    for(let li of socialLinks.children){ 
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` 
    }
}
//consumo da API publica do Github
getGitHubProfileInfos = () => {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userAvatar.src = data.avatar_url            
        userName.textContent = data.name
        gitUser.href = data.html_url
        userLinkNameGithub.textContent = data.login
        bioUser.textContent = data.bio
    })
}
changeSocialMediaLinks()
getGitHubProfileInfos()