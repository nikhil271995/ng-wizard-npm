import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { NgWizardDataService } from './ng-wizard-data.service';
import * as i0 from "@angular/core";
import * as i1 from "./ng-wizard-data.service";
var NgWizardService = /** @class */ (function () {
    function NgWizardService(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
    }
    NgWizardService.prototype.reset = function () {
        this.ngWizardDataService.resetWizard();
    };
    NgWizardService.prototype.next = function () {
        this.ngWizardDataService.showNextStep();
    };
    NgWizardService.prototype.previous = function () {
        this.ngWizardDataService.showPreviousStep();
    };
    NgWizardService.prototype.show = function (index) {
        this.ngWizardDataService.showStep(index);
    };
    NgWizardService.prototype.theme = function (theme) {
        this.ngWizardDataService.setTheme(theme);
    };
    NgWizardService.prototype.stepChanged = function () {
        return this.ngWizardDataService.stepChangedArgs$;
    };
    NgWizardService.ctorParameters = function () { return [
        { type: NgWizardDataService }
    ]; };
    NgWizardService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(i0.ɵɵinject(i1.NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
    NgWizardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NgWizardDataService])
    ], NgWizardService);
    return NgWizardService;
}());
export { NgWizardService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13aXphcmQvIiwic291cmNlcyI6WyJsaWIvY29yZS9uZy13aXphcmQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBUS9EO0lBQ0UseUJBQ1UsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFFbEQsQ0FBQztJQUVELCtCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVELDhCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsOEJBQUksR0FBSixVQUFLLEtBQWE7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsK0JBQUssR0FBTCxVQUFNLEtBQVk7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQscUNBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7O2dCQTFCOEIsbUJBQW1COzs7SUFGdkMsZUFBZTtRQUgzQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcrQixtQkFBbUI7T0FGdkMsZUFBZSxDQTZCM0I7MEJBdkNEO0NBdUNDLEFBN0JELElBNkJDO1NBN0JZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nV2l6YXJkRGF0YVNlcnZpY2UgfSBmcm9tICcuL25nLXdpemFyZC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgVEhFTUUgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGVwQ2hhbmdlZEFyZ3MgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmdXaXphcmRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuZ1dpemFyZERhdGFTZXJ2aWNlOiBOZ1dpemFyZERhdGFTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnJlc2V0V2l6YXJkKCk7XG4gIH1cblxuICBuZXh0KCkge1xuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93TmV4dFN0ZXAoKTtcbiAgfVxuXG4gIHByZXZpb3VzKCkge1xuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93UHJldmlvdXNTdGVwKCk7XG4gIH1cblxuICBzaG93KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2hvd1N0ZXAoaW5kZXgpO1xuICB9XG5cbiAgdGhlbWUodGhlbWU6IFRIRU1FKSB7XG4gICAgdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLnNldFRoZW1lKHRoZW1lKTtcbiAgfVxuXG4gIHN0ZXBDaGFuZ2VkKCk6IE9ic2VydmFibGU8U3RlcENoYW5nZWRBcmdzPiB7XG4gICAgcmV0dXJuIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zdGVwQ2hhbmdlZEFyZ3MkO1xuICB9XG59XG4iXX0=