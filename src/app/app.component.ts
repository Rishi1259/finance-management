import { Component } from '@angular/core';
import { formActionService } from './form-action.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'finance-management';
  showForm: boolean = false;

  constructor(
    private formActionService : formActionService
  ){ 
    this.formActionService.displayFormEvent.subscribe(
      (display: boolean) => this.showForm = display,
    );
  }

  ngOnInIt(){
    
  }

  
}
