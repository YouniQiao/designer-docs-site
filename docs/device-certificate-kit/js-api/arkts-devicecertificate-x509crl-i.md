# X509CRL

Provides APIs for managing a CRL object.

**Since:** 11

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## getEncoded

```TypeScript
getEncoded(callback: AsyncCallback<EncodingBlob>): void
```

Obtains the serialized X.509 CRL data. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EncodingBlob&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**, and **data** is the serialized X.509 CRL data obtained. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getEncoded

```TypeScript
getEncoded(): Promise<EncodingBlob>
```

Obtains the serialized X.509 CRL data. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EncodingBlob&gt; | Promise used to return the serialized X.509 CRL data obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getExtensions

```TypeScript
getExtensions(): DataBlob
```

Obtains the CRL extensions data in DER format.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | CRL extensions data in DER format obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getExtensionsObject

```TypeScript
getExtensionsObject(): CertExtension
```

Obtains the CRL extensions in DER format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| CertExtension | CRL extensions object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerName

```TypeScript
getIssuerName(): DataBlob
```

Obtains the issuer of the X.509 CRL.

> **NOTE**
>
> The obtained X.509 CRL issuer name contains a string terminator.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Issuer of the X.509 CRL obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerName

```TypeScript
getIssuerName(encodingType: EncodingType): string
```

Obtains the issuer name of an X.509 CRL based on the encoding type.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | Yes | Encoding type. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Issuer name of an X.509 CRL, separated by commas (,). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getIssuerX500DistinguishedName

```TypeScript
getIssuerX500DistinguishedName(): X500DistinguishedName
```

Obtains the distinguished name (DN) of the X.509 CRL issuer.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| X500DistinguishedName | DN object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getLastUpdate

```TypeScript
getLastUpdate(): string
```

Obtains the last update date of this X.509 CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | Last update date of the X.509 CRL, in ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getNextUpdate

```TypeScript
getNextUpdate(): string
```

Obtains the next update date of this CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | Next update date of the CRL, in ASN.1 format. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getRevokedCert

```TypeScript
getRevokedCert(serialNumber: bigint): X509CRLEntry
```

Obtains the revoked certificate entry from the X.509 CRL based on the specified serial number.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | bigint | Yes | Serial number of the certificate. |

**Return value:**

| Type | Description |
| --- | --- |
| X509CRLEntry | Revoked certificate entry obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getRevokedCertWithCert

```TypeScript
getRevokedCertWithCert(cert: X509Cert): X509CRLEntry
```

Obtains the revoked certificate entry from the X.509 CRL based on the specified certificate.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | X509Cert | Yes | Certificate based on which the revoked certificate is obtained. |

**Return value:**

| Type | Description |
| --- | --- |
| X509CRLEntry | Revoked certificate entry obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getRevokedCerts

```TypeScript
getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>): void
```

Obtains all the revoked certificate entries from the X.509 CRL. This API uses an asynchronous callback to return
the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;X509CRLEntry&gt;&gt; | Yes | Callback used to return the result. If the operation issuccessful, **err** is **undefined**, and **data** is the revoked certificate entries obtained. Otherwise,**err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getRevokedCerts

```TypeScript
getRevokedCerts(): Promise<Array<X509CRLEntry>>
```

Obtains all the revoked certificate entries from the X.509 CRL. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;X509CRLEntry&gt;&gt; | Promise used to return the revoked certificate entries obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types; |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignature

```TypeScript
getSignature(): DataBlob
```

Obtains the signature data of the X.509 CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Signature data of the X.509 CRL obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgName

```TypeScript
getSignatureAlgName(): string
```

Obtains the signing algorithm of the X.509 CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | Signing algorithm obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgOid

```TypeScript
getSignatureAlgOid(): string
```

Obtains the OID of the X.509 CRL signing algorithm. OIDs are allocated by the International Organization for
Standardization (ISO).

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | OID of the X.509 CRL signing algorithm obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSignatureAlgParams

```TypeScript
getSignatureAlgParams(): DataBlob
```

Obtains the parameters of the X.509 CRL signing algorithm.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | Algorithm parameters obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | this operation is not supported. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getTBSInfo

```TypeScript
getTBSInfo(): DataBlob
```

Obtains the DER-encoded CRL information, that is, **tbsCertList** from this CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | **tbsCertList** information obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getType

```TypeScript
getType(): string
```

Obtains the CRL type.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | CRL type obtained. |

## getVersion

```TypeScript
getVersion(): number
```

Obtains the version of the X.509 CRL.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| number | Version of the X.509 CRL obtained. |

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

## isRevoked

```TypeScript
isRevoked(cert: X509Cert): boolean
```

Checks whether an X.509 certificate is revoked.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | X509Cert | Yes | X.509 certificate to check. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the certificate is revoked. The value **true** indicates that the certificate isrevoked, and **false** indicates the opposite. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |

## match

```TypeScript
match(param: X509CRLMatchParameters): boolean
```

Checks whether this CRL matches the specified parameters.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | X509CRLMatchParameters | Yes | Parameters specified for matching the CRL. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the CRL matches the parameters specified; returns **false**otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
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

## toString

```TypeScript
toString(encodingType: EncodingType): string
```

Converts this object into a string in the specified encoding format.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | Yes | Encoding type. |

**Return value:**

| Type | Description |
| --- | --- |
| string | String obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void
```

Verifies the signature of the X.509 CRL. The RSA algorithm is supported. This API uses an asynchronous callback
to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | Public key used for signature verification. |
| callback | AsyncCallback&lt;void&gt; | Yes | Callback used to return the result. If the operation is successful,**err** is **undefined**. Otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey): Promise<void>
```

Verifies the signature of the X.509 CRL. The RSA algorithm is supported. This API uses a promise to return the
result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | Public key used for signature verification. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

