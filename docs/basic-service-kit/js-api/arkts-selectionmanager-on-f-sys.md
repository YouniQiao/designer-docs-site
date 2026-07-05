# on

## on('selectionCompleted')

```TypeScript
function on(type: 'selectionCompleted', callback: Callback<SelectionInfo>): void
```

订阅划词完成事件。使用callback异步回调。

**Since:** 20

**System capability:** SystemCapability.SelectionInput.Selection

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'selectionCompleted' | Yes | 设置监听类型，固定取值为'selectionCompleted'。 |
| callback | Callback&lt;SelectionInfo> | Yes | 回调函数，返回当前划词信息。  该回调仅在用户通过鼠标或触控板选中文本（鼠标左键双击/三击/按下滑动）后按下Ctrl键时触发。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 33600003 | The application calling the API does not match the application  selected in the system settings. |

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

