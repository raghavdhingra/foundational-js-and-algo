/*
const original = {
  name: "John",
  age: 30,
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    coords: { lat: 28.6, lng: 77.2 }
  }
};

const clone = deepClone(original);
clone.name = "Jane";
clone.skills.push("Node.js");
clone.address.coords.lat = 99.9;
*/

const original = {
  name: "John",
  age: 30,
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    coords: { lat: 28.6, lng: 77.2 },
  },
};

const deepClone = (obj, result = {}) => {
  Object.keys(obj).forEach((key) => {
    const val = obj[key];
    if (Array.isArray(val)) {
      result[key] = val.map((itm) =>
        typeof itm === "object" && itm !== null ? deepClone(itm) : itm
      );
    } else if (val !== null && typeof val === "object") {
      result[key] = deepClone(val, {});
    } else {
      result[key] = val;
    }
  });
  return result;
};

const clonedObject = deepClone(original);
console.log(original.address.coords === clonedObject.address.coords);
