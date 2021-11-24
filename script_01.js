
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
/***************************************************************/

output(getSentence(["I","am","the","Future"]))
output(getSentence(["Are","you","the","Future"],"s"));
output(getSentence(["Yes","I","am"],"q"));

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

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr)
{
    console.log(outputStr);
}