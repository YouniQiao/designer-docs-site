# isCleartextPermitted

## Modules to Import

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';
```

<a id="iscleartextpermitted"></a>
## isCleartextPermitted

```TypeScript
export function isCleartextPermitted(): boolean
```

Checks whether the Cleartext traffic is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-networkSecurity-export function isCleartextPermitted(): boolean--><!--Device-networkSecurity-export function isCleartextPermitted(): boolean-End-->

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the Cleartext traffic is permitted, else returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |

**Example**

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';

try {
  let result: boolean = networkSecurity.isCleartextPermitted();
  console.info(`isCleartextPermitted Result: ${JSON.stringify(result)}`);
} catch (error) {
  console.error(`isCleartextPermitted Error: ${JSON.stringify(error)}`);
}

```

