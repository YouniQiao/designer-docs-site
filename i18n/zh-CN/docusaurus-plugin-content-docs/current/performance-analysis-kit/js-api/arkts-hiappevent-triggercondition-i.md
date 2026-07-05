# TriggerCondition

Defines the triggering condition parameters of the **onTrigger** callback of a [Watcher]hiAppEvent.Watcher.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## size

```TypeScript
size?: int
```

Total size of events that trigger callback. The value is a positive integer, in bytes. The default value is 0, indicating that no callback is triggered. If this parameter is set to a negative value, the default value is used.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## row

```TypeScript
row?: int
```

Total number of events that trigger callback. The value is a positive integer. The default value is 0, indicating that no callback is triggered. If this parameter is set to a negative value, the default value is used.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## timeOut

```TypeScript
timeOut?: int
```

Timeout interval for triggering callback. The value is a positive integer, in unit of 30s. The default value is 0 , indicating that no callback is triggered. If this parameter is set to a negative value, the default value is used.

**类型：** int

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

