---
last_update:
  date: 2026-07-04
---

# createKem

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## createKem

```TypeScript
function createKem(algNameId: KemAlgNameId): Kem
```

Creates a KEM instance for key encapsulation and decapsulation operations.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algNameId | KemAlgNameId | Yes | The algorithm name ID of the KEM. |

**Return value:**

| Type | Description |
| --- | --- |
| Kem | the KEM instance. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

