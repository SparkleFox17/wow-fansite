let currentGender = 'female';
let hordeArray = [];
let allyArray = [];

///////

/* Race Functions */
function displayRaces() {
   let hordeList = document.querySelector('#horde-list');
   let allyList = document.querySelector('#ally-list');

    let hordeElements = "";
    let allyElements = "";
   
   Object.keys(races).forEach(function(key,index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object 
           if(races[key].faction == "Horde") {
            hordeArray.push(races[key] );
           } else {
            allyArray.push(races[key]);
           }
    });
    hordeArray.sort((a,b) => (a.displayOrder > b.displayOrder) ? 1 : ((b.displayOrder > a.displayOrder) ? -1 : 0));
    allyArray.sort((a,b) => (a.displayOrder > b.displayOrder) ? 1 : ((b.displayOrder > a.displayOrder) ? -1 : 0));

    for( let i = 0; i < hordeArray.length; i++) {
        let image = '';
        if(currentGender == 'male') {
           image = hordeArray[i].maleIcon;
        } else {
            image = hordeArray[i].femaleIcon;
        }

        hordeElements += "<li onclick=\"selectRace('" + hordeArray[i].slug + "')\"><img src=\"" + image + "\" width=\"100\" /></li>";
    }

    for( let i = 0; i < allyArray.length; i++) {
        let image = '';
        if(currentGender == 'male') {
            image = allyArray[i].maleIcon;
         } else {
            image = allyArray[i].femaleIcon;
         }


        allyElements += "<li onclick=\"selectRace('" + allyArray[i].slug + "')\"><img src=\"" + image + "\" width=\"100\" /></li>";
    }

    hordeList.innerHTML = hordeElements;
    allyList.innerHTML = allyElements;
    
}

function changeGender(gender) {
    let hordeList = document.querySelectorAll('#horde-list li');
    let allyList = document.querySelectorAll('#ally-list li');

    for( let i = 0; i < hordeList.length; i++) {
        let image = '';
        if(gender == 'male') {
           image = hordeArray[i].maleIcon;
        } else {
            image = hordeArray[i].femaleIcon;
        }

        hordeList[i].querySelector('img').src = image;
    }

    for( let i = 0; i < allyList.length; i++) {
        let image = '';
        if(gender == 'male') {
           image = allyArray[i].maleIcon;
        } else {
            image = allyArray[i].femaleIcon;
        }

        allyList[i].querySelector('img').src = image;
    }
}

function selectRace(selectedRace) {

    let section = document.querySelector('#races');
    let contentArea = document.querySelector('#race-info');
    
    let raceTitle = contentArea.querySelector('h1');
    let raceFaction = contentArea.querySelector('h3');
    let raceIntroduction = contentArea.querySelector('h5');
    let raceDescription = contentArea.querySelector('p');
    let raceCharacter = contentArea.querySelector('img');

    animateNonActiveCharacter(raceCharacter) 
    // displayAvailableClasses(selectedRace);
    section.style.backgroundImage = 'url(' + races[selectedRace].background + ')';

    raceTitle.innerHTML = races[selectedRace].title;
    raceFaction.innerHTML = races[selectedRace].faction;
    raceIntroduction.innerHTML = races[selectedRace].introduced;
    raceDescription.innerHTML = races[selectedRace].description;
    raceCharacter.src = races[selectedRace].character;


    setTimeout( () => {
        animateActiveCharacter(raceCharacter) 
    }, 10);
    
}


function animateNonActiveCharacter(char) {
    char.classList.remove("active-character");
}
function  animateActiveCharacter(char) {
    char.classList.add("active-character");
}
/* Race Functions End */

function imageGallery() {
    const highlight = document.querySelector(".gallery-highlight");
    const previews = document.querySelectorAll(".wow-art-preview img"); 

    previews.forEach(preview => {
        preview.addEventListener("click", function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;   
            previews.forEach(previews => preview.classList.remove("wow-art-active")); 
            preview.classList.add("wow-art-active"); 
        });
    });
}

function displayAvailableClasses(selectedRace) {
    let availableClassesList = document.getElementById("race-available-classes");
    let availableClasses = races[selectedRace].availableClasses;
    let classesContent = "";


    availableClasses.forEach(obj => {
       classesContent += "<li class='classItem'><img src='" + obj.img + "' /><h4>" + obj.title + "</h4><p>" + obj.description + "</p></li>";


    });

    availableClassesList.innerHTML = classesContent;

}

///////

imageGallery();

changeGender(currentGender);

displayRaces();





