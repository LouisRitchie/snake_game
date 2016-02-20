function yourScript() {
	var decision;
	var escIndex;
	var escArray;	

	
	// peek() decides the future behaviour and makes sure
	// the data in the variables is OK
	function peek() {
		if (self.peekForCollision(self.direction)) {
			escaping = true;
			escArray = self.getOpenCellDirections();
			escIndex = 0;
		}
	}

	peek();

	// decider() function calls the others
	function decider() {   
		if (escaping) {
			escIndex+=1;
			if (escIndex == escArray.length-1) {
				escaping = false;
				return basicmotion();
			} else {
			return escArray[escIndex];
			}
		}
		return basicmotion();
    }

	// basicmotion() is the simplest behaviour
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
	

	// decider is called to make the decision.
	return decider();
}

