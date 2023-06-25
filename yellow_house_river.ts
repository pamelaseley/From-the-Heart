// this is the beginning of our journey through Typescript

// Typescript is an open-source programming language created by Microsoft that is a superset of JavaScript. It adds optional static typing and object-oriented features to the language, making it easier for developers to write and debug code.

// To start off, we need to make sure that we're using the TypeScript compiler. This will allow us to compile our code into JavaScript so it can be run in a browser or on a server.

// We'll begin by importing the TypeScript compiler and setting the options for the compilation.

import * as ts from "typescript";

const compilerOptions: ts.CompilerOptions = {
    target: ts.ScriptTarget.ES5,
    module: ts.ModuleKind.CommonJS
};

// With our options set, we can then create our compiler instance.

const compiler = ts.createCompilerHost(compilerOptions);

// We can then start to write our actual TypeScript code. Let's define an interface and a class that implements it. 

interface Greeting {
    greeting(name: string): void;
}

class Hello implements Greeting {
    greeting(name: string) {
        console.log(`Hello, ${name}!`);
    }
}

// We can now start writing functions that use our class. Here's a function that creates a Hello instance and calls its greeting method.

const sayHello = (name: string) => {
    const hello = new Hello();
    hello.greeting(name);
};

// We can now call our function and see it work.

sayHello('John');

// Next up, let's write a function to calculate the factorial of a number.

const factorial = (x: number): number => {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
};

// And, just like before, we can test it out and see that it works.

console.log(factorial(4));

// Now that we have some basic functions written, let's move on to more advanced TypeScript features. We'll start by introducing generics.

const getValue = <T>(value: T): T => {
    return value;
};

// We can now use this generic function to retrieve values of any type.

const stringValue = getValue<string>('Hello');
console.log(stringValue);

const numberValue = getValue<number>(42);
console.log(numberValue);

// Generics are a powerful way to write functions that work for any type.

// Another useful feature of TypeScript is decorators. Decorators are a way to add additional behavior to a class or function without having to modify the underlying code.

// Let's create a function decorator to log parameters and return values of a function.

const log = <T extends Function>(
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<T>
) => {
    const original = descriptor.value;
    descriptor.value = (...args: any[]) => {
        console.log('Arguments: ', args);
        const result = original.apply(target, args);
        console.log('Result: ', result);
        return result;
    };
};

// Now that we have our decorator defined, we can use it to decorate a function.

@log
const sum = (a: number, b: number): number => {
    return a + b;
};

// When we call the sum function, we'll see its parameters and return value logged.

sum(1, 2);

// Finally, let's end this journey by looking at modules. Modules are how we can break our code into smaller, manageable pieces. 

// We'll start by creating a file for our module.

// greetings.ts
export class GreetingService {
    greeting(name: string) {
        console.log(`Hello, ${name}!`);
    }
}

// We can now import this module into our main code.

import { GreetingService } from './greetings';

const greetingService = new GreetingService();
greetingService.greeting('John');

// And that's it! From the very basics of declaring variables and writing functions to more advanced features like generics and modules, we've covered a wide range of features and capabilities provided by TypeScript.