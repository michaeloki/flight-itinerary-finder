# flight-itinerary-finder

A function that accepts array of tickets, where ticket has format {source: string, destination: string} and returns string of comma separated countries as it was originally planned.
Example:
tickets: [
{source: 'Amsterdam', destination: 'Berlin'},
{source: 'Paris', destination: 'London'},
{source: 'London', destination: 'Amsterdam'},
]
result: 'Paris, London, Amsterdam, Berlin'

# Installation
Run npm install
# Unit test
Run npm test
