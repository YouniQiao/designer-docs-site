# isCleartextPermittedByHostName

## Modules to Import

```TypeScript
import { networkSecurity } from '@kit.NetworkKit';
```

## isCleartextPermittedByHostName

```TypeScript
export function isCleartextPermittedByHostName(hostName: string): boolean
```

Checks whether the Cleartext traffic for a specified hostname is permitted.To invoke this method, you must have the {@code ohos.permission.INTERNET} permission.

**Since:** 18

**Required permissions:** ohos.permission.INTERNET

<!--Device-networkSecurity-export function isCleartextPermittedByHostName(hostName: string): boolean--><!--Device-networkSecurity-export function isCleartextPermittedByHostName(hostName: string): boolean-End-->

**System capability:** SystemCapability.Communication.NetStack

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hostName | string | Yes | Indicates the host name. |

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
  let result: boolean = networkSecurity.isCleartextPermittedByHostName("xxx");
  console.info(`isCleartextPermitted Result: ${JSON.stringify(result)}`);
} catch (error) {
  console.error(`isCleartextPermitted Error: ${JSON.stringify(error)}`);
}

```

