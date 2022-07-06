//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";

contract WavePortal {
    //uint256 totalWaves;
    uint256 totalSongs;

    event NewSong(address indexed from, uint256 timestamp, string message);

    /*function wave() public {
        totalWaves += 1;
        console.log("%s has waved!", msg.sender);
    }
    */

    struct Song{
        address sender;    //address of user who sent the song.
        string message;   //the message the user sent.
        uint256 timestamp; // timestamp when the user waved.
    }

    Song[] songs;

    constructor(){
        console.log("I am a smart contract! Period.");
    }

    function song(string memory _message) public {
        totalSongs += 1;
        console.log("%s has sent a song!", msg.sender, _message);

        //storing the song data in the array:
        songs.push(Song(msg.sender, _message, block.timestamp));

        //some fanciness I have to google!
        emit NewSong(msg.sender, block.timestamp, _message);
    }

    function getAllSongs() public view returns (Song[] memory){
        return songs;
    }
    
    /*function getTotalWaves() public view returns (uint256){
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }*/

    function getSongLink() public view returns (uint256) {
        console.log("Open song on Spotify!");
        console.log("Number of songs in song portal : %d", totalSongs);
        return totalSongs;
    }
}