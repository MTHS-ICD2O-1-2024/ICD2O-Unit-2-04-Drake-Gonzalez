// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function myButtonClicked() {
  alert("Hello, World!")
}
function calculatePermeterAndAreaOfRectangle () {
  // input
  const lengthOfRectangle = parseInt(document.getElementById('length-of-rectangle').value)
  const heightOfRectangle = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const areaOfRectangle = lengthOfRectangle * heightOfRectangle
  const perimeterOfRectangle = (lengthOfRectangle + heightOfRectangle) * 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + areaOfRectangle + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeterOfRectangle + ' cm'
}
