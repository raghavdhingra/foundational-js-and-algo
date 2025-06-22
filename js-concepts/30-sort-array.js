const scores = [40, 100, 1, 5, 25, 10];

const sorted = scores.sort();
console.log("sorted:", sorted); // [1, 10, 100, 25, 40, 5]
console.log("original:", scores); // [1, 10, 100, 25, 40, 5]
/*
without a compare function => Sorts lexicographically (i.e. as strings), So 100 comes before 25 because "100" < "25" as strings
sort() modifies the original array => sorted and scores point to the same reference

To sort numerically => scores.sort((a, b) => a - b);

To avoid mutation => const sorted = [...scores].sort((a, b) => a - b);
*/
