# stopPassiveRanging

## stopPassiveRanging

```TypeScript
function stopPassiveRanging(handle: int, capabilityType: RangingTypes): void
```

Stops passive ranging mode. Stops the passive ranging broadcast and cleans up associated resources based on the specified handle and ranging capability type.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | int | 是 | Indicates the handle number of ranging monitoring. |
| capabilityType | RangingTypes | 是 | Indicates the capability type for ranging. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900054 | The parameter value does not meet specifications. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

