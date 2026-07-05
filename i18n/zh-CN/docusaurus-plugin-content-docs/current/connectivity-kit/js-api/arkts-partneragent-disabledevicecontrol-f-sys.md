# disableDeviceControl

## disableDeviceControl

```TypeScript
function disableDeviceControl(deviceAddress: PartnerDeviceAddress): Promise<void>
```

Disables device control for a bound device.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceAddress | PartnerDeviceAddress | 是 | The address of partner device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise used to return the result. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported. |
| 34900001 | The device is not bound. |
| 34900099 | Internal error. |

