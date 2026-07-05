# queryProbeResult

## queryProbeResult

```TypeScript
function queryProbeResult(destination: string, duration: int): Promise<ProbeResultInfo>
```

Query a network probe result.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.INTERNET

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | string | Yes | the distination domain or address. |
| duration | int | Yes | probe duration. Unit: second. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ProbeResultInfo> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100003 | Internal error. |

**Example**

```TypeScript
import { connection } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let dest: string = "www.example.com";
let duration: number = 10;

connection.queryProbeResult(dest, duration).then((data: connection.ProbeResultInfo) => {
    console.info(`LossRate: ${data.lossRate}, RTT: ${data.rtt}`);
}).catch((err: BusinessError) => {
    console.error(JSON.stringify(err));
});

```

