# deleteId

<a id="deleteid"></a>
## deleteId

```TypeScript
function deleteId(uri: string): string
```

Deletes the ID from the end of the path component of the given uri.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** deleteId

<!--Device-dataUriUtils-function deleteId(uri: string): string--><!--Device-dataUriUtils-function deleteId(uri: string): string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri object from which the ID is to be deleted. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the uri object with the ID deleted. |

**Example**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let uri = dataUriUtils.deleteId('com.example.dataUriUtils/1221');

```

