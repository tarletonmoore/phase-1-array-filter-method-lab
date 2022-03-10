// Code your solution here
function findMatching(array, string) {
    let list = array.filter(name => name.toUpperCase() === string.toUpperCase())
    if (list) {
        return list
    }
}

function fuzzyMatch(array, string) {
    let list = array.filter(name => name.toUpperCase().indexOf(string.toUpperCase()) === 0)
    return list
}

function matchName(array, string) {
    let list = array.filter(obj => obj.name === string)
    return list
}


