# getBoundDevices

## getBoundDevices

```TypeScript
function getBoundDevices(): PartnerDeviceAddress[]
```

Gets the list of addresses of the bound partner device for this application.

**起始版本：** 23

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.FusionConnectivity.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| PartnerDeviceAddress[] | Returns the list of addresses of partner device. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 801 | Capability not supported. |
| 34900099 | Internal error. |

