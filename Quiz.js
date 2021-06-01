class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    Question.hide()

    //write code to change the background color here
    

    //write code to show a heading for showing the result of Quiz
    

    //call getContestantInfo( ) here
    getContestantInfo( ) 


    //write condition to check if contestantInfor is not undefined
    if(allPlayers !== undefined){

    //write code to add a note here
      fill("blue")
      textSize(20)
      text ("*NOTE: Contastant who answered correct are highlighted in green color!",130,230)
    }

    //write code to highlight contest who answered correctly
    for(var plr in allContestant){
      var CorrectAns = "2"
      if ("CorrectAns" === allContestant[plr].answer)
        fill("green")
    else{
        fill("red");

  }

}
  }
}