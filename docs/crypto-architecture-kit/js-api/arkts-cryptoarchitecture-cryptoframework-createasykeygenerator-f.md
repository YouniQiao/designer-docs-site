# createAsyKeyGenerator

## Modules to Import

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
```

## createAsyKeyGenerator

```TypeScript
function createAsyKeyGenerator(algName: string): AsyKeyGenerator
```

Creates an **AsyKeyGenerator** instance based on the specified algorithm.

For details about the supported specifications, see [Asymmetric Key Generation and Conversion Specifications](../../../security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-cryptoFramework-function createAsyKeyGenerator(algName: string): AsyKeyGenerator--><!--Device-cryptoFramework-function createAsyKeyGenerator(algName: string): AsyKeyGenerator-End-->

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Key.AsymKey
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| algName | string | Yes | Algorithm used by the asymmetric keys. For details, see the string parameters in [Asymmetric Key Generation and Conversion Specifications](../../../security/CryptoArchitectureKit/crypto-asym-key-generation-conversion-spec.md). |

**Return value:**

| Type | Description |
| --- | --- |
| [AsyKeyGenerator](arkts-cryptoarchitecture-cryptoframework-asykeygenerator-i.md) | **AsyKeyGenerator** instance created. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

let asyKeyGenerator = cryptoFramework.createAsyKeyGenerator('ECC256');

```

