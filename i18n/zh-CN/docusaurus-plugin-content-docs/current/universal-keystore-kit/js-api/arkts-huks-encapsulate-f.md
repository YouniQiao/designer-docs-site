# encapsulate

## encapsulate

```TypeScript
function encapsulate(keyAlias: string, params: HuksParam[],
      sharedKeyAlias?: string, sharedKeyParams?: HuksParam[]): Promise<HuksReturnResult>
```

后量子加密密钥封装操作，支持HUKS密钥管理 或由应用程序本身决定。如果应用程序选择管理密钥， 对称密钥携带在HuksReturnResult的outData字段中。

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.Security.Huks.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| keyAlias | string | 是 | 后量子加密算法的密钥名称 |
| params | HuksParam[] | 是 | 表示封装属性 |
| sharedKeyAlias | string | 否 |  |
| sharedKeyParams | HuksParam[] | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;HuksReturnResult> | 函数返回的promise。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | API is not supported. |
| 12000001 | Algorithm mode is not supported |
| 12000002 | Algorithm parameters are missing, please check the algorithm parameters. |
| 12000003 | The algorithm parameters are invalid, please check the algorithm parameters. |
| 12000004 | File operation failed. |
| 12000005 | IPC communication failed. |
| 12000006 | The algorithm engine reported an error, please check the input parameters. |
| 12000011 | The queried key does not exist, please check the key-related parameters. |
| 12000012 | Device environment or input parameters are abnormal. |
| 12000013 | Queried credential does not exist |
| 12000014 | Memory is insufficient. |
| 12000015 | Failed to obtain the security information via UserIAM. |
| 12000016 | The screen lock password is not set. |
| 12000017 | The key with the same alias already exists. |
| 12000018 | The input parameter is invalid. |

**示例：**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';
import { BusinessError } from '@kit.BasicServicesKit';

let keyAlias = 'ml_kem_pub_key_b';
let params: huks.HuksParam[] = [{
  tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
  value: huks.HuksKeyAlg.HUKS_ALG_ML_KEM,
}, {
  tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
  value: huks.HuksKeySize.HUKS_ML_KEM_KEY_PARAM_SET_768,
}, {
  tag: huks.HuksTag.HUKS_TAG_PURPOSE,
  value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_WRAP,
}];

try {
  huks.encapsulate(keyAlias, params).then((data: huks.HuksReturnResult) => {
    console.info(`encapsulate success, encapsulatedData length: ${(data.outData as Uint8Array).length}`);
    console.info(`sharedSecret length: ${(data.sharedSecret as Uint8Array).length}`);
  }).catch((error: BusinessError) => {
    console.error(`encapsulate failed, code: ${error.code}, message: ${error.message}`);
  });
} catch (error) {
  console.error(`encapsulate input arg invalid`);
}

```

