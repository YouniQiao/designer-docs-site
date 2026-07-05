# getProperty

## getProperty

```TypeScript
function getProperty(resourceId: string, propertyId: string, params?: Array<HuksExternalCryptoParam>): Promise<Array<HuksExternalCryptoParam>>
```

调用此接口获取属性值并返回结果。使用Promise异步回调。 propertyId表示查询属性的ID信息，当前仅支持GMT 0016-2023中定义的SKF接口名作为属性ID，支持的ID包括如下： - SKF_EnumDev - SKF_GetDevInfo - SKF_EnumApplication - SKF_EnumContainer

**Since:** 22

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Security.Huks.CryptoExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| resourceId | string | Yes | 资源ID，可通过  [导出证书的接口](../../apis-device-certificate-kit/arkts-apis/arkts-certificatemanagerdialog-openauthorizedialog-f.md#openAuthorizeDialog-2)  获取，该接口的返回结果中附带resourceId。 |
| propertyId | string | Yes | 查找操作的属性名称，是GMT 0016-2023中定义的SKF接口名，应用开发者需要针对接口名进行适配。 |
| params | Array&lt;HuksExternalCryptoParam> | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Array&lt;HuksExternalCryptoParam>> | Promise对象，返回调用接口的结果。当调用成功时，返回结果为HuksExternalCryptoParam类型的数组，包  含要查询的属性。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 801 | API is not supported. |
| 12000005 | IPC communication failed. |
| 12000006 | If the UKey driver operation failed. Possible causes:  1. Error reported when the provider accesses the SKF interface of UKey. |
| 12000011 | If the cached resource ID is not found. |
| 12000012 | Device environment or input parameter is abnormal.  This error may occur if the process function is not found, or due to other issues. |
| 12000014 | If the memory is insufficient. |
| 12000018 | Input parameter is invalid. Possible causes:  1. The resourceId or propertyId length is invalid.  2. The params contains invalid tags or invalid value types. |
| 12000020 | If the provider operation failed. Possible causes:  1. The provider experienced an internal processing error. |
| 12000021 | The UKey PIN is locked. |
| 12000023 | The UKey PIN is not authenticated. |
| 12000024 | If the provider or UKey is busy. |

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

let propertyId = "SKF_EnumDev";
const extProperties: Array<huksExternalCrypto.HuksExternalCryptoParam> = [];

console.info('promise: await huksExternalCrypto getProperty.');
async function testFunction() : Promise<void>
{
  try {
    await huksExternalCrypto.getProperty(testResourceId, propertyId, extProperties)
      .then((data) => {
        console.info(`promise: getProperty success, data: ` + JSON.stringify(data));
      });
  } catch (error) {
    console.error(`promise: getProperty failed, errCode : ${error.code}, errMsg : ${error.message}`);
  }
}

```

