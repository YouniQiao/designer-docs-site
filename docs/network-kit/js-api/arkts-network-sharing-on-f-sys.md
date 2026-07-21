# on (System API)

## Modules to Import

```TypeScript
import { sharing } from '@kit.NetworkKit';
```

<a id="on"></a>
## on('sharingStateChange')

```TypeScript
function on(type: 'sharingStateChange', callback: Callback<boolean>): void
```

Register a callback for the global network sharing state change.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function on(type: 'sharingStateChange', callback: Callback<boolean>): void--><!--Device-sharing-function on(type: 'sharingStateChange', callback: Callback<boolean>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sharingStateChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;boolean&gt; | Yes | the callback function that returns the status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('sharingStateChange', (data: boolean) => {
  console.info('on sharingStateChange: ' + JSON.stringify(data));
});

```


<a id="on-1"></a>
## on('interfaceSharingStateChange')

```TypeScript
function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void
```

Register a callback for the interface network sharing state change.

**Since:** 11

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void--><!--Device-sharing-function on(type: 'interfaceSharingStateChange', callback: Callback<InterfaceSharingStateInfo>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'interfaceSharingStateChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;InterfaceSharingStateInfo&gt; | Yes | the callback function that returns the message. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('interfaceSharingStateChange', (data: object) => {
  console.info('on interfaceSharingStateChange:' + JSON.stringify(data));
});

```


<a id="on-2"></a>
## on('sharingUpstreamChange')

```TypeScript
function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void
```

Register a callback for the sharing upstream network change.

**Since:** 9

**Required permissions:** ohos.permission.CONNECTIVITY_INTERNAL

<!--Device-sharing-function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void--><!--Device-sharing-function on(type: 'sharingUpstreamChange', callback: Callback<NetHandle>): void-End-->

**System capability:** SystemCapability.Communication.NetManager.NetSharing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'sharingUpstreamChange' | Yes | Indicates Event name. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;NetHandle&gt; | Yes | the callback function that returns the network handle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Non-system applications use system APIs. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. |

**Example**

```TypeScript
import { sharing } from '@kit.NetworkKit';

sharing.on('sharingUpstreamChange', (data: object) => {
  console.info('on sharingUpstreamChange:' + JSON.stringify(data));
});

```

