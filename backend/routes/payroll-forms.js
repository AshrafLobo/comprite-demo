/**
 * Imports
 */
const express = require('express');
const _ = require('lodash');

const router = express();

// Models
const PayrollForm = require('../models/payroll-form');

// Middleware
const auth = require('../middleware/auth');

// Functions
const { validatePayrollForm: validate } = require('../common/joiValidators');

/**
 * API Routes
 */

// Add a new payroll form
router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const formData = new PayrollForm(_.pick(req.body, ['firstName', 'lastName', 'email', 'phoneNumber', 'jobTitle', 'numberOfEmployees', 'enquireAbout', 'message']));
  await formData.save();
  res.send(formData);
});

// Delete a payroll form
router.delete('/:formId', auth, async (req, res) => {
  const form = await PayrollForm.findByIdAndDelete(req.params.formId);
  if (!form) return res.status(404).send('The form with the given ID was not found');

  res.send();
});

module.exports = router;