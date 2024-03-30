window.onload = function () {
    for (let i = 99; i > 0; i--) {
        let div = document.getElementById("song")
        let verse = document.createElement("p")
         
        let line1 = bottleOrBottles(i) + " of beer on the wall, " + bottleOrBottles(i) + "  of beer"
        div.append(line1, verse)
        div.append(document.createElement("br"))
        let line2 = "Take one down and pass it around, " + bottleOrBottles(i - 1) + " of beer on the wall"
        div.append(line2, verse)
    }

    // Final Verse
    let div = document.getElementById("song")
    let finalVerse = document.createElement("p")
    let line1 = "No more bottles of beer on the wall, no more bottles of beer"
    div.append(line1, finalVerse)
    div.append(document.createElement("br"))
    let line2 = "Go to the store and buy some more, 99 bottles of beer on the wall"
    div.append(line2, finalVerse)
};

function bottleOrBottles(number) {
    if (number > 1) {
        return number + " bottles"
    } else if (number == 1) {
        return number + " bottle"
    } else {
        return "no more bottles"
    }
}
