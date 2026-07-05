# createCdsmClient

## createCdsmClient

```TypeScript
function createCdsmClient(address: string): CdsmClient
```

创建CDSM客户端实例。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | CDSM服务端地址。  长度必须为17。取值约束：由十六进制数字和冒号组成，例如：11:22:33:AA:BB:FF。 |

**Return value:**

| Type | Description |
| --- | --- |
| CdsmClient | 返回CDSM客户端实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported because the chip does not support it. |
| 36100003 | NearLink disabled. |
| 36100041 | Invalid address. |
| 36100050 | Coordinated Devices Set Management not supported. |
| 36100099 | Operation failed. |

