import { async, TestBed } from '@angular/core/testing';
import { MainContainerComponent } from './main-container.component';
describe('MainContainerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MainContainerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MainContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/clinton/Projects/Grails/kiitapp/kiitclient/src/app/main-container/main-container.component.spec.js.map