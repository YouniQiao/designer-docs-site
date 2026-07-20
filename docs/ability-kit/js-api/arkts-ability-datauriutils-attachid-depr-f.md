# attachId

## attachId

```TypeScript
function attachId(uri: string, id: number): string
```

Attaches the given ID to the end of the path component of the given uri.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** attachId

<!--Device-dataUriUtils-function attachId(uri: string, id: number): string--><!--Device-dataUriUtils-function attachId(uri: string, id: number): string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri string from which the ID is to be obtained. |
| id | number | Yes | Indicates the ID to attach. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the uri object with the given ID attached. |

**Example**

```TypeScript
import dataUriUtils from '@ohos.ability.dataUriUtils';

let id = 1122;
let uri = dataUriUtils.attachId(
    'com.example.dataUriUtils',
	id,
);

```

