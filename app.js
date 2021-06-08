let dataset = {
  arr: [18, 9, 18, 9, 5, 5, 18, 18, 9],
  oddTimes
}

function oddTimes() {
  const values = {};
  for(arr of this.arr)
    if (values[arr]) values[arr] += 1;
    else values[arr] = 1;
   
  let output = Object.values(values).find((a) => a % 2 == 1);

  return (Object.keys(values).find(key => values[key] === output));
  
}

console.log(dataset.oddTimes());
console.log(oddTimes.call(dataset));

let getStudents = {
  speak() {
    console.log(`${this.classList[0]}'s class ${this.hasTeachingAssistant ? 'assisted by ' + this.classList[1] : ''}:- ${this.classList}`);
  }
}

let studentWithTA = Object.create(getStudents);
studentWithTA.hasTeachingAssistant = true;
studentWithTA.classList = ['John', 'Mary', 'Peter', 'Nathaniel', 'Mark', 'Luke', 'Paul'];

let studentWithoutTA = Object.create(getStudents);
studentWithoutTA.hasTeachingAssistant = false;
studentWithoutTA.classList = ['John', 'Mary', 'Peter', 'Nathaniel', 'Mark', 'Luke', 'Paul'];


studentWithTA.speak();
studentWithoutTA.speak();