console.log("hello world");
let animal =["tiger", "rhino", "zebra", "owl", "hippos", "giraffes"]
let group =["prowl", "crash", "dazzle", "parliment", "jacuze", "skyscrapper"]
let reason =["aggresive stalking", "alwasy running into each other", "their patterns", "their prestigous look", "bubbles", "their heads being in the clouds"]
let message = () => {
    let i = Math.floor(Math.random() * 6);
    let j = Math.floor(Math.random() * 6);
    let v = Math.floor(Math.random() * 6);
    document.getElementById("fact").innerHTML= ( "A group of " + animal[i] + "s is called a " + group[j] + " this is due to " + reason[v]);
}

console.log(message());
