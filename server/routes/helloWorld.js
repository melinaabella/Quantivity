import React from 'react';
import { Text, View } from 'react-native';

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  const HelloWorldApp = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Hello, world!</Text>
      </View>
    )
  }
  next();
});


module.exports = router;