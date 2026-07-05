# queryTraceRoute

## queryTraceRoute

```TypeScript
function queryTraceRoute(destination: string, option?: TraceRouteOptions): Promise<TraceRouteInfo[]>
```

Query a network trace route.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.INTERNET and ohos.permission.ACCESS_NET_TRACE_INFO and * ohos.permission.LOCATION and ohos.permission.APPROXIMATELY_LOCATION

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| destination | string | 是 | the destination domain or address. |
| option | TraceRouteOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;TraceRouteInfo[]> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 2100001 | Invalid parameter value. |
| 2100003 | Internal error. |

**示例：**

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

