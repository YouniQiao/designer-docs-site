# queryTraceRoute

## queryTraceRoute

```TypeScript
function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>
```

Query a network trace route.

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and * ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | string | Yes | the destination domain or address. |
| option | TraceRouteOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TraceRouteInfo[]> | The promise returned by the function. |

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
let options: connection.TraceRouteOptions = {
    maxJumpNumber: 30,
    packetsType: connection.PacketsType.NETCONN_PACKETS_ICMP
};

connection.queryTraceRoute(dest, options).then((data: connection.TraceRouteInfo[]) => {
    console.info(JSON.stringify(data));
}).catch((err: BusinessError) => {
    console.error(JSON.stringify(err));
});

```

