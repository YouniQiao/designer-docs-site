# RelativeTimeFormatInputOptions

Defines the configuration options for a **RelativeTimeFormat** object. Since API version 9, the attributes in **RelativeTimeFormatInputOptions** are optional.

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#options)

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { intl } from '@kit.LocalizationKit';
```

## localeMatcher

```TypeScript
localeMatcher?: string
```

Locale matching algorithm. The value can be **lookup** or **best fit**. The default value is **best fit**.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormatOptions.localeMatcher](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#localematcher)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## numeric

```TypeScript
numeric?: string
```

Format of the output result. It determines whether numeric values are used to represent relative dates or times in the formatting result. The value can be **always** or **auto**. The default value is **always**. For details about their display effects, see [Table 23](docroot://reference/apis-localization-kit/js-apis-intl.md#appendix).

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormatOptions.numeric](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#numeric)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

## style

```TypeScript
style?: string
```

Length of an internationalized message. The value can be **long**, **short**, or **narrow**. The default value is **long**.

**类型：** string

**起始版本：** 8

**废弃版本：** 20

**替代接口：** [Intl.RelativeTimeFormatOptions.style](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#style)

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

