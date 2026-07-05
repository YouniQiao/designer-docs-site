# getAddedScanners

## getAddedScanners

```TypeScript
function getAddedScanners(): Promise<ScannerDevice[]>
```

获取已添加的扫描仪（系统API）。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ScannerDevice[]> | Promise used to return the array of added scanners. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

