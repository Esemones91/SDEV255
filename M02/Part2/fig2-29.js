// using match(regexp)



var s = "Hello";
console.log("s = ", s);

// serach for Hel
console.log(`s.match(/Hel/) = ${s.match(/Hel/)}`);

// serach for "hel"
console.log(`s.match(/hel/) = ${s.match(/hel/)}`);

// search for "hel" ignoring casing
console.log(`s.match(/hel/i) = ${s.match(/hel/i)}`);

// search for H followed by a or b or e followed by l
console.log(`s.match(/H[abe]l/) = ${s.match(/H[abe]l/)}`);

// search for He followed by 0 or 1 a followed by l
console.log(`s.match(/Hea?l/) = ${s.match(/Hea?l/)}`);

// search for He followed by 0 (min) or 1 (max) a followed by l
console.log(`s.match(/Hea{0, 1}l/) = ${s.match(/Hea{0, 1}l/)}`);

// search for He followed by 1 (min) or 2 (max) a followed by l
console.log(`s.match(/Hea{1, 2}l/) = ${s.match(/Hea{1, 2}l/)}`);