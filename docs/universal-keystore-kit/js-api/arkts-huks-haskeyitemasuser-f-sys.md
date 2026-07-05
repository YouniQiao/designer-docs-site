# hasKeyItemAsUser

## hasKeyItemAsUser

```TypeScript
function hasKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<boolean>
```

指定用户身份判断密钥是否存在，使用Promise回调异步返回结果。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Security.Huks.Extension

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。 |
| keyAlias | string | Yes | 所需查找的密钥的别名。 |
| huksOptions | HuksOptions | Yes | 用于查询时指定密钥的属性TAG，如使用  [HuksAuthStorageLevel](arkts-huks-huksauthstoragelevel-e.md#HuksAuthStorageLevel)指定需查询密钥的安全级别， 可传空，当API version ≥  12时，传空默认为CE，当API version ＜ 12时，传空默认为DE。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;boolean> | Promise对象。若密钥存在，返回值为true，若密钥不存在，返回值为false。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | the application permission is not sufficient, which may be caused by lack of  cross-account permission, or the system has not been unlocked by user, or the user does not exist. |
| 202 | non-system applications are not allowed to use system APIs. |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000002 | algorithm param is missing |
| 12000003 | algorithm param is invalid |
| 12000004 | operating file failed |
| 12000005 | IPC communication failed |
| 12000006 | error occurred in crypto engine |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |
| 12000001 | Feature is not supported. Possible causes:  1. The group key is not supported.  2. The crypto extension key is not supported. [since 23] |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from "@kit.BasicServicesKit"

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

async function GenerateKey(keyAlias: string, genProperties: Array<huks.HuksParam>) {
  const options: huks.HuksOptions = {
    properties: genProperties
  }
  await huks.generateKeyItemAsUser(userId, keyAlias, options).then((data) => {
    console.info("Generated a key with alias of: " + keyAlias + "")
  }).catch((err: BusinessError) => {
    console.error("Failed to generate the key. Error code: " + err.code + " Error message: " + err.message)
  })
}

async function HasKey(keyAlias: string) {
  const options: huks.HuksOptions = {
    properties: [{
      tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
      value: userIdStorageLevel,
    }]
  }
  await huks.hasKeyItemAsUser(userId, keyAlias, options).then((data) => {
    console.info("Check result of the key with the alias of "+ keyAlias +" " + JSON.stringify(data))
  }).catch((err: BusinessError) => {
    console.error("Failed to check the key. Error code: " + err.code + " Error message: " + err.message)
  })
}

async function TestHuksHasKey() {
  await GenerateKey(aesKeyAlias, GetAesGenerateProperties())
  await HasKey(aesKeyAlias)
}

export default function HuksAsUserTest() {
  console.info('begin huks as user test')
  TestHuksHasKey()
}

```

