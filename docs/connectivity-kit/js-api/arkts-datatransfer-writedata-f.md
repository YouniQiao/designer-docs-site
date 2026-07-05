# writeData

## writeData

```TypeScript
function writeData(params: DataParams): Promise<void>
```

根据地址和UUID写入数据。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | DataParams | Yes | 发送数据的参数 |

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
| 36100023 | Write data congestion. |
| 36100041 | Invalid address. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

