# offBatteryChange

## offBatteryChange

```TypeScript
function offBatteryChange(callback?: Callback<BatteryInfo>): void
```

Unsubscribe the event of battery state changes from a remote device.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.ACCESS_BLUETOOTH

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.Bluetooth.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;BatteryInfo> | 否 |  |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications are not allowed to use system APIs. |
| 801 | Capability not supported.  Only can be called on phone, tablet, and 2in1 devices.  Failed to call the API when the short-range chip is not inserted on 2in1 device. |
| 2900099 | Operation failed. |

