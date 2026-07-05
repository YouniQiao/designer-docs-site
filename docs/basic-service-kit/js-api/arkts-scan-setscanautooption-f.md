# setScanAutoOption

## setScanAutoOption

```TypeScript
function setScanAutoOption(scannerId: string, optionIndex: int): Promise<void>
```

设置扫描选项为自动模式。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | 扫描仪的ID。 |
| optionIndex | int | Yes | 要设置为自动的选项的索引。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

