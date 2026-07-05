# getAllNNRTDeviceDescriptions

## getAllNNRTDeviceDescriptions

```TypeScript
function getAllNNRTDeviceDescriptions() : NNRTDeviceDescription[]
```

Obtain the all device descriptions in NNRT.

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.AI.MindSporeLite

**Return value:**

| Type | Description |
| --- | --- |
| NNRTDeviceDescription[] | the array of NNRTDeviceDescription |

**Example**

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

