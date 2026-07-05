# exportKeyItemAsUser

## exportKeyItemAsUser

```TypeScript
function exportKeyItemAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksReturnResult>
```

指定用户身份导出密钥，使用Promise方式回调异步返回的结果。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Security.Huks.Extension

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。 |
| keyAlias | string | Yes | 密钥别名，应与所用密钥生成时使用的别名相同。 |
| huksOptions | HuksOptions | Yes | 空对象（此处传空即可）。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象。 当调用成功时，HuksReturnResult的outData成员非空，为从密钥中导出的公钥，否则为失败。 |

**Error codes:**

| Error Code ID | Error Message |
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
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from "@kit.BasicServicesKit"

const rsaKeyAlias = 'test_rsaKeyAlias';
const userId = 100;
const userIdStorageLevel = huks.HuksAuthStorageLevel.HUKS_AUTH_STORAGE_LEVEL_CE;

function GetRSA4096GenerateProperties(): Array<huks.HuksParam> {
  return [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_RSA
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_4096
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
    huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  }, {
    tag: huks.HuksTag.HUKS_TAG_DIGEST,
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256
  }, {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS1_V1_5
  }, {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_ECB
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

async function ExportPublicKey(keyAlias: string) {
  const options: huks.HuksOptions = {
    properties: [{
      tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
      value: userIdStorageLevel,
    }]
  }
  await huks.exportKeyItemAsUser(userId, keyAlias, options).then((data) => {
    console.info("Exported the public key with the alias of: " + keyAlias + ". The data length is " + data?.outData?.length)
  }).catch((err: BusinessError) => {
    console.error("Failed to export the key. Error code: " + err.code + " Error message: " + err.message)
  })
}

async function ExportHuksTest() {
  await GenerateKey(rsaKeyAlias, GetRSA4096GenerateProperties())
  await ExportPublicKey(rsaKeyAlias)
}

export default function HuksAsUserTest() {
  console.info('begin huks as user test')
  ExportHuksTest()
}

```

