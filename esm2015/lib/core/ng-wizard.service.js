import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NgWizardDataService } from './ng-wizard-data.service';
import * as i0 from "@angular/core";
import * as i1 from "./ng-wizard-data.service";
let NgWizardService = class NgWizardService {
    constructor(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    reset() {
        this.ngWizardDataService.resetWizard();
    }
    next() {
        this.ngWizardDataService.showNextStep();
    }
    previous() {
        this.ngWizardDataService.showPreviousStep();
    }
    show(index) {
        this.ngWizardDataService.showStep(index);
    }
    theme(theme) {
        this.ngWizardDataService.setTheme(theme);
    }
    stepChanged() {
        return this.ngWizardDataService.stepChangedArgs$;
    }
};
NgWizardService.ctorParameters = () => [
    { type: NgWizardDataService }
];
NgWizardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(i0.ɵɵinject(i1.NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
NgWizardService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [NgWizardDataService])
], NgWizardService);
export { NgWizardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZy13aXphcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBUS9ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFDVSxtQkFBd0M7UUFBeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUVsRCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxJQUFJLENBQUMsS0FBYTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBWTtRQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUM7SUFDbkQsQ0FBQztDQUNGLENBQUE7O1lBM0JnQyxtQkFBbUI7OztBQUZ2QyxlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7cUNBRytCLG1CQUFtQjtHQUZ2QyxlQUFlLENBNkIzQjtTQTdCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ1dpemFyZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9uZy13aXphcmQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFRIRU1FIH0gZnJvbSAnLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3RlcENoYW5nZWRBcmdzIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nV2l6YXJkU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmdXaXphcmREYXRhU2VydmljZTogTmdXaXphcmREYXRhU2VydmljZVxuICApIHtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5yZXNldFdpemFyZCgpO1xuICB9XG5cbiAgbmV4dCgpIHtcbiAgICB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2hvd05leHRTdGVwKCk7XG4gIH1cblxuICBwcmV2aW91cygpIHtcbiAgICB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2hvd1ByZXZpb3VzU3RlcCgpO1xuICB9XG5cbiAgc2hvdyhpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNob3dTdGVwKGluZGV4KTtcbiAgfVxuXG4gIHRoZW1lKHRoZW1lOiBUSEVNRSkge1xuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zZXRUaGVtZSh0aGVtZSk7XG4gIH1cblxuICBzdGVwQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPFN0ZXBDaGFuZ2VkQXJncz4ge1xuICAgIHJldHVybiB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc3RlcENoYW5nZWRBcmdzJDtcbiAgfVxufVxuIl19