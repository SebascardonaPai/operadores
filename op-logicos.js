//and &&
const estudiante =true;
const buenpromedio =true;

if (estudiante&& buenpromedio) {
    console.log ("el estudiante es elegible para la beca");
} else {
    console.log ("el estudiante no cumple con los requisitos");
}

//or ||
const estalloviendo =true;
const tengoparaguas =false;

if (estalloviendo || tengoparaguas) {
    console.log ("no me mojare");
} else {
    console.log ("necesito paraguas");
}

//not !
const esdenoche =false;

if (!esdenoche){
    console.log ("es de dia");
} else {
    console.log ("es de noche");
}
