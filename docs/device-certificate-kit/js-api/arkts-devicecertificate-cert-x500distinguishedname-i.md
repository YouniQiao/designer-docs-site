# X500DistinguishedName

Provides APIs for managing the **X500DistinguishedName** instance.

**Since:** 12

<!--Device-cert-interface X500DistinguishedName--><!--Device-cert-interface X500DistinguishedName-End-->

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## getEncoded

```TypeScript
getEncoded(): EncodingBlob
```

Obtains the DER-encoded data of the X.500 Distinguished Name.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X500DistinguishedName-getEncoded(): EncodingBlob--><!--Device-X500DistinguishedName-getEncoded(): EncodingBlob-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| [EncodingBlob](arkts-devicecertificate-cert-encodingblob-i.md) | DER-encoded X.500 Distinguished Name data obtained. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getName

```TypeScript
getName(): string
```

Obtains the DN in the form of a string.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X500DistinguishedName-getName(): string--><!--Device-X500DistinguishedName-getName(): string-End-->

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | DN obtained as a string. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getName

```TypeScript
getName(encodingType: EncodingType): string
```

Obtains RDN strings based on the specified encoding format.

**Since:** 20

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-X500DistinguishedName-getName(encodingType: EncodingType): string--><!--Device-X500DistinguishedName-getName(encodingType: EncodingType): string-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | Yes | Encoding format. |

**Return value:**

| Type | Description |
| --- | --- |
| string | RDN string. Multiple strings are separated by commas (,). |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is not in the EncodingType enumeration range. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getName

```TypeScript
getName(type: string): Array<string>
```

Obtains relative distinguished name (RDN) strings of the specified type.

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-X500DistinguishedName-getName(type: string): Array<string>--><!--Device-X500DistinguishedName-getName(type: string): Array<string>-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the RDNs to obtain. For example, **CN** and **OU**. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Array of RDN strings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | invalid parameters. Possible causes:<br>1. Mandatory parameters are left unspecified;<br>2. Incorrect parameter types;<br>3. Parameter verification failed. |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

## getName

```TypeScript
getName(type: string, encodingType: EncodingType): Array<string>
```

Obtains an array of RDN strings based on the specified type and encoding format.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-X500DistinguishedName-getName(type: string, encodingType: EncodingType): Array<string>--><!--Device-X500DistinguishedName-getName(type: string, encodingType: EncodingType): Array<string>-End-->

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | Type of the RDNs to obtain. For example, **CN** and **OU**. |
| encodingType | [EncodingType](arkts-devicecertificate-cert-encodingtype-e.md) | Yes | Encoding format. |

**Return value:**

| Type | Description |
| --- | --- |
| [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Array of RDN strings. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [19020001](../errorcode-cert.md#19020001-memory-error) | memory malloc failed. |
| [19020002](../errorcode-cert.md#19020002-runtime-error) | runtime error. Possible causes:<br>1. Memory copy failed;<br>2. A null pointer occurs inside the system;<br>3. Failed to obtain the native object or convert parameters. |
| [19020003](../errorcode-cert.md#19020003-parameter-check-failure) | parameter check failed. Possible causes:<br>1. The value of encodingType is invalid. |
| [19030001](../errorcode-cert.md#19030001-crypto-operation-error) | crypto operation error. |

