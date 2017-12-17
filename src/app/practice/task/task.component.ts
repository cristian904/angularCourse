import { Component } from '@angular/core';

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html',
    styleUrls: ['task.component.css']
})
export class TaskComponent{
    displayText = true;
    noOfClicks = 0;
    clicks = [];

    onDisplayDetails(){
        this.displayText = !this.displayText;
        this.clicks.push(new Date());

    }
}