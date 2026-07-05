# createClient

## createClient

```TypeScript
function createClient(address: string): Client
```

创建SSAP客户端实例。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | 服务端的设备地址。例如，“11:22:33:AA:BB:FF”  长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。 |

**Return value:**

| Type | Description |
| --- | --- |
| Client | Returns a SSAP client instance {@code Client}. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100099 | Operation failed. |

