# anonAttestKeyItemOffline

## anonAttestKeyItemOffline

```TypeScript
function anonAttestKeyItemOffline(keyAlias: string, params: HuksParam[]): Promise<HuksReturnResult>
```

离线模式下获取匿名化密钥证书。使用Promise异步回调。 > **说明：** > > - 离线密钥证明依赖网络，需要定期联网使用该接口以更新离线证书，推荐优先使用离线匿名密钥证明。 > > - 离线匿名密钥证明需保证本地时间是准确的，否则可能导致对端校验证书超期失败。 > **说明** > > > - Offline key attestation depends on the network. You need to periodically connect to the network to use this API > to update the offline certificate. Offline anonymous key attestation is recommended. > > > - Offline anonymous key attestation requires that the local time be accurate. Otherwise, the peer end may fail to > verify the certificate expiration。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名，存放待获取证书密钥的别名。 |
| params | HuksParam[] | Yes | 用于获取证书时指定所需参数与数据。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksReturnResult> | Promise对象，返回调用接口的结果。当调用成功时，HuksReturnResult的certChains成员为获取到的证书链。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | The API is not supported. |
| 12000001 | The algorithm mode is not supported. |
| 12000004 | The file operation failed. |
| 12000005 | The IPC communication failed. |
| 12000006 | The encryption engine is faulty. |
| 12000011 | The queried entity does not exist. |
| 12000012 | The device environment or input parameter is abnormal. |
| 12000014 | The memory is insufficient. |
| 12000018 | The parameter is incorrect. Possible causes:  1. A mandatory parameter is left empty.  2. The parameter type is incorrect.  3. The parameter verification failed.  4. The group ID specified by the access group tag is invalid. |
| 12000024 | The operation times out. This may be caused by network jitter.  You can try again later. |
| 12000027 | The network is unavailable. Check network connections. |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

function stringToUint8Array(str: string): Uint8Array {
  let arr: number[] = [];
  for (let i = 0, j = str.length; i < j; ++i) {
    arr.push(str.charCodeAt(i));
  }
  let tmpUint8Array = new Uint8Array(arr);
  return tmpUint8Array;
}

let challenge = stringToUint8Array('challenge_data');
let keyAliasString = "key anon local attest";

async function generateKey(alias: string) {
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
    {
      tag: huks.HuksTag.HUKS_TAG_PADDING,
      value: huks.HuksKeyPadding.HUKS_PADDING_NONE
    }
  ];
  let options: huks.HuksOptions = {
    properties: properties
  };

  await huks.generateKeyItem(alias, options);
}

async function anonAttestKeyOffline() {
  let aliasString = keyAliasString;
  let aliasUint8 = stringToUint8Array(aliasString);
  let properties: Array<huks.HuksParam> = [
    {
      tag: huks.HuksTag.HUKS_TAG_ATTESTATION_CHALLENGE,
      value: challenge
    },
    {
      tag: huks.HuksTag.HUKS_TAG_ATTESTATION_ID_ALIAS,
      value: aliasUint8
    }
  ];

  await generateKey(aliasString);
  await huks.anonAttestKeyItemOffline(aliasString, properties);
}

```

