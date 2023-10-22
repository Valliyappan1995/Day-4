//JSON Iteration Using For-in

//Problem-1 :

const objBio = {
    Name : "Valliyappan",
    Age : "28",
    Mailid : "valliyappanramasamy610@gmail.com",
    Address : "10,Anandam Nagar,Trichy",
    Skills : ["Basic Computer Programming, Java Basics"]
};
for(let key in objBio){
    console.log(key, objBio[key]);
    }

//Output :
//Name Valliyappan
//Age 28
//Mailid valliyappanramasamy610@gmail.com
//Address 10,Anandam Nagar,Trichy
//Skills ['Basic Computer Programming, Java Basics']

//Problem-2 :

const population = {
    male : 56,
    female : 60,
    others : 15
};

for (const key in population) {
    if (population.hasOwnProperty(key)) {
        console.log(key, population[key]);
    }
}

//Output :
//male 56
//female 60
//others 15


//JSON Iteration Using For-of

//Problem-1 :

const array = ["a", "b", "c"];

for (const element of array){
    console.log(element);
}

//Output :
//a
//b
//c

//Problem-2 :

const iterable = [10,20,30];

for (let value of iterable){
    value += 3;
    console.log(value);
}

//Output :
//13
//23
//33
