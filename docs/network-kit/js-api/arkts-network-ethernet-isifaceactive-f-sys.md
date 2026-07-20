# isIfaceActive (System API)

## Modules to Import

```TypeScript
import { ethernet } from '@kit.NetworkKit';
```

## isIfaceActive

```TypeScript
function isIfaceActive(iface: string, callback: AsyncCallback<number>): void
```

Check whether the specified network is active.

**Since:** 9

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-ethernet-function isIfaceActive(iface: string, callback: AsyncCallback<number>): void--><!--Device-ethernet-function isIfaceActive(iface: string, callback: AsyncCallback<number>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<number> | Yes | the callback of isIfaceActive. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2201005](../errorcode-net-ethernet.md#2201005-device-information-not-exist) | Device information does not exist. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.isIfaceActive("eth0", (error: BusinessError, value: number) => {
  if (error) {
    console.error("whether2Activate callback error = " + JSON.stringify(error));
  } else {
    console.info("whether2Activate callback = " + JSON.stringify(value));
  }
});

```


## isIfaceActive

```TypeScript
function isIfaceActive(iface: string): Promise<number>
```

Check whether the specified network is active.

**Since:** 9

**Required permissions:** ohos.permission.GET_NETWORK_INFO

<!--Device-ethernet-function isIfaceActive(iface: string): Promise<number>--><!--Device-ethernet-function isIfaceActive(iface: string): Promise<number>-End-->

**System capability:** SystemCapability.Communication.NetManager.Ethernet

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| iface | string | Yes | Indicates the network interface name. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<number> | the promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2200001](../errorcode-net-sharing.md#2200001-invalid-parameter-value) | Invalid parameter value. |
| [2200002](../errorcode-net-sharing.md#2200002-service-connection-failure) | Failed to connect to the service. |
| [2200003](../errorcode-net-sharing.md#2200003-system-internal-error) | System internal error. |
| [2201005](../errorcode-net-ethernet.md#2201005-device-information-not-exist) | Device information does not exist. |

**Example**

```TypeScript
import { ethernet } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

ethernet.isIfaceActive("eth0").then((data: number) => {
  console.info("isIfaceActive promise = " + JSON.stringify(data));
}).catch((error: BusinessError) => {
  console.error("isIfaceActive promise error = " + JSON.stringify(error));
});

```

