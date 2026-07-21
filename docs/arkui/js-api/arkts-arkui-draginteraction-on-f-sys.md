# on (System API)

## Modules to Import

```TypeScript
import { dragInteraction } from '@kit.ArkUI';
```

<a id="on"></a>
## on('drag')

```TypeScript
function on(type: 'drag', callback: Callback<DragState>): void
```

Enables listening for dragging status changes.

**Since:** 10

<!--Device-dragInteraction-function on(type: 'drag', callback: Callback<DragState>): void--><!--Device-dragInteraction-function on(type: 'drag', callback: Callback<DragState>): void-End-->

**System capability:** SystemCapability.Msdp.DeviceStatus.Drag

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drag' | Yes | Event type. This field has a fixed value of **drag**. |
| callback | [Callback](../arkts-components/arkts-arkui-callback-i.md)&lt;DragState&gt; | Yes | Callback used to return the dragging status. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.<br>2.Incorrect parameter types.3.Parameter verification failed. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission verification failed. A non-system application calls a system API.<br>**Applicable version:** 12 and later |

**Example**

```TypeScript
try {
  dragInteraction.on('drag', (data: dragInteraction.DragState) => {
    console.info(`Drag interaction event: ${data}`);
  });
} catch (error) {
  console.error(`Register failed, code: ${error.code}, message: ${error.message}`);
}

```

