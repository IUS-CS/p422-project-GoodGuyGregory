import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlantDataService } from 'src/app/services/plant-data.service';
import { Message } from '../../../../models/message';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  currentUser: string
  createMessageForm: FormGroup
  newMessage: Message

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private plantDataService: PlantDataService
  ) { }

  ngOnInit(): void {
    this.currentUser = this.route.snapshot.params.username;

    this.createMessageForm = new FormGroup({
      subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', Validators.required)
    });
  }

}
