let word      = prompt("Füg ein Wort hinzu: ");
let wordTwo   = prompt("Füg ein weiteres Wort hinzu: ");
let wordThree = prompt("Füg ein drittes Wort hinzu: ");
let wordFour  = prompt("Füg ein letztes Wort hinzu: ");

// output(getSentence(["I","am","the","Future"]))
// output(getSentence(["Are","you","the","Future"],"s"));
// output(getSentence(["Yes","I","am"],"q"));
output(userInput());

function getSentence(arr,op)
{
	const gap         = " ";
    let str           = "";
    for (let i = 0; i < arr.length; i++) 
    {
       str += arr[i];

       if(i < arr.length -1)
       {
           str += gap;
       }
    }
    
    str += marks(op);
    return str;	
}

function marks(op)
{
    if (op == "S" || op == "s")
    {
        return "?";

    }else if(op == "Q" || op == "q")
    {
        return "!"; 

    }else
    {
        return ".";
    }
}

//Ausgabe in Konsole 
function output(outputStr)
{
    console.log(outputStr);
}

//Function to accept UserInput and Autofinish sentence
//toDO::: Make a function that checks if a word is a noun 
// split() method divides a String into and order list of substrings and puts these into an array and returns the array 

function userInput(wordCap)
{
    const gapUser = " ";
    let strUser   = "";
    var arrUser   = [];
    arrUser.push(word);
    arrUser.push(wordTwo);
    arrUser.push(wordThree);
    arrUser.push(wordFour);

    if(word.charAt(0).toLowerCase() + word.slice(1))
    {
        wordCap = word.charAt(0).toUpperCase() + word.slice(1)
        arrUser.splice(0,1,wordCap)
    }

    for (let j = 0; j < arrUser.length; j++)              
    {
        strUser += arrUser[j]; 

        if(j < arrUser.length) 
        {
            strUser += gapUser;
        } 
    }
    return strUser;
}



