import React, { Component } from 'react';
import AudioPlayer from 'react-modular-audio-player';

class Musik extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  playlist: [],
    };
  }
  render() {
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

