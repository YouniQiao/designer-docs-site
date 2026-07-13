# removePreferredLanguage

## Modules to Import

```TypeScript
import { i18n } from '@kit.LocalizationKit';
```

## removePreferredLanguage

```TypeScript
export function removePreferredLanguage(index: number): boolean
```

Removes a preferred language from the specified position on the preferred language list.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [removePreferredLanguage](arkts-localization-system-c-sys.md#removepreferredlanguage-1)

**Required permissions:** ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Position of the preferred language to delete. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the operation is successful. The value **true** indicates that the operation issuccessful, and the value **false** indicates the opposite. |

