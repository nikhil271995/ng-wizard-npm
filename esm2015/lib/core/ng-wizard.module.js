var NgWizardModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_WIZARD_CONFIG_TOKEN } from './ng-wizard-config.token';
import { NgWizardStepComponent } from './wizard-step/ng-wizard-step.component';
import { NgWizardComponent } from './wizard/ng-wizard.component';
import { NgWizardStepContentDirective } from './ng-wizard-step-content.directive';
import { NgWizardService } from "./ng-wizard.service";
import { NgWizardDataService } from "./ng-wizard-data.service";
let NgWizardModule = NgWizardModule_1 = class NgWizardModule {
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    static forRoot(ngWizardConfig) {
        return {
            ngModule: NgWizardModule_1,
            providers: [
                NgWizardService,
                NgWizardDataService,
                {
                    provide: NG_WIZARD_CONFIG_TOKEN,
                    useValue: ngWizardConfig
                }
            ]
        };
    }
};
NgWizardModule = NgWizardModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
        exports: [NgWizardComponent, NgWizardStepComponent]
    })
], NgWizardModule);
export { NgWizardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL25nLXdpemFyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBTzdELElBQWEsY0FBYyxzQkFBM0IsTUFBYSxjQUFjO0lBQ3pCOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBOEI7UUFDM0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CO29CQUNFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQy9CLFFBQVEsRUFBRSxjQUFjO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbEJZLGNBQWM7SUFMMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLDRCQUE0QixDQUFDO1FBQ3RGLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHFCQUFxQixDQUFDO0tBQ3BELENBQUM7R0FDVyxjQUFjLENBa0IxQjtTQWxCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nV2l6YXJkQ29uZmlnIH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBOR19XSVpBUkRfQ09ORklHX1RPS0VOIH0gZnJvbSAnLi9uZy13aXphcmQtY29uZmlnLnRva2VuJztcbmltcG9ydCB7IE5nV2l6YXJkU3RlcENvbXBvbmVudCB9IGZyb20gJy4vd2l6YXJkLXN0ZXAvbmctd2l6YXJkLXN0ZXAuY29tcG9uZW50JztcbmltcG9ydCB7IE5nV2l6YXJkQ29tcG9uZW50IH0gZnJvbSAnLi93aXphcmQvbmctd2l6YXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ1dpemFyZFN0ZXBDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy13aXphcmQtc3RlcC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQge05nV2l6YXJkU2VydmljZX0gZnJvbSBcIi4vbmctd2l6YXJkLnNlcnZpY2VcIjtcbmltcG9ydCB7TmdXaXphcmREYXRhU2VydmljZX0gZnJvbSBcIi4vbmctd2l6YXJkLWRhdGEuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTmdXaXphcmRDb21wb25lbnQsIE5nV2l6YXJkU3RlcENvbXBvbmVudCwgTmdXaXphcmRTdGVwQ29udGVudERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ1dpemFyZENvbXBvbmVudCwgTmdXaXphcmRTdGVwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ1dpemFyZE1vZHVsZSB7XG4gIC8qKlxuICAgKiBmb3JSb290XG4gICAqIEByZXR1cm5zIEEgbW9kdWxlIHdpdGggaXRzIHByb3ZpZGVyIGRlcGVuZGVuY2llc1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QobmdXaXphcmRDb25maWc6IE5nV2l6YXJkQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ1dpemFyZE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdXaXphcmRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTmdXaXphcmRTZXJ2aWNlLFxuICAgICAgICBOZ1dpemFyZERhdGFTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTkdfV0laQVJEX0NPTkZJR19UT0tFTixcbiAgICAgICAgICB1c2VWYWx1ZTogbmdXaXphcmRDb25maWdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==