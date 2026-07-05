# factoryReset

## factoryReset

```TypeScript
function factoryReset(): Promise<void>
```

恢复星闪设置。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.MANAGE_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

