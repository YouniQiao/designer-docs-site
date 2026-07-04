---
last_update:
  date: 2026-07-04
---

# CryptoExtensionAbility

Class to be override for external crypto extension ability.

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

## onAuthUkeyPin

```TypeScript
onAuthUkeyPin(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

请求Ukey认证PIN码。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，authState非0，表示认证请求成功。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。34800006 - Ukey PIN码错误。34800007 - Ukey PIN码被锁 |

## onClearUkeyPinAuthState

```TypeScript
onClearUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

清除应用维度PIN码的认证状态。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，表示清除PIN码认证状态成功。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onCloseResource

```TypeScript
onCloseResource(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

根据参数中的handle，关闭Ukey的密钥资源。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 会话句柄。 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | 函数返回的promise。HuksCryptoExtensionResult.resultCode可能具有以下值：0-操作成功34800000 -加密扩展中发生错误。可能原因：1.输入参数非法。2.加密扩展遇到无法解析的错误状态。34800002-UKey驱动程序错误。这意味着UKey驱动程序中发生了未知错误。34800004 -句柄不存在。可能原因：1.输入的句柄无效。2.huks服务和加密扩展的状态不一致。由于异常，huks服务持有的句柄没有被释放。34800005 -句柄不可用，可能是因为状态不一致在加密扩展和UKey之间。 |

## onEnumCertificates

```TypeScript
onEnumCertificates(params?: Array<huksExternalCrypto.HuksExternalCryptoParam> | HuksCryptoExtensionParam[]):
      Promise<HuksCryptoExtensionResult>
```

枚举Extension下所有Ukey设备的证书信息。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 否 | 操作属性 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，certs成员非空，包含获取的所有证书。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。 |

## onExportCertificate

```TypeScript
onExportCertificate(resourceId: string, params?: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

查询指定resourceId下的证书。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceId | string | 是 | 资源ID。 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 否 | 操作属性 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，certs成员非空，包含获取的单本证书。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。34800004 - 句柄不存在。 |

## onExportKeyItem

```TypeScript
onExportKeyItem(handle: string, params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

用于导出指定密钥的公钥。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待导出公钥的资源句柄 |
| params | HuksCryptoExtensionParam[] | 是 | 导出公钥操作的属性参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，outData携带导出的公钥数据。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onFinishSession

```TypeScript
onFinishSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

三段式密钥会话结束操作。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| initHandle | string | 是 | 资源句柄。 |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800003 - Ukey PIN码未认证。34800004 - 句柄不存在。34800005 - 句柄不可用。34800007 - Ukey PIN码被锁。 |

## onGenerateKeyItem

```TypeScript
onGenerateKeyItem(handle: string, params:HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

用于在扩展设备内生成密钥对。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待生成密钥的资源句柄。 |
| params | HuksCryptoExtensionParam[] | 是 | 密钥生成操作的属性参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，表示生成密钥成功。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onGetProperty

```TypeScript
onGetProperty(handle: string, propertyId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

查询操作回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | handle表示onOpenResource打开的句柄。 |
| propertyId | string | 是 | propertyId表示属性函数的名称，GMT 0016-2023中定义。 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | 函数返回的promise。HuksCryptoExtensionResult.resultCode可能具有以下值：0-操作成功34800000 -加密扩展中发生错误。可能原因：1.输入参数非法。2.加密扩展遇到无法解析的错误状态。34800002-UKey驱动程序错误。这意味着UKey驱动程序中发生了未知错误。34800003-UKey PIN未鉴权。请先验证UKey PIN码。34800004 -句柄不存在。可能原因：1.输入的句柄无效。2.huks服务和加密扩展的状态不一致。由于异常，huks服务持有的句柄没有被释放。34800005 -句柄不可用，可能是因为状态不一致在加密扩展和UKey之间。34800007-UKey PIN被锁定，因为已超过允许的最大尝试次数。 |

## onGetResourceId

```TypeScript
onGetResourceId(params: HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

回调以获取加密扩展的资源ID。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | HuksCryptoExtensionParam[] | 是 | 获取资源ID所需的属性参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | params - 获取资源ID所需的属性参数。 |

## onGetUkeyPinAuthState

```TypeScript
onGetUkeyPinAuthState(handle: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
      HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

获取Ukey的PIN码认证状态。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，HuksCryptoExtensionResult的authState成员非空，为获取的PIN码认证状态。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onImportCertificate

```TypeScript
onImportCertificate(handle: string, params: HuksCryptoExtensionParam[],
      certInfo: HuksCryptoExtensionCertInfo): Promise<HuksCryptoExtensionResult>
```

导入指定资源句柄的证书。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 导入证书的资源句柄。 |
| params | HuksCryptoExtensionParam[] | 是 | Indicatesthe needed properties for the import certificate operation. |
| certInfo | HuksCryptoExtensionCertInfo | 是 | 待导入的证书信息。需指定证书类型（purpose） |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，表示导入证书成功。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onImportWrappedKeyItem

```TypeScript
onImportWrappedKeyItem(handle: string, wrappingHandle: string, params: HuksCryptoExtensionParam[],
      wrappedKey: Uint8Array): Promise<HuksCryptoExtensionResult>
```

用于导入加密封装的密钥对。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 待导入密钥的资源句柄。 |
| wrappingHandle | string | 是 | 待导入密钥的资源句柄。 |
| params | HuksCryptoExtensionParam[] | 是 | 导入密钥所需的属性 |
| wrappedKey | Uint8Array | 是 | 封装密钥数据，格式由密钥扩展定义。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，表示导入密钥成功。调用失败时，resultCode携带错误码信息，errInfo携带详细错误信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800001 - Ukey不存在。34800002 - Ukey驱动错误。34800004 - 句柄不存在。34800005 - 句柄不可用。 |

## onInitSession

```TypeScript
onInitSession(handle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

三段式初始化密钥会话操作。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0，handle成员非空。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800003 - Ukey PIN码未认证。34800004 - 句柄不存在。34800005 - 句柄不可用。34800007 - Ukey PIN码被锁。 |

## onOpenResource

```TypeScript
onOpenResource(resourceId: string, params: Array<huksExternalCrypto.HuksExternalCryptoParam> |
     HuksCryptoExtensionParam[]): Promise<HuksCryptoExtensionResult>
```

打开资源句柄回调，在加密操作之前需打开资源，获取句柄。注意：返回的句柄必须被onCloseResource关闭。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| resourceId | string | 是 | resourceId表示资源ID |
| params | Array&lt;huksExternalCrypto.HuksExternalCryptoParam&gt; \| HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | 函数返回的promise。HuksCryptoExtensionResult.resultCode可能具有以下值：0-操作成功34800000 -加密扩展中发生错误。可能原因：1.输入参数非法。2.加密扩展遇到无法解析的错误状态。34800001-UKey不存在。可能原因：1.UKey已经被移除。2.加密扩展维护了一个错误的UKey状态。34800002-UKey驱动程序错误。这意味着UKey驱动程序中发生了未知错误。34800004-resourceId不存在。这说明resourceId、设备名称、应用名称或容器名称错误。 |

## onSetProperty

```TypeScript
onSetProperty(handle: string, propertyId: string, params: HuksCryptoExtensionParam[]):
      Promise<HuksCryptoExtensionResult>
```

根据参数中的handle和propertyId设置属性。使用Promise异步回调。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handle | string | 是 | 资源句柄。 |
| propertyId | string | 是 | 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，要业务针对接口名适配。 |
| params | HuksCryptoExtensionParam[] | 是 | 操作属性。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise用于返回HuksCryptoExtensionResult。HuksCryptoExtensionResult.resultCode可能具有以下值：0-操作成功。34800000 -加密扩展中发生错误。可能原因：1.输入参数非法。2.加密扩展遇到无法解析的错误状态。34800002 -调用UKey驱动接口失败。请检查UKey连接和驱动程序状态。34800003-UKey PIN未鉴权。请先验证UKey PIN码。34800004 -句柄不存在。可能原因：1.输入的句柄无效。2.HUKS服务和加密扩展的状态不一致。由于异常，HUKS服务持有的句柄没有释放。34800005 -句柄不可用，可能是因为状态不一致在加密扩展和UKey之间。34800007-UKey PIN被锁定，因为已超过允许的最大尝试次数。 |

## onUpdateSession

```TypeScript
onUpdateSession(initHandle: string, params: huks.HuksOptions | HuksCryptoExtensionParams):
      Promise<HuksCryptoExtensionResult>
```

三段式密钥会话更新数据操作。使用Promise异步回调。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| initHandle | string | 是 | 资源句柄。 |
| params | huks.HuksOptions \| HuksCryptoExtensionParams | 是 | params indicates theproperties of the operation<br>**起始版本：** 26.0.0 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksCryptoExtensionResult&gt; | Promise对象。当调用成功时，resultCode为0。调用失败时，resultCode携带错误码信息。可能返回的错误码值：0 - 调用成功。34800000 - 密钥扩展错误。34800002 - Ukey驱动错误。34800003 - Ukey PIN码未认证。34800004 - 句柄不存在。34800005 - 句柄不可用。34800007 - Ukey PIN码被锁。 |

