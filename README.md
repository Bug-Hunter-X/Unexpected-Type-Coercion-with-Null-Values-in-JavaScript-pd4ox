# Unexpected Type Coercion with Null Values in JavaScript

This repository demonstrates a common JavaScript bug involving unexpected type coercion when dealing with null values. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version.

## Bug Description

The original code attempts to add two numbers. However, it fails to properly handle cases where one or both inputs might be null or undefined. This results in incorrect calculations or runtime errors.

## Solution

The corrected code in `bugSolution.js` explicitly checks for null values before performing the addition. This prevents type coercion errors and ensures the function returns the expected output even when null values are encountered.  The corrected version employs strict equality checks (`===`) for robustness.