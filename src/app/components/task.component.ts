import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

   // tslint:disable-next-line:typedef
   onPin(id: any) {
     this.onPinTask.emit(id);
   }

   // tslint:disable-next-line:typedef
   onArchive(id: any) {
     this.onArchiveTask.emit(id);
   }
}
