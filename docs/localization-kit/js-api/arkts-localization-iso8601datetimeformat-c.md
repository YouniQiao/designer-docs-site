---
last_update:
  date: 2026-07-04
---

# ISO8601DateTimeFormat

Provide a DateTime formatting interface which could format date to ISO 8601 standard string. [ISO8601](https://iso8601.com/).

**Since:** 26.0.0

**System capability:** SystemCapability.Global.I18n

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## constructor

```TypeScript
public constructor(options?: ISO8601DateTimeFormatOptions)
```

A constructor used to create a ISO8601DateTimeFormat object.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | ISO8601DateTimeFormatOptions | No | Indicates the format options formatted result include.Default format is yyyy-MM-ddThh:mm:ssZZZZZ.<br>ISO8601 Style DateTime Formatting Options. |

## format

```TypeScript
public format(date: Date): string
```

Formats a date to ISO 8601 formatted string.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | Date | Yes | date to be formatted. Note: The month starts from 0. For example, 0 indicates January. |

**Return value:**

| Type | Description |
| --- | --- |
| string | ISO 8601 formatted string, such as yyyy-MM-dd or yyyy-MM-ddThh:mm:ssZZZZZ. |

