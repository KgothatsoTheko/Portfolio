import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, finalize, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnDestroy {
  @Output() clicked = new EventEmitter<string>();
  private readonly destroyed = new Subject<void>();
  sending = false;
  status = '';
  hasError = false;
  contactForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S/),
    ]),
  });
  constructor(private api: ApiService) {}
  sendMessage(): void {
    if (this.sending) return;
    this.contactForm.markAllAsTouched();
    if (this.contactForm.invalid) {
      this.hasError = true;
      this.status = 'Please complete all fields and use a valid email address.';
      return;
    }
    this.sending = true;
    this.status = '';
    this.hasError = false;
    const value = this.contactForm.getRawValue();
    const payload = {
      firstName: value.firstName?.trim(),
      lastName: value.lastName?.trim(),
      email: value.email?.trim(),
      message: value.message?.trim(),
    };
    this.api
      .genericPost('send-message', payload)
      .pipe(
        takeUntil(this.destroyed),
        finalize(() => (this.sending = false)),
      )
      .subscribe({
        next: () => {
          this.status = 'Thanks. Your message has been sent.';
          this.contactForm.reset();
          this.clicked.emit('closed');
        },
        error: () => {
          this.hasError = true;
          this.status =
            'Your message could not be sent. Please try again or email me directly.';
        },
      });
  }
  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
