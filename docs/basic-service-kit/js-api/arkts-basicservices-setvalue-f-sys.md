# setValue (System API)

## Modules to Import

```TypeScript
import { settings } from '@ohos.settings';
```

## setValue

```TypeScript
function setValue(dataAbilityHelper: DataAbilityHelper, name: string, value: object, callback: AsyncCallback<boolean>): void
```

Saves a character string name and its value to the database.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setValue

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Applications.Settings.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} usedto access the database. |
| name | string | Yes | Indicates the name of the character string. |
| value | object | Yes | Indicates the value of the character string. |
| callback | AsyncCallback&lt;boolean&gt; | Yes | The callback of setValue result. |


## setValue

```TypeScript
function setValue(dataAbilityHelper: DataAbilityHelper, name: string, value: object): Promise<boolean>
```

Saves a character string name and its value to the database.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** setValue

**Model restriction:** This API can be used only in the FA model.

**System capability:** SystemCapability.Applications.Settings.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataAbilityHelper | DataAbilityHelper | Yes | Indicates the {@link ohos.aafwk.ability.DataAbilityHelper} usedto access the database. |
| name | string | Yes | Indicates the name of the character string. |
| value | object | Yes | Indicates the value of the character string. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean&gt; | Returns {@code true} if the operation is successful; returns {@code false} otherwise. |

