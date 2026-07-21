# createKeyAgreement

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

<a id="createkeyagreement"></a>
## createKeyAgreement

```TypeScript
function createKeyAgreement(algName: string): KeyAgreement
```

Creates a **KeyAgreement** instance.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-cryptoFramework-function createKeyAgreement(algName: string): KeyAgreement--><!--Device-cryptoFramework-function createKeyAgreement(algName: string): KeyAgreement-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.KeyAgreement
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | Key agreement algorithm to use. In addition to ECDH, X25519 and DH are supported since API version 11.<br>For details about the supported specifications, see [Key Agreement Overview and Algorithm Specifications](docroot://security/CryptoArchitectureKit/crypto-key-agreement-overview.md). |

**Return value:**

| Type | Description |
| --- | --- |
| [KeyAgreement](arkts-cryptoarchitecture-cryptoframework-keyagreement-i.md) | Returns the **KeyAgreement** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let keyAgreement = cryptoFramework.createKeyAgreement('ECC256');

```

