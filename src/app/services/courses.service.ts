import { HttpClient } from '@angular/common/http';

export class CoursesService {
    getCourses() {
        return ['Physics of Light', 'Down & Dirty Development', 'Myths & Legends'];
    }
}