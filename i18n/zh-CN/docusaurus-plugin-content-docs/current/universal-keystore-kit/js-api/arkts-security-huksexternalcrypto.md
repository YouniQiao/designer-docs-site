# @ohos.security.huksExternalCrypto

模块提供外部密钥管理扩展功能的注册与注销，PIN码认证与认证状态获取等。

**起始版本：** 22

**系统能力：** SystemCapability.Security.Huks.CryptoExtension

## 导入模块

```TypeScript
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[authUkeyPin](arkts-huksexternalcrypto-authukeypin-f-sys.md#authUkeyPin-1) | PIN码认证。使用Promise异步回调。 |
| [clearUkeyPinAuthState](arkts-huksexternalcrypto-clearukeypinauthstate-f.md#clearUkeyPinAuthState-1) | 清除指定资源ID的PIN码认证状态。使用Promise异步回调。 |
| [closeResource](arkts-huksexternalcrypto-closeresource-f.md#closeResource-1) | 关闭指定资源ID的资源。使用Promise异步回调。 该接口会回调 [onClearUkeyPinAuthState](docroot://reference/apis-universal-keystore-kit/js-apis-CryptoExtensionAbility.md#cryptoextensionabilityonclearukeypinauthstate) 清理该资源关联的PIN认证状态，以及会回调 [onFinishSession](docroot://reference/apis-universal-keystore-kit/js-apis-CryptoExtensionAbility.md#cryptoextensionabilityonfinishsession) 清理该资源关联的会话handle。 |
| [getErrorInfo](arkts-huksexternalcrypto-geterrorinfo-f.md#getErrorInfo-1) | 查询上次接口调用产生的详细错误信息。 |
| [getProperty](arkts-huksexternalcrypto-getproperty-f.md#getProperty-1) | 调用此接口获取属性值并返回结果。使用Promise异步回调。 propertyId表示查询属性的ID信息，当前仅支持GMT 0016-2023中定义的SKF接口名作为属性ID，支持的ID包括如下： - SKF_EnumDev - SKF_GetDevInfo - SKF_EnumApplication - SKF_EnumContainer |
| [getResourceId](arkts-huksexternalcrypto-getresourceid-f.md#getResourceId-1) | 获取密钥扩展能力的资源ID。使用Promise异步回调。 |
| [getUkeyPinAuthState](arkts-huksexternalcrypto-getukeypinauthstate-f.md#getUkeyPinAuthState-1) | 获取PIN码认证状态。使用Promise异步回调。 |
| [openResource](arkts-huksexternalcrypto-openresource-f.md#openResource-1) | 打开指定资源ID的资源。使用Promise异步回调。 > **说明：** > > 打开的资源必须使用[closeResource]{@link huksExternalCrypto.closeResource}关闭。 |
| [registerProvider](arkts-huksexternalcrypto-registerprovider-f.md#registerProvider-1) | 注册指定的外部provider。使用Promise异步回调。 若需使用自定义PIN码弹窗，在注册provider时需要同步注册UIExtensionAbility，注意事项如下： 1. 自定义ability通过UIExtensionAbility扩展实现。 2. 注册的UIExtensionAbility可以通过证书管理kit提供的[openUKeyAuthDialog]{@link @ohos.security.certManager:certificateManager}接口统一拉起。 3. 系统拉起自定义弹窗时会通过want接口向开发者传递以下参数： - Action：string参数类型，在拉起自定义弹窗时want传输的Action为"UkeyPINAuth"。 - appUid：number参数类型，通过want.parameters传输。"appUid"字段为应用id，开发者可以通过该字段完成应用隔离。 - keyUri：string参数类型其值为resourceId，通过want.parameters传输，表示Ukey证书的索引。 4. 开发者实现UIExtensionAbility时，应用需根据指定场景返回对应的错误码： - 用户取消操作时，返回-1001。 - keyUri指定的证书/密钥不存在时，返回-1008。 - 参数格式错误时，返回-1014。 - 其余失败场景返回错误码-1000，成功时返回0。 |
| [setProperty](arkts-huksexternalcrypto-setproperty-f.md#setProperty-1) | The set-type operations of the external crypto extension support calling custom interfaces. However, the custom interface must be registered with the provider. |
| [unregisterProvider](arkts-huksexternalcrypto-unregisterprovider-f.md#unregisterProvider-1) | 注销指定的外部provider。使用Promise异步回调。 |

### 接口

| 名称 | 描述 |
| --- | --- |
| [HuksExternalCryptoParam](arkts-huksexternalcrypto-huksexternalcryptoparam-i.md) | 表示调用接口使用的param数组的类型。 |
| [HuksExternalErrorInfo](arkts-huksexternalcrypto-huksexternalerrorinfo-i.md) | 详细错误信息 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| [HuksExternalCryptoTag](arkts-huksexternalcrypto-huksexternalcryptotag-e.md) | 表示调用参数的Tag。 |
| [HuksExternalCryptoTagType](arkts-huksexternalcrypto-huksexternalcryptotagtype-e.md) | 表示外部加密数据类型的枚举。 |
| [HuksExternalPinAuthState](arkts-huksexternalcrypto-huksexternalpinauthstate-e.md) | 枚举PIN认证的状态 |

