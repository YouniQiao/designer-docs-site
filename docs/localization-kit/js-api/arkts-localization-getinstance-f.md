# getInstance

## Modules to Import

```TypeScript
import { i18n } from '@ohos.i18n';
```

## getInstance

```TypeScript
export function getInstance(locale?:string): IndexUtil
```

Creates an **IndexUtil** object.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| locale | string | No | [System locale](../../../../internationalization/i18n-locale-culture.md#how-it-works),which consists of the language, script, and country/region.The default value is the current system locale. |

**Return value:**

| Type | Description |
| --- | --- |
| IndexUtil | **IndexUtil** object created based on the specified locale ID. |

