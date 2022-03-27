import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  // true indicates that takeoff can occur, once takeoff has occurred then takeoff button is disabled
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
       this.takeOffEnabled=false;
    }
 }

handleLanding(rocketImage){
   window.alert("The shuttle is landing. Landing gear engaged.");
   this.message='The shuttle has landed.';
   this.color = 'green';
   this.height = 0;
   rocketImage.style.bottom = '0px';
   this.takeOffEnabled=true;
}

handleAbortMission(rocketImage){
  let result = window.confirm('Do you want to abort the mission?');
  if(result){
    this.message='Mission aborted.';
    this.color = 'red';
    this.height = 0;
    rocketImage.style.bottom = '0px';
    this.takeOffEnabled=true;
  }
}

  moveRocket(rocketImage,direction){
    //let movement = parseInt(img.style.left) + 10 + 'px';
    if(direction==="right"){
      let movement=parseInt(rocketImage.style.left)+10+'px';
      rocketImage.style.left=movement;
      //console.log("movement: "+movement);
      this.checkLocation(movement,"horizontal");
      //this.width=this.width+10000;
    }
    if(direction==="left"){
      let movement=parseInt(rocketImage.style.left)-10+'px';
      rocketImage.style.left=movement;
      this.checkLocation(movement,"horizontal");
      //this.width=this.width+10000;
    }
    if(direction==="up"){
      let movement=parseInt(rocketImage.style.bottom)+10+'px';
      rocketImage.style.bottom=movement;
      this.height=this.height+10000;
      //console.log("movement: "+movement);
      this.checkLocation(movement,"vertical");
    }
    if(direction==="down"){
      let movement=parseInt(rocketImage.style.bottom)-10+'px';
      rocketImage.style.bottom=movement;
      this.height=this.height-10000;
      this.checkLocation(movement,"vertical");
    }
  }

  checkLocation(movement,direction){
    movement=movement.replace("px","");
    //console.log("movement: "+movement);
    if(direction==="vertical"){
      if(Number(movement)<=0 || Number(movement)>=330){
        this.color="orange";
      }else{
        this.color="blue";
      }
    }else{
      if(Number(movement)<=0 || Number(movement)>=470){
        this.color="orange";
      }else{
        this.color="blue";
      }
    }
  }
}