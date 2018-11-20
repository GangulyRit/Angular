import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    coursesArr = [];   //For Hidden property

    viewMode = 'map';   //For [ngSwitch]

    courses =[
        { id: 1, name: 'course1'},
        { id: 2, name: 'course2'},
        { id: 3, name: 'course3'}
    ];

    coursesN = [];

    onAdd(){
        this.courses.push({id: 4, name: 'course4'});
    }

    onRemove(course){
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    loadCourses(){
        this.coursesN = [
            { id: 1, name: 'course1'},
            { id: 2, name: 'course2'},     //For trackBy
            { id: 3, name: 'course3'}
        ]
    }

    trackCourse(course) {
        return course ? course.id : undefined;  //For trackBy
    }

    isSelected = false; //For [ngClass]   TODo

    onClick() {
        this.isSelected = !this.isSelected;   //For [ngClass]     TODo
    }

    canSave = true;   //For [ngStyle]

    task = {
        title: 'Reiew Applications',    //For Safe Traversal Operator
        assignee: null
    }


}
