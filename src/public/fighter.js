// Create class Fighter
export class Fighter {
	constructor(name="Player", power=100, health=1000) {
		this.name = name;
		this.power = power;
		this.health = health;
	}

	setDamage(damage) {
		this.health -= damage;
		alert(`${this.name}'s haelth: ${this.health}`);
	}

	hit(enemy, point) {
		enemy.setDamage(point * this.power);
	}

	knockout(){
        let promise = new Promise((resolve,reject) => {
            setTimeout(() => {
            	console.log("time is over");
                resolve("result");
            },500);
            alert(`${this.name} is in knockout`);
        });
    }
}