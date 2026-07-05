# queryAllPrinterPpds

## queryAllPrinterPpds

```TypeScript
function queryAllPrinterPpds(): Promise<PpdInfo[]>
```

查询所有打印机ppd。

**Since:** 24

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;PpdInfo[]> | - Promise that resolves with all printer ppd info. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |

