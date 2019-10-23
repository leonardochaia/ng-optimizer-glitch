import { Component, OnInit, Input } from '@angular/core';
import { isFatalErrorAction } from './provide-fatal-error-actions';

@Component({
  selector: 'lib-test-lib',
  template: `
    <p *ngIf="isFatal; else notFatalTemplate">
      Fatal (expected)
    </p>
    <ng-template #notFatalTemplate>
      Not Fatal (was expecting fatal!)
    </ng-template>
  `,
  styles: []
})
export class TestLibComponent implements OnInit {

  @Input()
  public action: { type: string };

  public isFatal: boolean;

  constructor() { }

  ngOnInit() {
    this.isFatal = isFatalErrorAction(this.action);
    if (this.isFatal) {
      console.info('IT WORKS!!!');
    } else {
      console.error('DOES NOT WORK, SHOULD BE FATAL');
    }
  }

}
