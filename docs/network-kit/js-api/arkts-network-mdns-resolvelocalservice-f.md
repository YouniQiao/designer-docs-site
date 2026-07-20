# resolveLocalService

## Modules to Import

```TypeScript
import { mdns } from '@kit.NetworkKit';
```

## resolveLocalService

```TypeScript
function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void
```

Resolves an mDNS service.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-mdns-function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void--><!--Device-mdns-function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo,
    callback: AsyncCallback<LocalServiceInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| serviceInfo | [LocalServiceInfo](arkts-network-mdns-localserviceinfo-i.md) | Yes | Information about the mDNS service. {@link LocalServiceInfo} |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)<LocalServiceInfo> | Yes | the callback of resolveLocalService. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2204003](../errorcode-net-mdns.md#2204003-repeated-registration) | Callback duplicated. |
| [2204006](../errorcode-net-mdns.md#2204006-service-resolution-timeout) | Request timeout. |
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

mdns.resolveLocalService(context, localServiceInfo, (error: BusinessError, data: mdns.LocalServiceInfo) =>  {
  console.error(JSON.stringify(error));
  console.info(JSON.stringify(data));
});

```


## resolveLocalService

```TypeScript
function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>
```

Resolves an mDNS service.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-mdns-function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>--><!--Device-mdns-function resolveLocalService(context: Context, serviceInfo: LocalServiceInfo): Promise<LocalServiceInfo>-End-->

**System capability:** SystemCapability.Communication.NetManager.MDNS

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| context | [Context](../../apis-arkui/arkts-components/arkts-arkui-context-t.md) | Yes | Indicates the context of application or capability. |
| serviceInfo | [LocalServiceInfo](arkts-network-mdns-localserviceinfo-i.md) | Yes | Information about the mDNS service. {@link LocalServiceInfo} |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<LocalServiceInfo> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |
| [2100002](../errorcode-net-connection.md#2100002-service-connection-failure) | Failed to connect to the service. |
| [2100003](../errorcode-net-connection.md#2100003-system-internal-error) | System internal error. |
| [2204003](../errorcode-net-mdns.md#2204003-repeated-registration) | Callback duplicated. |
| [2204006](../errorcode-net-mdns.md#2204006-service-resolution-timeout) | Request timeout. |
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

mdns.resolveLocalService(context, localServiceInfo).then((data: mdns.LocalServiceInfo) => {
  console.info(JSON.stringify(data));
});

```

