import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  randomNumber: number = 0;
  userGuess: number = 0;
  message: string = '';

  constructor(public router:Router) {}

  ngOnInit() {
    this.initializeGame();
  }

  initializeGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.message = 'Try to guess the number!';
    this.userGuess = 0;
  }

  checkGuess() {
    if (this.userGuess === this.randomNumber) {
      this.message = 'Congratulations! You guessed the number!';
      this.router.navigate(['auth']);
    } else if (this.userGuess < this.randomNumber) {
      this.message = 'Too low! Try a higher number.';
    } else {
      this.message = 'Too high! Try a lower number.';
    }
  }

  resetGame() {
    this.initializeGame();
  }

}
