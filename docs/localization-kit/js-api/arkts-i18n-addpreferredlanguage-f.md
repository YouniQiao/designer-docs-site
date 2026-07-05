# addPreferredLanguage

## addPreferredLanguage

```TypeScript
export function addPreferredLanguage(language: string, index?: int): boolean
```

Adds a preferred language to the specified position on the preferred language list.

**Since:** 8

**Deprecated since:** 9

**Substitute:** i18n.System.addPreferredLanguage

**Required permissions:** 

 ohos.permission.UPDATE_CONFIGURATION

**System capability:** SystemCapability.Global.I18n

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| language | string | Yes | Preferred language to add. |
| index | int | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true if the operation is successful, and false otherwise. |

