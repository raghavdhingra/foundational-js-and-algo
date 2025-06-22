const user = {
  name: "Raghav",
  details: {
    city: "Delhi",
  },
};

const { name, details: { city, country = "India" } = {} } = user;

console.log(name); // Raghav
console.log(city); // Delhi
console.log(country); // India
/*
name → "Raghav" ✅
details exists → { city: "Delhi" }
country not in object → uses default "India"
= {} after details: { ... } acts as a fallback object if details were undefined

| Part                                   | Outcome                                        |
| -------------------------------------- | ---------------------------------------------- |
| `details.city` exists                  | `Delhi`                                        |
| `details.country` missing              | Fallback to `"India"`                          |
| `details` undefined in user            | Fallback to `{}`                               |
| **No fallback (`= {}`) for `details`** | ❌ Would throw `Cannot destructure 'undefined'` |
*/
