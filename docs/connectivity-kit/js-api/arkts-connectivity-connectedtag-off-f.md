# off

## Modules to Import

```TypeScript
import { connectedTag } from '@kit.ConnectivityKit';
```

<a id="off"></a>
## off('notify')

```TypeScript
function off(type: 'notify', callback?: Callback<number>): void
```

Unsubscribes NFC RF status change events.<p>All callback functions will be unregistered If there is no specific callback parameter.</p>

**Since:** 8

**Required permissions:** ohos.permission.NFC_TAG

<!--Device-connectedTag-function off(type: 'notify', callback?: Callback<number>): void--><!--Device-connectedTag-function off(type: 'notify', callback?: Callback<number>): void-End-->

**System capability:** SystemCapability.Communication.ConnectedTag

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'notify' | Yes | The callback type. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;number&gt; | No | The callback function to be unregistered. |

