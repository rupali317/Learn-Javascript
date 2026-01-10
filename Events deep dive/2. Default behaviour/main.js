const link = document.querySelector('a')
const checkbox = document.querySelector('input')

link.addEventListener('click', e => console.log('1.', e.defaultPrevented))

link.addEventListener('click', e => {
  console.log('2.', e.defaultPrevented) // is false
  e.preventDefault() // when default action is prevented, browsers set the defaultPrevented property to true
  console.log('3.', e.defaultPrevented) // is true. After this, the link's default action of navigating to google.com will not happen
})

link.addEventListener('click', e => console.log('4.', e.defaultPrevented))

checkbox.addEventListener('click', e => {
  console.log(e.defaultPrevented)
  e.preventDefault()
  console.log(e.defaultPrevented) // After this, the default action of checking will not work
})

/**
The Key Insight
All event listeners for the same event type on the same element execute BEFORE the default action happens.

The browser:

Collects all click handlers on the link

Executes them in registration order

After all handlers finish, checks if preventDefault() was called

Then decides whether to perform the default action


// Timeline when clicking link:
1. Handler 1 executes → logs "1. false"
   - defaultPrevented is false (nothing prevented yet)
   
2. Handler 2 executes → logs "2. false"
   - defaultPrevented still false
   - e.preventDefault() is called
   - logs "3. true" (immediate update)
   
3. Handler 3 executes → logs "4. true"
   - defaultPrevented is now true (from handler 2)

4. Browser: "Were any preventDefault() called?"
   - Answer: YES (in handler 2)
   - Result: No navigation to Google


Why This Design?
This allows multiple handlers to coordinate:
   */
