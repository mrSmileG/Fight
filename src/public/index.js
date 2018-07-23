import {Fighter} from './fighter';
import {ImprovedFighter} from './improvedFighter';
import {Fight} from './fight';

// create two instances
let fighter = new Fighter("Boxer", 20 , 2000);
let improvedFighter = new ImprovedFighter("MMA champion", 50, 3000);
// call fight function
Fight(fighter,improvedFighter,10,15,30,10,80,15,17);