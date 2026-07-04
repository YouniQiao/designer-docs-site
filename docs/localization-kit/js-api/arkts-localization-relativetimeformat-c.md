---
last_update:
  date: 2026-07-04
---

# RelativeTimeFormat

Given a Time period length value and a unit, RelativeTimeFormat object enables language-sensitive relative time formatting.

**Since:** 8

**Deprecated since:** 20

**Substitutes:** RelativeTimeFormat

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@ohos.intl';
```

## constructor

```TypeScript
constructor()
```

Creates a **RelativeTimeFormat** object.

**Since:** 8

**Deprecated since:** 20

**Substitutes:** constructor

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a RelativeTimeFormat object using the current system locale ID.
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: RelativeTimeFormatInputOptions)
```

Creates a **RelativeTimeFormat** object.

**Since:** 8

**Deprecated since:** 20

**Substitutes:** constructor

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string&gt; | Yes | Locale ID or locale ID array. If the input is a locale ID array, thefirst valid locale ID is used. |
| options | RelativeTimeFormatInputOptions | No | Options for creating a **RelativeTimeFormat** object. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Use locale ID zh-CN to create a RelativeTimeFormat object with the localeMatcher set to lookup, numeric set to always, and style set to long.
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN', {
  localeMatcher: 'lookup',
  numeric: 'always',
  style: 'long'
});

```

## format

```TypeScript
format(value: number, unit: string): string
```

Formats a relative time.

**Since:** 8

**Deprecated since:** 20

**Substitutes:** format

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value to format. |
| unit | string | Yes | Unit of the relative time.The value can be any of the following: **year**,**quarter**, **month**, **week**, **day**, **hour**, **minute**, or **second**. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Relative time after formatting. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a RelativeTimeFormat object with the locale ID being zh-CN.
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('zh-CN');
// Obtain the localized representation (in unit of quarter) of number 3 in locale zh-CN.
let formatResult: string = formatter.format(3, 'quarter'); // formatResult = '3 quarters later'

```

## formatToParts

```TypeScript
formatToParts(value: number, unit: string): Array<object>
```

Formats the relative time

**Since:** 8

**Deprecated since:** 20

**Substitutes:** formatToParts

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Value to format. |
| unit | string | Yes | Unit of the relative time.The value can be any of the following: **year**,**quarter**, **month**, **week**, **day**, **hour**, **minute**, or **second**. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;object&gt; | Components of the formatted result. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a RelativeTimeFormat object with the locale ID being en and numeric being auto.
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en', { numeric: 'auto' });
let parts: Array<object> = formatter.formatToParts(10, 'seconds'); // parts = [ {type: 'literal', value: 'in'}, {type: 'integer', value: 10, unit: 'second'}, {type: 'literal', value: 'seconds'} ]

```

## resolvedOptions

```TypeScript
resolvedOptions(): RelativeTimeFormatResolvedOptions
```

Defines the formatting options for a **RelativeTimeFormat** object.

**Since:** 8

**Deprecated since:** 20

**Substitutes:** resolvedOptions

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| RelativeTimeFormatResolvedOptions | Options for the **RelativeTimeFormat** object. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a RelativeTimeFormat object with the locale ID being en-GB.
let formatter: intl.RelativeTimeFormat = new intl.RelativeTimeFormat('en-GB', { style: 'short' });
// Obtain the options of the RelativeTimeFormat object.
let options: intl.RelativeTimeFormatResolvedOptions = formatter.resolvedOptions();
let style: string = options.style; // style = 'short'

```

