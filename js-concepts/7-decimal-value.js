console.log(0.1 + 0.2 === 0.3); // false, due to a floating-point precision issue, how JavaScript (and all IEEE 754-compliant languages) handle decimal math

// Safer Comparison (using a tolerance)
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;

// Number.EPSILON represents the smallest difference between two distinct floating-point numbers that JavaScript can recognize.
// It’s used to handle precision errors in floating-point arithmetic

/*
Common Examples That Fail

0.1 + 0.2           // ❌ 0.30000000000000004
0.2 + 0.4           // ❌ 0.6000000000000001
0.1 + 0.7           // ❌ 0.7999999999999999
0.05 + 0.01         // ❌ 0.060000000000000005
0.3 / 0.1           // ❌ 2.9999999999999996
0.1 * 3             // ❌ 0.30000000000000004
*/

/*
Values That Usually Work
1. Whole integers within ±2⁵³ (JavaScript safe integer range)
2. Many binary-friendly fractions like 0.5, 0.25, 0.125
*/

/*
Real-World Rule
1. Use toFixed() / toPrecision() for display
2. Use Math.abs(a - b) < Number.EPSILON for comparison
*/
