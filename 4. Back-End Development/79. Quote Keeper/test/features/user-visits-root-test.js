const {assert} = require('chai');
//#1
describe('User visits root', () => {
    //#2
    describe('posting a quote', () => {
      //#3
      it('saves quote and metadata submitted by user', () => {
        
        // Setup #4 & #5
        const quote = 'Our deepest fear is not that we are inadequate.  Our deepest fear is that we are powerful beyond measure.';
        const attributed = 'Marianne Williamson';
        const source = 'A Return to Love: Reflections on the Principles of A Course in Miracles.';
  
      // Exercise #6
      browser.url('/');
      //#7
      browser.setValue('textarea[id=quote]', quote);
      //#8
      browser.setValue('input[id=attributed]', attributed);
      //#9
      browser.setValue('input[id=source]', source);
      //#10
      browser.click('input[type=submit]');
  
      // Verify #11
      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
      });
    });
  });