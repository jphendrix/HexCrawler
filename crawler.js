var player1;
var player2;
var currentPlayer;
    
var hexagonGrid; 

var showCoords = true;
var columns = 15;
var rows = 5;
var hexSize = 50;

var pips = 0;
    
$(document).ready(function(){
    var board_width = (columns * hexSize)*2;
    var board_height = (rows * hexSize)*2;
    
    $("body").append($("<canvas id='HexCanvas' width='"+board_width+"' height='"+board_height+"'></canvas>"));
    
    hexagonGrid = new HexagonGrid("HexCanvas", hexSize);
    hexagonGrid.drawHexGrid(rows, columns, 0, 0, showCoords);
    
    player1 = new Player('red',0,0,hexagonGrid); 
    player2 = new Player('blue',columns-1,rows-1,hexagonGrid);
    currentPlayer  = player1;
    
    //Wire up keyboard inputs
    $("body").keyup(function(e)
    {
        var didMove = false;
        switch(e.which){
            /*UP-LEFT*/ case 103: currentPlayer.moveUpLeft(); didMove=true; break;
            case 104:  /*UP*/
                currentPlayer.moveUp();         didMove=true; break;
            case 105: //UP-RIGHT
                currentPlayer.moveUpRight(); didMove=true; break;
            case 97:  //DOWN-LEFT
                currentPlayer.moveDownLeft(); didMove=true; break;
            case 98:  //DOWN
                currentPlayer.moveDown(); didMove=true; break;
            case 99:  //DOWN-RIGHT
                currentPlayer.moveDownRight(); didMove=true; break;
                break;
            default:
            break;
        }
        
        if(didMove){
            
            pips -=1;
            
            if(pips==0){
                if(currentPlayer ==  player1){
                    currentPlayer = player2;
                }else{
                    currentPlayer = player1;
                }
                pips=roll();
            }
            $("span.pips").html(pips).removeClass('red').removeClass('blue').addClass(currentPlayer.color);
            refresh();
        }
    });
    
    //draw the board
    refresh();
    pips = roll();
    $("span.pips").html(pips).removeClass('red').removeClass('blue').addClass(currentPlayer.color);
});



function refresh(){
    
    for(var x=0; x<columns; x++){
        for(y=0; y<rows; y++){
            hexagonGrid.drawHexAtColRow(x, y, 'gray');
        }
    }
    player1.refresh();
    player2.refresh();
}


function roll(){
    var total = 0;
    $(".dice").each(function()
    {
        //Get random number between 1 and 6
        var d = Math.floor((Math.random() * 6) + 1);
        
        //Add result to the total (add the two dice together)
        total += d;
        
        //Update the image to show the dice face
        $(this).removeClass("d1 d2 d3 d4 d5 d6");
        $(this).addClass("d"+d);
        
    });
    return total;
}