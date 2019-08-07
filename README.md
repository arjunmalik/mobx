# MobX
Mobx app development comprises of four fundamental concepts/principles
1. Application State
2. Computations
3. Reactions
4. Actions

Application State
------------------
1. You define the state of your application anywhere in your app by the @observable decorator or the observable function, what it means to the mobx is that this state can produce a reaction in future, with the help of any action.
2. Only action should and will change this state.
3. This state is mutable on the contrary to Redux, which means anything that is immutable like the JS primitives, should be boxed using mobx utils.
4. Other DataStructures like array and map should also be boxed inside mobx observables, they will behave like array and map, but will not be your usual JS array/map.
For ex: please see store.js file, instance variables before constructor.

Computations
-------------
1. Computations should not produce any side effects.
2. Computations should be pure functions, and should not change the original state of the application.
3. Computations are lazily loaded, which means unless a computation is not explicitily called, they will not execute.
4. They derive their value from the state and are automatically suspended if they are no longer needed.
5. MOBX encourages to use minimal state and maximum computation because of their nature.
For ex: please see store.js file, temperatureKelvin, temperatureFahrenheit, and temperature functions.

Reactions
----------
1. Reactions always reactively triggers a side effect.
2. Observer is one such reaction, which doesn't produces value, but instead a side effect i.e. flushing a rendering to the DOM. (internally uses autorun)
For ex: please see Temperature.js file and TemperatureView.js file
3. In order to make a computed value reactive, to make them respond to the state change we have to consume them in a reaction.
4. 'When' is another such reaction, 'when' triggers a side effect whenever a condition is met.
For ex: please see store.js file, constructor.

Actions
--------
1. Any piece of code that tries to alter a state is an action, which leads to reaction.
2. Action are both implicit and explicit.
3. useStrict(true) prevents the state to get changed outside of any explicit action.
For ex: please see store.js file, increment action.

MobX: THE GOOD
---------------
1. MobX does a fairly good job to handle all the state management. Although they mention on their website:
People often use MobX as alternative for Redux. But please note that MobX is just a library to solve a technical problem and not an architecture or even state container in itself. 
But I still don't see any issue in handling states for small/medium sized apps.
2. Independent re-rendering: Parent independenltly re-renders of their child and child independently renders of their parent/siblings. Mobx does a great job by implementing shouldComponentUpdate in the background so that the component that needs to re-render will only re-render. This is important for performance of large pages where multiple child components renders.
For testing this: remove @observer decorator from TempratureView.js, and now all the component will re-render, for any change in any of the sibling components.
3. Actions can be both implict and explicit, and can also be forced to be explicit by using the keyword useStrict, so that the state change only happens through actions.
4. MOBX does fine for all the asynchronous operations like AJAX calls, setTimeout, click Listeners etc ...
For ex: please see setTimeout in Temperature.js constructor and other event listeners.

MobX: THE BAD
--------------
1. The freedom that MobX gives in the form of defining and then updating the state from anywhere in your app, can also be its downside. In large applications if the state is defined and updated from multiple places, it can bring amiguity in the flow of the application (although MobX provides the option for naming your action, which is helpful in debugging).
2. The biggest downside I felt for MobX was the documentation and community support.
For ex: To use a computed with arguments MobX documentation (https://mobx.js.org/refguide/computed-decorator.html) mentions - 
  import { observable, computed } from "mobx", computedFn is not mentioned in the imports and computedFn is part of the mobx-utils module and not mobx module.
  Redux has ~3M weekly downloads vs Mobx ~300K.

Use the Application
===================
1. npm install
2. npm run start:dev (by default application will be served on http://localhost:9000/)
