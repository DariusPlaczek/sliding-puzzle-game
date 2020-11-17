const DataList = [
	{
		"id" : 0,
		"key": 0,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/01.jpg"
	},
	{
		"id" : 1,
		"key": 1,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/02.jpg"
	},
	{
		"id" : 2,
		"key": 2,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/03.jpg"
	},
	{
		"id" : 3,
		"key": 3,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/04.jpg"
	},
	{
		"id" : 4,
		"key": 4,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/05.jpg"
	},
	{
		"id" : 5,
		"key": 5,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/06.jpg"
	},
	{
		"id" : 6,
		"key": 6,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/07.jpg"
	},
	{
		"id" : 7,
		"key": 7,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/08.jpg"
	},
	{
		"id" : 8,
		"key": 8,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/09.jpg"
	},
	{
		"id" : 9,
		"key": 9,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/10.jpg"
	},
	{
		"id" : 10,
		"key": 10,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/11.jpg"
	},
	{
		"id" : 11,
		"key": 11,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/12.jpg"
	},
	{
		"id" : 12,
		"key": 12,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/13.jpg"
	},
	{
		"id" : 13,
		"key": 13,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/14.jpg"
	},
	{
		"id" : 14,
		"key": 14,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/15.jpg"
	},
	{
		"id" : 15,
		"key": 15,
		"img": "https://jsons.darius-design.de/img/schiebe-puzzle/Bibliothek/16.jpg"
	}
]

let forNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let newNumber = [15];

let randomArray = [];

function random() {
	for (let i = 0; i < 15; i++) {
		const randomNumber = Math.floor(Math.random() * Math.floor(forNumber.length));
		const trash = forNumber.splice(randomNumber, 1);
		newNumber.unshift(trash[0])
		
		randomArray.pop(DataList[newNumber])
	}

	if (forNumber <= 0) {
		for (let j = 0; j < 16; j++) {
			randomArray.push(DataList[newNumber[j]])
		}
		
	}
}

random();

export {randomArray};
//export {DataList};