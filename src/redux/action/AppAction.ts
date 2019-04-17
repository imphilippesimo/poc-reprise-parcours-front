import { Action } from 'redux';

export class AppAction implements Action<string>{
  
  type: string; 

	constructor(type: string) {
    this.type = type;
  }

  
 
}