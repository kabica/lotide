# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kabica/lotide`

**Require it:**

`const _ = require('@kalex.bica@gmail.com/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(...)`: console logs equality assertions using ( === )
* `head(...)`: returns starting element of array 
* `tail(...)`: returns array with first element of input removed 
* `eqArrays(...)`: returns boolean for deep equal of two arrays 
* `assertArraysEqual(...)`: console logs equality assertions using ( eqArrays )
* `middle(...)`: returns middle element(s) of an array 
* `without(...)`: returns a new array with a specified value removed
* `flatten(...)`: returns new one-dimensional array based on nested input
* `countOnly(...)`: returns the occurance count of a specified value  
* `countLetters(...)`: returns the occurance count of each element from input  
* `letterPositions(...)`: returns index of specified value within input 
* `findKeyByValue(...)`: returns the key paired to a specified value 
* `eqObjects(...)`: returns boolean for deep equal of two objects 
* `assertObjectsEqual(...)`: console logs equality assertions using ( eqObjects )
* `map(...)`: returns array populated with first character of each input array
* `takeUntil(...)`: returns an array populated with values of input that occur before specified value 
* `findKey(...)`: returns the first occuring key associated to a particular value 
