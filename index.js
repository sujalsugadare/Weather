const temperateField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
/*const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");*/

let target = "Mumbai";

const fetchData = async()=>{

    const url = `http://api.weatherapi.com/v1/current.json?key=6cf4c31669be4fc4b2063925233007&q=${target}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    const{
        current :{ 
            temp_c,
            condition:{text,icon},
        },
        location:{ name,localtime },
    }=data;

    updateDom(temp_c,name,localtime,icon,text);
};


function updateDom(temperate,city,emoji,text){
    temperateField.innerText=temperate;
    cityField.innerText=city;
    const exactTime = time.split(" ")[1];
    const exactDate = time.split(" ")[0];

    const exactDay = getDayFullName(new Date(exactDate).getDay());
    
    dateField.innerText= `${exactTime}-${exactDay}   ${exactDate}`

    emojiField.src=emoji;
    weatherField.innerText= text;
}

fetchData();


function getDayFullName(num){
    switch (num) {
        case 0:
            return "Sunday";
           
            case 1:
                return "Monday";
        
                case 2:
                    return "Tuesday";

                    case 3:
                        return "Wednesday";

                        case 4:
                            return "Thursday";

                            case 5:
                                return "Friday";

                                case 6:
                                    return "Saturday";
        default:
            return"dont know";
    }}
const search = (e)=>{
    e.preventDefault();

    target = searchField.value;
    console.log(target);
}

form.addEventListener("submit",search)