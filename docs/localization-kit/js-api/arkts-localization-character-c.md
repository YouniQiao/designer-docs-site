# Character

Provides the API for accessing unicode character properties. For example, determine whether a character is a number.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [Unicode](arkts-localization-unicode-c.md#unicode)

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## getType

```TypeScript
getType(ch: string): string
```

Obtains the type of the input character.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [getType](arkts-localization-unicode-c.md#gettype-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Type of the input character. |

## isDigit

```TypeScript
isDigit(ch: string): boolean
```

Checks whether the input character is a digit.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isDigit](arkts-localization-unicode-c.md#isdigit-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character is a digit, and **false** otherwise. |

## isIdeograph

```TypeScript
isIdeograph(ch: string): boolean
```

Checks whether the input character is an ideographic character.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isIdeograph](arkts-localization-unicode-c.md#isideograph-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character an ideographic character, and **false** otherwise. |

## isLetter

```TypeScript
isLetter(ch: string): boolean
```

Checks whether the input character is a letter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isLetter](arkts-localization-unicode-c.md#isletter-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character a letter, and **false** otherwise. |

## isLowerCase

```TypeScript
isLowerCase(ch: string): boolean
```

Checks whether the input character is a lowercase letter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isLowerCase](arkts-localization-unicode-c.md#islowercase-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character a lowercase letter, and **false** otherwise. |

## isRTL

```TypeScript
isRTL(ch: string): boolean
```

Checks whether the input character is of the right to left (RTL) language.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isRTL](arkts-localization-unicode-c.md#isrtl-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character is of the RTL language, and **false** otherwise. |

## isSpaceChar

```TypeScript
isSpaceChar(ch: string): boolean
```

Checks whether the input character is a space.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isSpaceChar](arkts-localization-unicode-c.md#isspacechar-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character is a space, and **false** otherwise. |

## isUpperCase

```TypeScript
isUpperCase(ch: string): boolean
```

Checks whether the input character is an uppercase letter.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isUpperCase](arkts-localization-unicode-c.md#isuppercase-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character an uppercase letter, and **false** otherwise. |

## isWhitespace

```TypeScript
isWhitespace(ch: string): boolean
```

Checks whether the input character is a whitespace.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [isWhitespace](arkts-localization-unicode-c.md#iswhitespace-1)

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ch | string | Yes | Input character. If the input is a string, only the type of the first character ischecked. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the input character is a white space, and **false** otherwise. |

