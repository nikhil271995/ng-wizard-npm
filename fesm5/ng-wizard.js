import { __values, __assign, __decorate, __param, __metadata, __extends } from 'tslib';
import { InjectionToken, Optional, Inject, Injectable, ɵɵdefineInjectable, ɵɵinject, Input, Type, HostBinding, ViewContainerRef, Directive, ComponentFactoryResolver, ViewChild, Component, forwardRef, EventEmitter, ContentChildren, QueryList, Output, NgModule } from '@angular/core';
import { Subject, of, isObservable } from 'rxjs';
import { CommonModule } from '@angular/common';

var TOOLBAR_POSITION;
(function (TOOLBAR_POSITION) {
    TOOLBAR_POSITION["none"] = "none";
    TOOLBAR_POSITION["top"] = "top";
    TOOLBAR_POSITION["bottom"] = "bottom";
    TOOLBAR_POSITION["both"] = "both";
})(TOOLBAR_POSITION || (TOOLBAR_POSITION = {}));
var TOOLBAR_BUTTON_POSITION;
(function (TOOLBAR_BUTTON_POSITION) {
    TOOLBAR_BUTTON_POSITION["start"] = "start";
    TOOLBAR_BUTTON_POSITION["end"] = "end";
})(TOOLBAR_BUTTON_POSITION || (TOOLBAR_BUTTON_POSITION = {}));
// export enum TRANSITION_EFFECT {
//     none = 'none',
//     slide = 'slide',
//     fade = 'fade'
// }
var THEME;
(function (THEME) {
    THEME["default"] = "default";
    THEME["arrows"] = "arrows";
    THEME["circles"] = "circles";
    THEME["dots"] = "dots";
})(THEME || (THEME = {}));
var STEP_STATE;
(function (STEP_STATE) {
    STEP_STATE["normal"] = "normal";
    STEP_STATE["disabled"] = "disabled";
    STEP_STATE["error"] = "error";
    STEP_STATE["hidden"] = "hidden";
})(STEP_STATE || (STEP_STATE = {}));
var STEP_STATUS;
(function (STEP_STATUS) {
    STEP_STATUS["untouched"] = "untouched";
    STEP_STATUS["done"] = "done";
    STEP_STATUS["active"] = "active";
})(STEP_STATUS || (STEP_STATUS = {}));
var STEP_DIRECTIN;
(function (STEP_DIRECTIN) {
    STEP_DIRECTIN["forward"] = "forward";
    STEP_DIRECTIN["backward"] = "backward";
})(STEP_DIRECTIN || (STEP_DIRECTIN = {}));
var STEP_POSITION;
(function (STEP_POSITION) {
    STEP_POSITION["first"] = "first";
    STEP_POSITION["final"] = "final";
    STEP_POSITION["middle"] = "middle";
})(STEP_POSITION || (STEP_POSITION = {}));

var DEFAULT_CONFIG = {
    selected: 0,
    keyNavigation: true,
    cycleSteps: false,
    lang: {
        next: 'Next',
        previous: 'Previous'
    },
    toolbarSettings: {
        toolbarPosition: TOOLBAR_POSITION.bottom,
        toolbarButtonPosition: TOOLBAR_BUTTON_POSITION.end,
        showNextButton: true,
        showPreviousButton: true,
        toolbarExtraButtons: []
    },
    anchorSettings: {
        anchorClickable: true,
        enableAllAnchors: false,
        markDoneStep: true,
        markAllPreviousStepsAsDone: true,
        removeDoneStepOnNavigateBack: false,
        enableAnchorOnDoneStep: true
    },
    theme: THEME.default,
};

var NG_WIZARD_CONFIG_TOKEN = new InjectionToken('ngWizardCustom.config');

// https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
// Merge a `source` object to a `target` recursively
function merge(target, source) {
    var e_1, _a;
    try {
        // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            if (source[key] instanceof Object && key in target) {
                Object.assign(source[key], merge(target[key], source[key]));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}

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
    NgWizardService.ɵprov = ɵɵdefineInjectable({ factory: function NgWizardService_Factory() { return new NgWizardService(ɵɵinject(NgWizardDataService)); }, token: NgWizardService, providedIn: "root" });
    NgWizardService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [NgWizardDataService])
    ], NgWizardService);
    return NgWizardService;
}());

var NgWizardStep = /** @class */ (function () {
    function NgWizardStep() {
    }
    Object.defineProperty(NgWizardStep.prototype, "hidden", {
        get: function () {
            return this.status != STEP_STATUS.active;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NgWizardStep.prototype, "title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NgWizardStep.prototype, "description", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], NgWizardStep.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Type)
    ], NgWizardStep.prototype, "component", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NgWizardStep.prototype, "canEnter", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], NgWizardStep.prototype, "canExit", void 0);
    __decorate([
        HostBinding('hidden'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], NgWizardStep.prototype, "hidden", null);
    return NgWizardStep;
}());

var NgWizardStepContentDirective = /** @class */ (function () {
    function NgWizardStepContentDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    NgWizardStepContentDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NgWizardStepContentDirective = __decorate([
        Directive({
            selector: '[ngWizardStepContent]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], NgWizardStepContentDirective);
    return NgWizardStepContentDirective;
}());

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

var NgWizardModule = /** @class */ (function () {
    function NgWizardModule() {
    }
    NgWizardModule_1 = NgWizardModule;
    /**
     * forRoot
     * @returns A module with its provider dependencies
     */
    NgWizardModule.forRoot = function (ngWizardConfig) {
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
    };
    var NgWizardModule_1;
    NgWizardModule = NgWizardModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [NgWizardComponent, NgWizardStepComponent, NgWizardStepContentDirective],
            exports: [NgWizardComponent, NgWizardStepComponent]
        })
    ], NgWizardModule);
    return NgWizardModule;
}());

/*
 * Public API Surface of ng-wizard
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgWizardComponent, NgWizardModule, NgWizardService, NgWizardStep, NgWizardStepComponent, STEP_DIRECTIN, STEP_POSITION, STEP_STATE, THEME, TOOLBAR_BUTTON_POSITION, TOOLBAR_POSITION, NgWizardDataService as ɵa, NG_WIZARD_CONFIG_TOKEN as ɵb, NgWizardStepContentDirective as ɵc };
//# sourceMappingURL=ng-wizard.js.map
