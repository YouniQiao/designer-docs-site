# clearUkeyPinAuthState

## clearUkeyPinAuthState

```TypeScript
function clearUkeyPinAuthState(resourceId: string): Promise<void>
```

清除指定资源ID的PIN码认证状态。使用Promise异步回调。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | 资源ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | API is not supported. |
| 12000005 | IPC communication failed. |
| 12000006 | Failed to call the UKey driver interface.  Please check the UKey connection and driver status. |
| 12000011 | The cached resource ID not found. |
| 12000012 | Device environment or input parameters are abnormal.  This may occur if the process function is null, or due to other issues. |
| 12000014 | The memory is insufficient. |
| 12000018 | The input parameters are invalid. Possible causes:  1. The resourceId length is invalid. |
| 12000020 | The provider operation failed.  This means an error occurred in the crypto extension before calling the UKey driver interface. |
| 12000024 | The provider or UKey is busy. |

**Example**

```TypeScript
import { huksExternalCrypto } from '@kit.UniversalKeystoreKit';

const testResourceId = JSON.stringify({
  providerName: "testProviderName",
  bundleName: "com.example.cryptoapplication",
  abilityName: "CryptoExtension",
  index: {
    key: "testKey"
  } as ESObject
});

huksExternalCrypto.clearUkeyPinAuthState(testResourceId)
    .then(() => {
      console.info('promise: clearUkeyPinAuthState success.');
    });

```

