# X509Cert

X509证书类。

**Since:** 9

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## checkValidityWithDate

```TypeScript
checkValidityWithDate(date: string): void
```

表示校验X509证书有效期。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| date | string | Yes | 表示日期，ASN.1时间格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |
| 19030003 | 证书尚未生效。 |
| 19030004 | 证书过期。 |

## getBasicConstraints

```TypeScript
getBasicConstraints(): int
```

表示获取X509证书基本约束。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| int | 表示X509证书基本约束。 |

## getCertSerialNumber

```TypeScript
getCertSerialNumber(): bigint
```

表示获取X509证书序列号。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| bigint | 表示X509证书序列号。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |

## getCRLDistributionPoint

```TypeScript
getCRLDistributionPoint(): DataArray
```

获取X509证书CRL的分发点统一资源标识符。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataArray | 表示X509证书CRL的分发点统一资源标识符。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getEncoded

```TypeScript
getEncoded(callback: AsyncCallback<EncodingBlob>): void
```

表示获取X509证书序列化数据。使用Callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EncodingBlob> | Yes | 回调函数。当获取X509证书序列化数据成功时，err为undefined，data为  获取到的X509证书序列化数据；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确； |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getEncoded

```TypeScript
getEncoded(): Promise<EncodingBlob>
```

表示获取X509证书序列化数据。使用Promise方式返回结果。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EncodingBlob> | Promise对象，返回X509证书序列化数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getExtensionsObject

```TypeScript
getExtensionsObject(): CertExtension
```

获取对应实体的扩展域DER格式数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| CertExtension | 证书扩展域段类对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getExtKeyUsage

```TypeScript
getExtKeyUsage(): DataArray
```

表示获取X509证书扩展密钥用途。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataArray | 表示X509证书扩展密钥用途。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getIssuerAltNames

```TypeScript
getIssuerAltNames(): DataArray
```

表示获取X509证书颁发者可选名称。 > **说明：** > > 获取到的X509证书颁发者可选名称数据带字符串结束符。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataArray | 表示X509证书颁发者可选名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getIssuerName

```TypeScript
getIssuerName(): DataBlob
```

表示获取X509证书颁发者。 > **说明：** > > 获取到的X509证书颁发者名称包含字符串终止符。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书颁发者。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getIssuerName

```TypeScript
getIssuerName(encodingType: EncodingType): string
```

表示根据编码类型获取X509证书颁发者名称。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | Yes | 表示编码类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书颁发者名称，以逗号（,）分隔。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19020003 | 参数检查失败。可能的原因：  1. encodingType的值不在EncodingType枚举范围内。 |
| 19030001 | 调用三方算法库API出错。 |

## getIssuerX500DistinguishedName

```TypeScript
getIssuerX500DistinguishedName(): X500DistinguishedName
```

获取X.509证书颁发者的X.500可分辨名称。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| X500DistinguishedName | X.500可分辨对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getItem

```TypeScript
getItem(itemType: CertItemType): DataBlob
```

表示获取X509证书对应的字段。

**Since:** 10

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| itemType | CertItemType | Yes | 表示需要获取的证书字段。 |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书对应的字段，返回值为DER格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getKeyUsage

```TypeScript
getKeyUsage(): DataBlob
```

表示获取X509证书密钥用途。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书密钥用途。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getNotAfterTime

```TypeScript
getNotAfterTime(): string
```

表示获取X509证书过期时间。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书过期时间，ASN.1时间格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getNotBeforeTime

```TypeScript
getNotBeforeTime(): string
```

表示获取X509证书生效时间。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书生效时间，ASN.1时间格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getPublicKey

```TypeScript
getPublicKey(): cryptoFramework.PubKey
```

表示获取X509证书公钥。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| cryptoFramework.PubKey | 表示X509证书公钥对象。该对象仅用于X509Cert的verify()。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getSerialNumber

```TypeScript
getSerialNumber(): number
```

表示获取X509证书序列号。 > **说明：** > > 从API version 9开始支持，从API version 10开始废弃，建议使用 > [X509Cert.getCertSerialNumber()]cert.X509Cert.getCertSerialNumber替代。

**Since:** 9

**Deprecated since:** 10

**Substitute:** ohos.security.cert.X509Cert.getCertSerialNumber

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| number | 表示X509证书序列号。 |

## getSignature

```TypeScript
getSignature(): DataBlob
```

表示获取X509证书签名数据。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书签名数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getSignatureAlgName

```TypeScript
getSignatureAlgName(): string
```

表示获取X509证书签名算法名称。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书签名算法名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getSignatureAlgOid

```TypeScript
getSignatureAlgOid(): string
```

表示获取X509证书签名算法的对象标识符（OID）。OID由国际标准化组织（ISO）分配。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示签名算法OID。当长度超过127字节时会被截断。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getSignatureAlgParams

```TypeScript
getSignatureAlgParams(): DataBlob
```

表示获取X509证书签名算法参数。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书签名算法参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | 不支持该操作。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getSubjectAltNames

```TypeScript
getSubjectAltNames(): DataArray
```

表示获取X509证书主体可选名称。 > **说明：** > > 获取到的X509证书主体可选名称数据带字符串结束符。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataArray | 表示X509证书主体可选名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getSubjectName

```TypeScript
getSubjectName(encodingType?: EncodingType): DataBlob
```

表示获取X509证书主体。 > **说明：** > > 获取到的X509证书主体名称包含字符串终止符。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书主体名称。不设置encodingType参数，数据转换为字符串后以斜杠（/）分隔相对可分辨名称，设置  encodingType参数为EncodingType.ENCODING_UTF8时，数据转换为字符串后以逗号（,）分隔相对可分辨名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |
| 401 | 参数错误。可能的原因：  1. 参数类型不正确；  2. 参数校验失败。[since 12] |

## getSubjectX500DistinguishedName

```TypeScript
getSubjectX500DistinguishedName(): X500DistinguishedName
```

获取X.509证书主体的X.500可分辨名称。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| X500DistinguishedName | X.500可分辨对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getVersion

```TypeScript
getVersion(): int
```

表示获取X509证书版本号。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| int | 表示X509证书版本号。 |

## hashCode

```TypeScript
hashCode(): Uint8Array
```

获取DER格式数据的哈希值。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Uint8Array | DER格式数据的哈希值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## match

```TypeScript
match(param: X509CertMatchParameters): boolean
```

判断证书是否与输入参数匹配。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | X509CertMatchParameters | Yes | 表示需要匹配的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当参数匹配时，该方法返回true，否则返回false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## toString

```TypeScript
toString(): string
```

获取对象的字符串类型数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 对象的字符串类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## toString

```TypeScript
toString(encodingType: EncodingType): string
```

根据编码类型获取对象的字符串类型数据。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | Yes | 表示编码类型。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示对象的字符串类型数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19020003 | 参数检查失败。可能的原因：  1. encodingType的值不在EncodingType枚举范围内。 |
| 19030001 | 调用三方算法库API出错。 |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey, callback: AsyncCallback<void>): void
```

表示对证书验签。使用Callback异步回调。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | 用于验签的公钥对象。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当验签成功时，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19030001 | 调用三方算法库API出错。 |

## verify

```TypeScript
verify(key: cryptoFramework.PubKey): Promise<void>
```

表示对证书验签。使用Promise方式返回结果。

**Since:** 9

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | 用于验签的公钥对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19030001 | 调用三方算法库API出错。 |

