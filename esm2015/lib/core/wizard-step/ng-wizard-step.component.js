var NgWizardStepComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, ComponentFactoryResolver, forwardRef, OnInit, ViewChild } from '@angular/core';
import { STEP_STATE } from '../../utils/enums';
import { NgWizardStep } from '../../utils/interfaces';
import { NgWizardStepContentDirective } from '../ng-wizard-step-content.directive';
let NgWizardStepComponent = NgWizardStepComponent_1 = class NgWizardStepComponent extends NgWizardStep {
    constructor(componentFactoryResolver) {
        super();
        this.componentFactoryResolver = componentFactoryResolver;
    }
    ngOnInit() {
        this.loadComponent();
    }
    loadComponent() {
        if (!this.component) {
            return;
        }
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.component);
        this.stepContent.viewContainerRef.clear();
        this.componentRef = this.stepContent.viewContainerRef.createComponent(componentFactory);
    }
    get isHidden() {
        return this.state == STEP_STATE.hidden;
    }
};
NgWizardStepComponent.ctorParameters = () => [
    { type: ComponentFactoryResolver }
];
__decorate([
    ViewChild(NgWizardStepContentDirective, { static: true }),
    __metadata("design:type", NgWizardStepContentDirective)
], NgWizardStepComponent.prototype, "stepContent", void 0);
NgWizardStepComponent = NgWizardStepComponent_1 = __decorate([
    Component({
        selector: 'ng-wizard-step',
        template: "<div class=\"tab-pane step-content\" style=\"display: block\">\n    <ng-content></ng-content>\n    <ng-template ngWizardStepContent></ng-template>\n</div>",
        providers: [
            { provide: NgWizardStep, useExisting: forwardRef(() => NgWizardStepComponent_1) }
        ],
        styles: [""]
    }),
    __metadata("design:paramtypes", [ComponentFactoryResolver])
], NgWizardStepComponent);
export { NgWizardStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL2NvcmUvd2l6YXJkLXN0ZXAvbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBVW5GLElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFzQixTQUFRLFlBQVk7SUFHckQsWUFDVSx3QkFBa0Q7UUFFMUQsS0FBSyxFQUFFLENBQUM7UUFGQSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRzVELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDO0NBQ0YsQ0FBQTs7WUF2QnFDLHdCQUF3Qjs7QUFIRDtJQUExRCxTQUFTLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQWMsNEJBQTRCOzBEQUFDO0FBRDFGLHFCQUFxQjtJQVJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLHNLQUE4QztRQUU5QyxTQUFTLEVBQUU7WUFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBcUIsQ0FBQyxFQUFFO1NBQ2hGOztLQUNGLENBQUM7cUNBS29DLHdCQUF3QjtHQUpqRCxxQkFBcUIsQ0EyQmpDO1NBM0JZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBmb3J3YXJkUmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1RFUF9TVEFURSB9IGZyb20gJy4uLy4uL3V0aWxzL2VudW1zJztcbmltcG9ydCB7IE5nV2l6YXJkU3RlcCB9IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZSB9IGZyb20gJy4uL25nLXdpemFyZC1zdGVwLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmctd2l6YXJkLXN0ZXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZy13aXphcmQtc3RlcC5jb21wb25lbnQuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTmdXaXphcmRTdGVwLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ1dpemFyZFN0ZXBDb21wb25lbnQpIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZFN0ZXBDb21wb25lbnQgZXh0ZW5kcyBOZ1dpemFyZFN0ZXAgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKE5nV2l6YXJkU3RlcENvbnRlbnREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHN0ZXBDb250ZW50OiBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRDb21wb25lbnQoKTtcbiAgfVxuXG4gIGxvYWRDb21wb25lbnQoKSB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5jb21wb25lbnQpO1xuXG4gICAgdGhpcy5zdGVwQ29udGVudC52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLnN0ZXBDb250ZW50LnZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudEZhY3RvcnkpO1xuICB9XG5cbiAgZ2V0IGlzSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN0YXRlID09IFNURVBfU1RBVEUuaGlkZGVuO1xuICB9XG59XG4iXX0=