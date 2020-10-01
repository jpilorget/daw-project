/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/

class Main implements EventListenerObject, GETResponseListener {

    myf:MyFramework;
    counter:number = 0;


    main():void {
        console.log("estoy en main()");    

        let usuarios:Array<User>;
        usuarios = new Array<User>();
        usuarios.push(new User(15, "Juan", "juan@email.com"))
        usuarios.push(new User(24, "Pedro", "pedro@email.com"))
        usuarios.push(new User(39, "Maria", "maria@email.com"))

        this.mostrarUsers(usuarios);

        this.myf = new MyFramework ();

        // let b:HTMLElement = document.getElementById('boton');
        // b.addEventListener('click',this);

        this.myf.configEventListener('click', 'boton', this);

        this.myf.requestGET('Devices.txt', this);


        // myf.configClick('boton', ()=> (this.evento));

    }

    mostrarUsers(users:Array<User>):void {

        // for (let i in users) 
        // {
        //     users[i].printInfo ();
        // }

        for (let o of users) 
        {
            o.printInfo ();
        }
    }

    handleEvent(evt:Event):void
    {
        console.log('Se hizo click!');
        console.log(this);

        this.counter ++;

        let b:HTMLElement = this.myf.getElementByEvent (evt);

        console.log(b)

        b.textContent = `Click ${this.counter}`;
    }

    handleGETResponse(status: number, response: string): void {
        console.log("Respuesta del servidor: " + response)
    }

}

window.onload = function () {
    let m:Main = new Main();
    m.main ()
}

//=======[ Settings, Imports & Data ]==========================================

let user = "TypesScript Users!";

//=======[ Main module code ]==================================================

function greeter(person) {
    return "Hello, " + person;
 }
 
// document.body.innerHTML = greeter(user);

console.log("Hola mundo!");


//=======[ End of file ]=======================================================
