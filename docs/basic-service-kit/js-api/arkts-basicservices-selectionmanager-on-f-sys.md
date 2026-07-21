# on (System API)

## Modules to Import

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';
```

<a id="on"></a>
## on('selectionCompleted')

```TypeScript
function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void
```

Registers a callback to listen for the word selection completion event. This API uses an asynchronous callback to return the result.

**Since:** 24

<!--Device-selectionManager-function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void--><!--Device-selectionManager-function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void-End-->

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selectionCompleted' | Yes | Event type, which is **'selectionCompleted'**. |
| callback | [Callback](../../apis-arkui/arkts-components/arkts-arkui-callback-i.md)&lt;SelectionInfo&gt; | Yes | Callback used to return the word selection information.This callback is triggered only when the user selects text using the mouse or touchpad(by double-clicking,triple-clicking, or pressing and sliding the left mouse button) and then presses **Ctrl**. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33600003](../../apis-basic-services-kit/errorcode-selection.md#33600003-api-caller-and-word-selection-application-mismatched) | The application calling the API does not match the application selected in the system settings. |

**Example**

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';

try {
  selectionManager.on('selectionCompleted', (info: selectionManager.SelectionInfo) => {
    console.info(`Enter the callback function.`);
  });
} catch (err) {
  console.error(`Failed to register selectionCompleted callback: ${err.code}, error message: ${err.message}`);
}

```

