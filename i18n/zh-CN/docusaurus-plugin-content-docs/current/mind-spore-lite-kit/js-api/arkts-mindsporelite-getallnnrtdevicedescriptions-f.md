# getAllNNRTDeviceDescriptions

## getAllNNRTDeviceDescriptions

```TypeScript
function getAllNNRTDeviceDescriptions() : NNRTDeviceDescription[]
```

Obtain the all device descriptions in NNRT.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.AI.MindSporeLite

**返回值：**

| 类型 | 说明 |
| --- | --- |
| NNRTDeviceDescription[] | the array of NNRTDeviceDescription |

**示例：**

```TypeScript
try {
  let allDevices = mindSporeLite.getAllNNRTDeviceDescriptions();
  if (allDevices == null || allDevices.length === 0) {
    console.error('Failed to get NNRT device descriptions. Result: null or empty array');
  } else {
    console.info(`Succeeded in getting NNRT device descriptions. Device count: ${allDevices.length}`);
  }
} catch (error) {
  console.error(`Failed to get NNRT device descriptions. Error: ${error}`);
}

```

