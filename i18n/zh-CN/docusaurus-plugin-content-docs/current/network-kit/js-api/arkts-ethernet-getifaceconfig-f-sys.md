# getIfaceConfig

## getIfaceConfig

```TypeScript
function getIfaceConfig(iface: string, callback: AsyncCallback<InterfaceConfiguration>): void
```

Get the specified network interface information.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iface | string | 是 | Indicates the network interface name. |
| callback | AsyncCallback&lt;InterfaceConfiguration> | 是 | the callback of getIfaceConfig. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201005 | Device information does not exist. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.getIfaceConfig("eth0", (error: BusinessError, value: ethernet.InterfaceConfiguration) => {
  if (error) {
    console.error("getIfaceConfig  callback error = " + JSON.stringify(error));
  } else {
    console.info("getIfaceConfig callback mode = " + JSON.stringify(value.mode));
    console.info("getIfaceConfig callback ipAddr = " + JSON.stringify(value.ipAddr));
    console.info("getIfaceConfig callback route = " + JSON.stringify(value.route));
    console.info("getIfaceConfig callback gateway = " + JSON.stringify(value.gateway));
    console.info("getIfaceConfig callback netMask = " + JSON.stringify(value.netMask));
    console.info("getIfaceConfig callback dnsServers = " + JSON.stringify(value.dnsServers));
  }
});

```

## getIfaceConfig

```TypeScript
function getIfaceConfig(iface: string): Promise<InterfaceConfiguration>
```

Get the specified network interface information.

**起始版本：** 9

**需要权限：** 

 ohos.permission.GET_NETWORK_INFO

**系统能力：** SystemCapability.Communication.NetManager.Ethernet

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iface | string | 是 | Indicates the network interface name. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;InterfaceConfiguration> | the promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201005 | Device information does not exist. |

**示例：**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.getIfaceConfig("eth0").then((data: ethernet.InterfaceConfiguration) => {
  console.info("getIfaceConfig promise mode = " + JSON.stringify(data.mode));
  console.info("getIfaceConfig promise ipAddr = " + JSON.stringify(data.ipAddr));
  console.info("getIfaceConfig promise route = " + JSON.stringify(data.route));
  console.info("getIfaceConfig promise gateway = " + JSON.stringify(data.gateway));
  console.info("getIfaceConfig promise netMask = " + JSON.stringify(data.netMask));
  console.info("getIfaceConfig promise dnsServers = " + JSON.stringify(data.dnsServers));
}).catch((error: BusinessError) => {
  console.error("getIfaceConfig promise error = " + JSON.stringify(error));
});

```

