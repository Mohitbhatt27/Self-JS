### console.log isn’t in the JavaScript language

what is called JavaScript on the Browser/Server, it is usually the JavaScript Environment. And this Environment is hardly just the Javascript Language Runtime (running on Javascript Engine i.e. V8 on Chrome and NodeJS, SpiderMonkey on Firefox)

JavaScript Environment = JavaScript Runtime + Event Loop + External API + Callback Queue

The console object is a Web API provided by the Browser to the JavaScript Engine, much like DOM, Fetch, History, Service Workers and Web Storage APIs. This makes perfect sense when you consider the fact that as a language, JavaScript runs on various environments browser and server-side environments, each with its own console implementation.

The parts of JavaScript that are standard across all environments are detailed in the ECMA Specs (primitives, data types, language grammar and syntax, arithmetic and logical operations, built-in objects and functions, etc.). This means that while Array.isArray() is built into JS, setTimeout() and console aren’t.

JS is a fundamentally single threaded, synchronous language.

Any parts that are asynchronous (setTimeout, setInterval etc.) are implemented by and work via. the execution environment

JavaScript executes every command synchronously, one after the other. Any statement that has a callback function (like the setTimeout) is treated no differently, but the callback function is pushed to the callback queue.

