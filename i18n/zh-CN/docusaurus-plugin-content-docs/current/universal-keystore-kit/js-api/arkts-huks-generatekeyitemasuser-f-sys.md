# generateKeyItemAsUser

## generateKeyItemAsUser

```TypeScript
function generateKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<void>
```

指定用户身份生成密钥，使用Promise方式异步返回结果。基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，通过 promise不会返回密钥材料内容，只用于表示此次调用是否成功。

**起始版本：** 12

**需要权限：** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**系统能力：** SystemCapability.Security.Huks.Extension

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| userId | number | 是 | 用户ID。 |
| keyAlias | string | 是 | 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。 |
| huksOptions | HuksOptions | 是 | 用于存放生成key所需的  [属性标签](docroot://reference/apis-universal-keystore-kit/capi-native-huks-type-h.md#枚举)。其中密钥使用的算法、密钥用途、密钥长度为必选参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | the application permission is not sufficient, which may be caused by lack of  cross-account permission, or the system has not been unlocked by user, or the user does not exist. |
| 202 | non-system applications are not allowed to use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | Feature is not supported. Possible causes:  1. The algorithm mode is not supported.  2. The group key is not supported.  3. The crypto extension key is not supported. |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000012 | Device environment or input parameter abnormal |
| 12000013 | queried credential does not exist |
| 12000014 | memory is insufficient |
| 12000015 | Failed to obtain the security information via UserIAM |
| 12000017 | The key with the same alias already exists [since 20] |

**示例：**

```TypeScript
/* 以生成AES密钥为例 */
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

const aesKeyAlias = 'test_aesKeyAlias';
const userId = 100;
const userIdStorageLevel = huks.HuksAuthStorageLevel.HUKS_AUTH_STORAGE_LEVEL_CE;

function GetAesGenerateProperties(): Array<huks.HuksParam> {
  return [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  }, {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7
  }, {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC
  }, {
    tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
    value: userIdStorageLevel,
  }]
}

/* 生成密钥 */
async function GenerateKey(keyAlias: string, genProperties: Array<huks.HuksParam>) {
  const options: huks.HuksOptions = {
    properties: genProperties
  }
  await huks.generateKeyItemAsUser(userId, keyAlias, options).then((data) => {
    console.info("成功生成了一个别名为：" + keyAlias + " 的密钥")
  }).catch((err: BusinessError) => {
    console.error("密钥生成失败，错误码是： " + err.code + " 错误码信息： " + err.message)
  })
}

export default function HuksAsUserTest() {
  console.info('begin huks as user test')
  GenerateKey(aesKeyAlias, GetAesGenerateProperties())
}

```

