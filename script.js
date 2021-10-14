// Variables
let getbtn = document.getElementById("get"),
    inputField = document.getElementById("input"),
    result = document.querySelector('.results');

getbtn.onclick = function() {
    getRepos();
}

function getRepos() {
    if (inputField.value == "") {
        result.innerHTML = "Can't be Empty";
    } else {
        fetch(`https://api.github.com/users/${inputField.value}/repos`)
            .then(res => res.json())
            .then(repositories => {
                result.innerHTML = '';
                repositories.forEach(r => {
                    //console.log(r.name);
                    result.innerHTML += `
                    <div class="box-result">
                        <p id="repo-name">${r.name}</p>
                        <div class="two-shows">
                            <a id="starts" href="${r.html_url}" target="_blank">Stars ${r.stargazers_count}</a>
                            <a id="visite" href="${r.html_url}" target="_blank">Forks ${r.forks}</a>
                        </div>
                    </div>`;
                });

            });
    }
}