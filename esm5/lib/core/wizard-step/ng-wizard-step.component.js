import { __decorate, __extends, __metadata } from "tslib";
import { Component, ComponentFactoryResolver, forwardRef, OnInit, ViewChild } from '@angular/core';
import { STEP_STATE } from '../../utils/enums';
import { NgWizardStep } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';
var NgWizardStepComponent = /** @class */ (function (_super) {
    __extends(NgWizardStepComponent, _super);
    function NgWizardStepComponent(componentFactoryResolver) {
        var _this = _super.call(this) || this;
        _this.componentFactoryResolver = componentFactoryResolver;
        return _this;
    }
    NgWizardStepComponent_1 = NgWizardStepComponent;
    NgWizardStepComponent.prototype.ngOnInit = function () {
        this.loadComponent();
    };
    NgWizardStepComponent.prototype.loadComponent = function () {
        if (!this.component) {
            return;
        }
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    };
    Object.defineProperty(NgWizardStepComponent.prototype, "isHidden", {
        get: function () {
            return this.state == STEP_STATE.hidden;
        },
        enumerable: true,
        configurable: true
    });
    var NgWizardStepComponent_1;
    NgWizardStepComponent.ctorParameters = function () { return [
        { type: ComponentFactoryResolver }
    ]; };
    __decorate([
        ViewChild(NgWizardStepContentDirective, { static: true }),
        __metadata("design:type", NgWizardStepContentDirective)
    ], NgWizardStepComponent.prototype, "stepContent", void 0);
    NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([
        Component({
            selector: 'ng-wizard-step',
            template: "<div class=\"tab-pane step-content\" style=\"display: block\">\n    <ng-content></ng-content>\n    <ng-template ngWizardStepContent></ng-template>\n</div>",
            providers: [
                { provide: NgWizardStep, useExisting: forwardRef(function () { return NgWizardStepComponent_1; }) }
            ],
            styles: [""]
        }),
        __metadata("design:paramtypes", [ComponentFactoryResolver])
    ], NgWizardStepComponent);
    return NgWizardStepComponent;
}(NgWizardStep));
export { NgWizardStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2l6YXJkLXN0ZXAvbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25HLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFVbkY7SUFBMkMseUNBQVk7SUFHckQsK0JBQ1Usd0JBQWtEO1FBRDVELFlBR0UsaUJBQU8sU0FDUjtRQUhTLDhCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7O0lBRzVELENBQUM7OEJBUFUscUJBQXFCO0lBU2hDLHdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDZDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHNCQUFJLDJDQUFRO2FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7O2dCQXRCbUMsd0JBQXdCOztJQUhEO1FBQTFELFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztrQ0FBYyw0QkFBNEI7OERBQUM7SUFEMUYscUJBQXFCO1FBUmpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsc0tBQThDO1lBRTlDLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBRTthQUNoRjs7U0FDRixDQUFDO3lDQUtvQyx3QkFBd0I7T0FKakQscUJBQXFCLENBMkJqQztJQUFELDRCQUFDO0NBQUEsQUEzQkQsQ0FBMkMsWUFBWSxHQTJCdEQ7U0EzQlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGZvcndhcmRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTVEVQX1NUQVRFIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgTmdXaXphcmRTdGVwIH0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbmctd2l6YXJkLXN0ZXAtY29udGVudC5kaXJlY3RpdmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy13aXphcmQtc3RlcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy13aXphcmQtc3RlcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLXdpemFyZC1zdGVwLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOZ1dpemFyZFN0ZXAsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nV2l6YXJkU3RlcENvbXBvbmVudCkgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5nV2l6YXJkU3RlcENvbXBvbmVudCBleHRlbmRzIE5nV2l6YXJkU3RlcCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgc3RlcENvbnRlbnQ6IE5nV2l6YXJkU3RlcENvbnRlbnREaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZENvbXBvbmVudCgpO1xuICB9XG5cbiAgbG9hZENvbXBvbmVudCgpIHtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbXBvbmVudEZhY3RvcnkgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbXBvbmVudCk7XG5cbiAgICB0aGlzLnN0ZXBDb250ZW50LnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICB0aGlzLmNvbXBvbmVudFJlZiA9IHRoaXMuc3RlcENvbnRlbnQudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XG4gIH1cblxuICBnZXQgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUgPT0gU1RFUF9TVEFURS5oaWRkZW47XG4gIH1cbn1cbiJdfQ==