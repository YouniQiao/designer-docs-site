# SortOptions

Represents the language or country/region sorting option.

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## isSuggestedFirst

```TypeScript
isSuggestedFirst?: boolean
```

Whether to move the recommended language or country/region to the top in the sorting result. The value "true" means to move the recommended language or country/region to the top, and the value "false" means the opposite. The default value is true.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

## isUseLocalName

```TypeScript
isUseLocalName?: boolean
```

Whether to use the local name for sorting. The value "true" means to use the local name for sorting, and the value "false" means the opposite. If getLanguageInfoArray is called, the default value of isUseLocalName is true. If getRegionInfoArray is called, the default value of isUseLocalName is false.

**类型：** boolean

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

## locale

```TypeScript
locale?: string
```

Locale information, which consists of the language, script, and country/region, for example, "zh-Hans-CN". The default value is the current system locale.

**类型：** string

**起始版本：** 10

**系统能力：** SystemCapability.Global.I18n

**系统接口：** 此接口为系统接口。

