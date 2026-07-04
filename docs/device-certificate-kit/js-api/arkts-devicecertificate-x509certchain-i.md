# X509CertChain

Provides APIs for managing the X.509 certificate chain.

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@ohos.security.cert';
```

## getCertList

```TypeScript
getCertList(): Array<X509Cert>
```

Obtains the X.509 certificate list.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;X509Cert&gt; | X.509 certificate list obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## hashCode

```TypeScript
hashCode(): Uint8Array
```

Obtains the hash value of the data in DER format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | Hash value obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## toString

```TypeScript
toString(): string
```

Converts the object data into a string.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## validate

```TypeScript
validate(param: CertChainValidationParameters): Promise<CertChainValidationResult>
```

Validates a certificate chain. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | CertChainValidationParameters | Yes | Parameters for validating the X.509 certificate chain. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;CertChainValidationResult&gt; | Promise used to return the certificate chain validation result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |
| [19030002](../errorcode-cert.md#19030002-certificate-signature-verification-failed) | the certificate signature verification failed. |
| [19030003](../errorcode-cert.md#19030003-certificate-has-not-taken-effect) | the certificate has not taken effect. |
| [19030004](../errorcode-cert.md#19030004-certificate-expired) | the certificate has expired. |
| [19030005](../errorcode-cert.md#19030005-failed-to-obtain-the-certificate-issuer) | failed to obtain the certificate issuer. |
| [19030006](../errorcode-cert.md#19030006-key-cannot-be-used-for-signing-a-certificate) | the key cannot be used for signing a certificate. |
| [19030007](../errorcode-cert.md#19030007-key-cannot-be-used-for-digital-signature) | the key cannot be used for a digital signature. |

## validate

```TypeScript
validate(param: CertChainValidationParameters, callback: AsyncCallback<CertChainValidationResult>): void
```

Validates a certificate chain. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | CertChainValidationParameters | Yes | Parameters for validating the X.509 certificate chain. |
| callback | AsyncCallback&lt;CertChainValidationResult&gt; | Yes | Callback used to return the result. If the operationis successful, **err** is **undefined**, and **data** is the certificate chain validation result obtained.Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |
| [19030002](../errorcode-cert.md#19030002-certificate-signature-verification-failed) | the certificate signature verification failed. |
| [19030003](../errorcode-cert.md#19030003-certificate-has-not-taken-effect) | the certificate has not taken effect. |
| [19030004](../errorcode-cert.md#19030004-certificate-expired) | the certificate has expired. |
| [19030005](../errorcode-cert.md#19030005-failed-to-obtain-the-certificate-issuer) | failed to obtain the certificate issuer. |
| [19030006](../errorcode-cert.md#19030006-key-cannot-be-used-for-signing-a-certificate) | the key cannot be used for signing a certificate. |
| [19030007](../errorcode-cert.md#19030007-key-cannot-be-used-for-digital-signature) | the key cannot be used for a digital signature. |

