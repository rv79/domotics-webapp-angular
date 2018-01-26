import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {ClockService} from './service/clock.service';
import {GrowlService} from './service/growl.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  today: Date = new Date();

  clientHeight: number;
  containerHeight: number;
  mainWindowHeight: number;

  private clockSubscription: Subscription;

  constructor(private clockService: ClockService,
              private growlService: GrowlService) {
    this.clientHeight = window.innerHeight;
    this.containerHeight = this.clientHeight - 40 - 64;
  }

  ngOnInit(): void {
    this.clockSubscription = this.clockService.getClock().subscribe(time => this.today = time);
    //this.initializeWebSocketConnection();
  }

  ngOnDestroy(): void {
    this.clockSubscription.unsubscribe();
    //this.stompClientPoint.disconnect();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.clientHeight = event.target.innerHeight;
    this.containerHeight = this.clientHeight - 40 - 64;
    this.mainWindowHeight = this.containerHeight < 540 ? 540 : this.containerHeight;
  }

  /*
  initializeWebSocketConnection(): void {

    let ws = new SockJS(this.wsUrl);
    this.stompClientPoint = Stomp.over(ws);
    let that = this;

    this.stompClientPoint.connect({}, function (frame) {
      that.stompClientPoint.subscribe("/global", (message) => {
        if (message.body) {
          that.growlService.popSuccess(message.body);
        }
      });
    });
  }*/
}
