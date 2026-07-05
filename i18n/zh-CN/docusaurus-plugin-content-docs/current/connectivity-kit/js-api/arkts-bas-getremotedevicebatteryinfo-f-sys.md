# getRemoteDeviceBatteryInfo

## getRemoteDeviceBatteryInfo

```TypeScript
function getRemoteDeviceBatteryInfo(deviceId: BluetoothAddress): Promise<BatteryInfo>
```

Get remote device battery information.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| deviceId | BluetoothAddress | 是 | Indicates address of peer device. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;BatteryInfo> | Returns the battery info. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported.  Only can be called on phone, tablet, and 2in1 devices.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900001 | Service stopped. |
| 2900003 | Bluetooth disabled. |
| 2900004 | Remote device profile not supported. |
| 2900099 | Operation failed. |
| 2901003 | Connection not established. |

