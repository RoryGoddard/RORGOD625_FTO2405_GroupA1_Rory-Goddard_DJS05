# DJS05 Project Brief: Building a Redux-Inspired Store for a Tally App

## How to run
Open up index.html within a browser, or spin up a live server from within your development environment, and then access the console to review the outputs from the dispatched actions and verify the status of the state.

## Overview
The most problematic challenge I faced was trying to seperate my unsubscribe functionality from my subscribe functionality. In the end I could not achieve this, but after some research I feel the consensus is that within these cases, it is best to leave the unsubscribe functionality within the subscribe method, my current understanding is that passing in the subscriber to be removed from the array from the subscribe method itself is more intuitive. The code itself is not overly complex but the underlying theory of a fully fledged state management system such as Redux is fascinating. Trying to recreate that on a smaller scale here was a valuable learning experience.


