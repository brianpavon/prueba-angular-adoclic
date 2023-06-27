import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';
import { Subscription, interval, forkJoin  } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-dog-joke',
  templateUrl: './dog-joke.component.html',
  styleUrls: ['./dog-joke.component.css']
})
export class DogJokeComponent implements OnInit, OnDestroy {

  joke : string = '';
  punchline : string = '';
  urlImg : string = '';
  subscription !: Subscription;
  seconds : number = 0;

  constructor(private jokeServ : JokesService, private imgServ : ImagesService) { }

  ngOnInit(): void {
    this.loadData()
    this.startSubscription()
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadData(){
    this.seconds = 20;
    forkJoin({
      dogData: this.imgServ.getImg(),
      jokeData: this.jokeServ.getJoke()
    }).subscribe(({ dogData, jokeData }) => {
      this.urlImg = dogData.message;
      this.joke = jokeData.setup;
      this.punchline = jokeData.punchline;
    });
  }

  startSubscription(){
    this.subscription = interval(1000).subscribe(() => {      
      this.seconds--;      
      if(this.seconds === 0){
        this.loadData()
      }      
    });
  }
  
  refreshData() {
    this.subscription.unsubscribe();
    this.loadData()
    this.startSubscription()
  }

}
