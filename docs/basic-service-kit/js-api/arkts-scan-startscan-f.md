# startScan

## startScan

```TypeScript
function startScan(scannerId: string, batchMode: boolean): Promise<void>
```

开始扫描。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.PRINT

**System capability:** SystemCapability.Print.PrintFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scannerId | string | Yes | 扫描仪的ID。 |
| batchMode | boolean | Yes | 是否使用批处理模式。true表示使用批处理模式，false表示不使用批处理模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

