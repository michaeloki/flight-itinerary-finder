export function getFlightInfo(tickets: ({
    destination: string;
    source: string
})[]) {
    const result: string[] = [];
    const takeOffPoints: Set<string> = new Set();
    const destinations: Set<string> = new Set();
    try {
        for (const ticket of tickets) {
            takeOffPoints.add(ticket.source);
            destinations.add(ticket.destination);
        }

        // find the initial node
        for (const ticket of tickets) {
            if (!destinations.has(ticket.source) && result.length === 0) {
                result.push(ticket.source);
            }
        }

        //get the inner elements
        for (const ticket of tickets) {
            if (
                takeOffPoints.has(ticket.destination) &&
                result[result.length - 1] !== ticket.destination
            ) {
                if (result[result.length - 1] !== ticket.source) {
                    result.push(ticket.source);
                }
                if (result[result.length - 1] !== ticket.destination) {
                    result.push(ticket.destination);
                }
            }
        }

        //find the final node
        destinations.forEach((endPoint) => {
            if (!takeOffPoints.has(endPoint) && !result.includes(endPoint)) {
                for (const ticket of tickets) {
                    if (
                        ticket.destination === endPoint &&
                        !result.includes(ticket.source)
                    ) {
                        result.push(ticket.source);
                    }
                }
                result.push(endPoint);
            }
        });
        return result.join(', ');
    } catch (e) {
        return 'Invalid input';
    }
}
