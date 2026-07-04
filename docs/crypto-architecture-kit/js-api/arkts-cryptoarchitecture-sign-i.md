---
last_update:
  date: 2026-07-04
---

# Sign

Provides APIs for signing. Before using any API of the **Sign** class, you must create a **Sign** instance by using [createSign(algName: string): Sign](arkts-cryptoarchitecture-createsign-f.md#createsign-1). Invoke **init()**, **update()**, and **sign()** in this class in sequence to complete the signing operation. For details about the sample code, see [Signing and Signature Verification with an RSA Key Pair (PKCS1 Mode)](../../../../security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1.md) . The **Sign** class does not support repeated initialization. When a new key is used for signing, you must create a new **Sign** instance and call **init()** for initialization. The signing mode is determined by **createSign()**, and the key is set by **init()**. If a small amount of data is to be signed, you can directly call **sign()** to pass in the data for signing after **init()**. If a large amount of data is to be signed, you can use **update()** to pass in the data by segment, and then use **sign()** to sign the entire data. When **update()** is used, the **sign()** API supports only **DataBlob** in versions earlier than API version 10 and starts to support **null** since API version 10. After all the data is passed in by using **update()**, call **sign()** to sign the data. If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, the **update()** operation is not supported. If **update()** is called in this case, the error code **ERR_CRYPTO_OPERATION** will be returned.

**Since:** 9

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

## Modules to Import

```TypeScript
import { cryptoFramework } from '@ohos.security.cryptoFramework';
```

## getSignSpec

```TypeScript
getSignSpec(itemType: SignSpecItem): string | number
```

Obtains signing specifications. Currently, only RSA is supported.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | SignSpecItem | Yes | Signing parameter to obtain. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Returns the value of the signing parameter obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function testGetSignSpec() {
  let signer = cryptoFramework.createSign('RSA|PSS|SHA256|MGF1_SHA256');
  let setN = 32;
  signer.setSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);
  signer.getSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM);
}

```

## init

```TypeScript
init(priKey: PriKey, callback: AsyncCallback<void>): void
```

Initializes the **Sign** object using a private key. This API uses an asynchronous callback to return the result. **init**, **update**, and **sign** must be used together. **init** and **sign** are mandatory, and **update** is optional. The **Sign** class does not support repeated use of **init**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | PriKey | Yes | Private key used for the initialization. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Incorrect key type.<br>**Applicable version:** 26.0.0 |

## init

```TypeScript
init(priKey: PriKey): Promise<void>
```

Initializes the **Sign** object using a private key. This API uses a promise to return the result. **init**, **update**, and **sign** must be used together. **init** and **sign** are mandatory, and **update** is optional. The **Sign** class does not support repeated use of **init**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | PriKey | Yes | Private key used for the initialization. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Incorrect key type.<br>**Applicable version:** 26.0.0 |

## initSync

```TypeScript
initSync(priKey: PriKey): void
```

Initializes the **Sign** instance with a private key. This API returns the result synchronously. **initSync**, **updateSync**, and **signSync** must be used together. **initSync** and **signSync** are mandatory, and **updateSync** is optional. The **Sign** class does not support repeated use of **initSync**. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link init}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| priKey | PriKey | Yes | Private key used for the initialization. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. Possible causes:<br>1. Incorrect key type.<br>**Applicable version:** 26.0.0 |

## setSignSpec

```TypeScript
setSignSpec(itemType: SignSpecItem, itemValue: number): void
```

Sets signing specifications. You can use this API to set signing parameters that cannot be set by [createSign](arkts-cryptoarchitecture-createsign-f.md#createsign-1). Currently, only RSA and SM2 are supported. Since API version 11, SM2 signing parameters can be set.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | SignSpecItem | Yes | Signing parameter to set. |
| itemValue | number | Yes | Value of the signing parameter to set. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

**Example**

```TypeScript
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

function testSetSignSpec() {
  let signer = cryptoFramework.createSign('RSA|PSS|SHA256|MGF1_SHA256');
  let setN = 20;
  signer.setSignSpec(cryptoFramework.SignSpecItem.PSS_SALT_LEN_NUM, setN);
}

```

## setSignSpec

```TypeScript
setSignSpec(itemType: SignSpecItem, itemValue: number | Uint8Array): void
```

Sets the specified parameter to the Sign object. Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 are supported.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | SignSpecItem | Yes | Indicates the specified parameter type. |
| itemValue | number \| Uint8Array | Yes | The value of the specified parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters.<br>**Applicable version:** 26.0.0 |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |
| [17620004](../errorcode-crypto-framework.md#17620004-invalid-function-call) | Invalid function call.<br>**Applicable version:** 26.0.0 |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## setSignSpec

```TypeScript
setSignSpec(itemType: SignSpecItem, itemValue: number | Uint8Array | boolean): void
```

Sets the specified parameter to the Sign object. Currently, only PSS_SALT_LEN in RSA and USER_ID in SM2 and ML_DSA_DETERMINISTIC/ML_DSA_MU/ML_DSA_CONTEXT in ML-DSA are supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | SignSpecItem | Yes | Indicates the specified parameter type. |
| itemValue | number \| Uint8Array \| boolean | Yes | The value of the specified parameter. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | This operation is not supported. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed. |
| [17620004](../errorcode-crypto-framework.md#17620004-invalid-function-call) | Invalid function call. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |

## sign

```TypeScript
sign(data: DataBlob, callback: AsyncCallback<DataBlob>): void
```

Signs the data, including data added via the update interface. This API uses an asynchronous callback to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob | Yes | The data to be signed. |
| callback | AsyncCallback&lt;DataBlob&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**, and **data** is the signature obtained. Otherwise, **err** is anerror object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

## sign

```TypeScript
sign(data: DataBlob | null, callback: AsyncCallback<DataBlob>): void
```

Signs data. This API uses an asynchronous callback to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob \| null | Yes | Data to pass in. In versions earlier than API version 10, only **DataBlob** issupported. Since API version 10, **null** is also supported. |
| callback | AsyncCallback&lt;DataBlob&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**, and **data** is the signature obtained. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

## sign

```TypeScript
sign(data: DataBlob): Promise<DataBlob>
```

Signs the data, including data added via the update interface. This API uses a promise to return the result.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob | Yes | The data to be signed. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob&gt; | Promise used to return the signature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

## sign

```TypeScript
sign(data: DataBlob | null): Promise<DataBlob>
```

Signs data. This API uses a promise to return the result.

**Since:** 10

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 10 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob \| null | Yes | Data to pass in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;DataBlob&gt; | Promise used to return the signature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

## signSync

```TypeScript
signSync(data: DataBlob | null): DataBlob
```

Signs the data. This API returns the result synchronously. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link sign}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob \| null | Yes | Data to pass in. |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Signature. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620003](../errorcode-crypto-framework.md#17620003-parameter-verification-failed) | Parameter check failed.<br>**Applicable version:** 26.0.0 |

## update

```TypeScript
update(data: DataBlob, callback: AsyncCallback<void>): void
```

Updates data to be signed. This API uses an asynchronous callback to return the result. This API can be called only after the [Sign](arkts-cryptoarchitecture-sign-i.md#sign) instance is initialized by using [init](arkts-cryptoarchitecture-sign-i.md#init-1) or [initSync](arkts-cryptoarchitecture-sign-i.md#initsync-1). > **NOTE** > > You can call **update** multiple times or do not use **update** (call [sign](arkts-cryptoarchitecture-sign-i.md#sign) after > [init](arkts-cryptoarchitecture-sign-i.md#init-1)), depending on the data volume. > > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This > prevents too much memory from being requested at a time. > > For details about the sample code for calling **update()** multiple times in signing, see > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](../../../../security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md) > . The operations of other algorithms are similar. > > **OnlySign** cannot be used with **update()**. If **OnlySign** is specified, use **sign()** to pass in data. > > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **update()** is not supported. > If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob | Yes | Data to pass in. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620004](../errorcode-crypto-framework.md#17620004-invalid-function-call) | Invalid function call.<br>**Applicable version:** 26.0.0 |

## update

```TypeScript
update(data: DataBlob): Promise<void>
```

Updates data to be signed. This API uses a promise to return the result. Before using this API, you must use [Sign](arkts-cryptoarchitecture-sign-i.md#sign) to initialize the [init()](arkts-cryptoarchitecture-sign-i.md#init-1) instance. > **NOTE** > > You can call **update** multiple times or do not use **update** (call > [sign](arkts-cryptoarchitecture-sign-i.md#sign-2) after > [init](arkts-cryptoarchitecture-sign-i.md#init-1)), depending on the > data volume. > > The amount of the data to be passed in by **update()** (one-time or accumulative) is not limited. If there is a > large amount of data, you are advised to call **update()** multiple times to pass in the data by segment. This > prevents too much memory from being requested at a time. > For details about the sample code for calling **update()** multiple times in signing, see > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](../../../../security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md) > . The operations of other algorithms are similar. > > **OnlySign** cannot be used with **update()**. If **OnlySign** is specified, use **sign()** to pass in data. > > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **update()** is not supported. > If **update()** is called in this case, **ERR_CRYPTO_OPERATION** will be returned.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob | Yes | Data to pass in. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620004](../errorcode-crypto-framework.md#17620004-invalid-function-call) | Invalid function call.<br>**Applicable version:** 26.0.0 |

## updateSync

```TypeScript
updateSync(data: DataBlob): void
```

Updates data to be signed. This API returns the result synchronously. This API can be called only after the [Sign](arkts-cryptoarchitecture-sign-i.md#sign) instance is initialized by using [initSync()](arkts-cryptoarchitecture-sign-i.md#initsync-1). > **NOTE** > > You can call **updateSync** multiple times or do not use **updateSync** (call > [signSync](arkts-cryptoarchitecture-sign-i.md#signsync-1) after [initSync](arkts-cryptoarchitecture-sign-i.md#initsync-1)), > depending on the data volume. > > The amount of the data to be passed in by **updateSync** (one-time or accumulative) is not limited. If there is > a large amount of data, you are advised to call **updateSync** multiple times to pass in the data by segment. > This prevents too much memory from being requested at a time. > > For details about the sample code for calling **updateSync** multiple times in signing, see > [Signing and Signature Verification by Segment with an RSA Key Pair (PKCS1 Mode)](../../../../security/CryptoArchitectureKit/crypto-rsa-sign-sig-verify-pkcs1-by-segment.md) > . The operations of other algorithms are similar. > > **OnlySign** cannot be used with **updateSync**. If **OnlySign** is specified, use **signSync** to pass in > data. > > If the DSA algorithm is used for signing and the digest algorithm is **NoHash**, **updateSync** is not > supported. If **updateSync** is called in this case, **ERR_CRYPTO_OPERATION** will be returned. <br><br>**NOTE** <br>It is recommended to prioritize the use of asynchronous API, {@link update}. Synchronous API may take a long time and block the main thread due to system busyness, high load, and other reasons. Therefore, it is advised to invoke synchronous API within a child thread to avoid blocking the main thread.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.CryptoFramework.Signature

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| data | DataBlob | Yes | Data to pass in. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [17620001](../errorcode-crypto-framework.md#17620001-memory-operation-failed) | Memory operation failed. |
| [17620002](../errorcode-crypto-framework.md#17620002-parameter-conversion-between-arkts-and-c-failed) | Failed to obtain the native object or convert parameters. |
| [17630001](../errorcode-crypto-framework.md#17630001-crypto-operation-error) | Crypto operation error. |
| [17620004](../errorcode-crypto-framework.md#17620004-invalid-function-call) | Invalid function call.<br>**Applicable version:** 26.0.0 |

## algName

```TypeScript
readonly algName: string
```

Indicates the algorithm name of the Sign object.

**Type:** string

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** 
- API version 12 and later: SystemCapability.Security.CryptoFramework.Signature
- API version 9 to 11: SystemCapability.Security.CryptoFramework

