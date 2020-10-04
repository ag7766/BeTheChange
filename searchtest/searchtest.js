window.onload = function() {
    document.getElementById("searchButton").onclick = test;

    document.getElementById('searchQuery').onkeypress = function(e) {
        if (!e) e = window.event;
        var keyCode = e.code || e.key;
        if (keyCode == 'Enter') {
            test();
            return false;
        }
    }
}


function test() {


    const elements = document.getElementsByClassName("result");
    for (let i = elements.length - 1; i >= 0; i--) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    let url = "https://api.data.charitynavigator.org/v2/Organizations?app_id=6bc7d517&app_key=bcbe2cb9afdc06da18174357c62decb2&search=" + document.getElementById("searchQuery").value;
    fetch(url)

    .then(res => res.json())
        .then((out) => {
            //console.log('Checkout this JSON! ', out);
            if (out.length <= 0) {
                const newDiv = document.createElement("div");
                const newContent = document.createTextNode("Sorry, no charity like that was found.");
                newDiv.appendChild(newContent);
                document.body.appendChild(newDiv);
            }

            for (let i = 0; i < out.length; i++) {
                if (out[i].mission != null &&
                    out[i].websiteURL != null) {
                    let newDiv = document.createElement("div");
                    newDiv.className = "result"
                    let name = document.createElement("p");
                    let namet = document.createTextNode(out[i].charityName);
                    let mission = document.createElement("p");
                    let missiont = document.createTextNode(out[i].mission)
                    let website = document.createElement("a");
                    let websitet = document.createTextNode(out[i].websiteURL);
                    website.href = out[i].websiteURL;
                    name.appendChild(namet);
                    mission.appendChild(missiont);
                    website.appendChild(websitet);
                    newDiv.appendChild(name);
                    newDiv.appendChild(mission);
                    newDiv.appendChild(website);
                    document.body.appendChild(newDiv);
                }
            }
            return;
        })
        .catch(err => {
            // throw err
            const newDiv = document.createElement("div");
            const newContent = document.createTextNode("Sorry, no charity like that was found.");
            newDiv.appendChild(newContent);
            document.body.appendChild(newDiv);
            return;
        });
}