# X509CRL

X.509 CRL操作。

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

表示获取X509证书吊销列表的序列化数据。使用Callback异步回调。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;EncodingBlob> | Yes | 回调函数。当获取X509证书吊销列表序列化数据成功时，err为undefined，  data为获取到的X509证书吊销列表序列化数据；否则为错误对象。 |

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

表示获取X509证书吊销列表的序列化数据。使用Promise方式返回结果。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;EncodingBlob> | Promise对象，返回X509证书吊销列表的序列化数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确； |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getExtensions

```TypeScript
getExtensions(): DataBlob
```

表示获取CRL扩展的DER格式数据。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示CRL扩展的DER格式数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getExtensionsObject

```TypeScript
getExtensionsObject(): CertExtension
```

获取CRL扩展对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| CertExtension | CRL扩展对象。 |

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

表示获取X509证书吊销列表颁发者名称。 > **说明：** > > 获取到的X509证书吊销列表颁发者名称数据带字符串结束符。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书吊销列表颁发者名称。 |

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

根据编码类型获取X509证书吊销列表颁发者名称。

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
| string | 表示X509证书吊销列表颁发者名称，使用逗号分隔相对可分辨名称。 |

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

获取CRL颁发者的X.500可分辨名称对象。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| X500DistinguishedName | X.500可分辨名称对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getLastUpdate

```TypeScript
getLastUpdate(): string
```

表示获取X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书吊销列表最后一次更新日期，日期为ASN.1时间格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getNextUpdate

```TypeScript
getNextUpdate(): string
```

表示获取证书吊销列表下一次更新的日期，日期为ASN.1时间格式。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书吊销列表下一次更新的日期，日期为ASN.1时间格式。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getRevokedCert

```TypeScript
getRevokedCert(serialNumber: bigint): X509CRLEntry
```

表示通过指定证书序列号获取证书吊销条目。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| serialNumber | bigint | Yes | 表示证书序列号。 |

**Return value:**

| Type | Description |
| --- | --- |
| X509CRLEntry | 表示证书吊销条目。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getRevokedCerts

```TypeScript
getRevokedCerts(callback: AsyncCallback<Array<X509CRLEntry>>): void
```

表示获取证书吊销条目列表。使用Callback异步回调。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;Array&lt;X509CRLEntry>> | Yes | 回调函数。当获取证书吊销条目列表成功时，err为undefined，  data为获取到的证书吊销条目列表；否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确； |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getRevokedCerts

```TypeScript
getRevokedCerts(): Promise<Array<X509CRLEntry>>
```

表示获取证书吊销条目列表。使用Promise方式返回结果。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;X509CRLEntry>> | Promise对象，返回证书吊销条目列表。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确； |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getRevokedCertWithCert

```TypeScript
getRevokedCertWithCert(cert: X509Cert): X509CRLEntry
```

表示通过指定证书对象获取证书吊销条目。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | X509Cert | Yes | 表示证书对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| X509CRLEntry | 表示证书吊销条目。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19030001 | 调用三方算法库API出错。 |

## getSignature

```TypeScript
getSignature(): DataBlob
```

表示获取X509证书吊销列表的签名数据。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书吊销列表的签名数据。 |

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

表示获取X509证书吊销列表签名的算法名称。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书吊销列表签名的算法名。 |

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

表示获取X509证书吊销列表签名算法的对象标识符OID（Object Identifier）。OID是由国际标准化组织（ISO）的名称注册机构分配。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示X509证书吊销列表签名算法的对象标识符OID。 |

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

表示获取X509证书吊销列表签名的算法参数。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示X509证书吊销列表签名的算法参数。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | 不支持该操作。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getTBSInfo

```TypeScript
getTBSInfo(): DataBlob
```

表示获取证书吊销列表的tbsCertList信息。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| DataBlob | 表示证书吊销列表的tbsCertList信息。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getType

```TypeScript
getType(): string
```

表示获取证书吊销列表类型。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示证书吊销列表类型。 |

## getVersion

```TypeScript
getVersion(): int
```

表示获取X509证书吊销列表的版本号。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| int | 表示获取X509证书吊销列表的版本号。 |

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

## isRevoked

```TypeScript
isRevoked(cert: X509Cert): boolean
```

表示检查证书是否吊销。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| cert | X509Cert | Yes | 表示被检查的证书对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 表示证书吊销状态，true表示已吊销，false表示未吊销。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |

## match

```TypeScript
match(param: X509CRLMatchParameters): boolean
```

判断证书吊销列表是否与输入参数匹配。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | X509CRLMatchParameters | Yes | 表示需要匹配的参数。 |

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

表示对X509证书吊销列表进行验签。使用Callback异步回调。验签支持RSA算法。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | 表示用于验签的公钥对象。 |
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

表示对X509证书吊销列表进行验签。使用Promise方式返回结果。验签支持RSA算法。

**Since:** 11

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| key | cryptoFramework.PubKey | Yes | 表示用于验签的公钥对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19030001 | 调用三方算法库API出错。 |

