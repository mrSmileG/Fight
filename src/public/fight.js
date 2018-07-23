// create async function fight
export async function Fight(fighter, improvedFighter, ...points)
{
    await round(fighter, improvedFighter, points[0]);

    await round(improvedFighter, fighter, points[0]);

    if (fighter.health > 0 && improvedFighter.health > 0 && points.length > 1)
    {
        points.shift();
        await Fight(fighter, improvedFighter, ...points);
    }   
    
}

async function round(fighter, enemy, point){
    fighter.hit(enemy,point);
    if(enemy.health <= 0) 
    {
        await enemy.knockout();
    }
}