# ISO8601DateTimeFormat

Provide a DateTime formatting interface which could format date to ISO 8601 standard string. [ISO8601](https://iso8601.com/).

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## constructor

```TypeScript
public constructor(options?: ISO8601DateTimeFormatOptions)
```

A constructor used to create a ISO8601DateTimeFormat object.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | ISO8601DateTimeFormatOptions | 否 |  |

## format

```TypeScript
public format(date: Date): string
```

Formats a date to ISO 8601 formatted string.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | Date | 是 | date to be formatted. Note: The month starts from 0. For example, 0 indicates January. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Date and time string that complies with ISO 8601. |

