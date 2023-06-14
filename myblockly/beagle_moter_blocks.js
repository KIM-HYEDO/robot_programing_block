
Blockly.defineBlocksWithJsonArray(
  [
    {
      "type": "moter_control",
      "message0": "moter control %1 left speed: %2 right speed: %3",
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
      "type": "moter_control_second",
      "message0": "moter control second %1 left speed: %2 right speed: %3 second: %4",
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
      "message0": "straight go %1 speed: %2 length: %3",
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
      "message0": "straight go %1 speed: %2 second: %3",
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
      "message0": "turn angle %1 speed: %2 angle: %3",
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
      "type": "servo_control",
      "message0": "servo control %1 angle %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "servo_num",
          "options": [
            [
              "a",
              "1"
            ],
            [
              "b",
              "2"
            ],
            [
              "c",
              "3"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "angle",
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
      "type": "servo_control_speed",
      "message0": "servo control %1 angle %2 speed %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "servo_num",
          "options": [
            [
              "a",
              "1"
            ],
            [
              "b",
              "2"
            ],
            [
              "c",
              "3"
            ]
          ]
        },
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "speed",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    }
]);
Blockly.Python['moter_control']=function(block)
{
  var value_left_speed = Blockly.Python.valueToCode(block, 'left_speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_length = Blockly.Python.valueToCode(block, 'right_speed', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = MoterControl()\n';
  code += 'msg.mode = 0\n'
  code += 'msg.data.append('+value_left_speed+')\n'
  code += 'msg.data.append('+value_right_length+')\n'
  code += 'self.moter_go_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['moter_control_second']=function(block)
{
  var value_left_speed = Blockly.Python.valueToCode(block, 'left_speed', Blockly.Python.ORDER_ATOMIC);
  var value_right_length = Blockly.Python.valueToCode(block, 'right_speed', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = MoterControl()\n';
  code += 'msg.mode = 1\n'
  code += 'msg.data.append('+value_left_speed+')\n'
  code += 'msg.data.append('+value_right_length+')\n'
  code += 'msg.data.append('+value_second+')\n'
  code += 'self.moter_go_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['straight_go_length']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_length = Blockly.Python.valueToCode(block, 'length', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = MoterControl()\n';
  code += 'msg.mode = 2\n'
  code += 'msg.data.append('+value_speed+')\n'
  code += 'msg.data.append('+value_length+')\n'
  code += 'self.moter_go_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['straight_go_second']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = MoterControl()\n';
  code += 'msg.mode = 3\n'
  code += 'msg.data.append('+value_speed+')\n'
  code += 'msg.data.append('+value_second+')\n'
  code += 'self.moter_go_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['turn_angle']=function(block)
{
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = MoterControl()\n';
  code += 'msg.mode = 4\n'
  code += 'msg.data.append('+value_speed+')\n'
  code += 'msg.data.append('+value_angle+')\n'
  code += 'self.moter_go_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['servo_control'] = function(block) {
  var dropdown_servo_num = block.getFieldValue('servo_num');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = 'msg = ServoControl()\n';
  code += 'msg.num = '+dropdown_servo_num+'\n'
  code += 'msg.data.append('+value_angle+')\n'
  code += 'self.servo_publisher.publish(msg)\n';
  return code;
};
Blockly.Python['servo_control_speed'] = function(block) {
  var dropdown_servo_num = block.getFieldValue('servo_num');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msg = ServoControl()\n';
  code += 'msg.num = '+dropdown_servo_num+'\n'
  code += 'msg.data.append('+value_angle+')\n'
  code += 'msg.data.append('+value_speed+')\n'
  code += 'self.servo_publisher.publish(msg)\n';
  return code;
};
