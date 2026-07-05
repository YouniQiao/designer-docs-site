# X500DistinguishedName

X509定义的Name类型的对象。

**起始版本：** 12

**系统能力：** SystemCapability.Security.Cert

## 导入模块

```TypeScript
import { cert } from '@kit.DeviceCertificateKit';
```

## getEncoded

```TypeScript
getEncoded(): EncodingBlob
```

获取X.500可分辨名称的DER编码数据。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

**返回值：**

| 类型 | 说明 |
| --- | --- |
| EncodingBlob | X.500可分辨名称的DER编码数据。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(): string
```

获取可分辨名的字符串。

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 可分辨名的字符串。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19030001 | 调用三方算法库API出错。 |

## getName

```TypeScript
getName(encodingType: EncodingType): string
```

根据指定编码格式获取可分辨名称的字符串。

**起始版本：** 20

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| encodingType | EncodingType | 是 | 表示编码格式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| string | 表示可分辨名称的字符串，使用逗号分隔相对可分辨名称。 |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 12

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 指定类型的名称。如"CN"、"OU"等。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 相对可分辨名称的字符串数组。 |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Cert

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| type | string | 是 | 指定类型的名称。如"CN"、"OU"等。 |
| encodingType | EncodingType | 是 | 表示编码格式。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;string> | 相对可分辨名称的字符串数组。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 19020001 | 内存错误。 |
| 19020002 | 运行时外部错误。可能的原因：  1. 内存拷贝失败；  2. 系统内部出现空指针；  3. 获取Native对象失败或参数转换失败。 |
| 19020003 | 参数检查失败。可能的原因：  1. encodingType的值不在EncodingType枚举范围内。 |
| 19030001 | 调用三方算法库API出错。 |

