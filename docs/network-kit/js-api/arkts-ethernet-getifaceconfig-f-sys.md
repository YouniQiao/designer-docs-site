# getIfaceConfig

## getIfaceConfig

```TypeScript
function getIfaceConfig(iface: string, callback: AsyncCallback<InterfaceConfiguration>): void
```

Get the specified network interface information.

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name. |
| callback | AsyncCallback&lt;InterfaceConfiguration> | Yes | the callback of getIfaceConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201005 | Device information does not exist. |

**Example**

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

**Since:** 9

**Required permissions:** 

 ohos.permission.GET_NETWORK_INFO

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;InterfaceConfiguration> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 401 | Parameter error. |
| 2200001 | Invalid parameter value. |
| 2200002 | Failed to connect to the service. |
| 2200003 | System internal error. |
| 2201005 | Device information does not exist. |

**Example**

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

