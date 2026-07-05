# deleteId

## deleteId

```TypeScript
function deleteId(uri: string): string
```

删除指定uri路径末尾的ID。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | 表示要从中删除ID的uri对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 返回删除ID之后的uri对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { dataUriUtils } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let uri = dataUriUtils.deleteId('com.example.dataUriUtils/1221');
  console.info(`delete id with the uri is: ${uri}`);
} catch(err) {
  console.error(`delete id err, code: ${JSON.stringify((err as BusinessError).code)}, msg: ${JSON.stringify((err as BusinessError).message)}`);
}

```

