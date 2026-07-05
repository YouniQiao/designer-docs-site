# Character

Provides the API for accessing unicode character properties. For example, determine whether a character is a number.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode

**系统能力：** SystemCapability.Global.I18n

## 导入模块

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## getType

```TypeScript
getType(ch: string): string
```

Obtains the type of the input character.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.getType

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | Type of the input character. |

## isDigit

```TypeScript
isDigit(ch: string): boolean
```

Checks whether the input character is a digit.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isDigit

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character is a digit, and false otherwise. |

## isIdeograph

```TypeScript
isIdeograph(ch: string): boolean
```

Checks whether the input character is an ideographic character.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isIdeograph

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character an ideographic character, and false otherwise. |

## isLetter

```TypeScript
isLetter(ch: string): boolean
```

Checks whether the input character is a letter.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isLetter

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character a letter, and false otherwise. |

## isLowerCase

```TypeScript
isLowerCase(ch: string): boolean
```

Checks whether the input character is a lowercase letter.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isLowerCase

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character a lowercase letter, and false otherwise. |

## isRTL

```TypeScript
isRTL(ch: string): boolean
```

Checks whether the input character is of the right to left (RTL) language.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isRTL

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character is of the RTL language, and false otherwise. |

## isSpaceChar

```TypeScript
isSpaceChar(ch: string): boolean
```

Checks whether the input character is a space.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isSpaceChar

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character is a space, and false otherwise. |

## isUpperCase

```TypeScript
isUpperCase(ch: string): boolean
```

Checks whether the input character is an uppercase letter.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isUpperCase

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character an uppercase letter, and false otherwise. |

## isWhitespace

```TypeScript
isWhitespace(ch: string): boolean
```

Checks whether the input character is a whitespace.

**起始版本：** 8

**废弃版本：** 9

**替代接口：** i18n.Unicode.isWhitespace

**系统能力：** SystemCapability.Global.I18n

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| ch | string | 是 | Input character. If the input is a string, only the type of the first character is  checked. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| boolean | true if the input character is a white space, and false otherwise. |

