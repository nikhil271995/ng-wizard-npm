import { __assign, __decorate, __metadata, __param } from "tslib";
import { Injectable, Optional, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { DEFAULT_CONFIG } from '../utils/constants';
import { NG_WIZARD_CONFIG_TOKEN } from './ng-wizard-config.token';
import { merge } from '../utils/functions';
var NgWizardDataService = /** @class */ (function () {
    function NgWizardDataService(config) {
        this.config = config;
        this._defaultConfig = __assign({}, DEFAULT_CONFIG);
        if (this.config) {
            this._defaultConfig = merge(this._defaultConfig, this.config);
        }
        // Observable sources
        this._resetWizard = new Subject();
        this._showNextStep = new Subject();
        this._showPreviousStep = new Subject();
        this._showStep = new Subject();
        this._setTheme = new Subject();
        this._stepChangedArgs = new Subject();
        // Observable streams
        this.resetWizard$ = this._resetWizard.asObservable();
        this.showNextStep$ = this._showNextStep.asObservable();
        this.showPreviousStep$ = this._showPreviousStep.asObservable();
        this.showStep$ = this._showStep.asObservable();
        this.setTheme$ = this._setTheme.asObservable();
        this.stepChangedArgs$ = this._stepChangedArgs.asObservable();
    }
    NgWizardDataService.prototype.getDefaultConfig = function () {
        return __assign({}, this._defaultConfig);
    };
    NgWizardDataService.prototype.resetWizard = function () {
        this._resetWizard.next();
    };
    NgWizardDataService.prototype.showNextStep = function () {
        this._showNextStep.next();
    };
    NgWizardDataService.prototype.showPreviousStep = function () {
        this._showPreviousStep.next();
    };
    NgWizardDataService.prototype.showStep = function (index) {
        this._showStep.next(index);
    };
    NgWizardDataService.prototype.setTheme = function (theme) {
        this._setTheme.next(theme);
    };
    NgWizardDataService.prototype.stepChanged = function (args) {
        this._stepChangedArgs.next(args);
    };
    NgWizardDataService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NG_WIZARD_CONFIG_TOKEN,] }] }
    ]; };
    NgWizardDataService = __decorate([
        Injectable(),
        __param(0, Optional()), __param(0, Inject(NG_WIZARD_CONFIG_TOKEN)),
        __metadata("design:paramtypes", [Object])
    ], NgWizardDataService);
    return NgWizardDataService;
}());
export { NgWizardDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25nLXdpemFyZC1kYXRhLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdsRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0M7SUFnQkUsNkJBQWdFLE1BQXNCO1FBQXRCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3BGLElBQUksQ0FBQyxjQUFjLGdCQUFRLGNBQWMsQ0FBRSxDQUFDO1FBQzVDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9EO1FBRUQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxPQUFPLEVBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQW1CLENBQUM7UUFFdkQscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDL0QsQ0FBQztJQUVELDhDQUFnQixHQUFoQjtRQUNFLG9CQUFZLElBQUksQ0FBQyxjQUFjLEVBQUc7SUFDcEMsQ0FBQztJQUVELHlDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsOENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxJQUFxQjtRQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7O2dEQWpEWSxRQUFRLFlBQUksTUFBTSxTQUFDLHNCQUFzQjs7SUFoQjNDLG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7UUFpQkUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUE7O09BaEI1QyxtQkFBbUIsQ0FrRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWxFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IE5HX1dJWkFSRF9DT05GSUdfVE9LRU4gfSBmcm9tICcuL25nLXdpemFyZC1jb25maWcudG9rZW4nO1xuaW1wb3J0IHsgTmdXaXphcmRDb25maWcsIFN0ZXBDaGFuZ2VkQXJncyB9IGZyb20gJy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVEhFTUUgfSBmcm9tICcuLi91dGlscy9lbnVtcyc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZERhdGFTZXJ2aWNlIHtcbiAgcmVzZXRXaXphcmQkOiBPYnNlcnZhYmxlPGFueT47XG4gIHNob3dOZXh0U3RlcCQ6IE9ic2VydmFibGU8YW55PjtcbiAgc2hvd1ByZXZpb3VzU3RlcCQ6IE9ic2VydmFibGU8YW55PjtcbiAgc2hvd1N0ZXAkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHNldFRoZW1lJDogT2JzZXJ2YWJsZTxUSEVNRT47XG4gIHN0ZXBDaGFuZ2VkQXJncyQ6IE9ic2VydmFibGU8U3RlcENoYW5nZWRBcmdzPjtcblxuICBwcml2YXRlIF9yZXNldFdpemFyZDogU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIF9zaG93TmV4dFN0ZXA6IFN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBfc2hvd1ByZXZpb3VzU3RlcDogU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIF9zaG93U3RlcDogU3ViamVjdDxudW1iZXI+O1xuICBwcml2YXRlIF9zZXRUaGVtZTogU3ViamVjdDxUSEVNRT47XG4gIHByaXZhdGUgX3N0ZXBDaGFuZ2VkQXJnczogU3ViamVjdDxTdGVwQ2hhbmdlZEFyZ3M+O1xuICBwcml2YXRlIF9kZWZhdWx0Q29uZmlnOiBOZ1dpemFyZENvbmZpZztcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5HX1dJWkFSRF9DT05GSUdfVE9LRU4pIHByaXZhdGUgY29uZmlnOiBOZ1dpemFyZENvbmZpZykge1xuICAgIHRoaXMuX2RlZmF1bHRDb25maWcgPSB7IC4uLkRFRkFVTFRfQ09ORklHIH07XG4gICAgaWYgKHRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0Q29uZmlnID0gbWVyZ2UodGhpcy5fZGVmYXVsdENvbmZpZywgdGhpcy5jb25maWcpO1xuICAgIH1cblxuICAgIC8vIE9ic2VydmFibGUgc291cmNlc1xuICAgIHRoaXMuX3Jlc2V0V2l6YXJkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMuX3Nob3dOZXh0U3RlcCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICB0aGlzLl9zaG93UHJldmlvdXNTdGVwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMuX3Nob3dTdGVwID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIHRoaXMuX3NldFRoZW1lID0gbmV3IFN1YmplY3Q8VEhFTUU+KCk7XG4gICAgdGhpcy5fc3RlcENoYW5nZWRBcmdzID0gbmV3IFN1YmplY3Q8U3RlcENoYW5nZWRBcmdzPigpO1xuXG4gICAgLy8gT2JzZXJ2YWJsZSBzdHJlYW1zXG4gICAgdGhpcy5yZXNldFdpemFyZCQgPSB0aGlzLl9yZXNldFdpemFyZC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLnNob3dOZXh0U3RlcCQgPSB0aGlzLl9zaG93TmV4dFN0ZXAuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5zaG93UHJldmlvdXNTdGVwJCA9IHRoaXMuX3Nob3dQcmV2aW91c1N0ZXAuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5zaG93U3RlcCQgPSB0aGlzLl9zaG93U3RlcC5hc09ic2VydmFibGUoKTtcbiAgICB0aGlzLnNldFRoZW1lJCA9IHRoaXMuX3NldFRoZW1lLmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMuc3RlcENoYW5nZWRBcmdzJCA9IHRoaXMuX3N0ZXBDaGFuZ2VkQXJncy5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIGdldERlZmF1bHRDb25maWcoKTogTmdXaXphcmRDb25maWcge1xuICAgIHJldHVybiB7IC4uLnRoaXMuX2RlZmF1bHRDb25maWcgfTtcbiAgfVxuXG4gIHJlc2V0V2l6YXJkKCkge1xuICAgIHRoaXMuX3Jlc2V0V2l6YXJkLm5leHQoKTtcbiAgfVxuXG4gIHNob3dOZXh0U3RlcCgpIHtcbiAgICB0aGlzLl9zaG93TmV4dFN0ZXAubmV4dCgpO1xuICB9XG5cbiAgc2hvd1ByZXZpb3VzU3RlcCgpIHtcbiAgICB0aGlzLl9zaG93UHJldmlvdXNTdGVwLm5leHQoKTtcbiAgfVxuXG4gIHNob3dTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zaG93U3RlcC5uZXh0KGluZGV4KTtcbiAgfVxuXG4gIHNldFRoZW1lKHRoZW1lOiBUSEVNRSkge1xuICAgIHRoaXMuX3NldFRoZW1lLm5leHQodGhlbWUpO1xuICB9XG5cbiAgc3RlcENoYW5nZWQoYXJnczogU3RlcENoYW5nZWRBcmdzKSB7XG4gICAgdGhpcy5fc3RlcENoYW5nZWRBcmdzLm5leHQoYXJncyk7XG4gIH1cbn1cbiJdfQ==