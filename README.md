# react-master

## TODO
- create-react-app doesn't support multiple entry points, so I need to find a way around this to reduce the amount
of duplicated code. 
  1. leave it as is and deal w/ dupes. -> Certainly clearest?
  2. eject... blah. 
  3. Vite.js? Doesn't that support multiple entry points? 
  4. rewired... better alternative to eject. 


- javascript:s6477 throws a handful of false positives w/ react-error-boundary ErrorBoundary
- I don't have it connect to SQ, so FP isn't really an option and //NOSONAR isn't a good solution. 
