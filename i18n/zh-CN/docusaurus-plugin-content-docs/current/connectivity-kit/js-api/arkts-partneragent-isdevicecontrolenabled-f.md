# isDeviceControlEnabled

## isDeviceControlEnabled

```TypeScript
function isDeviceControlEnabled(deviceAddress: PartnerDeviceAddress): boolean
```

Checks whether device control is enabled.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | 是 | The address of partner device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | Returns whether the device control is enabled. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal error. |

