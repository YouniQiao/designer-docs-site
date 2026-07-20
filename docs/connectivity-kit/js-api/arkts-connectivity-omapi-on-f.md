# on

## Modules to Import

```TypeScript
import { omapi } from '@kit.ConnectivityKit';
```

## on('stateChanged')

```TypeScript
function on(type: 'stateChanged', callback: Callback<ServiceState>): void
```

Register the service state changed event.

**Since:** 18

<!--Device-omapi-function on(type: 'stateChanged', callback: Callback<ServiceState>): void--><!--Device-omapi-function on(type: 'stateChanged', callback: Callback<ServiceState>): void-End-->

**System capability:** SystemCapability.Communication.SecureElement

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'stateChanged' | Yes | The type to register. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<ServiceState> | Yes | The callback used to listen for the state change event. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |

