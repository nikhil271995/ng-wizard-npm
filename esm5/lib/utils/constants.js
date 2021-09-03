import { TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION /*, TRANSITION_EFFECT*/, THEME } from './enums';
export var DEFAULT_CONFIG = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLENBQUEsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRWxHLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBbUI7SUFDMUMsUUFBUSxFQUFFLENBQUM7SUFDWCxhQUFhLEVBQUUsSUFBSTtJQUNuQixVQUFVLEVBQUUsS0FBSztJQUNqQixJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsZUFBZSxFQUFFO1FBQ2IsZUFBZSxFQUFFLGdCQUFnQixDQUFDLE1BQU07UUFDeEMscUJBQXFCLEVBQUUsdUJBQXVCLENBQUMsR0FBRztRQUNsRCxjQUFjLEVBQUUsSUFBSTtRQUNwQixrQkFBa0IsRUFBRSxJQUFJO1FBQ3hCLG1CQUFtQixFQUFFLEVBQUU7S0FDMUI7SUFDRCxjQUFjLEVBQUU7UUFDWixlQUFlLEVBQUUsSUFBSTtRQUNyQixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLDBCQUEwQixFQUFFLElBQUk7UUFDaEMsNEJBQTRCLEVBQUUsS0FBSztRQUNuQyxzQkFBc0IsRUFBRSxJQUFJO0tBQy9CO0lBQ0QsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO0NBQ3ZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ1dpemFyZENvbmZpZyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUT09MQkFSX1BPU0lUSU9OLCBUT09MQkFSX0JVVFRPTl9QT1NJVElPTi8qLCBUUkFOU0lUSU9OX0VGRkVDVCovLCBUSEVNRSB9IGZyb20gJy4vZW51bXMnO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUc6IE5nV2l6YXJkQ29uZmlnID0ge1xuICAgIHNlbGVjdGVkOiAwLFxuICAgIGtleU5hdmlnYXRpb246IHRydWUsXG4gICAgY3ljbGVTdGVwczogZmFsc2UsXG4gICAgbGFuZzoge1xuICAgICAgICBuZXh0OiAnTmV4dCcsXG4gICAgICAgIHByZXZpb3VzOiAnUHJldmlvdXMnXG4gICAgfSxcbiAgICB0b29sYmFyU2V0dGluZ3M6IHtcbiAgICAgICAgdG9vbGJhclBvc2l0aW9uOiBUT09MQkFSX1BPU0lUSU9OLmJvdHRvbSxcbiAgICAgICAgdG9vbGJhckJ1dHRvblBvc2l0aW9uOiBUT09MQkFSX0JVVFRPTl9QT1NJVElPTi5lbmQsXG4gICAgICAgIHNob3dOZXh0QnV0dG9uOiB0cnVlLFxuICAgICAgICBzaG93UHJldmlvdXNCdXR0b246IHRydWUsXG4gICAgICAgIHRvb2xiYXJFeHRyYUJ1dHRvbnM6IFtdXG4gICAgfSxcbiAgICBhbmNob3JTZXR0aW5nczoge1xuICAgICAgICBhbmNob3JDbGlja2FibGU6IHRydWUsXG4gICAgICAgIGVuYWJsZUFsbEFuY2hvcnM6IGZhbHNlLFxuICAgICAgICBtYXJrRG9uZVN0ZXA6IHRydWUsXG4gICAgICAgIG1hcmtBbGxQcmV2aW91c1N0ZXBzQXNEb25lOiB0cnVlLFxuICAgICAgICByZW1vdmVEb25lU3RlcE9uTmF2aWdhdGVCYWNrOiBmYWxzZSxcbiAgICAgICAgZW5hYmxlQW5jaG9yT25Eb25lU3RlcDogdHJ1ZVxuICAgIH0sXG4gICAgdGhlbWU6IFRIRU1FLmRlZmF1bHQsXG59OyJdfQ==