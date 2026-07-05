# ConfigOption

Provides configuration options for application event logging.

**起始版本：** 9

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## 导入模块

```TypeScript
import { hiAppEvent } from '@kit.PerformanceAnalysisKit';
```

## disable

```TypeScript
disable?: boolean
```

Whether to enable the event logging function. The default value is **false**. If this parameter is set to **true**, the logging function is disabled. Otherwise, the logging function is enabled.

**类型：** boolean

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

## maxStorage

```TypeScript
maxStorage?: string
```

Quota for the directory that stores event logging files. The default value is **10MB**. It is recommended that the quota be less than or equal to 10 MB. Otherwise, the API efficiency may be affected. If the directory size exceeds the specified quota when application event logging is performed, event logging files in the directory will be cleared one by one based on the generation time to ensure that directory size does not exceed the quota. The quota value must meet the following requirements: - The quota value consists of only digits and a unit (including b|k|kb|m|mb|g|gb|t|tb, which are case-insensitive ). - The quota value must start with a digit. You can determine whether to pass the unit. If the unit is left empty, **b** (that is, byte) is used by default.

**类型：** string

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.HiviewDFX.HiAppEvent

