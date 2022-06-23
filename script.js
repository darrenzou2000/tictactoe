//make a board

let game ={
    board: [['_','_','_']
            ,['_','_','_']
            ,['_','_','_']]
    , 
    player: "x",
    over: false,
    print: function (){
        for(let i=0; i<3;i++){
                console.log(i,"  | ", this.board[i][0], '|', this.board[i][1], '|', this.board[i][2])
        }
    },
    switchPlayer: function (){
        this.player = this.player=="x"? "o" : "x"
    },
    select: function(row, col){
        if(this.over){
            return;
        }
        if(this.alreadyTaken(row,col)){
            return;
        }
        this.board[row][col] = this.player
        $(`#${row},${col}`).innerHTML = this.player
        this.checkWinner(row,col)
        this.switchPlayer()
        this.print()
    },
    alreadyTaken: function(row,col){
        return this.board[row][col]!="_";
    },
    checkWinner:function(row,col){
        
        // check horizontal and vertical
        if(this.board[row][0] == this.board[row][1] && this.board[row][2] == this.board[row][0]){
            this.over=true;
        }
        if(this.board[0][col] == this.board[1][col] && this.board[2][col] == this.board[0][col]){
            this.over=true;
        }
        // check diagonal
        if(this.board[0][0] == this.board[1][1] && this.board[2][2] == this.board[0][0]&& this.board[1][1]!="_" ){
            this.over=true;
        }
        if(this.board[0][2] == this.board[1][1] && this.board[2][0] == this.board[0][2]&& this.board[1][1]!="_"){
            this.over=true;
        }
    }

}

let boxes = $("div").click(function(){
    console.log(this.id)
    let row = parseInt(this.id.split(",")[0]) 
    let col = parseInt(this.id.split(",")[1])
    game.select(row,col)
})


