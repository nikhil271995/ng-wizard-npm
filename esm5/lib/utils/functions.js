import { __values } from "tslib";
// https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
// Merge a `source` object to a `target` recursively
export function merge(target, source) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQWlFO0FBQ2pFLG9EQUFvRDtBQUNwRCxNQUFNLFVBQVUsS0FBSyxDQUFDLE1BQVcsRUFBRSxNQUFXOzs7UUFDMUMsbUhBQW1IO1FBQ25ILEtBQWdCLElBQUEsS0FBQSxTQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7WUFBaEMsSUFBSSxHQUFHLFdBQUE7WUFDUixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtnQkFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1NBQ0o7Ozs7Ozs7OztJQUVELHNDQUFzQztJQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFcEMsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2FodGN4LzBjZDk0ZTYyNjkxZjUzOTE2MGIzMmVjZGExOGFmM2Q2XG4vLyBNZXJnZSBhIGBzb3VyY2VgIG9iamVjdCB0byBhIGB0YXJnZXRgIHJlY3Vyc2l2ZWx5XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UodGFyZ2V0OiBhbnksIHNvdXJjZTogYW55KSB7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGBzb3VyY2VgIHByb3BlcnRpZXMgYW5kIGlmIGFuIGBPYmplY3RgIHNldCBwcm9wZXJ0eSB0byBtZXJnZSBvZiBgdGFyZ2V0YCBhbmQgYHNvdXJjZWAgcHJvcGVydGllc1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgIGlmIChzb3VyY2Vba2V5XSBpbnN0YW5jZW9mIE9iamVjdCAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNvdXJjZVtrZXldLCBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEpvaW4gYHRhcmdldGAgYW5kIG1vZGlmaWVkIGBzb3VyY2VgXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQgfHwge30sIHNvdXJjZSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufSJdfQ==