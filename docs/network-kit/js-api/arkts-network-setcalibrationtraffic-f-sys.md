# setCalibrationTraffic (System API)

## Modules to Import

```TypeScript
import { statistics } from '@ohos.net.statistics';
```

## setCalibrationTraffic

```TypeScript
function setCalibrationTraffic(simId: number, remainTraffic: number, totalTraffic?: number): Promise<void>
```

Set calibration traffic data.

**Since:** 26.0.0

**Required permissions:** ohos.permission.GET_NETWORK_STATS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| simId | number | Yes | The ID of the specified sim card. |
| remainTraffic | number | Yes | The remaining traffic data. |
| totalTraffic | number | No | The total traffic data. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Nonsystem applications use system APIs. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value, such as simId error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error, such as nullptr. |

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

