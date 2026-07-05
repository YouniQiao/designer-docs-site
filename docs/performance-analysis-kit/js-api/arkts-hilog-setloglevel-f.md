# setLogLevel

## setLogLevel

```TypeScript
function setLogLevel(level: LogLevel, prefer: PreferStrategy): void
```

设置当前应用程序进程的最低日志级别。 可通过prefer参数配置不同的偏好策略。如果选择策略PREFER_CLOSE_LOG，等同于调用setMinLogLevel函数。 > **注意：** > > debug版本应用下，此函数不生效。

**Since:** 21

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.HiviewDFX.HiLog

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| level | LogLevel | Yes | 日志级别。 |
| prefer | PreferStrategy | Yes | 偏好策略。 |

