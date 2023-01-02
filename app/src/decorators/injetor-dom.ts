export function domInject(selector: string) {
    return function(target: any, propertyKey: string) {
        const getter = function() {
            console.log(`buscando elemento do DOM com o seletor ${selector} para injetar em ${propertyKey}`);
            return document.querySelector(selector);
        }

        Object.defineProperty(target, propertyKey, { get: getter });
    }
}