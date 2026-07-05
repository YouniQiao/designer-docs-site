# getSelectionContent

## getSelectionContent

```TypeScript
function getSelectionContent(): Promise<string>
```

获取选中文本的内容。使用Promise异步回调。

**Since:** 22

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string> | Promise对象，返回当前选中文本的内容。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600001 | Selection service exception. |
| 33600004 | The interface is called too frequently. |
| 33600005 | The interface is called at the wrong time. |
| 33600006 | The current application is prohibited from accessing content. |
| 33600007 | The length of selected content is out of range. |
| 33600008 | Getting the selected content times out. |

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

