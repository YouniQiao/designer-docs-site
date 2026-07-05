# dataMigration

## dataMigration

```TypeScript
function dataMigration(callback: DataMigrationCallback): int
```

设备升级时使用的数据迁移接口，用于拉起迁移任务。

**Since:** 23

**Required permissions:** 

 ohos.permission.UPDATE_FONT

**System capability:** SystemCapability.Global.FontManager

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | DataMigrationCallback | Yes | 数据迁移的回调函数。 |

**Return value:**

| Type | Description |
| --- | --- |
| int | 返回拉起数据迁移任务结果。返回为0表示拉起成功，否则拉起失败。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system application. |
| 31100110 |  |
| 31100111 |  |

