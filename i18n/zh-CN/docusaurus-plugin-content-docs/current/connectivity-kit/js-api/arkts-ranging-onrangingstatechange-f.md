# onRangingStateChange

## onRangingStateChange

```TypeScript
function onRangingStateChange(callback: Callback<RangingStateChangeInfo>): void
```

Registers a callback to receive ranging state change notifications. Notifies state changes for both active ranging and passive ranging operations.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RangingStateChangeInfo> | 是 | Callback used to listen for the ranging state. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

