class ViewMainPage
{
    private myf:MyFramework;

    constructor(myf:MyFramework)
    {
        this.myf = myf;
    }

    showDevices(list: DeviceInt[]):void
    {
        let e:HTMLElement = this.myf.getElementById("devicesList")

        for (let dev of list)
        {
            let image = "lightbulb.png";

            if (dev.type == "1") 
            {
                image = "window.png"
            }

            let checked = 0;
            if (dev.state == "1")
            {
                checked = 15
            }

            e.innerHTML += `<li class ="collection-item avatar">
                    <img src="static/images/${image}" alt="" class="circle">
                <span class="title">${dev.name}</span>
                <p>${dev.description}<br>
                </p>
                <a class="secondary-content">
                <form action="#">
                <div class="range-field">
                    <input id = "dev_${dev.id}" type="range" value=${dev.state} min = "0" max = "100" 
                    onchange = ${checked}>
                </div>
                </form>
                </a>
                </li>`;
        }
    }
    getSwitchStateById(id:string):boolean
    {
        let e:HTMLElement = this.myf.getElementById(id);
        let i:HTMLInputElement = <HTMLInputElement> e;

        return i.checked;


    }
}