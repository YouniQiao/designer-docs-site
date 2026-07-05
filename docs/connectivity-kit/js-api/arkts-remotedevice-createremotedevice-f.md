# createRemoteDevice

## createRemoteDevice

```TypeScript
function createRemoteDevice(address: string): RemoteDevice
```

创建远端设备实例。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| address | string | Yes | 设备地址。例如，“11:22:33:AA:BB:FF”  长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。 |

**Return value:**

| Type | Description |
| --- | --- |
| RemoteDevice | 返回近链路远程设备实例。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |
| 36100041 | Invalid address. |

