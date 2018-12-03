import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
describe('TasksService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TasksService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=tasks.service.spec.js.map