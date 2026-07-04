# getSelectionContent (System API)

## Modules to Import

```TypeScript
import { selectionManager } from '@ohos.selectionInput.selectionManager';
```

## getSelectionContent

```TypeScript
function getSelectionContent(): Promise<string>
```

Obtains this selected text content. This API uses a promise to return the result.

**Since:** 24

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string&gt; | Promise used to return the content of the selected text. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [33600001](../../apis-basic-services-kit/errorcode-selection.md#33600001-word-selection-service-error) | Selection service exception. |
| [33600004](../../apis-basic-services-kit/errorcode-selection.md#33600004-the-api-is-called-too-frequently) | The interface is called too frequently. |
| [33600005](../../apis-basic-services-kit/errorcode-selection.md#33600005-incorrect-api-call-timing) | The interface is called at the wrong time. |
| [33600006](../../apis-basic-services-kit/errorcode-selection.md#33600006-word-selection-prohibited-in-the-current-application) | The current application is prohibited from accessing content. |
| [33600007](../../apis-basic-services-kit/errorcode-selection.md#33600007-selected-text-is-out-of-range) | The length of selected content is out of range. |
| [33600008](../../apis-basic-services-kit/errorcode-selection.md#33600008-content-acquisition-timed-out) | Getting the selected content times out. |

**Example**

```TypeScript
import { selectionManager } from '@kit.BasicServicesKit';

selectionManager.on('selectionCompleted', async (info: selectionManager.SelectionInfo) => {
  try {
    let content = await selectionManager.getSelectionContent();
  } catch (err) {
    console.error(`Failed to get selection content: ${err.code}, error message: ${err.message}`);
  }
});

```

