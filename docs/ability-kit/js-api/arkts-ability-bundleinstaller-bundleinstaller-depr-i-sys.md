# BundleInstaller (System API)

The module provides APIs for you to install, uninstall, and recover bundles on devices.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [BundleInstaller](arkts-ability-installer-bundleinstaller-i-sys.md)

<!--Device-unnamed-export interface BundleInstaller--><!--Device-unnamed-export interface BundleInstaller-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

<a id="install"></a>
## install

```TypeScript
install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

Install an application in a HAP.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [install](arkts-ability-installer-bundleinstaller-i-sys.md#install-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

<!--Device-BundleInstaller-install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void--><!--Device-BundleInstaller-install(bundleFilePaths: Array<string>, param: InstallParam, callback: AsyncCallback<InstallStatus>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleFilePaths | Array&lt;string&gt; | Yes | Sandbox path where the HAP files of the bundle are stored. |
| param | [InstallParam](../../apis-mdm-kit/arkts-apis/arkts-mdm-bundlemanager-installparam-i.md) | Yes | Parameters required for bundle installation. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;InstallStatus&gt; | Yes | Callback used to return the result. If install is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

<a id="recover"></a>
## recover

```TypeScript
recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

recover an application.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [recover](arkts-ability-installer-bundleinstaller-i-sys.md#recover-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

<!--Device-BundleInstaller-recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void--><!--Device-BundleInstaller-recover(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| param | [InstallParam](../../apis-mdm-kit/arkts-apis/arkts-mdm-bundlemanager-installparam-i.md) | Yes | Parameters required for bundle recovery. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;InstallStatus&gt; | Yes | Callback used to return the result. If recover is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

<a id="uninstall"></a>
## uninstall

```TypeScript
uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void
```

Uninstall an application.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [uninstall](arkts-ability-installer-bundleinstaller-i-sys.md#uninstall-1)

**Required permissions:** ohos.permission.INSTALL_BUNDLE

<!--Device-BundleInstaller-uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void--><!--Device-BundleInstaller-uninstall(bundleName: string, param: InstallParam, callback: AsyncCallback<InstallStatus>): void-End-->

**System capability:** SystemCapability.BundleManager.BundleFramework

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | Bundle name. |
| param | [InstallParam](../../apis-mdm-kit/arkts-apis/arkts-mdm-bundlemanager-installparam-i.md) | Yes | Parameters required for bundle uninstall. |
| callback | [AsyncCallback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-asynccallback-i.md)&lt;InstallStatus&gt; | Yes | Callback used to return the result. If uninstall is successful, **err** is **undefined**, and return the installation status.Otherwise, **err** is an error object. |

