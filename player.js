var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player() {
        this.score = 0;
    }
    Player.prototype.HitBall = function () {
        this.score += Math.ceil(Math.random() * 6);
    };
    return Player;
}());
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Team.prototype.GetScore = function () {
        return this.score;
    };
    return Team;
}(Player));
var player1 = new Team();
player1.HitBall();
player1.HitBall();
player1.HitBall();
var player2 = new Team();
player2.HitBall();
player2.HitBall();
var player3 = new Team();
player3.HitBall();
var player4 = new Team();
player4.HitBall();
player4.HitBall();
player4.HitBall();
var player5 = new Team();
player5.HitBall();
player5.HitBall();
player5.HitBall();
player5.HitBall();
player5.HitBall();
var player6 = new Team();
player6.HitBall();
player6.HitBall();
var player7 = new Team();
player7.HitBall();
player7.HitBall();
player7.HitBall();
player7.HitBall();
var player8 = new Team();
player8.HitBall();
player8.HitBall();
player8.HitBall();
var player9 = new Team();
player9.HitBall();
player9.HitBall();
player9.HitBall();
player9.HitBall();
var player10 = new Team();
player10.HitBall();
player10.HitBall();
player10.HitBall();
var player11 = new Team();
player11.HitBall();
player11.HitBall();
player11.HitBall();
player11.HitBall();
player11.HitBall();
var player12 = new Team();
player12.HitBall();
player12.HitBall();
player12.HitBall();
var totalScore = player1.GetScore() +
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
console.log("Player1 Score: ".concat(player1.GetScore()));
console.log("Player2 Score: ".concat(player2.GetScore()));
console.log("Player3 Score: ".concat(player3.GetScore()));
console.log("Player4 Score: ".concat(player4.GetScore()));
console.log("Player5 Score: ".concat(player5.GetScore()));
console.log("Player6 Score: ".concat(player6.GetScore()));
console.log("Player7 Score: ".concat(player7.GetScore()));
console.log("Player8 Score: ".concat(player8.GetScore()));
console.log("Player9 Score: ".concat(player9.GetScore()));
console.log("Player10 Score: ".concat(player10.GetScore()));
console.log("Player11 Score: ".concat(player11.GetScore()));
console.log("Player12 Score: ".concat(player12.GetScore()));
console.log("Team total score: ".concat(totalScore));
