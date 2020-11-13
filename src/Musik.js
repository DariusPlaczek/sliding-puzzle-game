import React, { Component } from 'react';
import AudioPlayer from 'react-modular-audio-player';

class Musik extends Component {
  constructor(props) {
    super(props);

    this.state = { 
	//  track01: null,
	//  track02: null,
	//  track03: null,
	//  track04: null,
	//  track05: null,
	//  track06: null,
	//  track07: null,
	//  track08: null,
	//  track09: null,
	//  track10: null,
	//  isLoaded: true,
	  playlist: [],
	  
    };
  }

	//async componentDidMount() {
	//	const url = "https://api-music.icons8.com/api/v2/tracks?genres=Guitar&perPage=20&token=my4i1wRKyMd6JJBWo2EVGj89zO6Ic74I2yueatHb";
	//	const response = await fetch(url);
	//	const data = await response.json();
		
	//	this.setState({
	//		isLoaded: false,
	//		track01: data.tracks[2].preview.url,
	//		track02: data.tracks[1].preview.url,
	//		track03: data.tracks[3].preview.url,
	//		track04: data.tracks[0].preview.url,
	//		track05: data.tracks[5].preview.url,
	//		track06: data.tracks[4].preview.url,
	//		track07: data.tracks[6].preview.url,
	//		track08: data.tracks[10].preview.url,
	//		track09: data.tracks[11].preview.url,
	//		track10: data.tracks[16].preview.url

	//	})
	//}

  render() {
	//const {isLoaded} = this.state;

	this.playlist = [
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_08_-_Motivational.mp3",
			title: "Motivational",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_10_-_Follow_your_Dreams.mp3",
			title: "Follow your Dreams",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_01_-_Driven_To_Success.mp3",
			title: "Driven To Success",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_02_-_Hopeful_Journey.mp3",
			title: "Hopeful Journey",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_03_-_Aspire.mp3",
			title: "Aspire",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_04_-_Teamwork.mp3",
			title: "Teamwork",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_05_-_Beyond_Dreams.mp3",
			title: "Beyond Dreams",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_06_-_Reach_for_Success.mp3",
			title: "Reach for Success",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_09_-_We_Made_It.mp3",
			title: "We Made It",
			artist: "Scott Holmes"
		},
		{
			src: "https:///jsons.darius-design.de/Musik/Games/Scott_Holmes_-_12_-_Shine_Bright.mp3",
			title: "Shine Bright",
			artist: "Scott Holmes"
		},
		{
			src: "https://jsons.darius-design.de/memory/Sound/Ambient_Music_by_Michael-K_long.mp3",
			title: "Michael-K",
			artist: "Ambient_Music"
		},
		{
			src: "https://jsons.darius-design.de/memory/Sound/Inspiring-Ambient-Background.mp3",
			title: "Inspiring-Ambient-Background",
			artist: "StockMusicPro"
		}

	]

	return (
		
		<>
		  <AudioPlayer audioFiles={this.playlist} hideLoop={true}/>
		</>   
      );
    }
}

export default Musik;

