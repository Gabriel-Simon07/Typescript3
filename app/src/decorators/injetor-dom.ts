export function domInject(selector: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        const getter = function() {
            return document.querySelector(selector);
        }
    }
}