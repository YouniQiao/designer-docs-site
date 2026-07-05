# queryRecommendDriversById

## queryRecommendDriversById

```TypeScript
function queryRecommendDriversById(printerId: string): Promise<PpdInfo[]>
```

根据打印机ID查询推荐的打印机驱动程序。

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
| Promise&lt;PpdInfo[]> | - Promise that resolves with all ppd info of the printer. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application does not have permission to call this function. |
| 202 | not system application. |
| 13100005 | Can not find the printer in system. |

