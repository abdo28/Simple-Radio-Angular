import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  city="";
  radio="";
  url="";
  
  
  citiesRadios={
    hebron:[
        {radio:'hr',url:"http://radio.garden/api/ara/content/listen/a-rA1FgX/channel.mp3"},
        {radio:'hebron',url:"http://radio.garden/api/ara/content/listen/98tpsy1C/channel.mp3"}
    ],
    ramallah:[
        {radio:'angham',url:"http://radio.garden/api/ara/content/listen/sIkqMhk6/channel.mp3"},
        {radio:'agial',url:"http://radio.garden/api/ara/content/listen/pTCaZl5W/channel.mp3"}
    ],
    bethlahem:[
        {radio:'sharq', url:"http://radio.garden/api/ara/content/listen/5mWZLRbK/channel.mp3"},
        {radio:'power', url:"http://radio.garden/api/ara/content/listen/K4TMBOx2/channel.mp3"}
    ]
    
  }
  sound;
  playAudio(url){
    if(this.sound!=undefined){
      this.sound.pause();
    }
    let audio = new Audio();

    audio.src = url;
    audio.load();
    audio.play();
    this.sound = audio;
    
  }
  onClick(){
    
    this.playAudio(this.radio);
  }

  pause(){
    this.sound.pause();
  }
}
