# queryPrinterCapabilityByUri

## queryPrinterCapabilityByUri

```TypeScript
function queryPrinterCapabilityByUri(printerUri: string, printerId: string): Promise<PrinterCapabilities>
```

使用打印机的uri查询打印机能力，使用Promise异步回调。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| printerUri | string | Yes | 表示打印机uri。 |
| printerId | string | Yes | 表示打印机ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PrinterCapabilities> | - Promise对象，返回打印机能力。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100005 | Can not find the printer in system. |

