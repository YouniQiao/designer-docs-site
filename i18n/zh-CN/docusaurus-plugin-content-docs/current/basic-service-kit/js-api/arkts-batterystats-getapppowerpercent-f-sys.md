# getAppPowerPercent

## getAppPowerPercent

```TypeScript
function getAppPowerPercent(uid: int): double
```

获取应用的耗电百分比。

**起始版本：** 8

**系统能力：** SystemCapability.PowerManager.BatteryStatistics

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | int | 是 | 应用的UID。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | UID对应应用的耗电百分比，取值范围是[0.00，1.00]。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system API. |
| 401 | Parameter error. Possible causes: 1. Parameter verification failed. |
| 4600101 | Failed to connect to the service. |

**示例：**

```TypeScript
try {
    let percent = batteryStats.getAppPowerPercent(10021);
    console.info('battery statistics percent of app is: ' + percent);
} catch(err) {
    console.error('get battery statistics percent of app failed, err: ' + err);
}

```

