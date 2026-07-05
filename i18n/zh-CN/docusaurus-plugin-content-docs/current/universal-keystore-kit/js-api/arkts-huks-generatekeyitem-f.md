# generateKeyItem

## generateKeyItem

```TypeScript
function generateKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>): void
```

生成密钥。使用callback异步回调。 基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，此接口不会返回密钥材料内容，只用于表示此次调用是否成功。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。 |
| options | HuksOptions | 是 | 用于存放生成key所需TAG。其中密钥使用的算法、密钥用途、密钥长度为必选参数。 |
| callback | AsyncCallback&lt;void> | 是 | 回调函数。当生成密钥成功时，err为undefined，否则为错误对象。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
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
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000011 | The queried entity does not exist. This may happen because  the key resource ID specified by keyAlias has not been opened in the external crypto scenario. [since 26.0.0] |
| 12000020 | the provider operation failed [since 26.0.0] |
| 12000021 | the UKey PIN is locked [since 26.0.0] |
| 12000023 | the UKey PIN not authenticated [since 26.0.0] |
| 12000024 | the provider or UKey is busy [since 26.0.0] |
| 12000026 | the secure element is not available [since 26.0.0] |

**示例：**

```TypeScript
/* 以生成ECC密钥为例 */
import { huks } from '@kit.UniversalKeystoreKit';

let keyAlias: string = 'keyAlias';
let properties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_ECC
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY
  },
  {
    tag: huks.HuksTag.HUKS_TAG_DIGEST,
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256
  },
];
let options: huks.HuksOptions = {
  properties: properties
};
/* 生成密钥 */
huks.generateKeyItem(keyAlias, options, (error) => {
  if (error) {
    console.error(`callback: generateKeyItem failed`);
  } else {
    console.info(`callback: generateKeyItem key success`);
  }
});


<stack class="container">
    <input type="button" class="generateBtn" @click="generateKey">生成密钥</input>
    <text class="result">{{result}}</text>
</stack>


.container {
  width: 454px;
  height: 800px;
  background-color: #ffffffff;
}

.generateBtn {
  left: 77px;
  top: 100px;
  width: 300px;
  height: 80px;
  text-align: center;
  color: white;
  background-color: orange;
  font-size: 25px;
}

.result {
  left: 30px;
  top: 190px;
  width: 390px;
  height: 80px;
  text-align: center;
  color: #ff000000;
  background-color: #ffffffff;
  font-size: 25px;
}


import huks from '@ohos.security.huks';

function testGenerateKey() {
    let huksInfo;
    let keyAlias = 'keyAlias';
    let properties = [{
        tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
        value: huks.HuksKeyAlg.HUKS_ALG_DES
    }, {
        tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
        value: huks.HuksKeySize.HUKS_DES_KEY_SIZE_64
    }, {
        tag: huks.HuksTag.HUKS_TAG_PURPOSE,
        value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT |
        huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
    }];
    let options = {
        properties: properties
    };

    huks.generateKeyItem(keyAlias, options, (err) => {
        if (err) {
            huksInfo = 'generateKeyItem failed, code: ' + err.code + ', message: ' + err.message;
            console.error(huksInfo);
        } else {
            huksInfo = 'generateKeyItem succeeded';
            console.info(huksInfo);
        }
    });
    return huksInfo;
}

export default {
    data: {
        result: ''
    },

    generateKey() {
        this.result = testGenerateKey();
    }
};

```

## generateKeyItem

```TypeScript
function generateKeyItem(keyAlias: string, options: HuksOptions): Promise<void>
```

生成密钥。使用Promise异步回调。 基于密钥不出[TEE](docroot://security/UniversalKeystoreKit/huks-concepts.md#可信执行环境tee)原则，此接口不会返回密钥材料内容，只用于表示此次调用是否成功。

**起始版本：** 9

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Extension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。 |
| options | HuksOptions | 是 | 用于存放生成key所需TAG。其中密钥使用的算法、密钥用途、密钥长度为必选参数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameter types.  3. Parameter verification failed. |
| 801 | api is not supported |
| 12000001 | algorithm mode is not supported |
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
| 12000018 | the group id specified by the access group tag is invalid [since 23] |
| 12000011 | The queried entity does not exist. This may happen because  the key resource ID specified by keyAlias has not been opened in the external crypto scenario. [since 26.0.0] |
| 12000020 | the provider operation failed [since 26.0.0] |
| 12000021 | the UKey PIN is locked [since 26.0.0] |
| 12000023 | the UKey PIN not authenticated [since 26.0.0] |
| 12000024 | the provider or UKey is busy [since 26.0.0] |
| 12000026 | the secure element is not available [since 26.0.0] |

**示例：**

```TypeScript
/* 以生成ECC密钥为例 */
import { huks } from '@kit.UniversalKeystoreKit';

let keyAlias = 'keyAlias';
let properties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_ECC
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_ECC_KEY_SIZE_256
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_SIGN | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_VERIFY
  },
  {
    tag: huks.HuksTag.HUKS_TAG_DIGEST,
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256
  },
];
let options: huks.HuksOptions = {
  properties: properties
};
/* 生成密钥 */
huks.generateKeyItem(keyAlias, options)
  .then((data) => {
    console.info(`promise: generateKeyItem success`);
  });

```

