# Panel (System API)

Represents the word selection panel.

**Since:** 24

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { selectionManager } from '@ohos.selectionInput.selectionManager';
```

## moveToGlobalDisplay

```TypeScript
moveToGlobalDisplay(x: number, y: number): Promise<void>
```

Moves the word selection panel to the specified coordinates on the screen. This API uses a promise to return the result.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.SelectionInput.Selection

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| x | number | Yes | Value of the movement along the X axis, in px. |
| y | number | Yes | Value of the movement along the Y axis, in px. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33600001](../../apis-basic-services-kit/errorcode-selection.md#33600001-word-selection-service-error) | Selection service exception. |
| [33600002](../../apis-basic-services-kit/errorcode-selection.md#33600002-word-selection-panel-has-been-destroyed) | This selection window has been destroyed. |

**Example**

```TypeScript
import { selectionManager, BusinessError } from '@kit.BasicServicesKit';

try {
  selectionPanel.moveToGlobalDisplay(200, 200).then(() => {
    console.info('Succeeded in moving the panel.');
  }).catch((err: BusinessError) => {
    console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
  });
} catch (err) {
  console.error(`Failed to move panel: ${err.code}, error message: ${err.message}`);
}

```

