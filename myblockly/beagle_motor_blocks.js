
Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "motor_control_no_callback",
      "message0": "motor control %1 left speed: %2 right speed: %3",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "left_speed",
          "check": "Number",
        },
        {
          "type": "input_value",
          "name": "right_speed",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "motor_control",
      "message0": "motor control %1 left speed: %2 right speed: %3%4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "left_speed",
          "check": "Number",
        },
        {
          "type": "input_value",
          "name": "right_speed",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "in_while"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "motor_control_second",
      "message0": "motor control second %1 left speed: %2 right speed: %3 second: %4 %5",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "left_speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "right_speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "second",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "in_while"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "straight_go_length",
      "message0": "straight go %1 speed: %2 length: %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "length",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "in_while"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "straight_go_second",
      "message0": "straight go %1 speed: %2 second: %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "second",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "in_while"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "turn_angle",
      "message0": "turn angle %1 speed: %2 angle: %3 %4",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "speed",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        },
        {
          "type": "input_statement",
          "name": "in_while"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "motor_cancel",
      "message0": "motor cancel",
      "args0": [
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "left_encoder",
      "message0": "left encoder",
      "inputsInline": true,
      "output": "Number",
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "right_encoder",
      "message0": "right encoder",
      "inputsInline": true,
      "output": "Number",
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    }
]);
Blockly.Python['motor_control_no_callback']=function(block)
{
  var value_left_speed = Blockly.Python.valueToCode(block, 'left_speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_length = Blockly.Python.valueToCode(block, 'right_speed', Blockly.Python.ORDER_ATOMIC);

  var code = 'if self.send_goal_motor_control(-1, ('+value_left_speed+','+value_right_length+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code += '  self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['motor_control']=function(block)
{
  var value_left_speed = Blockly.Python.valueToCode(block, 'left_speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_length = Blockly.Python.valueToCode(block, 'right_speed', Blockly.Python.ORDER_ATOMIC);
  var statements_in_while = Blockly.Python.statementToCode(block, 'in_while');

  var code = 'if self.send_goal_motor_control(0, ('+value_left_speed+','+value_right_length+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code+='  ';
  for (var value of statements_in_while) {
    code+=value;
    if(value=='\n'){
      code+='  ';
    }
  }
  code += 'self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['motor_control_second']=function(block)
{
  var value_left_speed = Blockly.Python.valueToCode(block, 'left_speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_length = Blockly.Python.valueToCode(block, 'right_speed', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);
  var statements_in_while = Blockly.Python.statementToCode(block, 'in_while');

  var code = 'if self.send_goal_motor_control(1, ('+value_left_speed+','+value_right_length+','+value_second+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code+='  ';
  for (var value of statements_in_while) {
    code+=value;
    if(value=='\n'){
      code+='  ';
    }
  }
  code += 'self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['straight_go_length']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);
  var statements_in_while = Blockly.Python.statementToCode(block, 'in_while');

  var code = 'if self.send_goal_motor_control(2, ('+value_speed+','+value_length+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code+='  ';
  for (var value of statements_in_while) {
    code+=value;
    if(value=='\n'){
      code+='  ';
    }
  }
  code += 'self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['straight_go_second']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);
  var statements_in_while = Blockly.Python.statementToCode(block, 'in_while');

  var code = 'if self.send_goal_motor_control(3, ('+value_speed+','+value_second+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code+='  ';
  for (var value of statements_in_while) {
    code+=value;
    if(value=='\n'){
      code+='  ';
    }
  }
  code += 'self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['turn_angle']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var statements_in_while = Blockly.Python.statementToCode(block, 'in_while');


  var code = 'if self.send_goal_motor_control(4, ('+value_speed+','+value_angle+')):\n';
  code += '  while self.end_time is None:\n';
  code += '    rclpy.spin_once(self)\n';
  code+='  ';
  for (var value of statements_in_while) {
    code+=value;
    if(value=='\n'){
      code+='  ';
    }
  }
  code += 'self.end_time = None\n';
  code += 'else:\n';
  code += '  return False\n';
  return code;
}
Blockly.Python['motor_cancel']=function(block)
{
  var code = 'self.cancel_motor_control()\n';
  code += 'break\n';
  return code;
}
Blockly.Python['left_encoder']=function(block)
{
  return ['self.encoder_l', Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python['right_encoder']=function(block)
{
  return ['self.encoder_r', Blockly.Python.ORDER_ATOMIC];
}
