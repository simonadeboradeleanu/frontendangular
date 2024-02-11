import { Component, OnInit } from '@angular/core'; // Import OnInit here
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharkApiService } from '../shark-api.service'; // Update the path as needed

@Component({
  selector: 'app-addshark',
  templateUrl: './addshark.component.html',
  styleUrls: ['./addshark.component.css']
})


export class AddsharkComponent implements OnInit {
  Addshark!: FormGroup;

  oceans: { id: number, name: string }[] = [
    { id: 1, name: 'Pacific Ocean' },
    { id: 2, name: 'Arctic Ocean' },
    { id: 3, name: 'Atlantic Ocean' },
    { id: 4, name: 'Indian Ocean' },
    { id: 5, name: 'Antarctic Ocean' },
  ];

  constructor(private fb: FormBuilder, private sharkApiService: SharkApiService) { }

  ngOnInit() {
    this.Addshark = this.fb.group({
      nume: ['', Validators.required],
      oceanId: [null, Validators.required],
      detail: this.fb.group({
        specie: ['', Validators.required],
        location: ['', Validators.required],
        update: ['', Validators.required],
        birthYear: [2000, Validators.required],
        favFood: ['', Validators.required],
      }),
    });
  }


  onSubmit() {
    if (this.Addshark.valid) {
      const formData = this.Addshark.value;
      this.sharkApiService.addShark(formData).subscribe(
        (response) => {
          console.log('Shark added successfully:', response);
          // Optionally, you can navigate to another page or perform other actions after successful submission.
        },
        (error) => {
          console.error('Error adding shark:', error);
          // Handle the error, display a message, etc.
        }
      );
    }
  }

}
