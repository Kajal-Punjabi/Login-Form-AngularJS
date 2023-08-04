import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class AppComponent {
  title = 'angular-form';
}
// export class UserFormComponent implements OnInit {

//     userForm!: FormGroup;
//     constructor(privatefb: FormBuilder) { }

//     ngOnInit(): void {
//       this.userForm = this.fb.group({
//         name:'',
//         address: ['',[Validators.required]],
//         email: ['', [Validators.required, Validators.email]],
//         phone: ['', [Validators.required, Validators.minLength(10)]]

//       });
//     }
//     submitHandler(formData: FormGroup) {
//       console.log(formData.valid);
//       console.log(formData.value);
//     }

// }