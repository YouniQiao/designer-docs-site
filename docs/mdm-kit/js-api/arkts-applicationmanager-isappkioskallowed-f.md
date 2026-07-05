# isAppKioskAllowed

## isAppKioskAllowed

```TypeScript
function isAppKioskAllowed(appIdentifier: string): boolean
```

查询某应用是否允许在Kiosk模式下运行。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appIdentifier | string | Yes | 应用[唯一标识符]./bundleManager/BundleInfo:SignatureInfo，可以通过接口  [bundleManager.getBundleInfo](../../apis-ability-kit/arkts-apis/arkts-bundlemanager-getbundleinfo-f.md#getBundleInfo-3)  获取bundleInfo.signatureInfo.appIdentifier。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | true表示允许在Kiosk模式下运行。false表示不允许在Kiosk模式下运行。 |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';

try {
  // Replace it as required.
  let isAllowed: boolean = applicationManager.isAppKioskAllowed('6917****3569');
  console.info(`Succeeded in querying if the app is allowed kiosk, isAllowed: ${isAllowed}`);
} catch (err) {
  console.error(`Failed to query if the app is allowed kiosk. Code is ${err.code}, message is ${err.message}`);
}

```

