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
    console.log("test");

    const newDiv = document.createElement("div");

    // and give it some content 
    const newContent = document.createTextNode(document.getElementById("searchQuery").value);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    document.body.appendChild(newDiv);
}