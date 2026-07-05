# getScannerParameter

## getScannerParameter

```TypeScript
function getScannerParameter(scannerId: string): Promise<ScannerParameter[]>
```

获取扫描仪参数。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | 扫描仪的ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ScannerParameter[]> | Promise used to return the scanner parameters. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

