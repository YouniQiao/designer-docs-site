# queryTraceRoute

## Modules to Import

```TypeScript
import { connection } from '@kit.NetworkKit';
```

<a id="querytraceroute"></a>
## queryTraceRoute

```TypeScript
function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>
```

Query a network trace route.

**Since:** 26.0.0

**Required permissions:** ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**Model restriction:** This API can be used only in the stage model.

<!--Device-connection-function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>--><!--Device-connection-function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>-End-->

**System capability:** SystemCapability.Communication.NetManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| destination | string | Yes | the destination domain or address. |
| option | [TraceRouteOptions](arkts-network-connection-tracerouteoptions-i.md) | No | the trace route option. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;TraceRouteInfo[]&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | Internal error. |

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

