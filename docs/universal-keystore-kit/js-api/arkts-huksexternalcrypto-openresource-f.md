# openResource

## openResource

```TypeScript
function openResource(resourceId: string, params?: HuksExternalCryptoParam[]): Promise<void>
```

打开指定资源ID的资源。使用Promise异步回调。 > **说明：** > > 打开的资源必须使用[closeResource]huksExternalCrypto.closeResource关闭。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | 资源ID。可通过  [证书选择接口](../../apis-device-certificate-kit/arkts-apis/arkts-certificatemanagerdialog-openauthorizedialog-f.md#openAuthorizeDialog-2)  获取keyUri作为resourceId，或通过[getResourceId]huksExternalCrypto.getResourceId获取外部密钥管理扩展的资源ID。 |
| params | HuksExternalCryptoParam[] | No |  |

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
| 12000011 | The cached resource ID is not found.  This may happen because the resource ID has not been opened. |
| 12000012 | Device environment or input parameters are abnormal.  This error may occur if the process function is not found, or due to other issues. |
| 12000014 | The memory is insufficient. |
| 12000017 | The resource with the resource ID is already open. |
| 12000018 | Input parameters are invalid. Possible causes:  1. The resourceId length is invalid.  2. The parameters contain invalid tags or invalid value types. |
| 12000020 | The provider operation failed.  This means an error occurred in the crypto extension before calling the UKey driver interface. |
| 12000024 | The provider or UKey is busy. |
| 12000025 | The opened resources exceed the limit. |

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

huksExternalCrypto.openResource(testResourceId)
    .then(() => {
      console.info('promise: openResource success.');
    });

```

