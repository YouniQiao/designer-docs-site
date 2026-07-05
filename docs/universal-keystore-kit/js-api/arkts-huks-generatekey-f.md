# generateKey

## generateKey

```TypeScript
function generateKey(keyAlias: string, options: HuksOptions, callback: AsyncCallback<HuksResult>): void
```

生成密钥。使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.generateKeyItem<sup>9+</sup>]huks.generateKeyItem(keyAlias: string, options: HuksOptions, callback: AsyncCallback<void>) > 替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.generateKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。 |
| options | HuksOptions | Yes | 用于存放生成key所需TAG。 |
| callback | AsyncCallback&lt;HuksResult> | Yes | 回调函数。当生成密钥成功时，err为undefined，data为获取到的HuksResult；否则为错误对象。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Generate an RSA key of 512 bits. */

let keyAlias = 'keyAlias';
let properties: Array<huks.HuksParam> = [
  {
    tag: huks.HuksTag.HUKS_TAG_ALGORITHM,
    value: huks.HuksKeyAlg.HUKS_ALG_RSA
  },
  {
    tag: huks.HuksTag.HUKS_TAG_KEY_SIZE,
    value: huks.HuksKeySize.HUKS_RSA_KEY_SIZE_512
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PURPOSE,
    value: huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_ENCRYPT | huks.HuksKeyPurpose.HUKS_KEY_PURPOSE_DECRYPT
  },
  {
    tag: huks.HuksTag.HUKS_TAG_PADDING,
    value: huks.HuksKeyPadding.HUKS_PADDING_OAEP
  },
  {
    tag: huks.HuksTag.HUKS_TAG_DIGEST,
    value: huks.HuksKeyDigest.HUKS_DIGEST_SHA256
  }
];
let options: huks.HuksOptions = {
  properties: properties
};
huks.generateKey(keyAlias, options, (err, data) => {
});

```

## generateKey

```TypeScript
function generateKey(keyAlias: string, options: HuksOptions): Promise<HuksResult>
```

生成密钥。使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [huks.generateKeyItem<sup>9+</sup>]huks.generateKeyItem(keyAlias: string, options: HuksOptions)替代。

**Since:** 8

**Deprecated since:** 9

**Substitute:** huks.generateKeyItem(keyAlias:

**System capability:** SystemCapability.Security.Huks.Extension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| keyAlias | string | Yes | 密钥别名。密钥别名的最大长度为128字节，建议不包含个人信息等敏感词汇。 |
| options | HuksOptions | Yes | 用于存放生成key所需TAG。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;HuksResult> | Promise对象，返回HuksResult。 |

**Example**

```TypeScript
import { huks } from '@kit.UniversalKeystoreKit';

/* Generate a 256-bit ECC key. */

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
  }
];
let options: huks.HuksOptions = {
  properties: properties
};
let result = huks.generateKey(keyAlias, options);

```

