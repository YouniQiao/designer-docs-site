# registerProvider

## registerProvider

```TypeScript
function registerProvider(providerName: string, params: Array<HuksExternalCryptoParam>): Promise<void>
```

注册指定的外部provider。使用Promise异步回调。 若需使用自定义PIN码弹窗，在注册provider时需要同步注册UIExtensionAbility，注意事项如下： 1. 自定义ability通过UIExtensionAbility扩展实现。 2. 注册的UIExtensionAbility可以通过证书管理kit提供的[openUKeyAuthDialog](../../apis-device-certificate-kit/arkts-apis/arkts-security-certmanager.md#certificateManager)接口统一拉起。 3. 系统拉起自定义弹窗时会通过want接口向开发者传递以下参数： - Action：string参数类型，在拉起自定义弹窗时want传输的Action为"UkeyPINAuth"。 - appUid：number参数类型，通过want.parameters传输。"appUid"字段为应用id，开发者可以通过该字段完成应用隔离。 - keyUri：string参数类型其值为resourceId，通过want.parameters传输，表示Ukey证书的索引。 4. 开发者实现UIExtensionAbility时，应用需根据指定场景返回对应的错误码： - 用户取消操作时，返回-1001。 - keyUri指定的证书/密钥不存在时，返回-1008。 - 参数格式错误时，返回-1014。 - 其余失败场景返回错误码-1000，成功时返回0。

**Since:** 22

**Required permissions:** 

 ohos.permission.CRYPTO_EXTENSION_REGISTER

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| providerName | string | Yes | provider名称，最大长度为128。建议包含厂商信息，全局唯一，不要包含个人联系方式等敏感数据。 最多支持注册10个provider。 |
| params | Array&lt;HuksExternalCryptoParam> | Yes | 操作时需传入的参数，必选TAG：  [HUKS_EXT_CRYPTO_TAG_ABILITY_NAME]huksExternalCrypto.HuksExternalCryptoTagType，表示ability的名字，根据业务自己内部定义按  照实际填写。 从API版本26.0.0开始，可选TAG：  [HUKS_EXT_CRYPTO_TAG_ABILITY_INFO]huksExternalCrypto.HuksExternalCryptoTagType，以JSON列表的形式传入PIN码认证自定义弹窗  UIExtensionAbility的名字以及包名。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | check permission failed. |
| 801 | api is not supported. |
| 12000002 | the ability name param is missing. |
| 12000005 | IPC communication failed. |
| 12000014 | memory is insufficient. |
| 12000018 | the input parameter is invalid. |
| 12000019 | the provider is already registered. |
| 12000020 | an error occurred in the dependent module. |
| 12000025 | the number of providers exceeds the limit. |

**Example**

```TypeScript
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';

function StringToUint8Array(str: string) {
  let arr: number[] = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

const providerName = "testProviderName";
const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [
  {
    tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_ABILITY_NAME,
    value: StringToUint8Array("CryptoExtension")
  }
];
huksExternalCrypto.registerProvider(providerName, extProperties)
    .then((data) => {
        console.info('promise: registerProvider success.');
    });

```

