const jokeEL = document.getElementById('joke')
const jokeBtn = document.getElementById('jokesBtn')

jokebtn.addEventListener('click', generateJokes)
 
generateJokes()

function generateJokes() {
const config =  {
    headers: {
        'Accept': 'application/json',
    },
}
    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {jokeEL.innerHTML = data.joke})

    }
