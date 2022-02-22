const linksSocialMedia = {
    userName:'Roberto Araujo',
    github :'BlueMage-Code',
    twitter: 'LucaDamaceno',
    instagram: 'lyncaster_lyn'
}

function changeSocialMediaLinks(){
    for(let li of socialLinks.children){ 
        const social = li.getAttribute('class')
        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` 
    }
    const gitName = document.querySelector('a.github')
    gitName.innerHTML = `<img src="images/github.svg" alt="logo github">${linksSocialMedia.github}`
    gitName.href = `https://github.com/${linksSocialMedia[github]}`
}

changeSocialMediaLinks()



