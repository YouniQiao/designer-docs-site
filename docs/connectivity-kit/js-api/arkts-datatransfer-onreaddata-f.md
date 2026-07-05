# onReadData

## onReadData

```TypeScript
function onReadData(callback: Callback<DataParams>): void
```

订阅从端口读取数据事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;DataParams> | Yes | 监听端口读事件的回调。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | Capability not supported because the chip does not support it. |
| 36100099 | Operation failed. |

