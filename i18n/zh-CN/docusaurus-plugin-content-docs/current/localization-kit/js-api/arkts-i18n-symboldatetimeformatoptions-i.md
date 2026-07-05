# SymbolDateTimeFormatOptions

Represents optional configuration items for the SymbolDateTimeFormat object. Define the symbol element and value that need to be replaced.

**继承实现关系：** SymbolDateTimeFormatOptions继承自：Intl.DateTimeFormatOptions。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## amPMSymbol

```TypeScript
amPMSymbol?: string[] | undefined
```

AM and PM symbol of date time period part, such as "PM" of "2:23 PM". The parameter array must be greater than 2, If greater than 2, the first two will be selected.

**类型：** string[] | undefined

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

