# setHapModuleUpgradeFlag (System API)

## Modules to Import

```TypeScript
import { freeInstall } from '@ohos.bundle.freeInstall';
```

## setHapModuleUpgradeFlag

```TypeScript
function setHapModuleUpgradeFlag(bundleName: string, 
    moduleName: string, upgradeFlag: UpgradeFlag, callback: AsyncCallback<void>): void
```

Sets an upgrade flag for a module. This API uses an asynchronous callback to return the result.

**Since:** 9

**Required permissions:** ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| moduleName | string | Yes | Module name. |
| upgradeFlag | UpgradeFlag | Yes | Upgrade flag, which is for internal use only. |
| callback | AsyncCallback&lt;void&gt; | Yes | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-asynccallback-i.md#asynccallback) used to return the result. Ifthe operation is successful, **err** is **null**; otherwise, **err** is an error object. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700002](../errorcode-bundle.md#17700002-module-name-does-not-exist) | The specified module name is not found. |


## setHapModuleUpgradeFlag

```TypeScript
function setHapModuleUpgradeFlag(bundleName: string, moduleName: string, upgradeFlag: UpgradeFlag): Promise<void>
```

Sets an upgrade flag for a module. This API uses a promise to return the result.

**Since:** 9

**Required permissions:** ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| moduleName | string | Yes | Module name. |
| upgradeFlag | UpgradeFlag | Yes | Upgrade flag, which is for internal use only. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [201](../../errorcode-universal.md#201-permission-denied) | Permission denied. |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | Permission denied, non-system app called system api. |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.Incorrect parameter types. |
| [801](../../apis-ads-kit/errorcode-ads.md#801-ad-request-failure) | Capability not supported. |
| [17700001](../errorcode-bundle.md#17700001-bundle-name-does-not-exist) | The specified bundle name is not found. |
| [17700002](../errorcode-bundle.md#17700002-module-name-does-not-exist) | The specified module name is not found. |

