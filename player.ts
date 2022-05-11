class Player {

    score: number = 0;

    HitBall() {
        this.score += Math.ceil(Math.random() * 6);
    }
}

class Team extends Player {

    GetScore() {
        return this.score;
    }
}

let player1 = new Team();
player1.HitBall();
player1.HitBall();
player1.HitBall();

let player2 = new Team();
player2.HitBall();
player2.HitBall();

let player3 = new Team();
player3.HitBall();

let player4 = new Team();
player4.HitBall();
player4.HitBall();
player4.HitBall();

let player5 = new Team();
player5.HitBall();
player5.HitBall();
player5.HitBall();
player5.HitBall();
player5.HitBall();

let player6 = new Team();
player6.HitBall();
player6.HitBall();

let player7 = new Team();
player7.HitBall();
player7.HitBall();
player7.HitBall();
player7.HitBall();

let player8 = new Team();
player8.HitBall();
player8.HitBall();
player8.HitBall();

let player9 = new Team();
player9.HitBall();
player9.HitBall();
player9.HitBall();
player9.HitBall();

let player10 = new Team();
player10.HitBall();
player10.HitBall();
player10.HitBall();

let player11 = new Team();
player11.HitBall();
player11.HitBall();
player11.HitBall();
player11.HitBall();
player11.HitBall();

let player12 = new Team();
player12.HitBall();
player12.HitBall();
player12.HitBall();

let totalScore = player1.GetScore() +
    player2.GetScore() +
    player3.GetScore() +
    player4.GetScore() +
    player5.GetScore() +
    player6.GetScore() +
    player7.GetScore() +
    player8.GetScore() +
    player9.GetScore() + 
    player10.GetScore() +
    player11.GetScore() +
    player12.GetScore();

console.log(`Player1 Score: ${player1.GetScore()}`);
console.log(`Player2 Score: ${player2.GetScore()}`);
console.log(`Player3 Score: ${player3.GetScore()}`);
console.log(`Player4 Score: ${player4.GetScore()}`);
console.log(`Player5 Score: ${player5.GetScore()}`);
console.log(`Player6 Score: ${player6.GetScore()}`);
console.log(`Player7 Score: ${player7.GetScore()}`);
console.log(`Player8 Score: ${player8.GetScore()}`);
console.log(`Player9 Score: ${player9.GetScore()}`);
console.log(`Player10 Score: ${player10.GetScore()}`);
console.log(`Player11 Score: ${player11.GetScore()}`);
console.log(`Player12 Score: ${player12.GetScore()}`);
console.log(`Team total score: ${totalScore}`)