# BundleInstaller (System API)

The module provides APIs for you to install, uninstall, and recover bundles on devices.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [BundleInstaller](arkts-ability-bundleinstaller-i-sys.md#bundleinstaller)

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

## install

```TypeScript
install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

Install an application in a HAP.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [install](arkts-ability-bundleinstaller-i-sys.md#install-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFilePaths | Array&lt;string&gt; | Yes | Sandbox path where the HAP files of the bundle are stored. |
| param | InstallParam | Yes | Parameters required for bundle installation. |
| callback | AsyncCallback&lt;InstallStatus&gt; | Yes | Callback used to return the result. Ifinstall is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

## recover

```TypeScript
recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

recover an application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [recover](arkts-ability-bundleinstaller-i-sys.md#recover-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| param | InstallParam | Yes | Parameters required for bundle recovery. |
| callback | AsyncCallback&lt;InstallStatus&gt; | Yes | Callback used to return the result. Ifrecover is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

## uninstall

```TypeScript
uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

Uninstall an application.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [uninstall](arkts-ability-bundleinstaller-i-sys.md#uninstall-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| param | InstallParam | Yes | Parameters required for bundle uninstall. |
| callback | AsyncCallback&lt;InstallStatus&gt; | Yes | Callback used to return the result. Ifuninstall is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

