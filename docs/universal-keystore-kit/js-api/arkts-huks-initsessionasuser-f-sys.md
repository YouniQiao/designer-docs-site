# initSessionAsUser

## initSessionAsUser

```TypeScript
function initSessionAsUser(userId: number, keyAlias: string, huksOptions: HuksOptions): Promise<HuksSessionHandle>
```

指定用户身份操作密钥接口，使用Promise方式异步返回结果。huks.initSessionAsUser, huks.updateSession, huks.finishSession为三段式接口，需要一起使用。

**Since:** 12

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**System capability:** SystemCapability.Security.Huks.Extension

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| userId | number | Yes | 用户ID。 |
| keyAlias | string | Yes | initSessionAsUser操作密钥的别名。 |
| huksOptions | HuksOptions | Yes | initSessionAsUser参数集合。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksSessionHandle> | Promise对象。将initSessionAsUser操作返回的handle添加到密钥管理系统的回调。 |

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
| 12000010 | the number of sessions has reached limit |
| 12000011 | queried entity does not exist |
| 12000012 | Device environment or input parameter abnormal |
| 12000014 | memory is insufficient |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from "@kit.BasicServicesKit"

const aesKeyAlias = 'test_aesKeyAlias';
const userId = 100;
const userIdStorageLevel = huks.HuksAuthStorageLevel.HUKS_AUTH_STORAGE_LEVEL_CE;
const initializationVector = '001122334455';
const plainText = '123456789';

function StringToUint8Array(str: string) {
  let arr: number[] = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  return new Uint8Array(arr);
}

function Uint8ArrayToString(fileData: Uint8Array) {
  let dataString = '';
  for (let i = 0; i < fileData.length; i++) {
    dataString += String.fromCharCode(fileData[i]);
  }
  return dataString;
}

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

function GetAesEncryptProperties(): Array<huks.HuksParam> {
  return [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT
  }, {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7
  }, {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC
  }, {
    tag: huks.HuksTag.HUKS_TAG_IV,
    value: StringToUint8Array(initializationVector)
  }, {
    tag: huks.HuksTag.HUKS_TAG_AUTH_STORAGE_LEVEL,
    value: userIdStorageLevel,
  }]
}

function GetAesDecryptProperties(): Array<huks.HuksParam> {
  return [{
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_AES
  }, {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_AES_KEY_SIZE_128
  }, {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  }, {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_PKCS7
  }, {
    tag: huks.HuksTag.HUKS_TAG_BLOCK_MODE,
    value: huks.HuksCipherMode.HUKS_MODE_CBC
  }, {
    tag: huks.HuksTag.HUKS_TAG_IV,
    value: StringToUint8Array(initializationVector)
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

async function EncryptData(keyAlias: string, encryptProperties: Array<huks.HuksParam>): Promise<Uint8Array> {
  const options: huks.HuksOptions = {
    properties: encryptProperties,
    inData: StringToUint8Array(plainText)
  }
  let handle: number = 0;
  let cipherData: Uint8Array = new Uint8Array([]);
  await huks.initSessionAsUser(userId, keyAlias, options).then((data) => {
    handle = data.handle;
  }).catch((err: BusinessError) => {
    console.error("Failed to initialize the key session. Error code: " + err.code + " Error message: " + err.message)
  })
  await huks.finishSession(handle, options).then((data) => {
    console.info("Data is encrypted. Ciphertext: " + Uint8ArrayToString(data.outData))
    if (data.outData != undefined) {
      cipherData = data.outData
    }
    console.info("running time result success!")
  }).catch((err: BusinessError) => {
    console.error("An exception is captured in the encryption process. Error code: " + err.code + " Error message: " + err.message)
  })
  return cipherData
}

async function DecryptData(keyAlias: string, decryptProperties: Array<huks.HuksParam>, cipherData: Uint8Array) {
  const options: huks.HuksOptions = {
    properties: decryptProperties,
    inData: cipherData
  }
  let handle: number = 0;
  await huks.initSessionAsUser(userId, keyAlias, options).then((data) => {
    handle = data.handle;
  }).catch((err: BusinessError) => {
    console.error("Failed to initialize the key session. Error code: " + err.code + " Error message: " + err.message)
  })
  await huks.finishSession(handle, options).then((data) => {
    console.info("Data is decrypted. Plaintext: " + Uint8ArrayToString(data.outData))
  }).catch((err: BusinessError) => {
    console.error("An exception is captured in the decryption process. Error code: " + err.code + " Error message: " + err.message)
  })
}

async function TestHuksInit() {
  await GenerateKey(aesKeyAlias, GetAesGenerateProperties())
  let cipherData: Uint8Array = await EncryptData(aesKeyAlias, GetAesEncryptProperties())
  await DecryptData(aesKeyAlias, GetAesDecryptProperties(), cipherData)
}

export default function HuksAsUserTest() {
  console.info('begin huks as user test')
  TestHuksInit()
}

```

