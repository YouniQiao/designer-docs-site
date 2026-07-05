# removeLocalService

## Modules to Import

```TypeScript
import { mdns } from '@ohos.net.mdns';
```

## removeLocalService

```TypeScript
function removeLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void
```

Removes an mDNS service.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| serviceInfo | LocalServiceInfo | Yes | Information about the mDNS service. {@link LocalServiceInfo} |
| callback | AsyncCallback&lt;LocalServiceInfo&gt; | Yes | the callback of removeLocalService. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2204002](../errorcode-net-mdns.md#2204002-target-service-not-found) | Callback not found. |
| [2204008](../errorcode-net-mdns.md#2204008-service-deletion-failure) | Failed to delete the service instance. |
| [2204010](../errorcode-net-mdns.md#2204010-message-sending-failure) | Failed to send the message. |

**Example**

Stage model:

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

// Obtain the application context.
let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;

let localServiceInfo: mdns.LocalServiceInfo = {
  serviceType: "_print._tcp",
  serviceName: "servicename",
  port: 5555,
  host: {
  address: "10.14.**.***",
  },
  serviceAttribute: [{key: "111", value: [1]}]
}

mdns.removeLocalService(context, localServiceInfo, (error: BusinessError, data: mdns.LocalServiceInfo) =>  {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


## removeLocalService

```TypeScript
function removeLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>
```

Removes an mDNS service.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | Context | Yes | Indicates the context of application or capability. |
| serviceInfo | LocalServiceInfo | Yes | Information about the mDNS service. {@link LocalServiceInfo} |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;LocalServiceInfo&gt; | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2204002](../errorcode-net-mdns.md#2204002-target-service-not-found) | Callback not found. |
| [2204008](../errorcode-net-mdns.md#2204008-service-deletion-failure) | Failed to delete the service instance. |
| [2204010](../errorcode-net-mdns.md#2204010-message-sending-failure) | Failed to send the message. |

**Example**

Stage model:

```TypeScript
import { mdns } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { common } from '@kit.AbilityKit';

let context: common.UIAbilityContext = this.getUIContext().getHostContext() as common.UIAbilityContext;

let localServiceInfo: mdns.LocalServiceInfo = {
  serviceType: "_print._tcp",
  serviceName: "servicename",
  port: 5555,
  host: {
  address: "10.14.**.***",
  },
  serviceAttribute: [{key: "111", value: [1]}]
}

mdns.removeLocalService(context, localServiceInfo).then((data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

