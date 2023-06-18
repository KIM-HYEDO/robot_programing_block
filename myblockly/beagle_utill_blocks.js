Blockly.defineBlocksWithJsonArray(
  [
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
    },
    {
      "type": "buzzer_control",
      "message0": "buzzer hz: %1 second: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "hz",
          "check": "Number",
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
      "type": "lidar",
      "message0": "lidar degree: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "angle",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "camera_num",
      "message0": "number of %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            ["person", "0"],
            ["bicycle", "1"],
            ["car", "2"],
            ["motorbike", "3"],
            ["aeroplane", "4"],
            ["bus", "5"],
            ["train", "6"],
            ["truck", "7"],
            ["boat", "8"],
            ["traffic light", "9"],
            ["fire hydrant", "10"],
            ["stop sign", "11"],
            ["parking meter", "12"],
            ["bench", "13"],
            ["bird", "14"],
            ["cat", "15"],
            ["dog", "16"],
            ["horse", "17"],
            ["sheep", "18"],
            ["cow", "19"],
            ["elephant", "20"],
            ["bear", "21"],
            ["zebra", "22"],
            ["giraffe", "23"],
            ["backpack", "24"],
            ["umbrella", "25"],
            ["handbag", "26"],
            ["tie", "27"],
            ["suitcase", "28"],
            ["frisbee", "29"],
            ["skis", "30"],
            ["snowboard", "31"],
            ["sports ball", "32"],
            ["kite", "33"],
            ["baseball bat", "34"],
            ["baseball glove", "35"],
            ["skateboard", "36"],
            ["surfboard", "37"],
            ["tennis racket", "38"],
            ["bottle", "39"],
            ["wine glass", "40"],
            ["cup", "41"],
            ["fork", "42"],
            ["knife", "43"],
            ["spoon", "44"],
            ["bowl", "45"],
            ["banana", "46"],
            ["apple", "47"],
            ["sandwich", "48"],
            ["orange", "49"],
            ["broccoli", "50"],
            ["carrot", "51"],
            ["hot dog", "52"],
            ["pizza", "53"],
            ["donut", "54"],
            ["cake", "55"],
            ["chair", "56"],
            ["sofa", "57"],
            ["pottedplant", "58"],
            ["bed", "59"],
            ["diningtable", "60"],
            ["toilet", "61"],
            ["tvmonitor", "62"],
            ["laptop", "63"],
            ["mouse", "64"],
            ["remote", "65"],
            ["keyboard", "66"],
            ["cell phone", "67"],
            ["microwave", "68"],
            ["oven", "69"],
            ["toaster", "70"],
            ["sink", "71"],
            ["refrigerator", "72"],
            ["book", "73"],
            ["clock", "74"],
            ["vase", "75"],
            ["scissors", "76"],
            ["teddy bear", "77"],
            ["hair drier", "78"],
            ["toothbrush", "79"]
          ]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "camera_locate",
      "message0": "%1 num: %2 %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "type",
          "options": [
            ["person", "0"],
            ["bicycle", "1"],
            ["car", "2"],
            ["motorbike", "3"],
            ["aeroplane", "4"],
            ["bus", "5"],
            ["train", "6"],
            ["truck", "7"],
            ["boat", "8"],
            ["traffic light", "9"],
            ["fire hydrant", "10"],
            ["stop sign", "11"],
            ["parking meter", "12"],
            ["bench", "13"],
            ["bird", "14"],
            ["cat", "15"],
            ["dog", "16"],
            ["horse", "17"],
            ["sheep", "18"],
            ["cow", "19"],
            ["elephant", "20"],
            ["bear", "21"],
            ["zebra", "22"],
            ["giraffe", "23"],
            ["backpack", "24"],
            ["umbrella", "25"],
            ["handbag", "26"],
            ["tie", "27"],
            ["suitcase", "28"],
            ["frisbee", "29"],
            ["skis", "30"],
            ["snowboard", "31"],
            ["sports ball", "32"],
            ["kite", "33"],
            ["baseball bat", "34"],
            ["baseball glove", "35"],
            ["skateboard", "36"],
            ["surfboard", "37"],
            ["tennis racket", "38"],
            ["bottle", "39"],
            ["wine glass", "40"],
            ["cup", "41"],
            ["fork", "42"],
            ["knife", "43"],
            ["spoon", "44"],
            ["bowl", "45"],
            ["banana", "46"],
            ["apple", "47"],
            ["sandwich", "48"],
            ["orange", "49"],
            ["broccoli", "50"],
            ["carrot", "51"],
            ["hot dog", "52"],
            ["pizza", "53"],
            ["donut", "54"],
            ["cake", "55"],
            ["chair", "56"],
            ["sofa", "57"],
            ["pottedplant", "58"],
            ["bed", "59"],
            ["diningtable", "60"],
            ["toilet", "61"],
            ["tvmonitor", "62"],
            ["laptop", "63"],
            ["mouse", "64"],
            ["remote", "65"],
            ["keyboard", "66"],
            ["cell phone", "67"],
            ["microwave", "68"],
            ["oven", "69"],
            ["toaster", "70"],
            ["sink", "71"],
            ["refrigerator", "72"],
            ["book", "73"],
            ["clock", "74"],
            ["vase", "75"],
            ["scissors", "76"],
            ["teddy bear", "77"],
            ["hair drier", "78"],
            ["toothbrush", "79"]
          ]
        },
        {
          "type": "input_value",
          "name": "num",
          "check": "Number"
        },
        {
          "type": "field_dropdown",
          "name": "pos",
          "options": [
            ["left", "0"],
            ["top", "1"],
            ["right", "2"],
            ["down", "3"]
          ]
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "colour": 230,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "camera_view",
      "message0": "camera view",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    },
    {
      "type": "recive_topic",
      "message0": "update data",
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 285,
      "tooltip": "",
      "helpUrl": ""
    }
  ]);
Blockly.Python['servo_control'] = function (block) {
  var dropdown_servo_num = block.getFieldValue('servo_num');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = 'msg = ServoControl()\n';
  code += 'msg.num = ' + dropdown_servo_num + '\n'
  code += 'msg.data.append(' + value_angle + ')\n'
  code += 'self.servo_publisher.publish(msg)\n';
  return code;
};
Blockly.Python['servo_control_speed'] = function (block) {
  var dropdown_servo_num = block.getFieldValue('servo_num');
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'msg = ServoControl()\n';
  code += 'msg.num = ' + dropdown_servo_num + '\n'
  code += 'msg.data.append(' + value_angle + ')\n'
  code += 'msg.data.append(' + value_speed + ')\n'
  code += 'self.servo_publisher.publish(msg)\n';
  return code;
};
Blockly.Python['buzzer_control'] = function (block) {
  var value_hz = Blockly.Python.valueToCode(block, 'hz', Blockly.Python.ORDER_ATOMIC);
  var value_second = Blockly.Python.valueToCode(block, 'second', Blockly.Python.ORDER_ATOMIC);

  var code = 'msg = BuzzerControl()\n';
  code += 'msg.data.append(' + value_hz + ')\n'
  code += 'msg.data.append(' + value_second + ')\n'
  code += 'self.buzzer_publisher.publish(msg)\n';
  return code;
}
Blockly.Python['lidar'] = function (block) {
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'self.lidar_data[' + value_angle + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['camera_num'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  // TODO: Assemble Python into code variable.
  var code = 'len(self.camera[' + dropdown_type + '])';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['camera_locate'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_num = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pos = block.getFieldValue('pos');
  // TODO: Assemble Python into code variable.
  var code = 'self.camera[' + dropdown_type + '][' + value_num + '][' + dropdown_pos + ']';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_ATOMIC];
};
Blockly.Python['camera_view'] = function (block) {
  return '#camera_view\n';
};
Blockly.Python['recive_topic'] = function (block) {
  return 'rclpy.spin_once(self,timeout_sec=0.1)\n';
};
