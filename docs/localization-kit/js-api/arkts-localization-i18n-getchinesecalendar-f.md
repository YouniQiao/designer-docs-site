# getChineseCalendar

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

<a id="getchinesecalendar"></a>
## getChineseCalendar

```TypeScript
export function getChineseCalendar(locale?: Intl.Locale): ChineseCalendar
```

Obtains the ChineseCalendar object for the specified locale.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-i18n-export function getChineseCalendar(locale?: Intl.Locale): ChineseCalendar--><!--Device-i18n-export function getChineseCalendar(locale?: Intl.Locale): ChineseCalendar-End-->

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | Intl.Locale | No | Locale object. The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| [ChineseCalendar](arkts-localization-i18n-chinesecalendar-c.md) | ChineseCalendar object. |

