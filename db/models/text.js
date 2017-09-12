'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Text = db.define('text', {
  motherlode: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  leah: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  contact: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  pillow: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Text;