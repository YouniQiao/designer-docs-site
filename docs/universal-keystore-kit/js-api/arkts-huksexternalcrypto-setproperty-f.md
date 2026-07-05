# setProperty

## setProperty

```TypeScript
function setProperty(resourceId: string, propertyId: string, params?: HuksExternalCryptoParam[]): Promise<void>
```

The set-type operations of the external crypto extension support calling custom interfaces. However, the custom interface must be registered with the provider.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | 资源ID，可通过  [导出证书的接口](../../apis-device-certificate-kit/arkts-apis/arkts-certificatemanagerdialog-openauthorizedialog-f.md#openAuthorizeDialog-2)  获取，该接口的返回结果中附带resourceId。 |
| propertyId | string | Yes | 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，应用开发者需要针对接口名进行适配。 |
| params | HuksExternalCryptoParam[] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，返回调用接口的结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | API is not supported. |
| 12000005 | IPC communication failed. |
| 12000006 | Failed to call the UKey driver interface.  Please check the UKey connection and driver status. |
| 12000011 | The cached resource ID not found. |
| 12000012 | Device environment or input parameters are abnormal.  This may occur if the process function is null, or due to other issues. |
| 12000014 | The memory is insufficient. |
| 12000018 | The input parameters are invalid. Possible causes:  1. The resourceId or propertyId length is invalid.  2. The parameters contain invalid tags or invalid value types. |
| 12000020 | The provider operation failed.  This means an error occurred in the crypto extension before calling the UKey driver interface. |
| 12000021 | The UKey PIN is locked. |
| 12000023 | The UKey PIN is not authenticated. |
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

const propertyId = "SKF_SetDevInfo";
const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];

async function testFunction() : Promise<void>
{
  try {
    await huksExternalCrypto.setProperty(testResourceId, propertyId, extProperties)
      .then(() => {
        console.info('promise: setProperty success.');
      });
  } catch (error) {
    console.error(`promise: setProperty failed, errCode : ${error.code}, errMsg : ${error.message}`);
  }
}

```

