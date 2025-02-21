const cats = ["Milo", "Otis", "Garfield"];

function getcats() {
    return cats
}

function destructivelyAppendCat(name) {
    cats.push(name)
}

 function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    return [...cats, name]
} 

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat() {
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}
    