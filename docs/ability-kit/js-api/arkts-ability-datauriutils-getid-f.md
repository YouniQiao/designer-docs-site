# getId

## Modules to Import

```TypeScript
import { dataUriUtils } from '@kit.AbilityKit';
```

<a id="getid"></a>
## getId

```TypeScript
function getId(uri: string): number
```

Obtains the ID attached to the end of a given URI.

**Since:** 9

<!--Device-dataUriUtils-function getId(uri: string): double--><!--Device-dataUriUtils-function getId(uri: string): double-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Target URI object. |

**Return value:**

| Type | Description |
| --- | --- |
| number | ID obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { dataUriUtils } from '@kit.AbilityKit';

try {
  let id = dataUriUtils.getId('com.example.dataUriUtils/1221');
  console.info(`get id: ${id}`);
} catch(err) {
  console.error(`get id err ,check the uri ${err}`);
}

```

