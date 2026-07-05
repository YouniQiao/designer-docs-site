# setWatermarkImage

## setWatermarkImage

```TypeScript
function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number): void
```

为指定用户的指定应用设置水印策略。当前只支持最多保存100个策略。 > **说明：** > > 本接口适用于企业场景下为三方应用设置水印，降低企业信息泄露风险。不建议为系统应用设置水印（如：桌面应用），可能存在未知异常。

**Since:** 14

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件。Want中必须包含企业设备管理扩展能力的abilityName和所在应用的bundleName。 |
| bundleName | string | Yes | 被设置水印的应用包名。 |
| source | string \| image.PixelMap | Yes | string表示图像路径，图像路径为应用沙箱路径(应用沙箱路径和真实路径的对应关系可参见：  [应用沙箱路径和真实物理路径的对应关系](docroot://file-management/app-sandbox-directory.md#应用沙箱路径和真实物理路径的对应关系))等应用有权限访问的路径。  image.PixelMap表示图像对象，图像像素占用大小不得超过500KB。 图像像素占用大小计算公式：图像宽度(像素)×图像高度 (像素)×每个像素占用的字节数（通常为4）。例如：一张 100x100 的图片，图  像像素占用大小为100×100×4=40000字节。 |
| accountId | number | Yes | 用户ID。accountId可以通过@ohos.account.osAccount中的  [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-osaccount-accountmanager-i.md#getOsAccountLocalId)等接口来获取。@ohos.account.osAccount to obtain the account ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 201 | Permission verification failed. The application does not have the permission  required to call the API. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |

**Example**

```TypeScript
import { securityManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};
// Replace with actual values.
let bundleName: string = 'com.example.myapplication';
let source: string = '/data/storage/el1/base/test.png';
let accountId: number = 100;
try {
    securityManager.setWatermarkImage(wantTemp, bundleName, source, accountId);
    console.info(`Succeeded in setting set watermarkImage policy.`);
} catch(err) {
    console.error(`Failed to set watermarkImage policy. Code: ${err.code}, message: ${err.message}`);
}

```

## setWatermarkImage

```TypeScript
function setWatermarkImage(admin: Want, bundleName: string, source: string | image.PixelMap, accountId: number, properties: WatermarkProperties): void
```

为指定用户的指定应用设置水印策略。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.ENTERPRISE_MANAGE_SECURITY

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | 企业设备管理扩展组件 |
| bundleName | string | Yes | 被设置水印的应用包名。 |
| source | string \| image.PixelMap | Yes | 水印图片或者路径 |
| accountId | number | Yes | 系统账号ID  取值应为≥0的整数。 |
| properties | WatermarkProperties | Yes | 水印图片参数信息 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 9200001 | The application is not an administrator application of the device. |
| 9200002 | The administrator application does not have permission to manage the device. |
| 9200012 | The parameter validation failed. |
| 201 | Permission verification failed.  The application does not have the permission required to call the API. |

