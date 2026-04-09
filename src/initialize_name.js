function initializeNames(name) {

    let parts = name.split(" ");
    console.log(parts);
    if (parts.length <= 2) return name;


    for (let i = 1; i < parts.length - 1; i++) {
        parts[i] = parts[i][0] + ".";
    }

    return parts.join(" ");
}
console.log(initializeNames("Jack Ryan"));
console.log(initializeNames("Lois Mary Lane"));
console.log(initializeNames("Dimitri"));
console.log(initializeNames("Alice Betty Catherine Davis"));
