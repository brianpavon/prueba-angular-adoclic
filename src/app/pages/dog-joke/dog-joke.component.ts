import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})
export class DogJokeComponent implements OnInit, OnDestroy {

  joke : string = '';
  subscription !: Subscription;

  constructor(private jokeServ : JokesService) { }

  ngOnInit(): void {
    this.getJokes();
    this.subscription = interval(5000).subscribe(() => {
      this.getJokes();
    });
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getJokes(){
    this.jokeServ.getJoke().subscribe(data=>{
      this.joke = `${data.setup} ${data.punchline}`
    })
  }
  
  refreshJokes() {
    this.subscription.unsubscribe();
    this.getJokes();
    this.subscription = interval(5000).subscribe(() => {
      this.getJokes();
    });
  }

}
