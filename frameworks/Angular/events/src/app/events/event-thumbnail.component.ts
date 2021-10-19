import { Input,Output,EventEmitter,Component } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})

export class EventThumbnailComponent{
   @Input() event:any;

   getStartedTime(){
    const isLateStart = this.event && this.event.time === "10:00 am";
    const isEarlyStart = this.event && this.event.time === "8:00 am";
    if(isEarlyStart){
    return {green:isEarlyStart,bold:isEarlyStart};
    }
    else if(isLateStart){
    return {dangerous:isLateStart,bold:isLateStart};
    }
    else{
      return "bold"
    }
   }


}
