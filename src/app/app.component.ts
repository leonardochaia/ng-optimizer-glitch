import { Component } from '@angular/core';
import * as Actions from 'test-lib';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>
        Action {{ac.type}}
      </h1>
      <lib-test-lib [action]="ac"></lib-test-lib>

      <p>The function <b>provideFatalErrorAction</b> is never removed entirely from the bundle</p>
      <p>The action is never pushed to the array, so <b>isFatalErrorAction</b> returns false when it shouldn't</p>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ac = Actions.ac1;
}
