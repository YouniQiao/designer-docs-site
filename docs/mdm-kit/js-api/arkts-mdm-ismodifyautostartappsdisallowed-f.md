# isModifyAutoStartAppsDisallowed

## Modules to Import

```TypeScript
import { applicationManager } from '@ohos.enterprise.applicationManager';
```

## isModifyAutoStartAppsDisallowed

```TypeScript
function isModifyAutoStartAppsDisallowed(admin: Want, autoStartApp: Want, accountId: number): boolean
```

Checks whether a specified user is prohibited from canceling application auto-start.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_APPLICATION

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| autoStartApp | Want | Yes | Auto-start applications to add. **Want** must contain **bundleName** and**abilityName**. |
| accountId | number | Yes | Account ID, which must be greater than or equal to 0.<br> You can call[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-2) of @ohos.account.osAccount to obtain the ID. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | Whether the user is prohibited from canceling application auto-startup. The value **true**indicates yes and the value **false** indicates no.&lt;!--PR1--&gt;&lt;!--PR1End--&gt; |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { applicationManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace it as required.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

let autoStartApp: Want = {
  // Replace it as required.
  bundleName: 'com.example.autoStartApplication',
  abilityName: 'EntryAbility'
};

try {
  let res: boolean = applicationManager.isModifyAutoStartAppsDisallowed(wantTemp, autoStartApp, 100);
  console.info(`Succeeded in getting disallow modify auto start app: ${JSON.stringify(res)}`);
} catch(err) {
  console.error(`Failed to get disallow modify auto start app. Code: ${err.code}, message: ${err.message}`);
}

```

