# off (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

## off('sharingStateChange')

```TypeScript
function off(type: 'sharingStateChange', callback?: Callback<boolean>): void
```

Unregister a callback for the global network sharing state change.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function off(type: 'sharingStateChange', callback?: Callback<boolean>): void--><!--Device-sharing-function off(type: 'sharingStateChange', callback?: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sharingStateChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<boolean> | No | the callback function that returns the status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('sharingStateChange', (data: boolean) => {
  console.info(JSON.stringify(data));
});

```


## off('interfaceSharingStateChange')

```TypeScript
function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void
```

Unregister a callback for the interface network sharing state change.

**Since:** 11

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void--><!--Device-sharing-function off(type: 'interfaceSharingStateChange', callback?: Callback<InterfaceSharingStateInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interfaceSharingStateChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<InterfaceSharingStateInfo> | No | the callback function that returns the message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('interfaceSharingStateChange', (data: object) => {
  console.info(JSON.stringify(data));
});

```


## off('sharingUpstreamChange')

```TypeScript
function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void
```

Unregister a callback for the sharing upstream network change.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void--><!--Device-sharing-function off(type: 'sharingUpstreamChange', callback?: Callback<NetHandle>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sharingUpstreamChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<NetHandle> | No | the callback function that returns the network handle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.off('sharingUpstreamChange', (data: object) => {
  console.info(JSON.stringify(data));
});

```

