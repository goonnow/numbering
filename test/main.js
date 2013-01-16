var numbering = require('../');

describe('numbering', function(){
    it('padding', function(){
        numbering.padding(3,2).should.equal('03');
    });
});
