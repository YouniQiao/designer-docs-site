# InputMethodSubtype

The **InputMethodSubtype** module provides APIs for managing the attributes of input method subtypes. The input method subtype allows the input method to switch to a specific mode or language, for example, the Chinese or English keyboard.

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## 导入模块

```TypeScript
import { InputMethodSubtype } from '@kit.IMEKit';
```

## iconId

```TypeScript
readonly iconId?: double
```

Optional. Icon ID of the input method subtype.

**类型：** double

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## mode

```TypeScript
readonly mode?: 'upper' | 'lower'
```

Optional. Mode of the input method subtype, including **upper** (uppercase) and **lower** (lowercase).

**类型：** 'upper' | 'lower'

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## labelId

```TypeScript
readonly labelId?: double
```

Optional. Label ID of the input method subtype.

**类型：** double

**起始版本：** 10

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## extra

```TypeScript
extra?: object
```

Mandatory. Extra information of the input method subtype. **NOTE** - This parameter is optional since API version 10. - This parameter is reserved and currently has no specific meaning.

**类型：** object

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## icon

```TypeScript
readonly icon?: string
```

Optional. Icon of the input method subtype. It can be obtained by using **iconId**. This parameter is reserved.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## name

```TypeScript
readonly name: string
```

Mandatory. Bundle name of the application to which the input method subtype belongs.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## language

```TypeScript
readonly language: string
```

Mandatory. Language of the input method subtype.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## id

```TypeScript
readonly id: string
```

Mandatory. ID of the input method subtype.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## label

```TypeScript
readonly label?: string
```

Optional. Label of the input method subtype.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

## locale

```TypeScript
readonly locale: string
```

Mandatory. Locale of the input method subtype.

**类型：** string

**起始版本：** 9

**系统能力：** SystemCapability.MiscServices.InputMethodFramework

