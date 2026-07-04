# isAppKioskAllowed

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## isAppKioskAllowed

```TypeScript
function isAppKioskAllowed(appIdentifier: string): boolean
```

Checks whether an application is allowed to run in kiosk mode.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appIdentifier | string | Yes | [Unique identifiers](../../apis-ability-kit/arkts-apis/arkts-ability-signatureinfo-i.md#signatureinfo) of anapplication. You can call the[bundleManager.getBundleInfo](../../apis-ability-kit/arkts-apis/arkts-ability-getbundleinfo-f.md#getbundleinfo-3)API to obtain the **bundleInfo.signatureInfo.appIdentifier**. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | The value **true** means the application can run in kiosk mode; the value **false** means theopposite. |

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

