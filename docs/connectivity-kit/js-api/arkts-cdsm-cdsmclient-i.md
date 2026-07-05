# CdsmClient

管理CDSM客户端实例。在调用任何CDSM客户端方法之前， 您必须使用{@link createCdsmClient}来创建CDSM客户端实例。

**Since:** 26.0.0

**System capability:** SystemCapability.Communication.NearLink.Base

## getCdsmInfo

```TypeScript
getCdsmInfo(): CdsmInfo
```

获取合作设备集合信息。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ACCESS_NEARLINK

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Return value:**

| Type | Description |
| --- | --- |
| CdsmInfo | 返回合作设备集信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 36100003 | NearLink disabled. |
| 36100099 | Operation failed. |

## offCdsmInfoChange

```TypeScript
offCdsmInfoChange(callback?: Callback<CdsmInfo>): void
```

取消订阅协作设备集信息变更事件。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CdsmInfo> | No |  |

## onCdsmInfoChange

```TypeScript
onCdsmInfoChange(callback: Callback<CdsmInfo>): void
```

订阅协作设备集信息变更事件。 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。 回调返回真实设备地址，否则返回随机设备地址。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Communication.NearLink.Base

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;CdsmInfo> | Yes | 用于监听合作设备集信息的回调。 |

