function yourScript() {
	
  
  function basicmotion(){
      if ( self.head_y != self.food_y){
          if ( self.head_y > self.food_y){
            
            return UP;
          }
           if ( self.head_y < self.food_y){
            return DOWN;
          }
      }
      
      
      
       if ( self.head_x > self.food_x){
        return LEFT;
      }
       if ( self.head_x < self.food_x){
        return RIGHT;
      }
      
      
      if ( self.head_x == self.head_x){
        return UP;
      }
  
  }
  
  
}

