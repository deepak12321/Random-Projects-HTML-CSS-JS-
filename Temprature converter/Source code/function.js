let btn,num,choice1,choice2,value,value2;

btn= document.getElementById("submit");
btn.addEventListener("click",()=>{
num= document.getElementById("num").value;
choice1=document.getElementById("in").value;
choice2=document.getElementById("out").value;
conversion(choice1,choice2);
  
// print=document.getElementById("result").innerHTML=num+choice1+choice2;
  
});
function conversion(choice1,choice2)
{
  if(choice1=="celcius" && choice2=="feherenhiet")
  {
    value=(num*1.8)+32;
    print(value," °F");
  }
  else if(choice1=="celcius" && choice2=="kelvin")
  {
    value=num+273.15;
    print(value," K");
  }
  else if(choice1=="feherenhiet" && choice2=="celcius")
  {
    value=(num-32)*(5/9);
    print(value," °C");
  }
  else if(choice1=="feherenhiet" && choice2=="kelvin")
  {
    value=((num-32)*5/9)+273.15;
    print(value," K");
  }
  else if(choice1=="kelvin" && choice2=="celcius")
  {
    value=num-273.15;
    print(num," °C");
  }
  else if(choice1=="kelvin" && choice2=="feherenhiet")
  {
    value = ((num-32)*(5/9))+273.15;
    print(num," °F");
  }
  else
  {
    alert("Please Select different Units !");
  }
}

function print(value,value2)
{
  document.getElementById("result").innerHTML=value+value2;
}

