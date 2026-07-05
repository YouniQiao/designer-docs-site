# startAdvertising

## startAdvertising

```TypeScript
function startAdvertising(advertisingParams: AdvertisingParams): Promise<int>
```

开始广播。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | Yes | 表示广播参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;int> | 返回广播句柄promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100040 | Integer out of range. |
| 36100043 | Invalid UUID. |
| 36100099 | Operation failed. |

