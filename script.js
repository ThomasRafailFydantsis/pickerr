let names = ["Thanos"]
document.getElementById("btn").addEventListener("click", function() {
    
    let index = Math.floor(Math.random() * names.length)
    document.getElementById("para").innerHTML = names[index]
});
