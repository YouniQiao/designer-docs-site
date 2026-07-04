---
last_update:
  date: 2026-07-04
---

# Kem

Indicates the KEM(key encapsulation mechanism) type, which is used for key encapsulation and decapsulation operations.

**Since:** 26.0.0

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## decapsulate

```TypeScript
decapsulate(priKey: PriKey, wrappedKey: Uint8Array): Promise<Uint8Array>
```

Key decapsulation operation. Using the receiver's private key, executed by the receiver, to decapsulate the shared key from the ciphertext. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | PriKey | Yes | The private key of the receiver. |
| wrappedKey | Uint8Array | Yes | The wrapped key of the KEM. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Uint8Array&gt; | Promise used to return the shared secret. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## decapsulateSync

```TypeScript
decapsulateSync(priKey: PriKey, wrappedKey: Uint8Array): Uint8Array
```

Key decapsulation operation. Using the receiver's private key, executed by the receiver, to decapsulate the shared key from the ciphertext. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link decapsulate}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | PriKey | Yes | The private key of the receiver. |
| wrappedKey | Uint8Array | Yes | The wrapped key of the KEM. |

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | the decapsulation result of the KEM. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## encapsulate

```TypeScript
encapsulate(pubKey: PubKey, ikme: Uint8Array | null): Promise<KemEncapResult>
```

Key encapsulation operation. Using the recipient's public key, executed by the sender, to generate and encapsulate a shared key. This API uses a promise to return the result.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pubKey | PubKey | Yes | The public key of the receiver. |
| ikme | Uint8Array \| null | Yes | Random number seed, used to replace the random number within the algorithm.For the ML-KEM algorithm, the random number seed is 32 bytes. It is recommended to pass null. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;KemEncapResult&gt; | Promise used to return the KemEncapResult. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## encapsulateSync

```TypeScript
encapsulateSync(pubKey: PubKey, ikme: Uint8Array | null): KemEncapResult
```

Key encapsulation operation. Using the recipient's public key, executed by the sender, to generate and encapsulate a shared key. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link encapsulate}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Cipher

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pubKey | PubKey | Yes | The public key of the receiver. |
| ikme | Uint8Array \| null | Yes | Random number seed, used to replace the random number within the algorithm.For the ML-KEM algorithm, the random number seed is 32 bytes. It is recommended to pass null. |

**Return value:**

| Type | Description |
| --- | --- |
| KemEncapResult | the encapsulation result of the KEM. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

