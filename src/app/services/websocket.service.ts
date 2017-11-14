import { Injectable } from '@angular/core';
import * as io from 'socket.io';

@Injectable()
export class WebsocketService {
  socket: any;
  constructor() {
      this.socket = io('http://localhost:8080');
   }

   sendFrame(frame) {
    this.socket.emit('frame', frame);
   }
}
