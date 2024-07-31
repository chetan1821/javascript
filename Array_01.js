const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][0]);//its not merge the array

const heros = marvel_heros.concat(dc_heros)
console.log(heros[4]);

const all_Hero = [...marvel_heros,...dc_heros]
console.log(all_Hero);