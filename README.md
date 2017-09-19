# Devello
Here's the boilerplate code for you to start working on creating an implementation of Devello! Listed below is rough structure of the components in this proejct. Good luck!

## Components
- [ ] App
- [ ] Board
- [ ] List
- [ ] Card
- [ ] Button


### App
This is the wrapper for the whole app.
#### state
  - board
    - name
  - user
    - name

### Board
This is the board.
#### props
  - name
#### state
  - list (Array<object>)
    - Title
    - Cards (Array<object>)
      - id
      - text
      - moveForward
      - moveBackward

### List
Has a title and keeps a few cards(tasks)
#### props
  - title
  - cards (Array<object>)
    - id
    - text
    - moveForward
    - moveBackward

### Card
A to-do item
#### props
  - id
  - text
  - moveForward
  - moveBackward

### Button
Click to move cards through lists
#### props
  - text
  - onClick
  - variant: PropTypes.oneOf(['default', 'forward', 'backward', 'delete', 'create'])
