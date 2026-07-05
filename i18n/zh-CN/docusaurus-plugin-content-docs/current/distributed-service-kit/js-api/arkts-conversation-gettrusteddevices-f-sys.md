# getTrustedDevices

## getTrustedDevices

```TypeScript
function getTrustedDevices(): DeviceNodeInfo[]
```

Obtains device information about all trusted devices. Trusted devices are devices that have been previously authenticated. This API returns a list of all such devices currently visible on the network.

**起始版本：** 26.1.0

**需要权限：** 

 ohos.permission.DISTRIBUTED_DATASYNC and ohos.permission.sec.ACCESS_UDID

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.SoftBus.Core

**系统接口：** 此接口为系统接口。

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DeviceNodeInfo[] | list of the obtained device information in  [DeviceNodeInfo]conversation.DeviceNodeInfo. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. The application does not have the required permission to  access distributed data. |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 801 | Capability not supported. |
| 2000001 | Internal error. |

