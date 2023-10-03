const a1 = true && true ; // t && t -> true
const a2 = true && false; // t && f -> false
const a3 = false && true; // f && t -> false
const a4 = false && (3 == 4); // false
const a5 = "JS" && "TS"; // t && t -> TS
const a6 = false && "TS"; // f && t -> false
const a7 = 1 && 2; // t && t -> 2
const a8 = "JS" && false ; // t && f -> false

// OR

const a9 = true || true; // t || t -> true
const a10 = false || true; // f || t -> true
const a11 = true || false; // t || f-> true 
const o4 = false || (3 == 4); // f || f -> false 
const o5 = "TS" || "JS"; // t || t -> TS
const o6 = false || "JS"; // f || t -> JS
const o7 = "TS" || false; // t || false -> TS
const o8 = 1 || 2; // t || t -> 1

// Not
const n1 = !true; // false
const n2 = !false;// true 
const n3 = !"TS"; // false
const n6 = !null; // true
const n4 = !1; // false
const n5 = !0; // true
