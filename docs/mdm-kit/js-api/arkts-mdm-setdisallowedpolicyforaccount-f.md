# setDisallowedPolicyForAccount

## Modules to Import

```TypeScript
import { restrictions } from '@ohos.enterprise.restrictions';
```

## setDisallowedPolicyForAccount

```TypeScript
function setDisallowedPolicyForAccount(admin: Want, feature: string, disallow: boolean, accountId: number): void
```

Disallows a feature for a specified user.

**Since:** 14

**Deprecated since:** 26.0.0

**Substitutes:** setDisallowedPolicyForAccount(admin:

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| feature | string | Yes | Feature to set.<br>- **fingerprint**: device fingerprint authentication capability.Currently, this feature is supported only on PCs/2-in-1 devices. The rules for using this parameter are asfollows:<br>1. If this capability has been disabled through the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API, using **setDisallowedPolicyForAccount** will throw a policy conflict.<br>2. When**setDisallowedPolicyForAccount** is used to disable or enable the device fingerprint authentication capabilityfor a specified user, any subsequent action via the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API will override the previous setting. If[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)enables the capability, all users gain access to the device fingerprint authentication.<br>- **print**&lt;sup&gt;20+&lt;/sup&gt;: device printing capability, which is supported only on PCs/2-in-1 devices for API versions earlier than23, and on PCs/2-in-1 devices, smartphones, and tablets for API version 23 and later versions. If printing isdisabled via this API, it remains disabled for specific users even if the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API is used to enable it for those users.<br>- **mtpClient**&lt;sup&gt;20+&lt;/sup&gt;: Media Transfer Protocol (MTP)client capability (write only). Currently, this feature is supported only on PCs/2-in-1 devices. MTP allowsusers to linearly access media files on mobile devices. A policy conflict error will occur if this API is usedto disable MTP client capability after MTP client write access has been disabled for specific users via the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API.<br>- **usbStorageDeviceWrite**&lt;sup&gt;20+&lt;/sup&gt;: USB storage device write capability. Currently, this featureis supported only on enterprise PCs/2-in-1 devices.&lt;!--RP5--&gt;&lt;!--RP5End--&gt;<br> If the USB storage device writepermission of a user is disabled via this API in any of the following situations, a policy conflict will bereported:<br> 1. The device USB capability has been disabled via the[setDisallowedPolicy](arkts-mdm-setdisallowedpolicy-f.md#setdisallowedpolicy-1)API.<br> 2. USB storage device access policy has been set to read-only or disabled via the[setUsbStorageDeviceAccessPolicy](arkts-mdm-setusbstoragedeviceaccesspolicy-f.md#setusbstoragedeviceaccesspolicy-1)API.<br> 3. Storage USB devices have been disabled via the[addDisallowedUsbDevices](arkts-mdm-adddisallowedusbdevices-f.md#adddisallowedusbdevices-1) API.<br>-**diskRecoveryKey**&lt;sup&gt;20+&lt;/sup&gt;: recovery[key export](../../../../security/UniversalKeystoreKit/huks-export-key-arkts.md) capability. Currently, thisfeature is supported only on PCs/2-in-1 devices.<br>- **sudo**&lt;sup&gt;20+&lt;/sup&gt;: superuser do (execution withsuperuser privileges). Currently, this feature is supported only on PCs/2-in-1 devices. If this feature isdisabled, neither enterprise spaces nor personal spaces can perform operations with superuser privileges.<br>-**distributedTransmissionOutgoing**&lt;sup&gt;20+&lt;/sup&gt;: one-way data transmission between devices (only datatransmission to other devices is supported).<br>- **openFileBoost**&lt;sup&gt;23+&lt;/sup&gt;: &lt;!--RP6--&gt;file openingacceleration capability&lt;!--RP6End--&gt;, which provides the file opening acceleration status awareness capabilityfor apps. By integrating the corresponding APIs, apps can detect the acceleration status of files, and furtherimplement features such as displaying unique UI identifiers for accelerated files, thereby optimizing the userexperience of file opening. Currently, this feature is supported only on PCs/2-in-1 devices. |
| disallow | boolean | Yes | Whether to disallow the feature. The value **true** means to disallow the feature;the value **false** means the opposite. |
| accountId | number | Yes | User ID, which must be greater than or equal to 0.<br>You can call[getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-1)to obtain the user ID. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

**Example**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  restrictions.setDisallowedPolicyForAccount(wantTemp, 'fingerprint', true, 100);
  console.info('Succeeded in setting fingerprint disabled');
} catch (err) {
  console.error(`Failed to set fingerprint disabled. Code is ${err.code}, message is ${err.message}`);
}

```


## setDisallowedPolicyForAccount

```TypeScript
function setDisallowedPolicyForAccount(admin: Want, feature: FeatureForAccount, disallow: boolean, accountId: number): void
```

Disallows a feature for a specified user.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_MANAGE_RESTRICTIONS

**Model restriction:** This API can be used only in the stage model.

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | Want | Yes | EnterpriseAdminExtensionAbility. **Want** must contain the ability name of theEnterpriseAdminExtensionAbility and the bundle name of the application. |
| feature | FeatureForAccount | Yes | User feature to be disabled or enabled.<br>If SuperHub has been added to the user's list of non-disableable applications through the[addUserNonStopApps](arkts-mdm-addusernonstopapps-f.md#addusernonstopapps-1) API,setting this parameter to **SUPER_HUB** will cause a policy conflict and error code 9200010 will be reported.In this case, call the[removeUserNonStopApps](arkts-mdm-removeusernonstopapps-f.md#removeusernonstopapps-1) APIto remove SuperHub from the user's list of non-disableable applications to resolve the conflict. |
| disallow | boolean | Yes | Whether to disallow the feature. The value **true** means to disallow the feature;the value **false** means the opposite. |
| accountId | number | Yes | Account ID.<br>The value must be an integer greater than or equal to 0.<br>You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-accountmanager-i.md#getosaccountlocalid-1)to obtain the user ID.<br>When **feature** is set to **SUPER_HUB**, this parameter can only be set to the ID ofthe current user. Otherwise, error code 9200012 will be reported. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200010](../errorcode-enterpriseDeviceManager.md#9200010-policy-conflict) | A conflict policy has been configured. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported.Failed to call the API due to limited device capabilities. |

**Example**

```TypeScript
import { restrictions } from '@kit.MDMKit';
import { Want } from '@kit.AbilityKit';

let wantTemp: Want = {
  // Replace with actual values.
  bundleName: 'com.example.myapplication',
  abilityName: 'EnterpriseAdminAbility'
};

try {
  // Replace parameters with actual values.
  restrictions.setDisallowedPolicyForAccount(wantTemp, restrictions.FeatureForAccount.SUPER_HUB, true, 100);
  console.info('Succeeded in setting super hub disabled');
} catch (err) {
  console.error(`Failed to set super hub disabled. Code is ${err.code}, message is ${err.message}`);
}

```

