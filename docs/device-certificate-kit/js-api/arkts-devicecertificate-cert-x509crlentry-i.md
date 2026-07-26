# X509CRLEntry

Provides APIs for operating on a revoked certificate entry in a CRL.

**Since:** 11

<!--Device-cert-interface X509CRLEntry--><!--Device-cert-interface X509CRLEntry-End-->

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## getCertIssuer

```TypeScript
getCertIssuer(): DataBlob
```

Obtains the issuer name of the revoked certificate.
> **NOTE**  
>  
> The obtained issuer name of this revoked certificate contains a string terminator.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getCertIssuer(): DataBlob--><!--Device-X509CRLEntry-getCertIssuer(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | Issuer name of the revoked certificate obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | this operation is not supported. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getCertIssuer

```TypeScript
getCertIssuer(encodingType: EncodingType): string
```

Obtains the issuer name of the revoked certificate based on the encoding type.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-X509CRLEntry-getCertIssuer(encodingType: EncodingType): string--><!--Device-X509CRLEntry-getCertIssuer(encodingType: EncodingType): string-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | Yes | Encoding type. |

**Return value:**

| Type | Description |
| --- | --- |
| string | Issuer name of the revoked certificate, separated by commas (,). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | this operation is not supported. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getCertIssuerX500DistinguishedName

```TypeScript
getCertIssuerX500DistinguishedName(): X500DistinguishedName
```

Obtains the distinguished name (DN) of the issuer of the revoked certificate.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getCertIssuerX500DistinguishedName(): X500DistinguishedName--><!--Device-X509CRLEntry-getCertIssuerX500DistinguishedName(): X500DistinguishedName-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [X500DistinguishedName](arkts-devicecertificate-cert-x500distinguishedname-i.md) | DN object obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getEncoded

```TypeScript
getEncoded(callback: AsyncCallback<EncodingBlob>): void
```

Obtains the serialized data of this revoked certificate entry. This API uses an asynchronous callback to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getEncoded(callback: AsyncCallback<EncodingBlob>): void--><!--Device-X509CRLEntry-getEncoded(callback: AsyncCallback<EncodingBlob>): void-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;EncodingBlob&gt; | Yes | Callback used to return the result. If the operation is successful, **err** is **undefined**, and **data** is the serialized data of the revoked certificate entry obtained.Otherwise, **err** is an error object. |

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

Obtains the serialized data of this revoked certificate entry. This API uses a promise to return the result.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getEncoded(): Promise<EncodingBlob>--><!--Device-X509CRLEntry-getEncoded(): Promise<EncodingBlob>-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EncodingBlob&gt; | Promise used to return the serialized data of the revoked certificate entry obtained. |

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

Obtains the CRL entry extensions in DER format.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getExtensions(): DataBlob--><!--Device-X509CRLEntry-getExtensions(): DataBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [DataBlob](arkts-devicecertificate-cert-datablob-i.md) | X.509 CRL entry extensions obtained. |

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

Obtains the CRL entry extensions.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getExtensionsObject(): CertExtension--><!--Device-X509CRLEntry-getExtensionsObject(): CertExtension-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [CertExtension](arkts-devicecertificate-cert-certextension-i.md) | CRL entry extensions. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getRevocationDate

```TypeScript
getRevocationDate(): string
```

Obtains the certificate's revocation date.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getRevocationDate(): string--><!--Device-X509CRLEntry-getRevocationDate(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | The certificate revocation date obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getSerialNumber

```TypeScript
getSerialNumber(): bigint
```

Obtains the serial number of this revoked certificate.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-getSerialNumber(): bigint--><!--Device-X509CRLEntry-getSerialNumber(): bigint-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| bigint | Serial number of the revoked certificate obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## hasExtensions

```TypeScript
hasExtensions(): boolean
```

Checks whether this CRL entry has extensions.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-hasExtensions(): boolean--><!--Device-X509CRLEntry-hasExtensions(): boolean-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Returns **true** if the CRL entry has an extension; returns **false** otherwise. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## hashCode

```TypeScript
hashCode(): Uint8Array
```

Obtains the hash value of the data in DER format.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X509CRLEntry-hashCode(): Uint8Array--><!--Device-X509CRLEntry-hashCode(): Uint8Array-End-->

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

<!--Device-X509CRLEntry-toString(): string--><!--Device-X509CRLEntry-toString(): string-End-->

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

