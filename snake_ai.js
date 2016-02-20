function yourScript() {
	var escaping;
	var escIndex;
	var escArray;
  
	function decider() {    
		if (escaping) {
			escapeIndex+=1;
			if (escapeIndex == escArray.length-1) {
				escaping = false;
				return basicmotion();
			} else {
			return nextMoves[escapeIndex];
			}
		}
    
		if (self.peekForCollision(self.direction)) {
			escaping = true;
			escArray = self.getOpenCellDirections;
			escIndex = 0;
			return nextMoves[escapeIndex];
    }
    else {
      nextMove = basicmotion();
    }
  }
  
  function basicmotion(){
      if ( self.head_y != self.food_y){
          
          if (self.isFoodAbove()){
            return UP;
          }
           if (self.isFoodBelow()){
            return DOWN;
          }
      
      }
      
  
      
       if (self.isFoodLeft()){
        return LEFT;
      }
       if (self.isFoodRight()){
        return RIGHT;
      }
      
      
      if ( self.head_x == self.head_x){
        return UP;
      }
    
    
  
  }
  return decider();
  
}
