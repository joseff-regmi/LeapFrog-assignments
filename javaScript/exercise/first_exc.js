console.log("hello world")

let star = "";
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if(j>=i){
            star = star.concat("*")
        }
    }
    star = star.concat("\n")
}

console.log(star)


objInfo = {
    name: "Joseff",
    address: "Sinamangal",
    interest: "coding",
    education: [{Name:"Urlabari Highschool", enrolledDate:2015}, { Name:"Nepalgunj College", enrolledDate:2017}]
}

var eduInfo = objInfo.education
eduInfo.forEach(edu => {
    console.log("Name: " + edu.Name + ",", "Date: " + edu.enrolledDate)
});



var fruits = [
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
]


// // search by name


function searchByName(fruits, name){
    nameProvided = name.toLowerCase();
    for(index in fruits){
        nameLookingFor = fruits[index].name.toLowerCase();
        if(nameProvided === nameLookingFor){
            console.log(fruits[index])
        }
    }
}

searchByName(fruits, "apple")

// search by name and key

function searchBykey(fruits, key, name){
    keyProvided = key.toLowerCase();
    nameProvided = name.toLowerCase();

}


function transform(collection, tranFunc){
    let result = [];
    let count = collection.length;
    for(let i = 0; i<count; i++){
        output.push(tranFunc(collection[i]))
    }
    return result

}

let numbers = [1, 2, 3, 4];

let output = transform(numbers, function(num){
    return num * 2
});