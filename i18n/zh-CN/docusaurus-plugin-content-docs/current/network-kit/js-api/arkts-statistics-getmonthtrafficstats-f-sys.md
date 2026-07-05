# getMonthTrafficStats

## getMonthTrafficStats

```TypeScript
function getMonthTrafficStats(simId: int): Promise<long>
```

Get this month traffic data of the cellular network.

**起始版本：** 23

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| simId | int | 是 | The id of the specified sim card. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;long> | The statistics of the simId in this month. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Nonsystem applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |

