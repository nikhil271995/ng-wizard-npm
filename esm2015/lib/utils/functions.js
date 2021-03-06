// https://gist.github.com/ahtcx/0cd94e62691f539160b32ecda18af3d6
// Merge a `source` object to a `target` recursively
export function merge(target, source) {
    // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
    for (let key of Object.keys(source)) {
        if (source[key] instanceof Object && key in target) {
            Object.assign(source[key], merge(target[key], source[key]));
        }
    }
    // Join `target` and modified `source`
    Object.assign(target || {}, source);
    return target;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctd2l6YXJkLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2Z1bmN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpRUFBaUU7QUFDakUsb0RBQW9EO0FBQ3BELE1BQU0sVUFBVSxLQUFLLENBQUMsTUFBVyxFQUFFLE1BQVc7SUFDMUMsbUhBQW1IO0lBQ25ILEtBQUssSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNqQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxNQUFNLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7S0FDSjtJQUVELHNDQUFzQztJQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFcEMsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2FodGN4LzBjZDk0ZTYyNjkxZjUzOTE2MGIzMmVjZGExOGFmM2Q2XG4vLyBNZXJnZSBhIGBzb3VyY2VgIG9iamVjdCB0byBhIGB0YXJnZXRgIHJlY3Vyc2l2ZWx5XG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UodGFyZ2V0OiBhbnksIHNvdXJjZTogYW55KSB7XG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGBzb3VyY2VgIHByb3BlcnRpZXMgYW5kIGlmIGFuIGBPYmplY3RgIHNldCBwcm9wZXJ0eSB0byBtZXJnZSBvZiBgdGFyZ2V0YCBhbmQgYHNvdXJjZWAgcHJvcGVydGllc1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICAgIGlmIChzb3VyY2Vba2V5XSBpbnN0YW5jZW9mIE9iamVjdCAmJiBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNvdXJjZVtrZXldLCBtZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEpvaW4gYHRhcmdldGAgYW5kIG1vZGlmaWVkIGBzb3VyY2VgXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQgfHwge30sIHNvdXJjZSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufSJdfQ==