# getId

## getId

```TypeScript
function getId(uri: string): number
```

Obtains the ID attached to the end of the path component of the given uri.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** getId

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri object from which the ID is to be obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| number | Returns the ID attached to the end of the path component; |

**Example**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let id = dataUriUtils.getId('com.example.dataUriUtils/1221');

```

