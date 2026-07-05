# PhoneNumberFormatOptions

Options for **PhoneNumberFormat** object initialization.

**起始版本：** 8

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## type

```TypeScript
type?: string
```

Type of the phone number. The value can be **E164**, **INTERNATIONAL**, **NATIONAL**, **RFC3966**, or **TYPING**. - In API version 8, **type** is mandatory. - In API version 9 or later, **type** is optional. - In API version 12 or later, TYPING is supported, which indicates that the dialed number is formatted in real time. - In API version 23 or later, TYPING supports real-time obtaining of the home location of a dialed number.

**类型：** string

**起始版本：** 8

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Global.I18n

