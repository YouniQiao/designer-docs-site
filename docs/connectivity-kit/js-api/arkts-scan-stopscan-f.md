# stopScan

## stopScan

```TypeScript
function stopScan(): Promise<void>
```

停止扫描。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> |  |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | 权限被拒绝。 |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

