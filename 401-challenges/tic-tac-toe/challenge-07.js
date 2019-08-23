'use strict';

const whoWon = (board) => {
    function helpCheck(row1,col1,row2,col2,row3,col3){
        if(board[row1][col1] === board[row2][col2] && board[row2][col2] === board[row3][col3] && board[row1][col1] !== '' && board[row2][col2] !== '' && board[row3][col3] !== '' ){
            return true;
        }else{
            return false;
        }
    }
    if(helpCheck(0,0,0,1,0,2)=== true){
        return true;
    }else if(helpCheck(1,1,1,2,1,3) === true){
        return true;
    }else if(helpCheck(2,1,2,2,2,3)=== true){
        return true;
    }else if(helpCheck(0,0,1,0,2,0)=== true){
        return true;
    }else if(helpCheck(0,1,1,1,2,1)=== true){
        return true;
    }else if(helpCheck(0,2,1,2,2,2)=== true){
        return true;
    }else if(helpCheck(0,0,1,1,2,2)=== true){
        return true;
    }else if(helpCheck(0,2,1,1,2,0)=== true){
        return true;
    }else{
        return false;
    }
  
  };