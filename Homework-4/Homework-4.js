const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
];

// Question 6
const availableCats = cats.filter(cat => cat.adoptionStatus === "available").map(cat => cat.name);
const adoptedSentence = `I just adopted ${availableCats.join(" and ")}!`;
console.log(adoptedSentence);


// Question 7
const randomValue = Math.random() * 10;
const message = randomValue > 5 ? "greater than five!" : "less than five!";
console.log(message);

// Question 8
const cat = { name: "Pinecone", age: 13, type: 'Munchkin', cuteness: 9001 };
for (const key in cat) {
    console.log(cat[key]);
}

// Question 9
if (1 == '1') {
    console.log("First condition is true");
}
if (1 === '1') {
    console.log("Second condition is true");
} else {
    console.log("Second condition is false");
}

// Question 10
const cuteCats = cats.map(cat => `${cat.name} is cute!`);
console.log(cuteCats);
