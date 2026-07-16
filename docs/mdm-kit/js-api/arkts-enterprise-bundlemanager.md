# @ohos.enterprise.bundleManager

The **bundleManager** module provides APIs for bundle management, including adding, obtaining, and removing a list of
bundles that are allowed to install.

> **NOTE**
>
> The APIs of this module can be used only in the stage model.
>
> The APIs of this module can be called only by a device administrator application that is enabled. For details, see
> [MDM Kit Development](../../../../mdm/mdm-kit-guide.md).

**Since:** 10

**System capability:** SystemCapability.Customization.EnterpriseDeviceManager

## Modules to Import

```TypeScript
import { bundleManager } from '@kit.MDMKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [addAllowedInstallBundlesSync](arkts-mdm-addallowedinstallbundlessync-f.md#addallowedinstallbundlessync-1) | Adds the applications that can be installed by the current or specified user. The reinstallation of system appsafter uninstallation is not restricted by the API. However, the reinstallation of regular apps after uninstallationis restricted by the API. |
| [addDisallowedInstallBundlesSync](arkts-mdm-adddisallowedinstallbundlessync-f.md#adddisallowedinstallbundlessync-1) | Adds the applications that are not allowed to be installed by the current or specified user. The reinstallation ofsystem apps after uninstallation is not restricted by the API. However, the reinstallation of regular apps afteruninstallation is restricted by the API. |
| [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1) | Adds the applications that are not allowed to be uninstalled by the current or specified user. |
| [addInstallationAllowedAppDistributionTypes](arkts-mdm-addinstallationallowedappdistributiontypes-f.md#addinstallationallowedappdistributiontypes-1) | Adds the distribution type of the application that can be installed. Only applications of the distribution typethat is added to [AppDistributionType](arkts-mdm-appdistributiontype-e.md) can be installed on the currentdevice.For details about the distribution type of the application signing certificate, refer to the**appDistributionType** attribute in [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [getAllowedInstallBundlesSync](arkts-mdm-getallowedinstallbundlessync-f.md#getallowedinstallbundlessync-1) | Obtains the applications that can be installed by the current or specified user. |
| [getDisallowedInstallBundlesSync](arkts-mdm-getdisallowedinstallbundlessync-f.md#getdisallowedinstallbundlessync-1) | Obtains the applications that cannot be installed by the current or specified user. |
| [getDisallowedUninstallBundlesSync](arkts-mdm-getdisalloweduninstallbundlessync-f.md#getdisalloweduninstallbundlessync-1) | Obtains the bundles that cannot be uninstalled by the current or specified user. |
| [getInstallationAllowedAppDistributionTypes](arkts-mdm-getinstallationallowedappdistributiontypes-f.md#getinstallationallowedappdistributiontypes-1) | Obtains the distribution type of the signing certificate used by applications that can be installed. |
| [getInstalledBundleList](arkts-mdm-getinstalledbundlelist-f.md#getinstalledbundlelist-1) | Obtains the applications installed by a specified user on a device. This API uses a promise to return the result. |
| [getInstalledBundleList](arkts-mdm-getinstalledbundlelist-f.md#getinstalledbundlelist-2) | Obtains the list of applications installed by a specified user based on the specified **bundleInfoGetFlag**. ThisAPI uses a promise to return the result. |
| [getInstalledBundleStorageStats](arkts-mdm-getinstalledbundlestoragestats-f.md#getinstalledbundlestoragestats-1) | Get the storage statistics of installed bundles on the device. |
| [install](arkts-mdm-install-f.md#install-3) | Installs specified applications. This API uses a promise to return the result.This API can be used to install only applications of the **enterprise_mdm** (MDM application) or**enterprise_normal** (common enterprise application) distribution type. You can call the[getBundleInfoForSelf](../../apis-ability-kit/arkts-apis/arkts-ability-getbundleinfoforself-f.md#getbundleinfoforself-1) APIto query the [BundleInfo](../../apis-ability-kit/arkts-apis/arkts-ability-bundleinfo-i.md) of an application, where**BundleInfo.appInfo.appDistributionType** indicates the distribution type.&gt; **NOTE**&gt;&gt; This API is time-consuming. Subsequent calls to other synchronous APIs in the application main thread must wait&gt; for the asynchronous return of this API. |
| [installForResult](arkts-mdm-installforresult-f.md#installforresult-1) | Install an application. |
| [installMarketApps](arkts-mdm-installmarketapps-f.md#installmarketapps-1) | Downloads and installs an application from AppGallery.&gt; **NOTE**&gt;&gt; After this API is successfully called, an application download task is generated on the home screen. The task is&gt; the same as that created during download from AppGallery. Upon completion of the download and installation, the&gt; installation result is returned through the&gt; [EnterpriseAdminExtensionAbility.onMarketAppInstallResult](arkts-mdm-enterpriseadminextensionability-c.md#onmarketappinstallresult-1)&gt; callback.&lt;!--RP1--&gt;&lt;!--RP1End--&gt; |
| [removeAllowedInstallBundlesSync](arkts-mdm-removeallowedinstallbundlessync-f.md#removeallowedinstallbundlessync-1) | Removes the applications that can be installed by the current or specified user. |
| [removeDisallowedInstallBundlesSync](arkts-mdm-removedisallowedinstallbundlessync-f.md#removedisallowedinstallbundlessync-1) | Removes the applications that cannot be installed by the current or specified user. |
| [removeDisallowedUninstallBundlesSync](arkts-mdm-removedisalloweduninstallbundlessync-f.md#removedisalloweduninstallbundlessync-1) | Removes the applications that cannot be uninstalled by the current or specified user through the specified deviceadministrator application. |
| [removeInstallationAllowedAppDistributionTypes](arkts-mdm-removeinstallationallowedappdistributiontypes-f.md#removeinstallationallowedappdistributiontypes-1) | Removes the distribution type of an application. If only some distribution types in the array are removed, thecurrent device can install applications of the remaining distribution types in the array, but cannot installapplications of the distribution types not included in[AppDistributionType](arkts-mdm-appdistributiontype-e.md).For details about the distribution type of the application signing certificate, refer to the**appDistributionType** attribute in [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [uninstall](arkts-mdm-uninstall-f.md#uninstall-5) | Uninstalls an application of the current or specified user. The **isKeepData** parameter specifies whether toretain the bundle data. This API uses a promise to return the result.&gt; **NOTE**&gt;&gt; Error code **401** will be returned if this API is called to uninstall an application that is either a non-&gt; removable pre-installed application or one configured as non-uninstallable via the&gt; [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1)&gt; API. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [addAllowedInstallBundles](arkts-mdm-addallowedinstallbundles-f-sys.md#addallowedinstallbundles-1) | Adds the applications that can be installed by the current user. This API uses an asynchronous callback to returnthe result. |
| [addAllowedInstallBundles](arkts-mdm-addallowedinstallbundles-f-sys.md#addallowedinstallbundles-2) | Adds the applications that can be installed by the user specified by **userId**. This API uses an asynchronouscallback to return the result. |
| [addAllowedInstallBundles](arkts-mdm-addallowedinstallbundles-f-sys.md#addallowedinstallbundles-3) | Adds the applications that can be installed by the current or specified user. This API uses a promise to return theresult. |
| [addDisallowedInstallBundles](arkts-mdm-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles-1) | Adds the applications that cannot be installed by the current user. This API uses an asynchronous callback toreturn the result. |
| [addDisallowedInstallBundles](arkts-mdm-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles-2) | Adds the applications that cannot be installed by the user specified by **userId**. This API uses an asynchronouscallback to return the result. |
| [addDisallowedInstallBundles](arkts-mdm-adddisallowedinstallbundles-f-sys.md#adddisallowedinstallbundles-3) | Adds the applications that are not allowed to be installed by the current or specified user. This API uses apromise to return the result. |
| [addDisallowedUninstallBundles](arkts-mdm-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles-1) | Adds the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback toreturn the result. |
| [addDisallowedUninstallBundles](arkts-mdm-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles-2) | Adds the applications that cannot be uninstalled by the user specified by **userId**. This API uses an asynchronouscallback to return the result. |
| [addDisallowedUninstallBundles](arkts-mdm-adddisalloweduninstallbundles-f-sys.md#adddisalloweduninstallbundles-3) | Adds the applications that cannot be uninstalled by the current or specified user. This API uses a promise toreturn the result. |
| [getAllowedInstallBundles](arkts-mdm-getallowedinstallbundles-f-sys.md#getallowedinstallbundles-1) | Obtains the applications that can be installed by the current user. This API uses an asynchronous callback toreturn the result. |
| [getAllowedInstallBundles](arkts-mdm-getallowedinstallbundles-f-sys.md#getallowedinstallbundles-2) | Obtains the applications that can be installed by the user specified by **userId**. This API uses an asynchronouscallback to return the result. |
| [getAllowedInstallBundles](arkts-mdm-getallowedinstallbundles-f-sys.md#getallowedinstallbundles-3) | Obtains the applications that can be installed by the current or specified user. This API uses a promise to returnthe result. |
| [getDisallowedInstallBundles](arkts-mdm-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles-1) | Obtains the applications that cannot be installed by the current user. This API uses an asynchronous callback toreturn the result. |
| [getDisallowedInstallBundles](arkts-mdm-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles-2) | Obtains the applications that cannot be installed by the user specified by **userId**. This API uses anasynchronous callback to return the result. |
| [getDisallowedInstallBundles](arkts-mdm-getdisallowedinstallbundles-f-sys.md#getdisallowedinstallbundles-3) | Obtains the applications that cannot be installed by the current or specified user. This API uses a promise toreturn the result. |
| [getDisallowedUninstallBundles](arkts-mdm-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles-1) | Obtains the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback toreturn the result. |
| [getDisallowedUninstallBundles](arkts-mdm-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles-2) | Obtains the applications that cannot be uninstalled by the user specified by **userId**. This API uses anasynchronous callback to return the result. |
| [getDisallowedUninstallBundles](arkts-mdm-getdisalloweduninstallbundles-f-sys.md#getdisalloweduninstallbundles-3) | Obtains the applications that cannot be uninstalled by the current or specified user. This API uses a promise toreturn the result. |
| [install](arkts-mdm-install-f-sys.md#install-1) | Installs specified applications. This API uses an asynchronous callback to return the result. |
| [install](arkts-mdm-install-f-sys.md#install-2) | Installs applications with specified parameters. This API uses an asynchronous callback to return the result. |
| [removeAllowedInstallBundles](arkts-mdm-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles-1) | Removes the applications that can be installed by the current user. This API uses an asynchronous callback toreturn the result. |
| [removeAllowedInstallBundles](arkts-mdm-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles-2) | Removes the applications that can be installed by the user specified by **userId**. This API uses an asynchronouscallback to return the result. |
| [removeAllowedInstallBundles](arkts-mdm-removeallowedinstallbundles-f-sys.md#removeallowedinstallbundles-3) | Removes the applications that can be installed by the current or specified user. This API uses a promise to returnthe result. |
| [removeDisallowedInstallBundles](arkts-mdm-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles-1) | Removes the applications that cannot be installed by the current user. This API uses an asynchronous callback toreturn the result. |
| [removeDisallowedInstallBundles](arkts-mdm-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles-2) | Removes the applications that cannot be installed by the user specified by **userId**. This API uses anasynchronous callback to return the result. |
| [removeDisallowedInstallBundles](arkts-mdm-removedisallowedinstallbundles-f-sys.md#removedisallowedinstallbundles-3) | Removes the applications that cannot be installed by the current or specified user. This API uses a promise toreturn the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles-1) | Removes the applications that cannot be uninstalled by the current user. This API uses an asynchronous callback toreturn the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles-2) | Removes the applications that cannot be uninstalled by the user specified by **userId**. This API uses anasynchronous callback to return the result. |
| [removeDisallowedUninstallBundles](arkts-mdm-removedisalloweduninstallbundles-f-sys.md#removedisalloweduninstallbundles-3) | Removes the applications that cannot be uninstalled by the current or specified user. This API uses a promise toreturn the result. |
| [uninstall](arkts-mdm-uninstall-f-sys.md#uninstall-1) | Uninstalls an application of the current user without retaining the bundle data. This API uses an asynchronouscallback to return the result.&gt; **NOTE**&gt;&gt; Error code **401** will be returned if this API is called to uninstall an application that is either a non-&gt; removable pre-installed application or one configured as non-uninstallable via the&gt; [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1)&gt; API. |
| [uninstall](arkts-mdm-uninstall-f-sys.md#uninstall-2) | Uninstalls an application of the specified user without retaining the bundle data This API uses an asynchronouscallback to return the result.&gt; **NOTE**&gt;&gt; Error code **401** will be returned if this API is called to uninstall an application that is either a non-&gt; removable pre-installed application or one configured as non-uninstallable via the&gt; [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1)&gt; API. |
| [uninstall](arkts-mdm-uninstall-f-sys.md#uninstall-3) | Uninstalls an application of the current user. The **isKeepData** parameter specifies whether to retain the bundledata. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; Error code **401** will be returned if this API is called to uninstall an application that is either a non-&gt; removable pre-installed application or one configured as non-uninstallable via the&gt; [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1)&gt; API. |
| [uninstall](arkts-mdm-uninstall-f-sys.md#uninstall-4) | Uninstalls an application of the specified user. The **isKeepData** parameter specifies whether to retain thebundle data. This API uses an asynchronous callback to return the result.&gt; **NOTE**&gt;&gt; Error code **401** will be returned if this API is called to uninstall an application that is either a non-&gt; removable pre-installed application or one configured as non-uninstallable via the&gt; [addDisallowedUninstallBundlesSync](arkts-mdm-adddisalloweduninstallbundlessync-f.md#adddisalloweduninstallbundlessync-1)&gt; API. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInfo](arkts-mdm-applicationinfo-i.md) | Defines the application information. |
| [BundleInfo](arkts-mdm-bundleinfo-i.md) | Describes the application bundle information. |
| [BundleStorageStats](arkts-mdm-bundlestoragestats-i.md) | Statistics of the bundle. |
| [InstallParam](arkts-mdm-installparam-i.md) | Defines the parameters for application installation. |
| [Resource](arkts-mdm-resource-i.md) | Describes application resource information, including the bundle name, module name, and resource ID. |
| [SignatureInfo](arkts-mdm-signatureinfo-i.md) | Describes the signature information of the bundle. |

### Enums

| Name | Description |
| --- | --- |
| [AppDistributionType](arkts-mdm-appdistributiontype-e.md) | Defines the distribution type of the application signing certificate. For details, please refer to the**appDistributionType** attribute of [ApplicationInfo](../../apis-ability-kit/arkts-apis/arkts-ability-applicationinfo-i.md). |
| [BundleInfoGetFlag](arkts-mdm-bundleinfogetflag-e.md) | Enumerates the bundle flags, which indicate the type of bundle information to obtain. |

