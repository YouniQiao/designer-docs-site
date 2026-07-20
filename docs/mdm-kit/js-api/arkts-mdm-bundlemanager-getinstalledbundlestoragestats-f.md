# getInstalledBundleStorageStats

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## getInstalledBundleStorageStats

```TypeScript
function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>
```

Get the storage statistics of installed bundles on the device.

**Since:** 26.0.0

**Required permissions:** ohos.permission.ENTERPRISE_GET_ALL_BUNDLE_INFO

**Model restriction:** This API can be used only in the stage model.

<!--Device-bundleManager-function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>--><!--Device-bundleManager-function getInstalledBundleStorageStats(admin: Want, bundleNames: Array<string>, accountId: number): Promise<Array<BundleStorageStats>>-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| admin | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | admin indicates the enterprise admin extension ability information. |
| bundleNames | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<string> | Yes | bundleNames indicates the list of application bundle names. |
| accountId | number | Yes | Account ID.<br>The value must be an integer greater than or equal to 0.<br> You can call [getOsAccountLocalId](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-osaccount-accountmanager-i.md#getosaccountlocalid-2)of @ ohos.account.osAccount to obtain the account ID. |

**Return value:**

| Type | Description |
| --- | --- |
| [Promise](../../apis-na/arkts-apis/arkts-na-lib-es5-promise-i.md)<Array<BundleStorageStats>> | Returns the bundle statistics of the installed applications. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [9200001](../errorcode-enterpriseDeviceManager.md#9200001-deviceadmin-not-enabled) | The application is not an administrator application of the device. |
| [9200002](../errorcode-enterpriseDeviceManager.md#9200002-permission-denied) | The administrator application does not have permission to manage the device. |
| [9200012](../errorcode-enterpriseDeviceManager.md#9200012-parameter-verification-failed) | Parameter verification failed. |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission verification failed.The application does not have the permission required to call the API. |

