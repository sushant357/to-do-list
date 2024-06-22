import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'to-do-list';
  list:any[]= [
    {
      id: 1,
      title: 'Meeting CBS Team at 2PM',
      complete: false,
      edit: false,
      complete_btn:'Done',
      edit_btn:'Edit'
    },
    {
      id: 2,
      title: 'Cricket Match today at 10PM',
      complete: false,
      edit: false,
      complete_btn:'Done',
      edit_btn:'Edit'
    },
    {
      id: 3,
      title: 'Parents Meeting tomorrow 9AM',
      complete: false,
      edit: false,
      complete_btn:'Done',
      edit_btn:'Edit'
    }
  ];
  task_item:string = '';
  edited_task_item:string = '';
  edit_button_name:string='Edit';
  complete_button_name:string='Done'
  edit_id:number=0;

  ngOnInit(){

  }

  addTask(){
    let task = {
      id: this.list.length+1,
      title: this.task_item,
      complete: false,
      edit: false,
      complete_btn:'Done',
      edit_btn:'Edit'
    }
    this.list.push(task);
    this.task_item = '';
  }

  editTask(index:number){
    if(this.list[index].edit == false){
      this.list[index].edit = true;
      this.edited_task_item = this.list[index].title;
      this.list[index].edit_btn = 'Update';
    }else{
      this.list[index].title = this.edited_task_item;
      this.list[index].edit = false;
      this.list[index].edit_btn = 'Edit';
    }
  }

  completeTask(index:number){
    if(this.list[index].complete == false){
      this.list[index].complete = true;
      this.list[index].complete_btn = 'Undone';
    }else{
      this.list[index].complete = false;
      this.list[index].complete_btn = 'Done';
    }
  }

  deleteTask(index:number){
    this.list.splice(index, 1);
  }

}
