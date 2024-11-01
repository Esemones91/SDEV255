// using replace()



var s = "Hello";
console.log("s = ", s);

// serach for Hel
console.log(`s.replace(/Hel/, "abc") => ${s.replace(/Hel/, "abc")}`);

// serach for "hel"
console.log(`s.replace(/hel/, "abc") => ${s.replace(/hel/, "abc")}`);

// search for "hel" ignoring casing
console.log(`s.replace(/hel/i, "abc") => ${s.replace(/hel/i, "abc")}`);

// search for H followed by a or b or e followed by l
console.log(`s.replace(/H[abe]l/, "abc") => ${s.replace(/H[abe]l/, "abc")}`);

// search for He followed by 0 or 1 a followed by l
console.log(`s.replace(/Hea?l/, "abc") => ${s.replace(/Hea?l/, "abc")}`);

// search for He followed by 0 (min) or 1 (max) a followed by l
console.log(`s.replace(/Hea{0, 1}l/, "abc") => ${s.replace(/Hea{0, 1}l/, "abc")}`);

// search for He followed by 1 (min) or 2 (max) a followed by l
console.log(`s.replace(/Hea{1, 2}l/, "abc") => ${s.replace(/Hea{1, 2}l/, "abc")}`);