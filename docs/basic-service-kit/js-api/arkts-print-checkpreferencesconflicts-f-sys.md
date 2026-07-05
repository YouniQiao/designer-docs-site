# checkPreferencesConflicts

## checkPreferencesConflicts

```TypeScript
function checkPreferencesConflicts(printerId: string, changedType: string, preferences: PrinterPreferences): Promise<string[]>
```

检查首选项冲突。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerId | string | Yes | 打印机ID。 |
| changedType | string | Yes | 在打印界面上修改的字段名称。 |
| preferences | PrinterPreferences | Yes | 打印界面选择的值。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;string[]> | Promise that resolves with the conflicting field names. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100005 | Can not find the printer or printer's ppd file in system. |

