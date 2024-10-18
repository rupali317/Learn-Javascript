// 1. Select the right button / left button + add event listeners to the buttons
//  1.1. When the buttons are clicked:
//      a. Loop through all the carousel_slide and modify the left (depending on the left button / right button -> the direction of the loop will be determined)
//      b. The is-selected class will be removed from the previous and assigned to the next carousel instance in view
//      b. If the is-selected class is in the first instance of the carousel__slide, then hidden will be present in the left button
//      c. If the is-selected class is in the last instance of the carousel__slide, then hidden will be present in the right button
