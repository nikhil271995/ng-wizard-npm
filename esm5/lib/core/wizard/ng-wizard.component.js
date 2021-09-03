import { __decorate, __metadata } from "tslib";
import { Component, Input, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { isObservable, of } from 'rxjs';
import { NgWizardDataService } from '../ng-wizard-data.service';
import { NgWizardStep } from '../../utils/interfaces';
import { TOOLBAR_POSITION, STEP_STATE, STEP_STATUS, STEP_DIRECTIN, STEP_POSITION } from '../../utils/enums';
import { merge } from '../../utils/functions';
var NgWizardComponent = /** @class */ (function () {
    function NgWizardComponent(ngWizardDataService) {
        this.ngWizardDataService = ngWizardDataService;
        this.stepChanged = new EventEmitter();
        this.themeChanged = new EventEmitter();
        this.reseted = new EventEmitter();
        this.styles = {};
        this.showToolbarTop = false;
        this.showPreviousButton = false;
        this.showNextButton = false;
        this.showToolbarBottom = false;
        this.showExtraButtons = false;
        this.currentStepIndex = null; // Active step index
    }
    Object.defineProperty(NgWizardComponent.prototype, "pConfig", {
        get: function () {
            return this._pConfig || {};
        },
        set: function (config) {
            this._pConfig = config;
        },
        enumerable: true,
        configurable: true
    });
    NgWizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._backupStepStates();
        this._init();
        // Set toolbar
        this._setToolbar();
        // Assign plugin events
        this._setEvents();
        this.resetWizardWatcher = this.ngWizardDataService.resetWizard$.subscribe(function () { return _this._reset(); });
        this.showNextStepWatcher = this.ngWizardDataService.showNextStep$.subscribe(function () { return _this._showNextStep(); });
        this.showPreviousStepWatcher = this.ngWizardDataService.showPreviousStep$.subscribe(function () { return _this._showPreviousStep(); });
        this.showStepWatcher = this.ngWizardDataService.showStep$.subscribe(function (index) { return _this._showStep(index); });
        this.setThemeWatcher = this.ngWizardDataService.setTheme$.subscribe(function (theme) { return _this._setTheme(theme); });
    };
    NgWizardComponent.prototype._init = function () {
        // set config
        var defaultConfig = this.ngWizardDataService.getDefaultConfig();
        this.config = merge(defaultConfig, this.pConfig);
        // set step states
        this._initSteps();
        // Set the elements
        this._initStyles();
        // Show the initial step
        this._showStep(this.config.selected);
    };
    NgWizardComponent.prototype._initSteps = function () {
        var _this = this;
        this.steps.forEach(function (step, index) {
            step.index = index;
            step.status = step.status || STEP_STATUS.untouched;
            step.state = step.state || STEP_STATE.normal;
        });
        // Mark previous steps of the active step as done
        if (this.config.selected > 0
            && this.config.anchorSettings.markDoneStep
            && this.config.anchorSettings.markAllPreviousStepsAsDone) {
            this.steps.forEach(function (step) {
                if (step.state != STEP_STATE.disabled && step.state != STEP_STATE.hidden) {
                    step.status = step.index < _this.config.selected ? STEP_STATUS.done : step.status;
                }
            });
        }
    };
    NgWizardComponent.prototype._backupStepStates = function () {
        this.steps.forEach(function (step) {
            step.initialStatus = step.status;
            step.initialState = step.state;
        });
    };
    NgWizardComponent.prototype._restoreStepStates = function () {
        this.steps.forEach(function (step) {
            step.status = step.initialStatus;
            step.state = step.initialState;
        });
    };
    // PRIVATE FUNCTIONS
    NgWizardComponent.prototype._initStyles = function () {
        // Set the main element
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Set anchor elements
        this.styles.step = 'nav-item'; // li
        // Make the anchor clickable
        if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
            this.styles.step += ' clickable';
        }
        // Set the toolbar styles
        this.styles.toolbarTop = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-top justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        this.styles.toolbarBottom = 'btn-toolbar ng-wizard-toolbar ng-wizard-toolbar-bottom justify-content-' + this.config.toolbarSettings.toolbarButtonPosition;
        // Set previous&next buttons 
        this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
        this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
    };
    NgWizardComponent.prototype._setToolbar = function () {
        this.showToolbarTop = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.top ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showToolbarBottom = this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.bottom ||
            this.config.toolbarSettings.toolbarPosition == TOOLBAR_POSITION.both;
        this.showPreviousButton = this.config.toolbarSettings.showPreviousButton;
        this.showNextButton = this.config.toolbarSettings.showNextButton;
        this.showExtraButtons = this.config.toolbarSettings.toolbarExtraButtons && this.config.toolbarSettings.toolbarExtraButtons.length > 0;
    };
    NgWizardComponent.prototype._setEvents = function () {
        //TODO: keyNavigation
        // Keyboard navigation event
        if (this.config.keyNavigation) {
            // $(document).keyup(function (e) {
            //   mi._keyNav(e);
            // });
        }
    };
    NgWizardComponent.prototype._getStepCssClass = function (selectedStep) {
        var stepClass = this.styles.step;
        switch (selectedStep.state) {
            case STEP_STATE.disabled:
                stepClass += ' disabled';
                break;
            case STEP_STATE.error:
                stepClass += ' danger';
                break;
            case STEP_STATE.hidden:
                stepClass += ' hidden';
                break;
        }
        switch (selectedStep.status) {
            case STEP_STATUS.done:
                stepClass += ' done';
                break;
            case STEP_STATUS.active:
                stepClass += ' active';
                break;
        }
        return stepClass;
    };
    NgWizardComponent.prototype._showSelectedStep = function (event, selectedStep) {
        event.preventDefault();
        if (!this.config.anchorSettings.anchorClickable) {
            return;
        }
        if (!this.config.anchorSettings.enableAnchorOnDoneStep && selectedStep.status == STEP_STATUS.done) {
            return true;
        }
        if (selectedStep.index != this.currentStepIndex) {
            if (this.config.anchorSettings.enableAllAnchors && this.config.anchorSettings.anchorClickable) {
                this._showStep(selectedStep.index);
            }
            else {
                if (selectedStep.status == STEP_STATUS.done) {
                    this._showStep(selectedStep.index);
                }
            }
        }
    };
    NgWizardComponent.prototype._showNextStep = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        // Find the next not disabled & hidden step
        var filteredSteps = this.steps.filter(function (step) {
            return step.index > (_this.currentStepIndex == null ? -1 : _this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(0);
        }
        else {
            this._showStep(filteredSteps.shift().index);
        }
    };
    NgWizardComponent.prototype._showPreviousStep = function (event) {
        var _this = this;
        if (event) {
            event.preventDefault();
        }
        // Find the previous not disabled & hidden step
        var filteredSteps = this.steps.filter(function (step) {
            return step.index < (_this.currentStepIndex == null && _this.config.cycleSteps ? _this.steps.length : _this.currentStepIndex)
                && step.state != STEP_STATE.disabled
                && step.state != STEP_STATE.hidden;
        });
        if (filteredSteps.length == 0) {
            if (!this.config.cycleSteps) {
                return;
            }
            this._showStep(this.steps.length - 1);
        }
        else {
            this._showStep(filteredSteps.pop().index);
        }
    };
    NgWizardComponent.prototype._showStep = function (selectedStepIndex) {
        var _this = this;
        // If step not found, skip
        if (selectedStepIndex >= this.steps.length || selectedStepIndex < 0) {
            return;
        }
        // If current step is requested again, skip
        if (selectedStepIndex == this.currentStepIndex) {
            return;
        }
        var selectedStep = this.steps.toArray()[selectedStepIndex];
        // If it is a disabled or hidden step, skip
        if (selectedStep.state == STEP_STATE.disabled || selectedStep.state == STEP_STATE.hidden) {
            return;
        }
        this._showLoader();
        return this._isStepChangeValid(selectedStep, this.currentStep && this.currentStep.canExit).toPromise()
            .then(function (isValid) {
            if (isValid) {
                return _this._isStepChangeValid(selectedStep, selectedStep.canEnter).toPromise();
            }
            return of(isValid).toPromise();
        })
            .then(function (isValid) {
            if (isValid) {
                // Load step content
                _this._loadStepContent(selectedStep);
            }
        })
            .finally(function () { return _this._hideLoader(); });
    };
    NgWizardComponent.prototype._isStepChangeValid = function (selectedStep, condition) {
        if (typeof condition === typeof true) {
            return of(condition);
        }
        else if (condition instanceof Function) {
            var direction = this._getStepDirection(selectedStep.index);
            var result = condition({ direction: direction, fromStep: this.currentStep, toStep: selectedStep });
            if (isObservable(result)) {
                return result;
            }
            else if (typeof result === typeof true) {
                return of(result);
            }
            else {
                return of(false);
            }
        }
        return of(true);
    };
    NgWizardComponent.prototype._loadStepContent = function (selectedStep) {
        // Update controls
        this._setAnchor(selectedStep);
        // Set the buttons based on the step
        this._setButtons(selectedStep.index);
        // Trigger "stepChanged" event
        var args = {
            step: selectedStep,
            previousStep: this.currentStep,
            direction: this._getStepDirection(selectedStep.index),
            position: this._getStepPosition(selectedStep.index)
        };
        this.stepChanged.emit(args);
        this.ngWizardDataService.stepChanged(args);
        // Update the current index
        this.currentStepIndex = selectedStep.index;
        this.currentStep = selectedStep;
    };
    NgWizardComponent.prototype._setAnchor = function (selectedStep) {
        // Current step anchor > Remove other classes and add done class
        if (this.currentStep) {
            this.currentStep.status = STEP_STATUS.untouched;
            if (this.config.anchorSettings.markDoneStep) {
                this.currentStep.status = STEP_STATUS.done;
                if (this.config.anchorSettings.removeDoneStepOnNavigateBack) {
                    this.steps.forEach(function (step) {
                        if (step.index > selectedStep.index) {
                            step.status = STEP_STATUS.untouched;
                        }
                    });
                }
            }
        }
        // Next step anchor > Remove other classes and add active class
        selectedStep.status = STEP_STATUS.active;
    };
    NgWizardComponent.prototype._setButtons = function (index) {
        // Previous/Next Button enable/disable based on step
        if (!this.config.cycleSteps) {
            if (0 >= index) {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev disabled';
            }
            else {
                this.styles.previousButton = 'btn btn-secondary ng-wizard-btn-prev';
            }
            if (this.steps.length - 1 <= index) {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next disabled';
            }
            else {
                this.styles.nextButton = 'btn btn-secondary ng-wizard-btn-next';
            }
        }
    };
    NgWizardComponent.prototype._extraButtonClicked = function (button) {
        if (button.event) {
            button.event();
        }
    };
    // HELPER FUNCTIONS
    NgWizardComponent.prototype._keyNav = function (event) {
        // Keyboard navigation
        switch (event.which) {
            case 37:
                // left
                this._showPreviousStep(event);
                event.preventDefault();
                break;
            case 39:
                // right
                this._showNextStep(event);
                event.preventDefault();
                break;
            default:
                return; // exit this handler for other keys
        }
    };
    NgWizardComponent.prototype._showLoader = function () {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme + ' ng-wizard-loading';
    };
    NgWizardComponent.prototype._hideLoader = function () {
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
    };
    NgWizardComponent.prototype._getStepDirection = function (selectedStepIndex) {
        return (this.currentStepIndex != null && this.currentStepIndex != selectedStepIndex) ?
            (this.currentStepIndex < selectedStepIndex ? STEP_DIRECTIN.forward : STEP_DIRECTIN.backward) : null;
    };
    NgWizardComponent.prototype._getStepPosition = function (selectedStepIndex) {
        return (selectedStepIndex == 0) ? STEP_POSITION.first : (selectedStepIndex == this.steps.length - 1 ? STEP_POSITION.final : STEP_POSITION.middle);
    };
    // PUBLIC FUNCTIONS
    NgWizardComponent.prototype._setTheme = function (theme) {
        if (this.config.theme == theme) {
            return false;
        }
        this.config.theme = theme;
        this.styles.main = 'ng-wizard-main ng-wizard-theme-' + this.config.theme;
        // Trigger "themeChanged" event
        this.themeChanged.emit(this.config.theme);
    };
    NgWizardComponent.prototype._reset = function () {
        // Reset all elements and classes
        this.currentStepIndex = null;
        this.currentStep = null;
        this._restoreStepStates();
        this._init();
        // Trigger "reseted" event
        this.reseted.emit();
    };
    NgWizardComponent.prototype.ngOnDestroy = function () {
        if (this.resetWizardWatcher) {
            this.resetWizardWatcher.unsubscribe();
        }
        if (this.showNextStepWatcher) {
            this.showNextStepWatcher.unsubscribe();
        }
        if (this.showPreviousStepWatcher) {
            this.showPreviousStepWatcher.unsubscribe();
        }
        if (this.showStepWatcher) {
            this.showStepWatcher.unsubscribe();
        }
        if (this.setThemeWatcher) {
            this.setThemeWatcher.unsubscribe();
        }
    };
    NgWizardComponent.ctorParameters = function () { return [
        { type: NgWizardDataService }
    ]; };
    __decorate([
        ContentChildren(NgWizardStep),
        __metadata("design:type", QueryList)
    ], NgWizardComponent.prototype, "steps", void 0);
    __decorate([
        Input('config'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], NgWizardComponent.prototype, "pConfig", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "stepChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "themeChanged", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], NgWizardComponent.prototype, "reseted", void 0);
    NgWizardComponent = __decorate([
        Component({
            selector: 'ng-wizard',
            template: "<div id=\"ngwizard\" [ngClass]=\"styles.main\">\n    <ul class=\"nav nav-tabs step-anchor\">\n        <li *ngFor=\"let step of steps; let i = index\" [ngClass]=\"_getStepCssClass(step)\">\n            <a href=\"#step-{{ i }}\" (click)=\"_showSelectedStep($event, step)\" *ngIf=\"!step.isHidden\"\n                class=\"nav-link\">{{ step.title }}<br /><small>{{ step.description }}</small></a>\n        </li>\n    </ul>\n\n    <div *ngIf=\"showToolbarTop\" [ngClass]=\"styles.toolbarTop\">\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\n        </div>\n\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\n        </div>\n    </div>\n\n    <div class=\"ng-wizard-container tab-content\">\n        <ng-content></ng-content>\n    </div>\n\n    <div *ngIf=\"showToolbarBottom\" [ngClass]=\"styles.toolbarBottom\">\n        <div class=\"btn-group mr-2 ng-wizard-btn-group\" role=\"group\">\n            <button *ngIf=\"showPreviousButton\" [ngClass]=\"styles.previousButton\" type=\"button\"\n                (click)=\"_showPreviousStep($event)\">{{ config!.lang!.previous }}</button>\n            <button *ngIf=\"showNextButton\" [ngClass]=\"styles.nextButton\" type=\"button\"\n                (click)=\"_showNextStep($event)\">{{ config!.lang!.next }}</button>\n        </div>\n\n        <div *ngIf=\"showExtraButtons\" class=\"btn-group mr-2 ng-wizard-btn-group-extra\" role=\"group\">\n            <button *ngFor=\"let button of config!.toolbarSettings!.toolbarExtraButtons; let j = index\"\n                [ngClass]=\"button.class\" type=\"button\" (click)=\"_extraButtonClicked(button)\">{{ button.text }}</button>\n        </div>\n    </div>\n</div>",
            styles: [""]
        }),
        __metadata("design:paramtypes", [NgWizardDataService])
    ], NgWizardComponent);
    return NgWizardComponent;
}());
export { NgWizardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXdpemFyZC8iLCJzb3VyY2VzIjpbImxpYi9jb3JlL3dpemFyZC9uZy13aXphcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixLQUFLLEVBQWEsWUFBWSxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hJLE9BQU8sRUFBRSxZQUFZLEVBQTBCLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDaEUsT0FBTyxFQUFrQixZQUFZLEVBQXNELE1BQU0sd0JBQXdCLENBQUM7QUFDMUgsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQVMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ILE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU85QztJQTRDRSwyQkFBb0IsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUEzQmxELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDbEQsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO1FBQ3pDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRTdDLFdBQU0sR0FPRixFQUFFLENBQUM7UUFFUCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxxQkFBZ0IsR0FBVyxJQUFJLENBQUMsQ0FBQyxvQkFBb0I7SUFVckQsQ0FBQztJ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LE1BQU0sRUFBRTs7c0RBQW9DO0lBbkJsQyxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIseXpFQUF5Qzs7U0FFMUMsQ0FBQzt5Q0E2Q3lDLG1CQUFtQjtPQTVDakQsaUJBQWlCLENBZ2Q3QjtJQUFELHdCQUFDO0NBQUEsQUFoZEQsSUFnZEM7U0FoZFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlckNvbnRlbnRJbml0LCBJbnB1dCwgT25EZXN0cm95LCBFdmVudEVtaXR0ZXIsIE91dHB1dCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgb2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOZ1dpemFyZERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbmctd2l6YXJkLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBOZ1dpemFyZENvbmZpZywgTmdXaXphcmRTdGVwLCBUb29sYmFyQnV0dG9uLCBTdGVwQ2hhbmdlZEFyZ3MsIFN0ZXBWYWxpZGF0aW9uQXJncyB9IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgVE9PTEJBUl9QT1NJVElPTiwgU1RFUF9TVEFURSwgU1RFUF9TVEFUVVMsIFRIRU1FLCBTVEVQX0RJUkVDVElOLCBTVEVQX1BPU0lUSU9OIH0gZnJvbSAnLi4vLi4vdXRpbHMvZW51bXMnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICcuLi8uLi91dGlscy9mdW5jdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy13aXphcmQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctd2l6YXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctd2l6YXJkLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTmdXaXphcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oTmdXaXphcmRTdGVwKVxuICBwdWJsaWMgc3RlcHM6IFF1ZXJ5TGlzdDxOZ1dpemFyZFN0ZXA+O1xuXG4gIF9wQ29uZmlnOiBOZ1dpemFyZENvbmZpZztcbiAgZ2V0IHBDb25maWcoKTogTmdXaXphcmRDb25maWcge1xuICAgIHJldHVybiB0aGlzLl9wQ29uZmlnIHx8IHt9O1xuICB9XG5cbiAgQElucHV0KCdjb25maWcnKVxuICBzZXQgcENvbmZpZyhjb25maWc6IE5nV2l6YXJkQ29uZmlnKSB7XG4gICAgdGhpcy5fcENvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGNvbmZpZzogTmdXaXphcmRDb25maWc7XG5cbiAgQE91dHB1dCgpIHN0ZXBDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxTdGVwQ2hhbmdlZEFyZ3M+KCk7XG4gIEBPdXRwdXQoKSB0aGVtZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRIRU1FPigpO1xuICBAT3V0cHV0KCkgcmVzZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBzdHlsZXM6IHtcbiAgICBtYWluPzogc3RyaW5nO1xuICAgIHN0ZXA/OiBzdHJpbmc7XG4gICAgcHJldmlvdXNCdXR0b24/OiBzdHJpbmc7XG4gICAgbmV4dEJ1dHRvbj86IHN0cmluZztcbiAgICB0b29sYmFyVG9wPzogc3RyaW5nO1xuICAgIHRvb2xiYXJCb3R0b20/OiBzdHJpbmc7XG4gIH0gPSB7fTtcblxuICBzaG93VG9vbGJhclRvcDogYm9vbGVhbiA9IGZhbHNlO1xuICBzaG93UHJldmlvdXNCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd05leHRCdXR0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd1Rvb2xiYXJCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcbiAgc2hvd0V4dHJhQnV0dG9uczogYm9vbGVhbiA9IGZhbHNlO1xuICBjdXJyZW50U3RlcEluZGV4OiBudW1iZXIgPSBudWxsOyAvLyBBY3RpdmUgc3RlcCBpbmRleFxuICBjdXJyZW50U3RlcDogTmdXaXphcmRTdGVwOyAvLyBBY3RpdmUgc3RlcFxuXG4gIHJlc2V0V2l6YXJkV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xuICBzaG93TmV4dFN0ZXBXYXRjaGVyOiBTdWJzY3JpcHRpb247XG4gIHNob3dQcmV2aW91c1N0ZXBXYXRjaGVyOiBTdWJzY3JpcHRpb247XG4gIHNob3dTdGVwV2F0Y2hlcjogU3Vic2NyaXB0aW9uO1xuICBzZXRUaGVtZVdhdGNoZXI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nV2l6YXJkRGF0YVNlcnZpY2U6IE5nV2l6YXJkRGF0YVNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLl9iYWNrdXBTdGVwU3RhdGVzKCk7XG5cbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAvLyBTZXQgdG9vbGJhclxuICAgIHRoaXMuX3NldFRvb2xiYXIoKTtcblxuICAgIC8vIEFzc2lnbiBwbHVnaW4gZXZlbnRzXG4gICAgdGhpcy5fc2V0RXZlbnRzKCk7XG5cbiAgICB0aGlzLnJlc2V0V2l6YXJkV2F0Y2hlciA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5yZXNldFdpemFyZCQuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3Jlc2V0KCkpO1xuICAgIHRoaXMuc2hvd05leHRTdGVwV2F0Y2hlciA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93TmV4dFN0ZXAkLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zaG93TmV4dFN0ZXAoKSk7XG4gICAgdGhpcy5zaG93UHJldmlvdXNTdGVwV2F0Y2hlciA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93UHJldmlvdXNTdGVwJC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc2hvd1ByZXZpb3VzU3RlcCgpKTtcbiAgICB0aGlzLnNob3dTdGVwV2F0Y2hlciA9IHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zaG93U3RlcCQuc3Vic2NyaWJlKGluZGV4ID0+IHRoaXMuX3Nob3dTdGVwKGluZGV4KSk7XG4gICAgdGhpcy5zZXRUaGVtZVdhdGNoZXIgPSB0aGlzLm5nV2l6YXJkRGF0YVNlcnZpY2Uuc2V0VGhlbWUkLnN1YnNjcmliZSh0aGVtZSA9PiB0aGlzLl9zZXRUaGVtZSh0aGVtZSkpO1xuICB9XG5cbiAgX2luaXQoKSB7XG4gICAgLy8gc2V0IGNvbmZpZ1xuICAgIGxldCBkZWZhdWx0Q29uZmlnID0gdGhpcy5uZ1dpemFyZERhdGFTZXJ2aWNlLmdldERlZmF1bHRDb25maWcoKTtcbiAgICB0aGlzLmNvbmZpZyA9IG1lcmdlKGRlZmF1bHRDb25maWcsIHRoaXMucENvbmZpZyk7XG5cbiAgICAvLyBzZXQgc3RlcCBzdGF0ZXNcbiAgICB0aGlzLl9pbml0U3RlcHMoKTtcblxuICAgIC8vIFNldCB0aGUgZWxlbWVudHNcbiAgICB0aGlzLl9pbml0U3R5bGVzKCk7XG5cbiAgICAvLyBTaG93IHRoZSBpbml0aWFsIHN0ZXBcbiAgICB0aGlzLl9zaG93U3RlcCh0aGlzLmNvbmZpZy5zZWxlY3RlZCk7XG4gIH1cblxuICBfaW5pdFN0ZXBzKCkge1xuICAgIHRoaXMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgIHN0ZXAuaW5kZXggPSBpbmRleDtcbiAgICAgIHN0ZXAuc3RhdHVzID0gc3RlcC5zdGF0dXMgfHwgU1RFUF9TVEFUVVMudW50b3VjaGVkO1xuICAgICAgc3RlcC5zdGF0ZSA9IHN0ZXAuc3RhdGUgfHwgU1RFUF9TVEFURS5ub3JtYWw7XG4gICAgfSk7XG5cbiAgICAvLyBNYXJrIHByZXZpb3VzIHN0ZXBzIG9mIHRoZSBhY3RpdmUgc3RlcCBhcyBkb25lXG4gICAgaWYgKHRoaXMuY29uZmlnLnNlbGVjdGVkID4gMFxuICAgICAgJiYgdGhpcy5jb25maWcuYW5jaG9yU2V0dGluZ3MubWFya0RvbmVTdGVwXG4gICAgICAmJiB0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5tYXJrQWxsUHJldmlvdXNTdGVwc0FzRG9uZSkge1xuXG4gICAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICAgIGlmIChzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuZGlzYWJsZWQgJiYgc3RlcC5zdGF0ZSAhPSBTVEVQX1NUQVRFLmhpZGRlbikge1xuICAgICAgICAgIHN0ZXAuc3RhdHVzID0gc3RlcC5pbmRleCA8IHRoaXMuY29uZmlnLnNlbGVjdGVkID8gU1RFUF9TVEFUVVMuZG9uZSA6IHN0ZXAuc3RhdHVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfYmFja3VwU3RlcFN0YXRlcygpIHtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLmluaXRpYWxTdGF0dXMgPSBzdGVwLnN0YXR1cztcbiAgICAgIHN0ZXAuaW5pdGlhbFN0YXRlID0gc3RlcC5zdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIF9yZXN0b3JlU3RlcFN0YXRlcygpIHtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XG4gICAgICBzdGVwLnN0YXR1cyA9IHN0ZXAuaW5pdGlhbFN0YXR1cztcbiAgICAgIHN0ZXAuc3RhdGUgPSBzdGVwLmluaXRpYWxTdGF0ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIF9pbml0U3R5bGVzKCkge1xuICAgIC8vIFNldCB0aGUgbWFpbiBlbGVtZW50XG4gICAgdGhpcy5zdHlsZXMubWFpbiA9ICduZy13aXphcmQtbWFpbiBuZy13aXphcmQtdGhlbWUtJyArIHRoaXMuY29uZmlnLnRoZW1lO1xuXG4gICAgLy8gU2V0IGFuY2hvciBlbGVtZW50c1xuICAgIHRoaXMuc3R5bGVzLnN0ZXAgPSAnbmF2LWl0ZW0nOyAvLyBsaVxuXG4gICAgLy8gTWFrZSB0aGUgYW5jaG9yIGNsaWNrYWJsZVxuICAgIGlmICh0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5lbmFibGVBbGxBbmNob3JzICYmIHRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLmFuY2hvckNsaWNrYWJsZSkge1xuICAgICAgdGhpcy5zdHlsZXMuc3RlcCArPSAnIGNsaWNrYWJsZSc7XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSB0b29sYmFyIHN0eWxlc1xuICAgIHRoaXMuc3R5bGVzLnRvb2xiYXJUb3AgPSAnYnRuLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXIgbmctd2l6YXJkLXRvb2xiYXItdG9wIGp1c3RpZnktY29udGVudC0nICsgdGhpcy5jb25maWcudG9vbGJhclNldHRpbmdzLnRvb2xiYXJCdXR0b25Qb3NpdGlvbjtcbiAgICB0aGlzLnN0eWxlcy50b29sYmFyQm90dG9tID0gJ2J0bi10b29sYmFyIG5nLXdpemFyZC10b29sYmFyIG5nLXdpemFyZC10b29sYmFyLWJvdHRvbSBqdXN0aWZ5LWNvbnRlbnQtJyArIHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyQnV0dG9uUG9zaXRpb247XG5cbiAgICAvLyBTZXQgcHJldmlvdXMmbmV4dCBidXR0b25zIFxuICAgIHRoaXMuc3R5bGVzLnByZXZpb3VzQnV0dG9uID0gJ2J0biBidG4tc2Vjb25kYXJ5IG5nLXdpemFyZC1idG4tcHJldic7XG4gICAgdGhpcy5zdHlsZXMubmV4dEJ1dHRvbiA9ICdidG4gYnRuLXNlY29uZGFyeSBuZy13aXphcmQtYnRuLW5leHQnO1xuICB9XG5cbiAgX3NldFRvb2xiYXIoKSB7XG4gICAgdGhpcy5zaG93VG9vbGJhclRvcCA9IHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi50b3AgfHxcbiAgICAgIHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi5ib3RoO1xuXG4gICAgdGhpcy5zaG93VG9vbGJhckJvdHRvbSA9IHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi5ib3R0b20gfHxcbiAgICAgIHRoaXMuY29uZmlnLnRvb2xiYXJTZXR0aW5ncy50b29sYmFyUG9zaXRpb24gPT0gVE9PTEJBUl9QT1NJVElPTi5ib3RoO1xuXG4gICAgdGhpcy5zaG93UHJldmlvdXNCdXR0b24gPSB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3Muc2hvd1ByZXZpb3VzQnV0dG9uO1xuICAgIHRoaXMuc2hvd05leHRCdXR0b24gPSB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3Muc2hvd05leHRCdXR0b247XG5cbiAgICB0aGlzLnNob3dFeHRyYUJ1dHRvbnMgPSB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3MudG9vbGJhckV4dHJhQnV0dG9ucyAmJiB0aGlzLmNvbmZpZy50b29sYmFyU2V0dGluZ3MudG9vbGJhckV4dHJhQnV0dG9ucy5sZW5ndGggPiAwO1xuICB9XG5cbiAgX3NldEV2ZW50cygpIHtcbiAgICAvL1RPRE86IGtleU5hdmlnYXRpb25cbiAgICAvLyBLZXlib2FyZCBuYXZpZ2F0aW9uIGV2ZW50XG4gICAgaWYgKHRoaXMuY29uZmlnLmtleU5hdmlnYXRpb24pIHtcbiAgICAgIC8vICQoZG9jdW1lbnQpLmtleXVwKGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyAgIG1pLl9rZXlOYXYoZSk7XG4gICAgICAvLyB9KTtcbiAgICB9XG4gIH1cblxuICBfZ2V0U3RlcENzc0NsYXNzKHNlbGVjdGVkU3RlcDogTmdXaXphcmRTdGVwKSB7XG4gICAgbGV0IHN0ZXBDbGFzcyA9IHRoaXMuc3R5bGVzLnN0ZXA7XG5cbiAgICBzd2l0Y2ggKHNlbGVjdGVkU3RlcC5zdGF0ZSkge1xuICAgICAgY2FzZSBTVEVQX1NUQVRFLmRpc2FibGVkOlxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkaXNhYmxlZCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVEVQX1NUQVRFLmVycm9yOlxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkYW5nZXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RFUF9TVEFURS5oaWRkZW46XG4gICAgICAgIHN0ZXBDbGFzcyArPSAnIGhpZGRlbic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN3aXRjaCAoc2VsZWN0ZWRTdGVwLnN0YXR1cykge1xuICAgICAgY2FzZSBTVEVQX1NUQVRVUy5kb25lOlxuICAgICAgICBzdGVwQ2xhc3MgKz0gJyBkb25lJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNURVBfU1RBVFVTLmFjdGl2ZTpcbiAgICAgICAgc3RlcENsYXNzICs9ICcgYWN0aXZlJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBDbGFzcztcbiAgfVxuXG4gIF9zaG93U2VsZWN0ZWRTdGVwKGV2ZW50OiBFdmVudCwgc2VsZWN0ZWRTdGVwOiBOZ1dpemFyZFN0ZXApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5hbmNob3JDbGlja2FibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLmVuYWJsZUFuY2hvck9uRG9uZVN0ZXAgJiYgc2VsZWN0ZWRTdGVwLnN0YXR1cyA9PSBTVEVQX1NUQVRVUy5kb25lKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRTdGVwLmluZGV4ICE9IHRoaXMuY3VycmVudFN0ZXBJbmRleCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmFuY2hvclNldHRpbmdzLmVuYWJsZUFsbEFuY2hvcnMgJiYgdGhpcy5jb25maWcuYW5jaG9yU2V0dGluZ3MuYW5jaG9yQ2xpY2thYmxlKSB7XG4gICAgICAgIHRoaXMuX3Nob3dTdGVwKHNlbGVjdGVkU3RlcC5pbmRleCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkU3RlcC5zdGF0dXMgPT0gU1RFUF9TVEFUVVMuZG9uZSkge1xuICAgICAgICAgIHRoaXMuX3Nob3dTdGVwKHNlbGVjdGVkU3RlcC5pbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfc2hvd05leHRTdGVwKGV2ZW50PzogRXZlbnQpIHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIEZpbmQgdGhlIG5leHQgbm90IGRpc2FibGVkICYgaGlkZGVuIHN0ZXBcbiAgICBsZXQgZmlsdGVyZWRTdGVwcyA9IHRoaXMuc3RlcHMuZmlsdGVyKHN0ZXAgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuaW5kZXggPiAodGhpcy5jdXJyZW50U3RlcEluZGV4ID09IG51bGwgPyAtMSA6IHRoaXMuY3VycmVudFN0ZXBJbmRleClcbiAgICAgICAgJiYgc3RlcC5zdGF0ZSAhPSBTVEVQX1NUQVRFLmRpc2FibGVkXG4gICAgICAgICYmIHN0ZXAuc3RhdGUgIT0gU1RFUF9TVEFURS5oaWRkZW47XG4gICAgfSk7XG5cbiAgICBpZiAoZmlsdGVyZWRTdGVwcy5sZW5ndGggPT0gMCkge1xuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5jeWNsZVN0ZXBzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fc2hvd1N0ZXAoMClcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zaG93U3RlcChmaWx0ZXJlZFN0ZXBzLnNoaWZ0KCkuaW5kZXgpXG4gICAgfVxuICB9XG5cbiAgX3Nob3dQcmV2aW91c1N0ZXAoZXZlbnQ/OiBFdmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgLy8gRmluZCB0aGUgcHJldmlvdXMgbm90IGRpc2FibGVkICYgaGlkZGVuIHN0ZXBcbiAgICBsZXQgZmlsdGVyZWRTdGVwcyA9IHRoaXMuc3RlcHMuZmlsdGVyKHN0ZXAgPT4ge1xuICAgICAgcmV0dXJuIHN0ZXAuaW5kZXggPCAodGhpcy5jdXJyZW50U3RlcEluZGV4ID09IG51bGwgJiYgdGhpcy5jb25maWcuY3ljbGVTdGVwcyA/IHRoaXMuc3RlcHMubGVuZ3RoIDogdGhpcy5jdXJyZW50U3RlcEluZGV4KVxuICAgICAgICAmJiBzdGVwLnN0YXRlICE9IFNURVBfU1RBVEUuZGlzYWJsZWRcbiAgICAgICAgJiYgc3RlcC5zdGF0ZSAhPSBTVEVQX1NUQVRFLmhpZGRlbjtcbiAgICB9KTtcblxuICAgIGlmIChmaWx0ZXJlZFN0ZXBzLmxlbmd0aCA9PSAwKSB7XG4gICAgICBpZiAoIXRoaXMuY29uZmlnLmN5Y2xlU3RlcHMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zaG93U3RlcCh0aGlzLnN0ZXBzLmxlbmd0aCAtIDEpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fc2hvd1N0ZXAoZmlsdGVyZWRTdGVwcy5wb3AoKS5pbmRleClcbiAgICB9XG4gIH1cblxuICBfc2hvd1N0ZXAoc2VsZWN0ZWRTdGVwSW5kZXg6IG51bWJlcikge1xuICAgIC8vIElmIHN0ZXAgbm90IGZvdW5kLCBza2lwXG4gICAgaWYgKHNlbGVjdGVkU3RlcEluZGV4ID49IHRoaXMuc3RlcHMubGVuZ3RoIHx8IHNlbGVjdGVkU3RlcEluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIGN1cnJlbnQgc3RlcCBpcyByZXF1ZXN0ZWQgYWdhaW4sIHNraXBcbiAgICBpZiAoc2VsZWN0ZWRTdGVwSW5kZXggPT0gdGhpcy5jdXJyZW50U3RlcEluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHNlbGVjdGVkU3RlcCA9IHRoaXMuc3RlcHMudG9BcnJheSgpW3NlbGVjdGVkU3RlcEluZGV4XTtcblxuICAgIC8vIElmIGl0IGlzIGEgZGlzYWJsZWQgb3IgaGlkZGVuIHN0ZXAsIHNraXBcbiAgICBpZiAoc2VsZWN0ZWRTdGVwLnN0YXRlID09IFNURVBfU1RBVEUuZGlzYWJsZWQgfHwgc2VsZWN0ZWRTdGVwLnN0YXRlID09IFNURVBfU1RBVEUuaGlkZGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd0xvYWRlcigpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2lzU3RlcENoYW5nZVZhbGlkKHNlbGVjdGVkU3RlcCwgdGhpcy5jdXJyZW50U3RlcCAmJiB0aGlzLmN1cnJlbnRTdGVwLmNhbkV4aXQpLnRvUHJvbWlzZSgpXG4gICAgICAudGhlbihpc1ZhbGlkID0+IHtcbiAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5faXNTdGVwQ2hhbmdlVmFsaWQoc2VsZWN0ZWRTdGVwLCBzZWxlY3RlZFN0ZXAuY2FuRW50ZXIpLnRvUHJvbWlzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9mKGlzVmFsaWQpLnRvUHJvbWlzZSgpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICBpZiAoaXNWYWxpZCkge1xuICAgICAgICAgIC8vIExvYWQgc3RlcCBjb250ZW50XG4gICAgICAgICAgdGhpcy5fbG9hZFN0ZXBDb250ZW50KHNlbGVjdGVkU3RlcCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZmluYWxseSgoKSA9PiB0aGlzLl9oaWRlTG9hZGVyKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNTdGVwQ2hhbmdlVmFsaWQoc2VsZWN0ZWRTdGVwLCBjb25kaXRpb246IGJvb2xlYW4gfCAoKGFyZ3M6IFN0ZXBWYWxpZGF0aW9uQXJncykgPT4gYm9vbGVhbikgfCAoKGFyZ3M6IFN0ZXBWYWxpZGF0aW9uQXJncykgPT4gT2JzZXJ2YWJsZTxib29sZWFuPikpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBpZiAodHlwZW9mIGNvbmRpdGlvbiA9PT0gdHlwZW9mIHRydWUpIHtcbiAgICAgIHJldHVybiBvZig8Ym9vbGVhbj5jb25kaXRpb24pO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKGNvbmRpdGlvbiBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5fZ2V0U3RlcERpcmVjdGlvbihzZWxlY3RlZFN0ZXAuaW5kZXgpO1xuICAgICAgbGV0IHJlc3VsdCA9IGNvbmRpdGlvbih7IGRpcmVjdGlvbjogZGlyZWN0aW9uLCBmcm9tU3RlcDogdGhpcy5jdXJyZW50U3RlcCwgdG9TdGVwOiBzZWxlY3RlZFN0ZXAgfSk7XG5cbiAgICAgIGlmIChpc09ic2VydmFibGU8Ym9vbGVhbj4ocmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdCA9PT0gdHlwZW9mIHRydWUpIHtcbiAgICAgICAgcmV0dXJuIG9mKDxib29sZWFuPnJlc3VsdCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2YodHJ1ZSk7XG4gIH1cblxuICBfbG9hZFN0ZXBDb250ZW50KHNlbGVjdGVkU3RlcDogTmdXaXphcmRTdGVwKSB7XG4gICAgLy8gVXBkYXRlIGNvbnRyb2xzXG4gICAgdGhpcy5fc2V0QW5jaG9yKHNlbGVjdGVkU3RlcCk7XG4gICAgLy8gU2V0IHRoZSBidXR0b25zIGJhc2VkIG9uIHRoZSBzdGVwXG4gICAgdGhpcy5fc2V0QnV0dG9ucyhzZWxlY3RlZFN0ZXAuaW5kZXgpO1xuXG4gICAgLy8gVHJpZ2dlciBcInN0ZXBDaGFuZ2VkXCIgZXZlbnRcbiAgICBjb25zdCBhcmdzID0gPFN0ZXBDaGFuZ2VkQXJncz57XG4gICAgICBzdGVwOiBzZWxlY3RlZFN0ZXAsXG4gICAgICBwcmV2aW91c1N0ZXA6IHRoaXMuY3VycmVudFN0ZXAsXG4gICAgICBkaXJlY3Rpb246IHRoaXMuX2dldFN0ZXBEaXJlY3Rpb24oc2VsZWN0ZWRTdGVwLmluZGV4KSxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLl9nZXRTdGVwUG9zaXRpb24oc2VsZWN0ZWRTdGVwLmluZGV4KVxuICAgIH07XG4gICAgdGhpcy5zdGVwQ2hhbmdlZC5lbWl0KGFyZ3MpO1xuICAgIHRoaXMubmdXaXphcmREYXRhU2VydmljZS5zdGVwQ2hhbmdlZChhcmdzKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgY3VycmVudCBpbmRleFxuICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IHNlbGVjdGVkU3RlcC5pbmRleDtcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gc2VsZWN0ZWRTdGVwO1xuICB9XG5cbiAgX3NldEFuY2hvcihzZWxlY3RlZFN0ZXA6IE5nV2l6YXJkU3RlcCkge1xuICAgIC8vIEN1cnJlbnQgc3RlcCBhbmNob3IgPiBSZW1vdmUgb3RoZXIgY2xhc3NlcyBhbmQgYWRkIGRvbmUgY2xhc3NcbiAgICBpZiAodGhpcy5jdXJyZW50U3RlcCkge1xuICAgICAgdGhpcy5jdXJyZW50U3RlcC5zdGF0dXMgPSBTVEVQX1NUQVRVUy51bnRvdWNoZWQ7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5tYXJrRG9uZVN0ZXApIHtcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcC5zdGF0dXMgPSBTVEVQX1NUQVRVUy5kb25lO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5hbmNob3JTZXR0aW5ncy5yZW1vdmVEb25lU3RlcE9uTmF2aWdhdGVCYWNrKSB7XG4gICAgICAgICAgdGhpcy5zdGVwcy5mb3JFYWNoKHN0ZXAgPT4ge1xuICAgICAgICAgICAgaWYgKHN0ZXAuaW5kZXggPiBzZWxlY3RlZFN0ZXAuaW5kZXgpIHtcbiAgICAgICAgICAgICAgc3RlcC5zdGF0dXMgPSBTVEVQX1NUQVRVUy51bnRvdWNoZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOZXh0IHN0ZXAgYW5jaG9yID4gUmVtb3ZlIG90aGVyIGNsYXNzZXMgYW5kIGFkZCBhY3RpdmUgY2xhc3NcbiAgICBzZWxlY3RlZFN0ZXAuc3RhdHVzID0gU1RFUF9TVEFUVVMuYWN0aXZlO1xuICB9XG5cbiAgX3NldEJ1dHRvbnMoaW5kZXg6IG51bWJlcikge1xuICAgIC8vIFByZXZpb3VzL05leHQgQnV0dG9uIGVuYWJsZS9kaXNhYmxlIGJhc2VkIG9uIHN0ZXBcbiAgICBpZiAoIXRoaXMuY29uZmlnLmN5Y2xlU3RlcHMpIHtcbiAgICAgIGlmICgwID49IGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3R5bGVzLnByZXZpb3VzQnV0dG9uID0gJ2J0biBidG4tc2Vjb25kYXJ5IG5nLXdpemFyZC1idG4tcHJldiBkaXNhYmxlZCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZXMucHJldmlvdXNCdXR0b24gPSAnYnRuIGJ0bi1zZWNvbmRhcnkgbmctd2l6YXJkLWJ0bi1wcmV2JztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RlcHMubGVuZ3RoIC0gMSA8PSBpbmRleCkge1xuICAgICAgICB0aGlzLnN0eWxlcy5uZXh0QnV0dG9uID0gJ2J0biBidG4tc2Vjb25kYXJ5IG5nLXdpemFyZC1idG4tbmV4dCBkaXNhYmxlZCc7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZXMubmV4dEJ1dHRvbiA9ICdidG4gYnRuLXNlY29uZGFyeSBuZy13aXphcmQtYnRuLW5leHQnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9leHRyYUJ1dHRvbkNsaWNrZWQoYnV0dG9uOiBUb29sYmFyQnV0dG9uKSB7XG4gICAgaWYgKGJ1dHRvbi5ldmVudCkge1xuICAgICAgYnV0dG9uLmV2ZW50KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSEVMUEVSIEZVTkNUSU9OU1xuICBfa2V5TmF2KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgLy8gS2V5Ym9hcmQgbmF2aWdhdGlvblxuICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICAgIC8vIGxlZnRcbiAgICAgICAgdGhpcy5fc2hvd1ByZXZpb3VzU3RlcChldmVudCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTpcbiAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgdGhpcy5fc2hvd05leHRTdGVwKGV2ZW50KTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47IC8vIGV4aXQgdGhpcyBoYW5kbGVyIGZvciBvdGhlciBrZXlzXG4gICAgfVxuICB9XG5cbiAgX3Nob3dMb2FkZXIoKSB7XG4gICAgdGhpcy5zdHlsZXMubWFpbiA9ICduZy13aXphcmQtbWFpbiBuZy13aXphcmQtdGhlbWUtJyArIHRoaXMuY29uZmlnLnRoZW1lICsgJyBuZy13aXphcmQtbG9hZGluZyc7XG4gIH1cblxuICBfaGlkZUxvYWRlcigpIHtcbiAgICB0aGlzLnN0eWxlcy5tYWluID0gJ25nLXdpemFyZC1tYWluIG5nLXdpemFyZC10aGVtZS0nICsgdGhpcy5jb25maWcudGhlbWU7XG4gIH1cblxuICBfZ2V0U3RlcERpcmVjdGlvbihzZWxlY3RlZFN0ZXBJbmRleDogbnVtYmVyKTogU1RFUF9ESVJFQ1RJTiB7XG4gICAgcmV0dXJuICh0aGlzLmN1cnJlbnRTdGVwSW5kZXggIT0gbnVsbCAmJiB0aGlzLmN1cnJlbnRTdGVwSW5kZXggIT0gc2VsZWN0ZWRTdGVwSW5kZXgpID9cbiAgICAgICh0aGlzLmN1cnJlbnRTdGVwSW5kZXggPCBzZWxlY3RlZFN0ZXBJbmRleCA/IFNURVBfRElSRUNUSU4uZm9yd2FyZCA6IFNURVBfRElSRUNUSU4uYmFja3dhcmQpIDogbnVsbDtcbiAgfVxuXG4gIF9nZXRTdGVwUG9zaXRpb24oc2VsZWN0ZWRTdGVwSW5kZXg6IG51bWJlcik6IFNURVBfUE9TSVRJT04ge1xuICAgIHJldHVybiAoc2VsZWN0ZWRTdGVwSW5kZXggPT0gMCkgPyBTVEVQX1BPU0lUSU9OLmZpcnN0IDogKHNlbGVjdGVkU3RlcEluZGV4ID09IHRoaXMuc3RlcHMubGVuZ3RoIC0gMSA/IFNURVBfUE9TSVRJT04uZmluYWwgOiBTVEVQX1BPU0lUSU9OLm1pZGRsZSk7XG4gIH1cblxuICAvLyBQVUJMSUMgRlVOQ1RJT05TXG4gIF9zZXRUaGVtZSh0aGVtZTogVEhFTUUpIHtcbiAgICBpZiAodGhpcy5jb25maWcudGhlbWUgPT0gdGhlbWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmZpZy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMuc3R5bGVzLm1haW4gPSAnbmctd2l6YXJkLW1haW4gbmctd2l6YXJkLXRoZW1lLScgKyB0aGlzLmNvbmZpZy50aGVtZTtcblxuICAgIC8vIFRyaWdnZXIgXCJ0aGVtZUNoYW5nZWRcIiBldmVudFxuICAgIHRoaXMudGhlbWVDaGFuZ2VkLmVtaXQodGhpcy5jb25maWcudGhlbWUpO1xuICB9XG5cbiAgX3Jlc2V0KCkge1xuICAgIC8vIFJlc2V0IGFsbCBlbGVtZW50cyBhbmQgY2xhc3Nlc1xuICAgIHRoaXMuY3VycmVudFN0ZXBJbmRleCA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IG51bGw7XG4gICAgdGhpcy5fcmVzdG9yZVN0ZXBTdGF0ZXMoKTtcbiAgICB0aGlzLl9pbml0KCk7XG5cbiAgICAvLyBUcmlnZ2VyIFwicmVzZXRlZFwiIGV2ZW50XG4gICAgdGhpcy5yZXNldGVkLmVtaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnJlc2V0V2l6YXJkV2F0Y2hlcikge1xuICAgICAgdGhpcy5yZXNldFdpemFyZFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG93TmV4dFN0ZXBXYXRjaGVyKSB7XG4gICAgICB0aGlzLnNob3dOZXh0U3RlcFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zaG93UHJldmlvdXNTdGVwV2F0Y2hlcikge1xuICAgICAgdGhpcy5zaG93UHJldmlvdXNTdGVwV2F0Y2hlci51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3dTdGVwV2F0Y2hlcikge1xuICAgICAgdGhpcy5zaG93U3RlcFdhdGNoZXIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXRUaGVtZVdhdGNoZXIpIHtcbiAgICAgIHRoaXMuc2V0VGhlbWVXYXRjaGVyLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=