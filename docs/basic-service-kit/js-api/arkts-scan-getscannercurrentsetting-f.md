# getScannerCurrentSetting

## getScannerCurrentSetting

```TypeScript
function getScannerCurrentSetting(scannerId: string, optionIndex: int): Promise<ScannerOptionValue>
```

获取当前扫描仪设置。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | 扫描仪的ID。 |
| optionIndex | int | Yes | 要获取的选项的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;ScannerOptionValue> | Promise对象，返回扫描仪选项值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

