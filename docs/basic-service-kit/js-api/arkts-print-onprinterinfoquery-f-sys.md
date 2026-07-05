# onPrinterInfoQuery

## onPrinterInfoQuery

```TypeScript
function onPrinterInfoQuery(callback: PrinterInfoQueryCallback): void
```

为查询到的打印机信息注册事件回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | PrinterInfoQueryCallback | Yes | 查询到的打印机信息的回调函数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |

