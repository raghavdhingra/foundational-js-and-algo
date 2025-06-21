function introduce(city, country, ...arg) {
  console.log(arg);
  return `Hi, I'm ${this.name} from ${city}, ${country}`;
}

const person = { name: "Raghav" };

console.log(introduce.call(person, "Delhi", "India", "y")); // Hi, I'm Raghav from Delhi, India
// arg => [ 'y' ]

console.log(introduce.apply(person, ["Delhi", "India", "fds", "fsd"])); // Hi, I'm Raghav from Delhi, India
// arg => [ 'fds', 'fsd' ]
