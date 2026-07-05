# connect

## connect

```TypeScript
function connect(params: ConnectionParams): Promise<void>
```

连接服务端。如果连接成功，则可以向服务端发送数据。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | ConnectionParams | Yes | 连接参数 |

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
| 36100041 | Invalid address. |
| 36100043 | Invalid UUID. |
| 36100044 | NearLink standard UUID not allowed. |
| 36100099 | Operation failed. |

