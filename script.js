// Flute! J'ai perdu mon .js ... 
//           Il va falloir le refaire!
//           Peut être que je vais avoir besoin de verifier à quoi servent 
//           les éléments suivant, qui pourrait m'aider à lier mon code JS à mon HTML:
//           - onclick                   ( pour appeler la fonction calculate() )
//           - document.getElementById   ( pour utiliser les éléments num1, num2, operation)
//           - parseFloat
//           - qu'est ce que la portée d'un variable ?

// récupérer les valeurs 
//let valeur1 = document.getElementById(num1); 
//let valeur2 = document.getElementById(num2); 

// récupérer le type d'opération
//let value = document.getElementById("operation").value;


// si value="add" alors faire num1 + num2
// si value="substract" alors num1 - num2
// si value="multiply" alors faire num1*num2
// si value="divide" alors faire num1/num2

let num1, num2, value, result = " ";

function calculate() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    value = document.getElementById("operation").value;

    switch (true) {
        case (value === "add"):
            result = (num1 + num2);
            break;
        case (value === "subtract"):
            result = (num1 - num2); 
            break;
        case (value === "multiply"):
            result = (num1 * num2);
            break;
        case (value === "divide" && num2 == 0):
            result = "On ne peut pas diviser par 0, ça n'a pas de sens mathématiquement parlant..";
            break;
        case (value === "divide"):
            result = (num1 / num2);
            break;
        case (value === "expo"):
            result = (num1 ** num2);
            break;
        default:
            alert('Erreur');
    };

    document.getElementById("result").innerHTML = result;
};