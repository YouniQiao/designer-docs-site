# Collator

Enable language-sensitive string comparison.

**Since:** 8

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { intl } from '@ohos.intl';
```

## compare

```TypeScript
compare(first: string, second: string): number
```

Compares two strings based on the specified collation rules.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| first | string | Yes | First string to compare. |
| second | string | Yes | Second string to compare. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Comparison result.- If the value is a negative number, the first string comes before the second string.- If the value is **0**, the first and second strings are in the same sequence.- If the value is a positive number, the first string is comes after the second string. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a Collator object with the locale ID being en-GB.
let collator = new intl.Collator('en-GB');
// Compare the sequence of the first and second strings.
let compareResult = collator.compare('first', 'second'); // compareResult = -1

```

## constructor

```TypeScript
constructor()
```

Creates a **Collator** object for the current system locale.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a Collator object using the current system locale ID.
let collator = new intl.Collator();

```

## constructor

```TypeScript
constructor(locale: string | Array<string>, options?: CollatorOptions)
```

Creates a **Collator** object based on the specified locale and options.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string \| Array&lt;string&gt; | Yes | Locale ID or locale ID array. If the input is a locale ID array, thefirst valid locale ID is used. |
| options | CollatorOptions | No | Options for creating a **Collator** object. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

// Create a Collator object with the locale ID being zh-CN, localeMatcher being lookup, and usage being sort.
let collator = new intl.Collator('zh-CN', {localeMatcher: 'lookup', usage: 'sort'});

```

## resolvedOptions

```TypeScript
resolvedOptions(): CollatorOptions
```

Obtains the options for creating a **Collator** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Return value:**

| Type | Description |
| --- | --- |
| CollatorOptions | Options for creating a **Collator** object. |

**Example**

```TypeScript
import { intl } from '@kit.LocalizationKit';

let collator = new intl.Collator('zh-Hans', { usage: 'sort', ignorePunctuation: true });
// Obtain the options of the Collator object.
let options = collator.resolvedOptions();
let usage = options.usage; // usage = 'sort'
let ignorePunctuation = options.ignorePunctuation; // ignorePunctuation = true

```

