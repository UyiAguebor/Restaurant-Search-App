# API calls

## Fetch 

-> built in function fo rmaking network requests
-> error handling is weird
-> requires us to write a lot of wrapper code

## Axios

-> Seperate library for making requests
-> easy to use, sensible defaults
-> increase our app size slightly

## useEffect

-> useEffect(() => {}) run the arrow function every timt ehe component is rendered
-> useEffect(() => {},[]) run the arrow function only when the componnent is first rendered
-> run the arrow function only when the component is first rendered and when the 'value' changes