---
last_update:
  date: 2026-07-04
---

# createRandom

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## createRandom

```TypeScript
function createRandom(): Random
```

Creates a **Random** instance for generating random numbers and setting seeds.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Rand
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Return value:**

| Type | Description |
| --- | --- |
| Random | Returns the [Random](arkts-cryptoarchitecture-random-i.md#random) instance created.<br>For details about the supported specifications, see[Supported Algorithms and Specifications](../../../../security/CryptoArchitectureKit/crypto-generate-random-number.md#supported-algorithms-and-specifications). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let rand = cryptoFramework.createRandom();
} catch (error) {
  let e: BusinessError = error as BusinessError;
  console.error(`sync failed: errCode: ${e.code}, errMsg: ${e.message}`);
}

```

