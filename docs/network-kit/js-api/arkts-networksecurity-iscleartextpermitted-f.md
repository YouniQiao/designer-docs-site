# isCleartextPermitted

## isCleartextPermitted

```TypeScript
export function isCleartextPermitted(): boolean
```

Checks whether the Cleartext traffic is permitted. To invoke this method, you must have the {@code ohos.permission.INTERNET} permission.

**Since:** 18

**Required permissions:** 

 ohos.permission.INTERNET

**System capability:** SystemCapability.Communication.NetStack

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns true if the Cleartext traffic is permitted, else returns false. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |

