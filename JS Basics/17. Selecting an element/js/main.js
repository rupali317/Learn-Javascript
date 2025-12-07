// 1. Get the #star-wars-characters list with id and tag selectors.
const StarWarsCharacters_One = document.querySelector('#star-wars-characters')
const StarWarsCharacters_Two = document.querySelector('ul')

// 2. From the #star-wars-characters list, get the following:
// a. Luke Skywalker with class, tag and attribute selectors
// b. Yoda with class and attribute selectors
// c. Darth Vader with class and attribute selectors
const LukeSkywalker_One = StarWarsCharacters_One.querySelector('.luke')
const LukeSkywalker_Two = StarWarsCharacters_One.querySelector('li') // This will only select Luke Skywalker and not the other two <li>s - Yoda and Darth Vader
const LukeSkywalker_Three =
  StarWarsCharacters_One.querySelector("[data-type='hero']")

const Yoda_One = StarWarsCharacters_One.querySelector('.yoda')
const Yoda_Two = StarWarsCharacters_One.querySelector("[data-type='master']")

const DarthVader_One = StarWarsCharacters_One.querySelector('.badboy')
const DarthVader_Two = StarWarsCharacters_One.querySelector(
  "[data-type='villain']",
)

// 3. Notice how you can’t select Yoda and Darth Vader with tags when you use querySelector.

/*
why is the below suggestion provided:
// DON'T DO THIS
document.querySelector('div#master-yoda')
// => <div id="master-yoda">Yoda</div>

// DO THIS INSTEAD
document.querySelector('#master-yoda')
// => <div id="master-yoda">Yoda</div>

The suggestion is provided because using `'div#master-yoda'` is **redundant and less efficient** than just `'#master-yoda'`. Here's why:

## 1. **Unnecessary Specificity**
- `#master-yoda` already uniquely identifies the element (IDs must be unique in HTML)
- Adding `div` doesn't provide any additional useful information

## 2. **Performance Impact**
When you use `'div#master-yoda'`, the browser's CSS engine:
1. First finds ALL `<div>` elements on the page
2. Then filters through them to find the one with `id="master-yoda"`
   
Whereas with `'#master-yoda'`:
1. It directly finds the element by ID (using native browser optimizations)
2. This is significantly faster, especially on large pages

## 3. **Maintenance Issues**
- If you change the element type from `<div>` to `<section>`, you'd need to update the selector
- With just `'#master-yoda'`, it works regardless of the element type

## 4. **ID Selectors are Already Fast**
Browser engines are optimized to find elements by ID extremely quickly. Adding the element type prefix actually slows it down.

## Example Comparison:
```javascript
// ❌ Slower, redundant
document.querySelector('div#master-yoda')  // Browser: "Find all divs, check their IDs"

// ✅ Faster, cleaner  
document.querySelector('#master-yoda')     // Browser: "Direct ID lookup"

// ❌ Even worse with complex selectors
document.querySelector('body div.container div#master-yoda span.text')

// ✅ Better
document.querySelector('#master-yoda .text')
```

The same principle applies to class selectors - `'div.yoda-class'` is less efficient than just `'.yoda-class'` unless you actually need the element type specificity.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the following statement, how is it less prone to bugs?
When you use element.querySelector, you’ll write that that’s much easier to read and understand, less prone to bugs, and faster, compared to using document.querySelector all the time.

The statement is comparing **scoped DOM queries** (`element.querySelector()`) versus **global DOM queries** (`document.querySelector()`). Here's why it's less prone to bugs:

## **Less Prone to Bugs Explained:**

### 1. **Explicit Scope Reduces Ambiguity**
```javascript
// ❌ Global scope - could match ANY element on the entire page
document.querySelector('.item')  // Which .item? Could be anywhere!

// ✅ Scoped to specific container - only looks within that element
sidebar.querySelector('.item')   // Clearly the .item INSIDE the sidebar
```

### 2. **Prevents Accidental Matches**
```javascript
// Imagine you have multiple modals on a page
// ❌ This could accidentally select an item from a different modal
document.querySelector('.modal .submit-btn')  // Might get wrong button

// ✅ This ensures you only get the button from THIS specific modal
currentModal.querySelector('.submit-btn')      // Definitely the right button
```

### 3. **Self-Documenting Code**
```javascript
// Clear intent: "Find tabs WITHIN the navigation"
const tabs = nav.querySelectorAll('.tab');

// Ambiguous: "Find tabs somewhere on the page"
const tabs = document.querySelectorAll('.tab');
```

### 4. **Safer Refactoring**
```javascript
// If you move the #user-list to a different part of the DOM:
// ❌ document.querySelector() might break if structure changes
document.querySelector('#user-list .user')

// ✅ element.querySelector() still works because the relationship is preserved
userList.querySelector('.user')  // Always finds users WITHIN the list
```

### 5. **Isolates Component Logic**
```javascript
class UserComponent {
  constructor(element) {
    this.element = element;
    // These can ONLY affect elements within this component
    this.name = this.element.querySelector('.name');
    this.email = this.element.querySelector('.email');
    
    // ❌ document.querySelector() could accidentally modify other components
    this.name = document.querySelector('.name');  // Danger!
  }
}
```

## **Real-World Example:**
```html
<div class="product-card">
  <h3>Product</h3>
  <button class="buy">Buy Now</button>
</div>

<div class="product-card">
  <h3>Another Product</h3>
  <button class="buy">Buy Now</button>
</div>
```

```javascript
// ❌ Bug-prone - all buy buttons get same event!
document.querySelectorAll('.buy').forEach(btn => {
  btn.addEventListener('click', () => {
    // Which product was clicked? Hard to tell!
  });
});

// ✅ Scoped - each button knows its context
document.querySelectorAll('.product-card').forEach(card => {
  const buyBtn = card.querySelector('.buy');
  buyBtn.addEventListener('click', () => {
    // Easy to access this specific card's data
    const productName = card.querySelector('h3').textContent;
  });
});
```

## **Performance Benefit:**
- `element.querySelector()` searches a smaller DOM subtree
- `document.querySelector()` searches the entire document tree
- Smaller scope = faster search = less CPU usage

## **Readability Benefit:**
```javascript
// Clear relationship: search WITHIN the modal
modal.querySelector('.form')  // "Get the form that's in the modal"

// Ambiguous: search anywhere
document.querySelector('.form')  // "Get some form somewhere"
```

**Bottom line:** Scoped queries make your intent explicit, reduce side effects, create more maintainable code, and prevent the common bug of accidentally selecting elements from the wrong part of the page.

*/
