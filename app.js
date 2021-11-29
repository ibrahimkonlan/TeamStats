const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 21,
      },
   
      { firstName: 'Andrews',
        lastName: 'Martin',
        age: 19,
      },
   
       { firstName: 'Caleb',
        lastName: 'Atiemo',
        age: 23,
      },
    ],
    _games: [
      {
         opponent: 'Chelsea', 
         teamPoints: 42, 
         opponentPoints: 27,
       },
   
       {
         opponent: 'Liverpool', 
         teamPoints: 35, 
         opponentPoints: 31,
       },
   
       {
         opponent: 'Arsenal', 
         teamPoints: 40, 
         opponentPoints: 29,
       },
    ],
     get games() {
          return this._games;
      },
       get players() {
          return this._players;
      },
       addPlayer(firstName, lastName, age) {
       let player = {
         firstName: firstName,
         lastName: lastName,
         age: age
       };
    
       this.players.push(player);
     },
     addGame(opp, myPts, oppPts){
      const game = {
         opponent: opp,
         teamPoints: myPts,
         opponentPoints: oppPts
       };
       this.games.push(game);
     } 
     };
   team.addPlayer('Steph', 'Curry', 28);
   team.addPlayer('Lisa', 'Leslie', 44);
   team.addPlayer('Bugs', 'Bunny', 76);
   console.log(team.players);
   team.addGame('Titans', 100, 98);
   team.addGame('Wolves', 50, 63);
   team.addGame('Hearts', 33, 49);
   
   console.log(team.games);