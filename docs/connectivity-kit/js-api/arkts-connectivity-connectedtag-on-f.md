# on

## Modules to Import

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
```

## on('notify')

```TypeScript
function on(type: 'notify', callback: Callback<number>): void
```

Subscribes NFC RF status change events.

**Since:** 8

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-connectedTag-function on(type: 'notify', callback: Callback<number>): void--><!--Device-connectedTag-function on(type: 'notify', callback: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notify' | Yes | The callback type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-common-callback-i.md)<number> | Yes | The callback function to be registered. |

