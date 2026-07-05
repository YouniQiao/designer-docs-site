# getConnectionState

## getConnectionState

```TypeScript
function getConnectionState(params: ConnectionStateParams): ConnectionState
```

获取数据传输的连接状态。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | ConnectionStateParams | Yes | 获取连接状态参数 |

**Return value:**

| Type | Description |
| --- | --- |
| ConnectionState | 返回数据传输的连接状态。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100043 | Invalid UUID in connection parameters. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

