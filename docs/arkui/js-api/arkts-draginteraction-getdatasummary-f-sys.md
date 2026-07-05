# getDataSummary

## getDataSummary

```TypeScript
function getDataSummary(): Array<Summary>
```

获取所有拖拽对象的摘要。

**Since:** 11

**System capability:** SystemCapability.Msdp.DeviceStatus.Drag

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;Summary> | 所有拖拽对象的数据摘要，包含拖拽对象的类型和数据长度。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |

**Example**

```TypeScript
let summary: Array<dragInteraction.Summary> = dragInteraction.getDataSummary();
console.info(`Drag interaction summary: ${summary}`);

```

