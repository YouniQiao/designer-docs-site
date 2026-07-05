# NNRTDeviceDescription

Provides the nnrt device description

**起始版本：** 12

**系统能力：** SystemCapability.AI.MindSporeLite

## 导入模块

```TypeScript
import { mindSporeLite } from '@kit.MindSporeLiteKit';
```

## deviceID

```TypeScript
deviceID() : bigint
```

Get device id

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| bigint | the number of device id |

**示例：**

```TypeScript
let context: mindSporeLite.Context = {};
context.target = ["nnrt"];
context.nnrt = {};
let allDevices = mindSporeLite.getAllNNRTDeviceDescriptions();
if (allDevices == null || allDevices.length === 0) {
  console.error(`Failed to get NNRT device descriptions. Context: ${JSON.stringify(context)}, Result: null or empty`);
} else {
  console.info(`Succeeded in getting NNRT device descriptions. Device count: ${allDevices.length}`);
    for (let i: number = 0; i < allDevices.length; i++) {
      console.info(`Device ${i} ID: ${allDevices[i].deviceID().toString()}`);
    }
}

```

## deviceName

```TypeScript
deviceName() : string
```

Get device name.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | device name |

**示例：**

```TypeScript
let context: mindSporeLite.Context = {};
context.target = ["nnrt"];
context.nnrt = {};
let allDevices = mindSporeLite.getAllNNRTDeviceDescriptions();
if (allDevices == null || allDevices.length === 0) {
  console.error(`Failed to get NNRT device descriptions. Context: ${JSON.stringify(context)}, Result: null or empty`);
} else {
  console.info(`Succeeded in getting NNRT device descriptions. Device count: ${allDevices.length}`);
  for (let i: number = 0; i < allDevices.length; i++) {
    console.info(`Device ${i} name: ${allDevices[i].deviceName()}`);
  }
}

```

## deviceType

```TypeScript
deviceType() : NNRTDeviceType
```

Get device type.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NNRTDeviceType | the device type |

**示例：**

```TypeScript
let context: mindSporeLite.Context = {};
context.target = ["nnrt"];
context.nnrt = {};
let allDevices = mindSporeLite.getAllNNRTDeviceDescriptions();
if (allDevices == null || allDevices.length === 0) {
  console.error(`Failed to get NNRT device descriptions. Context: ${JSON.stringify(context)}, Result: null or empty`);
} else {
  console.info(`Succeeded in getting NNRT device descriptions. Device count: ${allDevices.length}`);
  for (let i: number = 0; i < allDevices.length; i++) {
    console.info(`Device ${i} type: ${allDevices[i].deviceType().toString()}`);
  }
}

```

