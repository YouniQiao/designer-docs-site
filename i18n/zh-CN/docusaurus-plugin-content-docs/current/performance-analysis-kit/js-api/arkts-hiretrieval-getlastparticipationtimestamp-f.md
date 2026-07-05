# getLastParticipationTimestamp

## getLastParticipationTimestamp

```TypeScript
function getLastParticipationTimestamp(): long
```

Query the UNIX timestamp of the last participating time.

**起始版本：** 26.0.0

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiRetrieval

**返回值：**

| 类型 | 说明 |
| --- | --- |
| long | Returns the timestamp of the last participating time in milliseconds,  if never participated return 0. |

