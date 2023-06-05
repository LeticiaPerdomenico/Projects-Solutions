/*1*/
const team = {
    /*2*/
    _players: [
        /*3*/
        {firstName: 'Eric', lastName: 'Smith', age: 28},
        {firstName: 'Jack', lastName: 'Stone', age: 22},
        {firstName: 'Linda', lastName: 'Peters', age: 23}
    ],
    _games: [
        /*4*/
        {opponent:'Mets', teamPoints: 38, opponentPoints: 21},
        {opponent:'Dolphins', teamPoints: 45, opponentPoints: 43},
        {opponent:'Bears', teamPoints: 48, opponentPoints: 31}
    ],
    /*5*/
    get players() {
        return this._players;
    },
    /*6*/
    get games() {
        return this._games;
    },
    /*7*/
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge
        };
        this.players.push(player);
    },
    /*9*/
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game);
    }
};
/*8*/
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

/*10*/
team.addGame('Titans', 100, 98);
console.log(team.games);

