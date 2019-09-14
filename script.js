class Personaje{

    constructor (nam,pos,form){

        this.name=nam;
        this.position=pos;
        this.form = form;

    }

    obtDetalles(){
        
        prompt("Name:"+this.name +"\nPosition:"+this.position +"\nForm:"+ this.form);

    };

}


class Ave extends Personaje{


    construct(nam,pos,form,hab,mas){
        
        super.name=nam;
        super.position = pos;
        super.form = form;
        this.habilidad = hab;
        this.masa = mas;
    }


    volar(obj,enemyObj,meObj){
        var delayInMilliseconds =500;
        var bird;
        var enemy;
        
    
        
        bird = document.getElementById(obj.name);
        enemy = document.getElementById(enemyObj.form);
        var puntos = document.getElementById(meObj.puntosLbl);
         

        if(obj.name=="redBird"){
            bird.style.right = '25%';
            bird.style.top = '-5%';
            
            
        }else if(obj.name=="yellowBird"){
            bird.style.right = '15%';
            bird.style.top = '-5%';
        }else {
            bird.style.right = '5%';
            bird.style.top = '-5%';
        }

        if(enemyObj.fortaleza>0){
            enemyObj.fortaleza-=10;
            yo.puntos+=enemyObj.puntos;
            enemy.textContent = enemyObj.fortaleza;
            puntos.textContent = yo.puntos;
        }
        if(enemyObj.fortaleza==0){
            enemyObj.morir();
            
        }
        

        


        setTimeout(() => {
            bird.style.right = '90%';
            bird.style.top = '0%';
        }, delayInMilliseconds);


       
            
    }


    setPos(num){
        super.position=num;
    }






}



class Pig extends Personaje{

    construct(fortaleza,puntos){
        super.name=nam;
        super.position = pos;
        super.form = form;
        this.fortaleza = fortaleza;
        this.puntos = puntos;
        
    }

    setOther(puntos){
        this.fortaleza = 100;
        this.puntos = puntos;
    }

    morir(){

        console.log(this.name);
        var enemy = document.getElementById(this.name);
        enemy.src= "img/hurtPig.png";

    }

}


class Me{
    

    setPuntosLabel(puntos){
        this.puntos=puntos;
        this.puntosLbl="myPlayerpnt";
    }
}

var idx=0;

var pers1 = new Ave("redBird","Izquierda","rojo","Volar","medio");
var pers2 = new Ave("blackBird","Izquierda","negro","Explota","gordo");
var pers3 = new Ave("yellowBird","Izquierda","amarillo","Romper","delgado");





var enemy1 = new Pig("pig1","Izquierda","myPlayer2",100,0);
var enemy2 = new Pig("pig2","Izquierda","myPlayer3",100,0);
var enemy3 = new Pig("pig3","Izquierda","myPlayer4",100,0);

var yo = new Me();

enemy1.setOther(10);
enemy2.setOther(20);
enemy3.setOther(30);
yo.setPuntosLabel(0);


function ataquePaj(){
    if(idx == 0){
        pers1.volar(pers1,enemy1,yo);
        idx++;
    }else if(idx == 1){
        pers1.volar(pers2,enemy3,yo);
        idx++;
    }else if(idx == 2){
        pers1.volar(pers3,enemy2,yo);
        idx=0;
    }
}



function showIn(num){
    if(num==1){
        pers1.obtDetalles();
    }else if(num==2){
        pers3.obtDetalles();
    }else{
        pers2.obtDetalles();
    } 
}