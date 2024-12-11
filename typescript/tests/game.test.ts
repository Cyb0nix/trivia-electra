import {expect} from 'chai';
import {describe, it} from 'mocha';
import {GameRunner} from '../src/game-runner';
import {Game} from "../src/game";

describe('The test environment', () => {
    it('should pass', () => {
        expect(true).to.be.true;
    });

    it("should access game", function () {
        expect(GameRunner).to.not.be.undefined;
    });

    it("should run game", function () {
       //Given
        let sequence = [6,9,2,4,7,0,5,1,0,2,8,4,2,3,8,1,2,5,1,7,8,4,5,7,8,1,3,1,9,2,9,6,2,2,1,0,2,6,1,2,8,9,7,1,3,5,2,5,1,3];
        //Mock math.random on this sequence
        let sequenceIndex = 0;
        Math.random = () => {
            return sequence[sequenceIndex++ % sequence.length] / 10;
        };
        //When
        //catch the console.log output and check if it is correct with the expected output
        let consoleLog = console.log;
        let output = [];
        console.log = (msg) => {
            output.push(msg);
        }
        GameRunner.main();
        console.log = consoleLog;
        //Then
        expect(output).to.deep.equal([
            "Chet was added",
            "They are player number 1",
            "Pat was added",
            "They are player number 2",
            "Sue was added",
            "They are player number 3",
            "Chet is the current player",
            "They have rolled a 4",
            "Chet's new location is NaN",
            "The category is Rock",
            "Rock Question 0",
            "Answer was corrent!!!!",
            "Chet now has NaN Gold Coins.",
            "Pat is the current player",
            "They have rolled a 2",
            "Pat's new location is 2",
            "The category is Sports",
            "Sports Question 0",
            "Answer was corrent!!!!",
            "Pat now has 1 Gold Coins.",
            "Sue is the current player",
            "They have rolled a 5",
            "Sue's new location is 5",
            "The category is Science",
            "Science Question 0",
            "Answer was corrent!!!!",
            "Sue now has 1 Gold Coins.",
            "Chet is the current player",
            "They have rolled a 4",
            "Chet's new location is NaN",
            "The category is Rock",
            "Rock Question 1",
            "Answer was corrent!!!!",
            "Chet now has NaN Gold Coins.",
            "Pat is the current player",
            "They have rolled a 1",
            "Pat's new location is 3",
            "The category is Rock",
            "Rock Question 2",
            "Answer was corrent!!!!",
            "Pat now has 2 Gold Coins.",
            "Sue is the current player",
            "They have rolled a 5",
            "Sue's new location is 10",
            "The category is Sports",
            "Sports Question 1",
            "Answer was corrent!!!!",
            "Sue now has 2 Gold Coins.",
            "Chet is the current player",
            "They have rolled a 2",
            "Chet's new location is NaN",
            "The category is Rock",
            "Rock Question 3",
            "Answer was corrent!!!!",
            "Chet now has NaN Gold Coins.",
            "Pat is the current player",
            "They have rolled a 5",
            "Pat's new location is 8",
            "The category is Pop",
            "Pop Question 0",
            "Answer was corrent!!!!",
            "Pat now has 3 Gold Coins.",
            "Sue is the current player",
            "They have rolled a 2",
            "Sue's new location is 0",
            "The category is Pop",
            "Pop Question 1",
            "Answer was corrent!!!!",
            "Sue now has 3 Gold Coins.",
            "Chet is the current player",
            "They have rolled a 1",
            "Chet's new location is NaN",
            "The category is Rock",
            "Rock Question 4",
            "Question was incorrectly answered",
            "Chet was sent to the penalty box",
            "Pat is the current player",
            "They have rolled a 5",
            "Pat's new location is 1",
            "The category is Science",
            "Science Question 1",
            "Answer was corrent!!!!",
            "Pat now has 4 Gold Coins.",
            "Sue is the current player",
            "They have rolled a 4",
            "Sue's new location is 4",
            "The category is Pop",
            "Pop Question 2",
            "Question was incorrectly answered",
            "Sue was sent to the penalty box",
            "Chet is the current player",
            "They have rolled a 5",
            "Chet is getting out of the penalty box",
            "Chet's new location is NaN",
            "The category is Rock",
            "Rock Question 5",
            "Answer was correct!!!!",
            "Chet now has NaN Gold Coins.",
            "Pat is the current player",
            "They have rolled a 2",
            "Pat's new location is 3",
            "The category is Rock",
            "Rock Question 6",
            "Answer was corrent!!!!",
            "Pat now has 5 Gold Coins.",
            "Sue is the current player",
            "They have rolled a 6",
            "Sue is not getting out of the penalty box",
            "Chet is the current player",
            "They have rolled a 6",
            "Chet is not getting out of the penalty box",
            "Pat is the current player",
            "They have rolled a 2",
            "Pat's new location is 5",
            "The category is Science",
            "Science Question 2",
            "Answer was corrent!!!!",
            "Pat now has 6 Gold Coins."
        ]);

    })

});
