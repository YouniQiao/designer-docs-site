# getErrorInfo

## getErrorInfo

```TypeScript
function getErrorInfo(): HuksExternalErrorInfo
```

查询上次接口调用产生的详细错误信息。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Return value:**

| Type | Description |
| --- | --- |
| HuksExternalErrorInfo | 返回的详细错误信息。 |

**Example**

```TypeScript
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';

const resourceId = JSON.stringify({
  providerName: "testProviderName",
  bundleName: "com.example.cryptoapplication",
  abilityName: "CryptoExtension",
  index: "testKey"
});

const params: Array<huksExternalCrypto.HuksExternalCryptoParam> = [
  {
    tag: huksExternalCrypto.HuksExternalCryptoTag.HUKS_EXT_CRYPTO_TAG_UKEY_PIN,
    value: StringToUint8Array(pin)
  }
];

try {
  await huksExternalCrypto.authUkeyPin(resourceId, params);
} catch (error) {
  const errorInfo = huksExternalCrypto.getErrorInfo();
  console.info(`errno: ${errorInfo.errno}`);
  console.info(`errorDesc: ${errorInfo.errorDesc}`);
}

```

