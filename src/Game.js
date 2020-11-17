import React, {useState, useEffect} from 'react';
//import {DataList} from './Data';
import {randomArray} from './Data';
import AudioPlayer from 'react-modular-audio-player';
import './App.css';

let playlist = [
	{
		src: "https://jsons.darius-design.de/Musik/Playlist-BestofMay2020/001-1765024-AllMyFriendsHateMe-Blood.mp3",
		title: "All My FriendsHate Me",
		artist: "Blood"
	},
	{
		src: "https://jsons.darius-design.de/Musik/Playlist-BestofMay2020/002-1766006-RENAE-ThroughMyEyes_Gemini_.mp3",
		title: "Through My Eyes Gemini",
		artist: "RENAE"
	},
	{
		src: "https://jsons.darius-design.de/Musik/Playlist-BestofMay2020/003-1765026-TheDevilMusicCo-HeadOverHeels.mp3",
		title: "The Devil Music Co",
		artist: "Head Over Heels"
	},
	{
		src: "https://jsons.darius-design.de/Musik/Playlist-BestofMay2020/004-1753299-AlfonsoLugo-QueAqui_EstoyYo.mp3",
		title: "Que Aqui Estoy Yo",
		artist: "Alfonso Lugo"
	}
	
];
//let forNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
//let newNumber = [15,];



function App() {

	const [falseOrTrue, setFalseOrTrue] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true])
	const [draggable, setDraggable] = useState(Array(16).fill(false));
	const [image, setImage] = useState([randomArray[0], randomArray[1], randomArray[2], randomArray[3], randomArray[4], randomArray[5], randomArray[6], randomArray[7], randomArray[8], randomArray[9], randomArray[10], randomArray[11], randomArray[12], randomArray[13], randomArray[14], randomArray[15]])

	const [copyImage, setCopyImage] = useState();
	const [draggableTrue, setDraggableTrue] = useState(true);

	const [helpOn, setHelpOn] = useState(false)
	const [moveCount, setMoveCount] = useState(0)
	const [seconds, setSeconds] = useState(null);
	const [minutes, setMinutes] = useState(null);
	const [letTime] = useState(new Date().getTime())
//	const [numbers, setNumbers] = useState()

	const [states] = useState({
		0: [1, 4],
		1: [0, 2, 5],
		2: [1, 3, 6],
		3: [2, 7],
		4: [0, 5, 8],
		5: [1, 4, 6, 9],
		6: [2, 5, 7, 10],
		7: [3, 6, 11],
		8: [4, 9, 12],
		9: [5, 8, 10, 13],
		10: [6, 9, 11, 14],
		11: [7, 10, 15],
		12: [8, 13],
		13: [9, 12, 14],
		14: [10, 13, 15],
		15: [11, 14]
	})

	//useEffect(() => {
	
	//	for (let i = 0; i < 15; i++) {
	//		const randomNumber = Math.floor(Math.random() * Math.floor(forNumber.length));
	//		const trash = forNumber.splice(randomNumber, 1);
	//		newNumber.unshift(trash[0])
	//	}
	//	setNumbers(newNumber)
		
	//}, [])

	useEffect(() => {
		const searchForTrue = falseOrTrue.indexOf(true)
		const copyOfDraggable = draggable.slice();

		if (draggableTrue) {
			for (const iterator of states[searchForTrue]) {
				copyOfDraggable.splice(iterator, 1, true)
		}
			setDraggable(copyOfDraggable)
			setDraggableTrue(false);
		}

	
	}, [falseOrTrue, states, draggable, draggableTrue])

	useEffect(function time() {
	
		const updatedTime = new Date().getTime();
		const nowTime = updatedTime - letTime;
		const sec = ("0" + (Math.floor(nowTime / 1000) % 60)).slice(-2);
		const min = ("0" + (Math.floor(nowTime / 60000) % 60)).slice(-2);

			const clock = setInterval(() => {	
				setSeconds(sec);
				setMinutes(min);
			}, 1000);
			
			return () => clearInterval(clock);
	
}, [seconds, minutes, letTime]);
	
	function onDrop(event) {
		event.preventDefault();

		if (falseOrTrue[event.target.id]) {
			setFalseOrTrue(falseOrTrue.fill(false))
			setMoveCount(moveCount + 1)
			const copyOfImageArray = image.slice();
			const copyTrue = falseOrTrue.slice();

			copyOfImageArray.splice(event.target.id, 1, image[copyImage]);
			copyOfImageArray.splice(copyImage, 1, image[event.target.id])
	
			copyTrue.splice(copyImage, 1, true);

			setDraggable(Array(16).fill(false))
			setImage(copyOfImageArray);
			setFalseOrTrue(copyTrue);
			setDraggableTrue(true);
		}
	}
		
	function onDragOver(event) {
		event.preventDefault();
	}
		
	function onDragStart(event) {
		setCopyImage(event.target.id)
	}

	function changeAText() {
		helpOn ? setHelpOn(false) : setHelpOn(true)
	}

  return (
	<div className="game-container">
		<h1 className="title-text">sliding puzzle</h1>
		<div className="three-columns">
			<div className="time-count">
				<h5>Time Count</h5>
			  <h1>{minutes}:{seconds}</h1>
			</div>

			<div className="game-column">
			{image.map((index, key) => 
				<div className="quader" 
					key={index.key} 
					id={index.id} 
					onDrop={event => onDrop(event)} 
					onDragOver={event => onDragOver(event)} 
					draggable={draggable[key]} 
					onDragStart={event => onDragStart(event)} >
						<img className="cards" 
							draggable={draggable[key]} 
							id={key} 
							alt={key} 
							src={index.img} 
						/>

						{helpOn ? <p>{index.id+1}</p> : ''}
						
				</div>
			)}
			</div>
			<div className="move-count">
				<h5>Move Count</h5>
				<h1>{moveCount}</h1>
			</div>
		</div>

		<div className="help-number">
			<div className="musik-player">
				<AudioPlayer audioFiles={playlist} hideLoop={true}/>
			</div>
			<div className="switch">
				<h6>Help Numbers</h6>
				<form>
					<input name="isGoing" type="checkbox" id="switch" checked={helpOn} onChange={changeAText}/><label htmlFor="switch">Toggle</label>
				</form>
			</div>
		</div>

	</div>
	);
}

export default App;



