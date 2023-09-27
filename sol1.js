var message=prompt("enter string to check palindrome");
// var ans=prompt("do you want to consider case sensative(yes or no)?");
var ans=confirm("do you want to consider case sensative");
var flag=true;

if(!ans)
{
    message=message.toLocaleLowerCase();
}

for(var i=0,j=message.length-1;i<message.length/2;i++,j--){
    if(message[i]!=message[j]){
        flag=false;
        break;
    }
}

if(flag){
    console.log("palindrome");
}
else{
    console.log("not palindromr");
}