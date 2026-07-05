# setValue

## setValue

```TypeScript
function setValue(dataAbilityHelper: DataAbilityHelper, name: string, value: object, callback: AsyncCallback<boolean>): void
```

Saves a character string name and its value to the database.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.settings#setValue

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Applications.Settings.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} used  to access the database. |
| name | string | Yes | Indicates the name of the character string. |
| value | object | Yes | Indicates the value of the character string. |
| callback | AsyncCallback&lt;boolean> | Yes |  |

## setValue

```TypeScript
function setValue(dataAbilityHelper: DataAbilityHelper, name: string, value: object): Promise<boolean>
```

Saves a character string name and its value to the database.

**Since:** 7

**Deprecated since:** 9

**Substitute:** ohos.settings#setValue

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Applications.Settings.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} used  to access the database. |
| name | string | Yes | Indicates the name of the character string. |
| value | object | Yes | Indicates the value of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

