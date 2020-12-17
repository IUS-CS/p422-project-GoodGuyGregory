import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../../../../models/message';
import { MessageDataService } from '../../../../services/message-data.service';
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
    private messageDataService: MessageDataService
  ) { }

  ngOnInit(): void {
    this.createMessageForm = new FormGroup({
      subject: new FormControl('', [Validators.required, Validators.minLength(5)]),
      message: new FormControl('', Validators.required)
    });
  }

  sendMessage(data: any): void {
    //  data being passed from the MAT_DIALOG Injection
    // console.log(user);

    this.newMessage = {
      from: `${data.currentUser}`,
      to: `${data.user}`,
      subject: this.createMessageForm.controls.subject.value,
      message: this.createMessageForm.controls.message.value
    }

    console.log(this.newMessage);
    console.log(data.user);
    this.messageDataService.createNewMessage(data.user, this.newMessage).subscribe(
      next => {
        console.log(`New Message sent to ${data.user}'s Inbox`);
      },
      err => {
        console.log(err);
      }

    );
  }

}
