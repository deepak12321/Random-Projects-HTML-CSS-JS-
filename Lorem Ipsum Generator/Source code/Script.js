const list = ["Lorem", "ipsum", "dolor", "sit", "amet,", "consectetur" ,"adipiscing" ,"elit," ,"sed" ,"do" ,"eiusmod" ,"tempor" ,"incididunt" ,"ut" ,"labore" ,"et", "dolore", "magna" ,"aliqua." ,"Ut" ,"enim", "ad", "minim" ,"veniam," ,"quis" ,"nostrud" ,"exercitation" ,"ullamco" ,"laboris" ,"nisi" ,"ut" ,"aliquip" ,"ex" ,"ea" ,"commodo" ,"consequat." ,"Duis" ,"aute" ,"irure" ,"dolor" ,"in" ,"reprehenderit" ,"in" ,"voluptate" ,"velit" ,"esse" ,"cillum" ,"0dolore" ,"eu" ,"fugiat" ,"nulla" ,"pariatur." ,"Excepteur","sint" ,"occaecat" ,"cupidatat" ,"non" ,"proident" ,"sunt" ,"in","culpa" ,"qui" ,"officia" ,"deserunt" ,"mollit","anim" ,"id","est" ,"laborum"];
let sentence=list[0];
let last = list.length;
let btn = document.getElementById("submit_btn");

btn.addEventListener('click',()=>
{
    
var number = document.getElementById("numbers").value;
console.log(number);

    sentence = list[0];
    document.getElementById("textareaa").innerHTML=number;
    let num=0;
    if(last>number)
    {
        for(let i =1;i<number;i++)
        {
            sentence =sentence+" "+list[i]; 
        }
    }
    if(last<number)
    {
        for(let i =1;i<number;i++)
        {
            if(i>last)
            {
               let num = Math.random()*last; 
               num = Math.round(num);
               sentence =sentence+" "+list[num];
            }
            else
            {
                sentence =sentence+" "+list[i]; 
            }
            
        }
    }
    
    document.getElementById("textareaa").innerHTML=sentence;
    console.log(sentence);
});