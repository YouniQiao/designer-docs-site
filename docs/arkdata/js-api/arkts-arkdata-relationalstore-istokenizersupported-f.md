# isTokenizerSupported

## Modules to Import

```TypeScript
import { relationalStore } from '@kit.ArkData';
```

<a id="istokenizersupported"></a>
## isTokenizerSupported

```TypeScript
function isTokenizerSupported(tokenizer: Tokenizer): boolean
```

Checks whether the specified tokenizer is supported. This API returns the result synchronously.

This API returns **true** if the specified tokenizer is supported; returns **false** otherwise.

**Since:** 18

<!--Device-relationalStore-function isTokenizerSupported(tokenizer: Tokenizer): boolean--><!--Device-relationalStore-function isTokenizerSupported(tokenizer: Tokenizer): boolean-End-->

**System capability:** SystemCapability.DistributedDataManager.RelationalStore.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| tokenizer | [Tokenizer](arkts-arkdata-relationalstore-tokenizer-e.md) | Yes | Tokenizer to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the specified tokenizer is supported; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
let customType = relationalStore.Tokenizer.CUSTOM_TOKENIZER;
let customTypeSupported = relationalStore.isTokenizerSupported(customType);
console.info("custom tokenizer supported on current platform: " + customTypeSupported);

```

