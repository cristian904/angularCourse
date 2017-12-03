import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
    allowNewServer = false;
    serverCreationStatus = "no server was created";
    serverName = '';
    serverCreated = false;
    constructor()
    {
        setTimeout(()=>{
            this.allowNewServer = true;
        },2000);
    }

    ngOnInit(){

    }
    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    }

    onUpdateServerName(event)
    {
        this.serverName =(<HTMLInputElement>event.target).value;
        console.log(this.serverName);
    }
}