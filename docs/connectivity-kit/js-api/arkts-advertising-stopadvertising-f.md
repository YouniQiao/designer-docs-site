# stopAdvertising

## stopAdvertising

```TypeScript
function stopAdvertising(advertisingId: int): Promise<void>
```

停止广播ID对应的广播。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingId | int | Yes | 表示广播ID  取值应为≥0的整数，取值为当前广播的广播ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 返回promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100040 | Invalid advertising ID. |
| 36100099 | Operation failed. |

