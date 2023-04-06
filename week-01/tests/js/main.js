// const err = () => {
// 	try {
// 		const a = 1;
// 		a = 2;
// 	} catch(e) {
// 		console.error(e);
// 	}
// }

// err();

const array = [ "eat", "sleep", "code" ];
const object = {
	name: "Shazam",
	hobbies: [ ...array ],
	print: function () { console.log(this.name) }
}


sessionStorage.setItem("sessionStorageObject", JSON.stringify(object));
sessionStorage.setItem("sessionStorageArray", JSON.stringify(array));

const sessionStorageObject = JSON.parse(sessionStorage.getItem("sessionStorageObject"));
const sessionStorageArray = JSON.parse(sessionStorage.getItem("sessionStorageArray"));

console.log(sessionStorageObject);
console.log(sessionStorageArray);

localStorage.setItem("localStorageObject", JSON.stringify(object));
localStorage.setItem("localStorageArray", JSON.stringify(array));

const localStorageObject = JSON.parse(localStorage.getItem("localStorageObject"));
const localStorageArray = JSON.parse(localStorage.getItem("localStorageArray"));

console.log(localStorageObject);
console.log(localStorageArray);

sessionStorage.removeItem("sessionStorageObject");
sessionStorage.removeItem("sessionStorageArray");
localStorage.removeItem("localStorageObject");
localStorage.removeItem("localStorageArray");