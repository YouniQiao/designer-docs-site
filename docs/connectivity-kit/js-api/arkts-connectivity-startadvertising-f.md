# startAdvertising

## startAdvertising

```TypeScript
function startAdvertising(advertisingParams: AdvertisingParams): Promise<number>
```

Starts advertising.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| advertisingParams | AdvertisingParams | Yes | Indicates the param for advertising. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;number&gt; | Returns the promise object advertise handle. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100040 | Integer out of range. |
| 36100043 | Invalid UUID. |
| 36100099 | Operation failed. |

