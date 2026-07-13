# addPreferredLanguage

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## addPreferredLanguage

```TypeScript
export function addPreferredLanguage(language: string, index?: number): boolean
```

Adds a preferred language to the specified position on the preferred language list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [addPreferredLanguage](arkts-localization-system-c-sys.md#addpreferredlanguage-1)

**Required permissions:** ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Preferred language to add. |
| index | number | No | Position to which the preferred language is added. The default value is the length of thepreferred language list. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | **true** if the operation is successful, and **false** otherwise. |

