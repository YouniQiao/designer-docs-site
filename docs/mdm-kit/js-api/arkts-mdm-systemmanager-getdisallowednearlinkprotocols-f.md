# getDisallowedNearLinkProtocols

## Modules to Import

```TypeScript
import { systemManager } from '@kit.MDMKit';
```

<a id="getdisallowednearlinkprotocols"></a>
## getDisallowedNearLinkProtocols

```TypeScript
function getDisallowedNearLinkProtocols(admin: Want, accountId: number): Array<NearLinkProtocol>
```

Obtains the list of disallowed NearLink protocols for a specified user.

**Since:** 20

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_SYSTEM

**Model restriction:** This API can be used only in the stage model.

<!--Device-systemManager-function getDisallowedNearLinkProtocols(admin: Want, accountId: number): Array<NearLinkProtocol>--><!--Device-systemManager-function getDisallowedNearLinkProtocols(admin: Want, accountId: number): Array<NearLinkProtocol>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of the EnterpriseAdminExtensionAbility and the bundle name of the application. |
| accountId | number | Yes | User ID, which must be greater than or equal to 0.<br>You can call APIs such as [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-1)to obtain the user ID. |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NearLinkProtocol&gt; | List of disallowed NearLink protocols for a specified user. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed. The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { systemManager } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

// Replace with actual values.
let accountId: number = 100;

try {
  let result: systemManager.NearLinkProtocol[] = systemManager.getDisallowedNearLinkProtocols(wantTemp, accountId);
  console.info(`Succeeded in querying the disabled Starlink protocol list for the specified user: ${result}`);
} catch (err) {
  console.error(`Failed to query the disabled Starlink protocol list for the specified user. Code is ${err.code}, message is ${err.message}`);
}

```

