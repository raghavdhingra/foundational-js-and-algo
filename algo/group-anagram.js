const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagrams = (arr) => {
  const map = new Map();
  arr.forEach((i) => {
    const sortedString = i.split("").sort().join("");
    if (map.has(sortedString)) {
      // map.set(sortedString, [...map.get(sortedString), i]); // Previous implementation
      map.get(sortedString).push(i); // slightly more efficient
    } else {
      map.set(sortedString, [i]);
    }
  });

  return Array.from(map.keys()).map((itm) => map.get(itm));
};

console.log(groupAnagrams(input));
// Output example (order of groups or strings doesn't matter):
// [["eat","tea","ate"], ["tan","nat"], ["bat"]]
