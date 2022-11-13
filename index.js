


/* activepage */
/* const aktivePage =window.location.pathname;
const navLink = document.querySelectorAll('nav a')
forEach(link => {
    if(link.href.includes(`${aktivePage}`)){
        link.classList.add('active');
    }
    
}); */



let allprojects = document.querySelector('.gallery');
let button = document.createElement('button');
async function api() {
    let v1 = './file.json';
    let response = await fetch(v1)
    let data = await response.json();
    if (response.ok) {
        console.log(data.project1);
        for (let info of data.project1) {

            let projects1Info = `<ul> <li><h3> ${info.name}</h3> </li> <br>
            <li> here is the link:
            
            <span class="links"> <a href="${info.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>
            <br>
             
        <li> click see live: <span class="links"> <a href="${info.live}" target="_blank"><strong>click to see live</strong></a> </span></li>
            <img src="${info.image}" alt="project image">
            
            
            </ul> `


            allprojects.innerHTML += projects1Info;
        }

        for (let info2 of data.project2) {

            let projects1Info2 = `<ul> <li><h3> ${info2.name}</h3> </li><br>

            <li> here is the link:
            
            <span class="links"> <a href="${info2.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>
            <br>
            <li> click see live: <span class="links"> <a href="${info2.live}" target="_blank"><strong>click to see live</strong></a> </span></li>
            <img src="${info2.image}" alt="">
            
            
            </ul> `


            allprojects.innerHTML += projects1Info2;
        }

        for (let info3 of data.project3) {
            let projects1Info3 = `<ul><h3><li>${info3.name} </h3></li><br>

            <li> here is the link:
            
            <span class="links"> <a href="${info3.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>

            <br>
            <li> click see live: <span class="links"> <a href="${info3.live}" target="_blank"><strong>click to see live</strong></a> </span></li>

            <img src="${info3.image}" alt="">
            </ul>
            `
            allprojects.innerHTML += projects1Info3;
        }

        for (let info4 of data.project4) {
            let projects1Info4 = `<ul><h3><li>${info4.name} </h3></li><br>
            <li> here is the link:
            
            <span class="links"> <a href="${info4.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>
            <br>
            <li> click see live: <span class="links"> <a href="${info4.live}" target="_blank"><strong>click to see live</strong></a> </span></li>

            <img src="${info4.image}" alt="">
            </ul>
            `
            allprojects.innerHTML += projects1Info4;
        }

        for (let info5 of data.project5) {
            let projects1Info5 = `<ul><h3><li>${info5.name} </h3></li><br>

            <li> here is the link:
            
            <span class="links"> <a href="${info5.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>
            <br>
            <li> click see live: <span class="links"> <a href="${info5.live}" target="_blank"><strong>click to see live</strong></a> </span></li>

            <img src="${info5.image}" alt="">
            </ul>
            `
            allprojects.innerHTML += projects1Info5;
        }

        for (let info6 of data.project6) {
            let projects1Info6 = `<ul><li><h3>${info6.name} </h3></li><br>
            <li> here is the link:
            
            <span class="links"> <a href="${info6.projectLink}" target="_blank" > <strong>Click to see repo</strong></a></span></li>
            <br>
            <li> click see live: <span class="links"> <a href="${info6.live}" target="_blank"><strong>click to see live</strong></a> </span></li>

            <img src="${info6.image}" alt="">
            </ul>
            `
            allprojects.innerHTML += projects1Info6;
        }
    }
    else {

    }

}
api();

let sevice = document.querySelector('.box');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');

let url = './services.json'

async function mycervice() {
    let response = await fetch(url);
    let data = await response.json();
    if (response.ok) {
        console.log(data.service1)
        for (let serviceInfo1 of data.service1) {
            let outputTags = `<ul class= serviceDown>
        <li> <h1 style = "text-align: center; border-bottom: 1px solid black;">${serviceInfo1.name}<h1></li>
        <ul class ="service-style">
        <li> ${serviceInfo1.name2}</li>
        <li> ${serviceInfo1.name3}</li>
        <li> ${serviceInfo1.database}</li>
        <li> ${serviceInfo1.more}</li>
        <li> ${serviceInfo1.erfarenher}</li>
        <li> ${serviceInfo1.school}</li>
        
        </ul>
        
        </ul>`
            sevice.innerHTML += outputTags;
        }

        for (let serviceInfo2 of data.service2) {
            let outputTags2 = `<ul>
        <li> <h1 style = "text-align: center; border-bottom: 1px solid black;"> ${serviceInfo2.name}<h1></li>
        <ul class ="service-style">
        <li> ${serviceInfo2.name2}</li>
        <li> ${serviceInfo2.name3}</li>
        <li> ${serviceInfo2.database}</li>
        <li> ${serviceInfo2.erfarenher}</li>
        <li> ${serviceInfo2.school}</li>
        </ul>
        
        
        </ul>`
            box2.innerHTML += outputTags2;
        }

    }

    for (let serviceInfo3 of data.service3) {
        let outputTags3 = `<ul>
    <li> <li> <h1 style = "text-align: center; border-bottom: 1px solid black;"> ${serviceInfo3.name}<h1></li>
    </ul>
    <ul class ="service-style">
    <li> ${serviceInfo3.name2}</li>
    <li> ${serviceInfo3.name3}</li>
    <li> ${serviceInfo3.database}</li>
    <li> ${serviceInfo3.projectExaple}</li>
    <li> ${serviceInfo3.more}</li>
    <li> ${serviceInfo3.erfarenher}</li>
    <li> ${serviceInfo3.school}</li>
    </ul>
    
    
   `
        box3.innerHTML += outputTags3;
    }

}
mycervice();


/* expand js */

let container = document.getElementById('container');
let button1 = document.getElementById('show-more');

button1.onclick = () => {
    if (container.className == "") {
        /* expand the boc */

        container.className = 'open';
        button.innerHTML = 'Collapse now';
    }
    else {
        /* collaps the box */
        container.className = "";
        button.innerHTML = 'Expand'
    }
}



/* dark & loght mood  */

const toggle1 = document.getElementById('toggleDark');

const body = document.querySelector('.body1');

toggle1.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = '#71ccedc3';
        body.style.transition = '2s'
    }
    else {
        body.style.background = 'black';
       
        body.style.transition = '2s'
    }
})

const modala = document.querySelector('.modal-content');
const paragraph = document.querySelector('.moree');

let urlMore = 'moreabout.json';

async function modalMore(){
    let response = await fetch(urlMore);
    let data= await response.json();

    if(response.ok){
        console.log(data.MoreAboutMe)
        for(let allData of data.MoreAboutMe){

            let datass = `<ul>
             <img class= "imageDom" src="${allData.image}" alt="">
            <li> ${allData.name }</li>
            <br>
            <li> ${allData.Adress }</li>
            <br>
            <li> ${allData.phone }</li>
            <br>
            <li> ${allData.send } <div> <form action="">
            <textarea class="form-container" placeholder="Type message.." name="msg" required></textarea>
        
            <button type="submit" class="btn-submit">Send</button>
          </form>
          <div></li>
          <br>
            
            </ul> `

            paragraph.innerHTML += datass;
        }
        
    }
}
modalMore();



/* Modal js */
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
