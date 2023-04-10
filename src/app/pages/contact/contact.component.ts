import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = '';
  subject: string = '';
  message: string = '';
  success: boolean = false

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async sendEmail() {
    this.success = false
    const templateParams = {
      from_email: this.email,
      subject: this.subject,
      message: this.message
    };

    emailjs.send('service_7u1avhw', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
    await this.delay(1000);
    this.email = '';
    this.subject = '';
    this.message = '';
    this.success = true;
  }
}
