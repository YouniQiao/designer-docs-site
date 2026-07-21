# @ohos.enterprise.bundleManager

The **bundleManager** module provides APIs for bundle management, including adding, obtaining, and removing a list of bundles that are allowed to install.

> **NOTE**  
>  
> The APIs of this module can be used only in the stage model.  
>  
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see  
> [MDM Kit Development](docroot://mdm/mdm-kit-guide.md).

**Since:** 10

<!--Device-unnamed-declare namespace bundleManager--><!--Device-unnamed-declare namespace bundleManager-End-->

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedInstallBundlesSync](arkts-mdm-bundlemanager-addallowedinstallbundlessync-f.md#addallowedinstallbundlessync) | Adds the applications that can be installed by the current or specified user. The reinstallation of system apps after uninstallation is not restricted by the API. However, the reinstallation of regular apps after uninstallation is restricted by the API. |
| [addDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-adddisallowedinstallbundlessync-f.md#adddisallowedinstallbundlessync) | Adds the applications that are not allowed to be installed by the current or specified user. The reinstallation of system apps after uninstallation is not restricted by the API. However, the reinstallation of regular apps after uninstallation is restricted by the API. |
| [addDisallowedUninstallBundlesSync](arkts-mdm-bundlemanager-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync) | Adds the applications that are not allowed to be uninstalled by the current or specified user. |
| [addInstallationAllowedAppDistributionTypes](arkts-mdm-bundlemanager-addinstallationallowedappdistributiontypes-f.md#addinstallationallowedappdistributiontypes) | Adds the distribution type of the application that can be installed. Only applications of the distribution type that is added to [AppDistributionType](arkts-mdm-bundlemanager-appdistributiontype-e.md) can be installed on the current device.  For details about the distribution type of the application signing certificate, refer to the **appDistributionType** attribute in [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [getAllowedInstallBundlesSync](arkts-mdm-bundlemanager-getallowedinstallbundlessync-f.md#getallowedinstallbundlessync) | Obtains the applications that can be installed by the current or specified user. |
| [getDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-getdisallowedinstallbundlessync-f.md#getdisallowedinstallbundlessync) | Obtains the applications that cannot be installed by the current or specified user. |
| [getDisallowedUninstallBundlesSync](arkts-mdm-bundlemanager-getdisalloweduninstallbundlessync-f.md#getdisalloweduninstallbundlessync) | Obtains the bundles that cannot be uninstalled by the current or specified user. |
| [getInstallationAllowedAppDistributionTypes](arkts-mdm-bundlemanager-getinstallationallowedappdistributiontypes-f.md#getinstallationallowedappdistributiontypes) | Obtains the distribution type of the signing certificate used by applications that can be installed. |
| [getInstalledBundleList](arkts-mdm-bundlemanager-getinstalledbundlelist-f.md#getinstalledbundlelist) | Obtains the applications installed by a specified user on a device. This API uses a promise to return the result. |
| [getInstalledBundleList](arkts-mdm-bundlemanager-getinstalledbundlelist-f.md#getinstalledbundlelist-1) | Obtains the list of applications installed by a specified user based on the specified **bundleInfoGetFlag**. This API uses a promise to return the result. |
| [getInstalledBundleStorageStats](arkts-mdm-bundlemanager-getinstalledbundlestoragestats-f.md#getinstalledbundlestoragestats) | Get the storage statistics of installed bundles on the device. |
| [install](arkts-mdm-bundlemanager-install-f.md#install-2) | Installs specified applications. This API uses a promise to return the result.  This API can be used to install only applications of the **enterprise_mdm** (MDM application) or **enterprise_normal** (common enterprise application) distribution type. You can call the [getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-ability-bundlemanager-getbundleinfoforself-f.md#getbundleinfoforself-1) API to query the [BundleInfo](../../apis-ability-kit/arkts-apis/arkts-ability-bundleinfo-i.md) of an application, where **BundleInfo.appInfo.appDistributionType** indicates the distribution type. |
| [installForResult](arkts-mdm-bundlemanager-installforresult-f.md#installforresult) | Install an application. |
| [installMarketApps](arkts-mdm-bundlemanager-installmarketapps-f.md#installmarketapps) | Downloads and installs an application from AppGallery. |
| [removeAllowedInstallBundlesSync](arkts-mdm-bundlemanager-removeallowedinstallbundlessync-f.md#removeallowedinstallbundlessync) | Removes the applications that can be installed by the current or specified user. |
| [removeDisallowedInstallBundlesSync](arkts-mdm-bundlemanager-removedisallowedinstallbundlessync-f.md#removedisallowedinstallbundlessync) | Removes the applications that cannot be installed by the current or specified user. |
| [removeDisallowedUninstallBundlesSync](arkts-mdm-bundlemanager-removedisalloweduninstallbundlessync-f.md#removedisalloweduninstallbundlessync) | Removes the applications that cannot be uninstalled by the current or specified user through the specified device administrator application. |
| [removeInstallationAllowedAppDistributionTypes](arkts-mdm-bundlemanager-removeinstallationallowedappdistributiontypes-f.md#removeinstallationallowedappdistributiontypes) | Removes the distribution type of an application. If only some distribution types in the array are removed, the current device can install applications of the remaining distribution types in the array, but cannot install applications of the distribution types not included in [AppDistributionType](arkts-mdm-bundlemanager-appdistributiontype-e.md).  For details about the distribution type of the application signing certificate, refer to the **appDistributionType** attribute in [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [uninstall](arkts-mdm-bundlemanager-uninstall-f.md#uninstall-4) | Uninstalls an application of the current or specified user. The **isKeepData** parameter specifies whether to retain the bundle data. This API uses a promise to return the result. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addAllowedInstallBundles](arkts-mdm-bundlemanager-addallowedinstallbundles-f-sys.md#addallowedinstallbundles) | Adds the applications that can be installed by the current user. This API uses an asynchronous callback to return the result. |
| [addAllowedInstallBundles](arkts-mdm-bundlemanager-addallowedinstallbundles-f-sys.md#addallowedinstallbundles-1) | Adds the applications that can be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [addAllowedInstallBundles](arkts-mdm-bundlemanager-addallowedinstallbundles-f-sys.md#addallowedinstallbundles-2) | Adds the applications that can be installed by the current or specified user. This API uses a promise to return the result. |
| [addDisallowedInstallBundles](arkts-mdm-bundlemanager-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles) | Adds the applications that cannot be installed by the current user. This API uses an asynchronous callback to return the result. |
| [addDisallowedInstallBundles](arkts-mdm-bundlemanager-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles-1) | Adds the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [addDisallowedInstallBundles](arkts-mdm-bundlemanager-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles-2) | Adds the applications that are not allowed to be installed by the current or specified user. This API uses a promise to return the result. |
| [addDisallowedUninstallBundles](arkts-mdm-bundlemanager-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles) | Adds the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to return the result. |
| [addDisallowedUninstallBundles](arkts-mdm-bundlemanager-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles-1) | Adds the applications that cannot be uninstalled by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [addDisallowedUninstallBundles](arkts-mdm-bundlemanager-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles-2) | Adds the applications that cannot be uninstalled by the current or specified user. This API uses a promise to return the result. |
| [getAllowedInstallBundles](arkts-mdm-bundlemanager-getallowedinstallbundles-f-sys.md#getallowedinstallbundles) | Obtains the applications that can be installed by the current user. This API uses an asynchronous callback to return the result. |
| [getAllowedInstallBundles](arkts-mdm-bundlemanager-getallowedinstallbundles-f-sys.md#getallowedinstallbundles-1) | Obtains the applications that can be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [getAllowedInstallBundles](arkts-mdm-bundlemanager-getallowedinstallbundles-f-sys.md#getallowedinstallbundles-2) | Obtains the applications that can be installed by the current or specified user. This API uses a promise to return the result. |
| [getDisallowedInstallBundles](arkts-mdm-bundlemanager-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles) | Obtains the applications that cannot be installed by the current user. This API uses an asynchronous callback to return the result. |
| [getDisallowedInstallBundles](arkts-mdm-bundlemanager-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles-1) | Obtains the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [getDisallowedInstallBundles](arkts-mdm-bundlemanager-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles-2) | Obtains the applications that cannot be installed by the current or specified user. This API uses a promise to return the result. |
| [getDisallowedUninstallBundles](arkts-mdm-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles) | Obtains the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to return the result. |
| [getDisallowedUninstallBundles](arkts-mdm-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles-1) | Obtains the applications that cannot be uninstalled by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [getDisallowedUninstallBundles](arkts-mdm-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles-2) | Obtains the applications that cannot be uninstalled by the current or specified user. This API uses a promise to return the result. |
| [install](arkts-mdm-bundlemanager-install-f-sys.md#install) | Installs specified applications. This API uses an asynchronous callback to return the result. |
| [install](arkts-mdm-bundlemanager-install-f-sys.md#install-1) | Installs applications with specified parameters. This API uses an asynchronous callback to return the result. |
| [removeAllowedInstallBundles](arkts-mdm-bundlemanager-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles) | Removes the applications that can be installed by the current user. This API uses an asynchronous callback to return the result. |
| [removeAllowedInstallBundles](arkts-mdm-bundlemanager-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles-1) | Removes the applications that can be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [removeAllowedInstallBundles](arkts-mdm-bundlemanager-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles-2) | Removes the applications that can be installed by the current or specified user. This API uses a promise to return the result. |
| [removeDisallowedInstallBundles](arkts-mdm-bundlemanager-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles) | Removes the applications that cannot be installed by the current user. This API uses an asynchronous callback to return the result. |
| [removeDisallowedInstallBundles](arkts-mdm-bundlemanager-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles-1) | Removes the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [removeDisallowedInstallBundles](arkts-mdm-bundlemanager-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles-2) | Removes the applications that cannot be installed by the current or specified user. This API uses a promise to return the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles) | Removes the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback to return the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles-1) | Removes the applications that cannot be uninstalled by the user specified by **userId**. This API uses an asynchronous callback to return the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles-2) | Removes the applications that cannot be uninstalled by the current or specified user. This API uses a promise to return the result. |
| [uninstall](arkts-mdm-bundlemanager-uninstall-f-sys.md#uninstall) | Uninstalls an application of the current user without retaining the bundle data. This API uses an asynchronous callback to return the result. |
| [uninstall](arkts-mdm-bundlemanager-uninstall-f-sys.md#uninstall-1) | Uninstalls an application of the specified user without retaining the bundle data This API uses an asynchronous callback to return the result. |
| [uninstall](arkts-mdm-bundlemanager-uninstall-f-sys.md#uninstall-2) | Uninstalls an application of the current user. The **isKeepData** parameter specifies whether to retain the bundle data. This API uses an asynchronous callback to return the result. |
| [uninstall](arkts-mdm-bundlemanager-uninstall-f-sys.md#uninstall-3) | Uninstalls an application of the specified user. The **isKeepData** parameter specifies whether to retain the bundle data. This API uses an asynchronous callback to return the result. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInfo](arkts-mdm-bundlemanager-applicationinfo-i.md) | Defines the application information. |
| [BundleInfo](arkts-mdm-bundlemanager-bundleinfo-i.md) | Describes the application bundle information. |
| [BundleStorageStats](arkts-mdm-bundlemanager-bundlestoragestats-i.md) | Statistics of the bundle. |
| [InstallParam](arkts-mdm-bundlemanager-installparam-i.md) | Defines the parameters for application installation. |
| [Resource](arkts-mdm-bundlemanager-resource-i.md) | Describes application resource information, including the bundle name, module name, and resource ID. |
| [SignatureInfo](arkts-mdm-bundlemanager-signatureinfo-i.md) | Describes the signature information of the bundle. |

### Enums

| Name | Description |
| --- | --- |
| [AppDistributionType](arkts-mdm-bundlemanager-appdistributiontype-e.md) | Defines the distribution type of the application signing certificate. For details, please refer to the **appDistributionType** attribute of [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [BundleInfoGetFlag](arkts-mdm-bundlemanager-bundleinfogetflag-e.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |

