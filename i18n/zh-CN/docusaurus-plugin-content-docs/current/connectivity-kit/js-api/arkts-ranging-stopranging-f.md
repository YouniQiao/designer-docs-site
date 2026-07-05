# stopRanging

## stopRanging

```TypeScript
function stopRanging(callback: Callback<RangingResult>, params?: RangingParams): void
```

Stops ongoing ranging operations. If no target device is specified, stops ranging for all devices associated with the callback. If a target device is specified, only stops ranging for that specific device. This method also releases all occupied resources. For proper resource management, stopRanging must be called after startRanging to avoid resource leaks. State changes are notified via the onRangingStateChange callback.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;RangingResult> | 是 | Callback used to return the ranging result. |
| params | RangingParams | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900050 | The device has not initiated ranging. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900054 | The parameter value does not meet specifications. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

