/*=============================================================================
 * Authors: Agustin Bassi, Brian Ducca, Santiago Germino 
 * Date: Jul 2020
 * Licence: GPLV3+
 * Project: DAW - CEIoT - Project Structure
 * Brief: Main frontend file (where the logic is)
=============================================================================*/
interface DeviceInt
{
    id:string;
    name:string;
    description:string;
    state:string;
    type:string;
}


class Main implements EventListenerObject, GETResponseListener, POSTResponseListener {
 

    myf:MyFramework;
    view:ViewMainPage;
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
        this.view = new ViewMainPage (this.myf);

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
        console.log(`se hizo "${evt.type}"`);
  
        let b:HTMLElement = this.myf.getElementByEvent (evt);
        console.log(b)
        
        if (b.id == "boton")
        {
            this.counter ++;
            b.textContent = `Click ${this.counter}`;
        }
        else 
        {
            let state:boolean = this.view.getSwitchStateById(b.id);
            let data = {"id": `${b.id}`, "state":state};
            this.myf.requestPOST ("https://cors-anywhere.herokuapp.com/https://postman-echo.com/post", data, this);
        }


    }

    handleGETResponse(status: number, response: string): void {
        console.log("Respuesta del servidor: " + response)

        let data: Array<DeviceInt> = JSON.parse (response);

        console.log(data);

        this.view.showDevices (data);

        for (let d of data) 
        {
           let b:HTMLElement = this.myf.getElementById (`dev_${d.id}`);
           b.addEventListener ("click", this);
        }
    }
    handlePOSTResponse(status: number, response: string): void 
    {
        console.log (status);
        console.log(response);
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
