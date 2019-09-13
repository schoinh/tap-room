# Cultured People - A Kombucha Tap Room

#### _A Web app for tracking kegs at a tap room - September 13, 2019_

#### _By **Na Hyung Choi**_

## Description
This Web app has a splash page that directs the user to either a menu for customers or an employee site for managing available kegs. 

The menu for customers shows available kombuchas on tap, categorized by flavor (herbal or fruity), and their information. 

The employee page shows a similar list of available kombucha kegs, with additional information about the amount of kombucha left in each keg. Kegs with 10 or less pints left are shown at the top of the list under "Running Low." Each keg has 3 buttons associated with it: Pour 1 Pint, Edit, and Delete. The user can navigate to a form to submit information about a new keg or to edit an existing keg's details.

## React Component and Route Structure
![flowchart showing React components, states, and routes](./src/assets/images/ComponentsStates.png)

## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/tap-room.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Build distribution files:
    ```
    $ webpack
    ```
4. Open the web page (dist/index.html)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* React
* webpack
* npm

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
