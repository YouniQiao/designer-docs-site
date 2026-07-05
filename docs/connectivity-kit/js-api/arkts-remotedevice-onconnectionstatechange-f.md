# onConnectionStateChange

## onConnectionStateChange

```TypeScript
function onConnectionStateChange(callback: Callback<ConnectionStateParam>): void
```

订阅星闪连接状态更改事件。 如果用户有ohos.permission.GET_NEARLINK_PEER_MAC权限，则返回真实设备地址。否则返回一个随机的设备地址。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ConnectionStateParam> | Yes | 用于监听事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

