var grid=[
[0,0,0],
[0,0,0],
[0,0,0]    
];
document.getElementById("headline").classList.toggle("hidden");
var i;
var j;
var table;
var num=1;
var restart=0;
var h1="Player 1 Turn";
function win(){
if(grid[0][0]==num && grid[0][1]==num &&grid[0][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[1][0]==num && grid[1][1]==num &&grid[1][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[2][0]==num && grid[2][1]==num &&grid[2][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[0][0]==num && grid[1][0]==num &&grid[2][0]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[0][1]==num && grid[1][1]==num &&grid[2][1]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[0][2]==num && grid[1][2]==num &&grid[2][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[0][0]==num && grid[1][1]==num &&grid[2][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
if(grid[2][0]==num && grid[1][1]==num &&grid[0][2]==num){
    h1="Player "+num+" Wins";
    return 1;
}
}
function draw(){
    for(var r=0;r<3;r++){
      for(var c=0;c<3;c++){
        if(grid[r][c]==0){
            return 0;
        }
        
      }
    }
    return 1;
    }

function restr(){
    grid=[
        [0,0,0],
        [0,0,0],
        [0,0,0]    
        ];
    restart=0;
    num=1;
    document.getElementById("headline").innerHTML="Click to start the game";
    h1="Player 1 Turn";
    var emptygrid=document.getElementsByTagName("td");
    for(var a=0;a<9;a++){
       emptygrid[a].textContent="";
    }
}
document.addEventListener("click",function(event){
    document.getElementById("headline").innerHTML=h1;
    if(restart===1){
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },200);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },500);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },800);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },1100);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },1400);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },1700);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },2000);
        setTimeout(function(){
            document.getElementById("headline").classList.toggle("hidden");
        },2300);
     setTimeout(function(){
      restr();
      document.getElementById("headline").style.color="darkblue";
     },3000);
     
    }
   
});
table = document.getElementById("grid")
table.addEventListener("click",function(event){
    ids=event.target.id;
    i=+(ids);
    j=i%10;
    i=Math.floor(i/10);
    console.log(grid);
    if(grid[i][j]!==0){
        h1="wrong key entered";
        document.getElementById("headline").style.color="red";
        }
    else{
       grid[i][j]=num;
       if(num==1){
       document.getElementById("headline").style.color="darkblue";
       document.getElementById(ids).innerHTML="O";
       document.getElementById(ids).style.color="green";
       }
       else{
        document.getElementById(ids).innerHTML="X";
        document.getElementById(ids).style.color="red";
        document.getElementById("headline").style.color="darkblue";
       }
       if(win()){
        document.getElementById("headline").style.color="orangered";
        restart=1;
        return;
       }
       else  if(draw()){
        h1="Draw";
        document.getElementById("headline").style.color="green";
        restart=1;
       }
       else if(num===1){
        num=2;
        h1="Player "+num+" Turn";
       }
       else{
        num=1;
        h1="Player "+num+" Turn";
       }
       }
        
    })