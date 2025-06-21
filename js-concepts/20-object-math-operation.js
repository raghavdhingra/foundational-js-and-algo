console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log({} + {}); // "[object Object][object Object]"

/*
1️⃣ [] + [] => [] → coerced to "" => "" + "" → "" (empty string)

2️⃣ [] + {} => [] → "" and {} → "[object Object]" => "" + "[object Object]" → "[object Object]"

3️⃣ {} + [] => 0
{} // empty block
+[] // unary plus on an empty array → +[] = 0
0 + 0 => 0

4️⃣ {} + {}
{} → empty block
+{} → NaN (but ignored here)
({} + {}) → "[object Object][object Object]"

| Expression  | Output                             | Explanation                        |
| ----------- | ---------------------------------- | ---------------------------------- |
| `[] + []`   | `""`                               | Both arrays → empty strings        |
| `[] + {}`   | `"[object Object]"`                | Array → `""`, object → stringified |
| `{}` + `[]` | `0`                                | Empty block + array → `+[] = 0`    |
| `{}` + `{}` | `"[object Object][object Object]"` | Both objects → coerced to strings  |

*/
