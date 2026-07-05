# setIfaceConfig (System API)

## Modules to Import

```TypeScript
import { ethernet } from '@ohos.net.ethernet';
```

## setIfaceConfig

```TypeScript
function setIfaceConfig(iface: string, ic: InterfaceConfiguration, callback: AsyncCallback<void>): void
```

Set the specified network interface parameters.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name of the network parameter. |
| ic | InterfaceConfiguration | Yes | Indicates the ic. See {@link InterfaceConfiguration}. |
| callback | AsyncCallback&lt;void&gt; | Yes | the callback of setIfaceConfig. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| 2201004 | Invalid Ethernet profile. |
| [2201005](../errorcode-net-ethernet.md#2201005-device-information-not-exist) | Device information does not exist. |
| [2201006](../errorcode-net-ethernet.md#2201006-device-not-connected) | Ethernet device not connected. |
| [2201007](../errorcode-net-ethernet.md#2201007-failed-to-write-the-user-configuration) | Ethernet failed to write user configuration information. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let config: ethernet.InterfaceConfiguration = {
  mode: 0,
  ipAddr: "192.168.xx.xxx",
  route: "192.168.xx.xxx",
  gateway: "192.168.xx.xxx",
  netMask: "255.255.255.0",
  dnsServers: "1.1.1.1"
};

ethernet.setIfaceConfig("eth0", config, (error: BusinessError) => {
  if (error) {
    console.error("setIfaceConfig callback error = " + JSON.stringify(error));
  } else {
    console.info("setIfaceConfig callback ok");
  }
});

```


## setIfaceConfig

```TypeScript
function setIfaceConfig(iface: string, ic: InterfaceConfiguration): Promise<void>
```

Set the specified network interface parameters.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name of the network parameter. |
| ic | InterfaceConfiguration | Yes | Indicates the ic. See {@link InterfaceConfiguration}. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100001](../errorcode-net-connection.md#2100001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| 2201004 | Invalid Ethernet profile. |
| [2201005](../errorcode-net-ethernet.md#2201005-device-information-not-exist) | Device information does not exist. |
| [2201006](../errorcode-net-ethernet.md#2201006-device-not-connected) | Ethernet device not connected. |
| [2201007](../errorcode-net-ethernet.md#2201007-failed-to-write-the-user-configuration) | Ethernet failed to write user configuration information. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

let config: ethernet.InterfaceConfiguration = {
  mode: 0,
  ipAddr: "192.168.xx.xxx",
  route: "192.168.xx.xxx",
  gateway: "192.168.xx.xxx",
  netMask: "255.255.255.0",
  dnsServers: "1.1.1.1"
};

const setConfigPromise = ethernet.setIfaceConfig("eth0", config);

setConfigPromise.then(() => {
  console.info("setIfaceConfig promise ok");
}).catch((error: BusinessError)  => {
  console.error("setIfaceConfig promise error = " + JSON.stringify(error));
});

```

