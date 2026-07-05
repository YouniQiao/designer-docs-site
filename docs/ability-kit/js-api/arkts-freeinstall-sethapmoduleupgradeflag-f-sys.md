# setHapModuleUpgradeFlag

## setHapModuleUpgradeFlag

```TypeScript
function setHapModuleUpgradeFlag(bundleName: string, 
    moduleName: string, upgradeFlag: UpgradeFlag, callback: AsyncCallback<void>): void
```

设置指定模块是否升级。使用callback异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| moduleName | string | Yes | 应用程序模块名称。 |
| upgradeFlag | UpgradeFlag | Yes | 仅供内部系统使用标志位。 |
| callback | AsyncCallback&lt;void> | Yes | [回调函数](../../apis-basic-service-kit/arkts-apis/arkts-asynccallback-i.md#AsyncCallback)。当函数调用成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |
| 17700002 | The specified module name is not found. |

## setHapModuleUpgradeFlag

```TypeScript
function setHapModuleUpgradeFlag(bundleName: string, moduleName: string, upgradeFlag: UpgradeFlag): Promise<void>
```

设置指定模块是否升级。使用Promise异步回调。

**Since:** 9

**Required permissions:** 

 ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework.FreeInstall

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 应用Bundle名称。 |
| moduleName | string | Yes | 应用程序模块名称。 |
| upgradeFlag | UpgradeFlag | Yes | 仅供内部系统使用标志位。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | Permission denied. |
| 202 | Permission denied, non-system app called system api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.  Incorrect parameter types. |
| 801 | Capability not supported. |
| 17700001 | The specified bundle name is not found. |
| 17700002 | The specified module name is not found. |

