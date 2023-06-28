import {expect} from "chai";
import {getFlightInfo} from "../src";

const ticket1 = {source: 'A', destination: 'B'};
const ticket2 = {source: 'B', destination: 'C'};
const ticket3 = {source: 'C', destination: 'D'};
const tickets = [ticket1, ticket2, ticket3];

before(function () {
});
describe('Route tracker', function () {
    it('confirmation', function () {
        expect(getFlightInfo(tickets)).equal('A, B, C, D')
    });
});
