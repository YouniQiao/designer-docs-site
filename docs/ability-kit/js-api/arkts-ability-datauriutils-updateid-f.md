# updateId

## Modules to Import

```TypeScript
import { dataUriUtils } from '@kit.AbilityKit';
```

<a id="updateid"></a>
## updateId

```TypeScript
function updateId(uri: string, id: number): string
```

Updates the ID in a given URI.

**Since:** 9

<!--Device-dataUriUtils-function updateId(uri: string, id: double): string--><!--Device-dataUriUtils-function updateId(uri: string, id: double): string-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Target URI object. |
| id | number | Yes | New ID. |

**Return value:**

| Type | Description |
| --- | --- |
| string | URI object with the new ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { dataUriUtils } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let id = 1122;
  let uri = dataUriUtils.updateId(
    'com.example.dataUriUtils/1221',
    id
  );
} catch (err) {
  console.error(`update id err, code: ${JSON.stringify((err as BusinessError).code)}, msg: ${JSON.stringify((err as BusinessError).message)}`);
}

```

