# ZoneRules

Queries the time zone transition rule.

**起始版本：** 20

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## nextTransition

```TypeScript
public nextTransition(date?: double): ZoneOffsetTransition
```

Obtains the **nextTransition** object for the specified time.

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| date | double | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ZoneOffsetTransition | ZoneOffsetTransition object for next transition. |

