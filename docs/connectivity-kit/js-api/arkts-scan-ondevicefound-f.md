# onDeviceFound

## onDeviceFound

```TypeScript
function onDeviceFound(callback: Callback<ScanResults[]>): void
```

订阅NearLink扫描结果。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;ScanResults[]> | Yes | 监听扫描结果事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |

