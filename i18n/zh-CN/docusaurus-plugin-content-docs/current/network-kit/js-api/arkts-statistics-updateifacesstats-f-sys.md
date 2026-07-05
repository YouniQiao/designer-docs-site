# updateIfacesStats

## updateIfacesStats

```TypeScript
function updateIfacesStats(iface: string, start: int, end: int, stats: NetStatsInfo): Promise<void>
```

Updates network interface statistics data.

**起始版本：** 26.0.0

**需要权限：** 

 ohos.permission.GET_NETWORK_STATS

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Communication.NetManager.Core

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| iface | string | 是 | Network interface name. |
| start | int | 是 | Start timestamp for the statistics data to update. |
| end | int | 是 | End timestamp for the statistics data to update. |
| stats | NetStatsInfo | 是 | Network statistics information. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission denied. |
| 202 | Non-system applications use system APIs. |
| 2100001 | Invalid parameter value. |
| 2100002 | Failed to connect to the service. |
| 2100003 | System internal error. |

