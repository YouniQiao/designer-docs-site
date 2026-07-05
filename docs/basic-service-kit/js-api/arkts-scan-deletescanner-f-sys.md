# deleteScanner

## deleteScanner

```TypeScript
function deleteScanner(uniqueId: string, discoveryMode: ScannerDiscoveryMode): Promise<void>
```

删除扫描仪（系统API）。使用Promise异步回调。

**Since:** 20

**Required permissions:** 

 ohos.permission.MANAGE_PRINT_JOB

**System capability:** SystemCapability.Print.PrintFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueId | string | Yes | 扫描仪的唯一ID。 |
| discoveryMode | ScannerDiscoveryMode | Yes | 发现模式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Not system application. |

