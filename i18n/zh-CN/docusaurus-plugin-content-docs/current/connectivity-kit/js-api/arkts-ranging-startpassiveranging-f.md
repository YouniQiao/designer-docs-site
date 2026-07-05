# startPassiveRanging

## startPassiveRanging

```TypeScript
function startPassiveRanging(capabilityType: RangingTypes): Promise<int>
```

Starts passive ranging mode. Upon successful startup, returns a handle identifier for the passive ranging session and begins broadcasting ranging packets. The returned handle can be used to stop the passive ranging broadcast via stopPassiveRanging.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| capabilityType | RangingTypes | 是 | Indicates the capability type for ranging. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;int> | Promise used to return the handle for starts ranging listening. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900052 | The specified type of ranging service is not supported. |
| 34900053 | The ranging service is disabled. |
| 34900099 | Internal system error. For example, Internal object is invalid. |

