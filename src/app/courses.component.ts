import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';
import { Server } from 'selenium-webdriver/safari';


@Component({
    selector: 'courses', 
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

        <p>{{ blogPost | summary }}</p>

        <button class="btn btn-primary" [class.disabled]="isDisabled">Cancel</button>
        <button class="btn btn-primary" (click)="onSave()" [style.backgroundColor]="isActive ? 'purple' : 'green'">Save</button>
        `
})

// component decorator
// selector - courses <courses> or .courses <div class=".courses"> or #courses <div id="courses">
// template - can be multiple lines or other files

export class CoursesComponent {
    title = 'List of Courses';
    isActive = true;
    isDisabled = true;
    courses;
    email = 'test.test.test';
    isFavorite = false;

    blogPost = 'blah blah blah';

    onSave() {
        alert('saved!');
    }

    onKeyUp() {
        console.log(this.email);
    }

    toggleFavorite() {
        return !this.isFavorite;
    }

    // initialize an object => in this case the CoursesService
    // Add the dependency as a param in the constructor
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}