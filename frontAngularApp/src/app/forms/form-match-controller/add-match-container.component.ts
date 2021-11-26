import { Component, OnInit } from '@angular/core';
import { SendFormService } from 'src/app/services/send-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match-container',
  templateUrl: './add-match-container.component.html',
})
export class AddMatchContainerComponent implements OnInit {
  constructor(
    private sendFormService: SendFormService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onAddMatch(match: any) {
    this.sendFormService.addMatch(match).subscribe();
    return this.router.navigate(['/']);
  }
}
