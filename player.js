function  Player(color,location_x,location_y, hexMap)
{
    this.color = color;
    this.location = {x:location_x,y:location_y};
    
    this.refresh = function()
    {
        hexMap.drawHexAtColRow(this.location.x, this.location.y, this.color);
    };
    
    this.moveDownRight= function(){
        if(this.location.x % 2 != 0){
            this.location.y +=1;  //Not Same Row
        }
        this.location.x += 1;
    };
    
    this.moveDownLeft= function(){
        if(this.location.x % 2 != 0){
            this.location.y +=1;  //Not Same Row
        }
        this.location.x -= 1;
    };
    
    this.moveDown = function(){
         this.location.y +=1;
    };
    
    this.moveUpRight= function(){
        if(this.location.x % 2 == 0){
            this.location.y -=1;  //Not Same Row
        }
        this.location.x += 1;
    };
    
    this.moveUpLeft= function(){
        if(this.location.x % 2 == 0){
            this.location.y -=1;  //Not Same Row
        }
        this.location.x -= 1;
    };
    
    this.moveUp = function(){
         this.location.y -=1;
    };
}