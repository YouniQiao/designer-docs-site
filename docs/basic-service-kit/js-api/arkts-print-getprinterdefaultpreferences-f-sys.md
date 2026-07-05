# getPrinterDefaultPreferences

## getPrinterDefaultPreferences

```TypeScript
function getPrinterDefaultPreferences(printerId: string): Promise<PrinterPreferences>
```

按打印机ID获取默认首选项。

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

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PrinterPreferences> | - Promise that resolves with the default preferences of the printer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100005 | Can not find the printer or printer's ppd file in system. |

