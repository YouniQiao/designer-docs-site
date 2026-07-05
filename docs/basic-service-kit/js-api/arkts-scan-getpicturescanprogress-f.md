# getPictureScanProgress

## getPictureScanProgress

```TypeScript
function getPictureScanProgress(scannerId: string): Promise<PictureScanProgress>
```

获取图片扫描进度。使用Promise异步回调。

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
| Promise&lt;PictureScanProgress> | Promise对象，返回图片扫描进度信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

