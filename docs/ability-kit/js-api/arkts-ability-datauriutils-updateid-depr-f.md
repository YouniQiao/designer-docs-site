# updateId

## updateId

```TypeScript
function updateId(uri: string, id: number): string
```

Updates the ID in the specified uri

**Since:** 7

**Deprecated since:** 9

**Substitutes:** updateId

<!--Device-dataUriUtils-function updateId(uri: string, id: number): string--><!--Device-dataUriUtils-function updateId(uri: string, id: number): string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri object to be updated. |
| id | number | Yes | Indicates the new ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the updated uri object. |

**Example**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let id = 1122;
let uri = dataUriUtils.updateId(
    'com.example.dataUriUtils/1221',
	id
);

```

