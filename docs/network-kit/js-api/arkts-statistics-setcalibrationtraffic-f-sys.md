# setCalibrationTraffic

## setCalibrationTraffic

```TypeScript
function setCalibrationTraffic(simId: int, remainTraffic: long, totalTraffic?: long): Promise<void>
```

Set calibration traffic data.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.GET_NETWORK_STATS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | int | Yes | The ID of the specified sim card. |
| remainTraffic | long | Yes | The remaining traffic data. |
| totalTraffic | long | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 801 | Capability not supported. |
| 2100001 | Invalid parameter value, such as simId error. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error, such as nullptr. |

**Example**

```TypeScript
import { connection, statistics } from '@kit.NetworkKit';

let simId:number = 1;
let remainData:number = 600*1024*1024;   // The remaining traffic is 600 MB.
let totalData:number = 1024*1024*1024;   // The total traffic is 1 GB.
statistics.setCalibrationTraffic(simId, remainData, totalData).then(() => {
  console.info(`setCalibrationTraffic succ`);
}).catch((error: BusinessError) => {
  console.info(`setCalibrationTraffic error. code:${error.code}, message:${error.message}`);
});

```

