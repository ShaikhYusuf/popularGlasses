import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true, // ✅ Standalone component ka mention
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(form: any) {
    if (form.valid) {
      const formData = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      };

      emailjs
        .send('service_5hzi63k', 'template_7onlfe7', formData, 'dAbS-e2Icykd6qj1d')
        .then(
          () => {
            alert('Your message has been sent successfully!');
            form.resetForm();
          },
          (error) => {
            console.error('Failed to send email:', error);
            alert('Failed to send email. Please try again.');
          }
        );
    } else {
      alert('Please fill all required fields.');
    }
  }
}
