# getRangingCapability

## getRangingCapability

```TypeScript
function getRangingCapability(): Promise<RangingCapabilitySupported>
```

Queries whether the current device supports ranging capability.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_NEARLINK

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;RangingCapabilitySupported> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900053 | The ranging service is disabled. |

