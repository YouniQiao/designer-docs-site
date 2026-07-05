# X500DistinguishedName

X509定义的Name类型的对象。

**Since:** 12

**System capability:** SystemCapability.Security.Cert

## Modules to Import

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## getEncoded

```TypeScript
getEncoded(): EncodingBlob
```

获取X.500可分辨名称的DER编码数据。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| EncodingBlob | X.500可分辨名称的DER编码数据。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(): string
```

获取可分辨名的字符串。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Return value:**

| Type | Description |
| --- | --- |
| string | 可分辨名的字符串。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(encodingType: EncodingType): string
```

根据指定编码格式获取可分辨名称的字符串。

**Since:** 20

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| encodingType | EncodingType | Yes | 表示编码格式。 |

**Return value:**

| Type | Description |
| --- | --- |
| string | 表示可分辨名称的字符串，使用逗号分隔相对可分辨名称。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19020003 | 参数检查失败。可能的原因：  1. encodingType的值不在EncodingType枚举范围内。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(type: string): Array<string>
```

按指定类型获取相对可分辨名称的字符串。

**Since:** 12

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 指定类型的名称。如"CN"、"OU"等。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 相对可分辨名称的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | 参数错误。可能的原因：  1. 必填参数未指定；  2. 参数类型不正确；  3. 参数校验失败。 |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(type: string, encodingType: EncodingType): Array<string>
```

根据指定类型和编码格式获取相对可分辨名称的字符串数组。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Cert

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | string | Yes | 指定类型的名称。如"CN"、"OU"等。 |
| encodingType | EncodingType | Yes | 表示编码格式。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 相对可分辨名称的字符串数组。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19020003 | 参数检查失败。可能的原因：  1. encodingType的值不在EncodingType枚举范围内。 |
| 19030001 | 调用三方算法库API出错。 |

