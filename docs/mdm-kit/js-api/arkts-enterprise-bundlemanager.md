# @ohos.enterprise.bundleManager

本模块提供包管理能力，包括添加包安装允许名单、获取包安装允许名单、移除包安装允许名单等。 > **说明：** > > 本模块接口仅可在Stage模型下使用。 > > 本模块接口仅对设备管理应用开放，且调用接口前需激活设备管理应用，具体请参考[MDM Kit开发指南](docroot://mdm/mdm-kit-guide.md)。

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
| <!--DelRow-->[addAllowedInstallBundles](arkts-bundlemanager-addallowedinstallbundles-f-sys.md#addAllowedInstallBundles-1) | 添加应用至当前用户的应用程序包安装允许名单，添加至允许名单的应用允许在当前用户下安装，否则不允许安装，使用callback异步回调。 |
| <!--DelRow-->[addAllowedInstallBundles](arkts-bundlemanager-addallowedinstallbundles-f-sys.md#addAllowedInstallBundles-2) | 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在指定用户（通过userId指定）下安装，否则不允许安装，使用callback异步回调。 |
| <!--DelRow-->[addAllowedInstallBundles](arkts-bundlemanager-addallowedinstallbundles-f-sys.md#addAllowedInstallBundles-3) | 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，否则不允许安装。使用Promise异步回调。 |
| [addAllowedInstallBundlesSync](arkts-bundlemanager-addallowedinstallbundlessync-f.md#addAllowedInstallBundlesSync-1) | 添加应用至应用程序包安装允许名单，添加至允许名单的应用允许在当前/指定用户下安装，其它非允许名单应用不允许安装。系统应用卸载后重新安装不会受到接口限制；而普通应用在卸载后重新安装时，则会受到接口限制。 |
| <!--DelRow-->[addDisallowedInstallBundles](arkts-bundlemanager-adddisallowedinstallbundles-f-sys.md#addDisallowedInstallBundles-1) | 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前用户下安装，使用callback异步回调。 |
| <!--DelRow-->[addDisallowedInstallBundles](arkts-bundlemanager-adddisallowedinstallbundles-f-sys.md#addDisallowedInstallBundles-2) | 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下安装。使用callback异步回调。 |
| <!--DelRow-->[addDisallowedInstallBundles](arkts-bundlemanager-adddisallowedinstallbundles-f-sys.md#addDisallowedInstallBundles-3) | 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。使用Promise异步回调。 |
| [addDisallowedInstallBundlesSync](arkts-bundlemanager-adddisallowedinstallbundlessync-f.md#addDisallowedInstallBundlesSync-1) | 添加应用至应用程序包安装禁止名单，添加至禁止名单的应用不允许在当前/指定用户下安装。系统应用卸载后重新安装不会受到接口限制；而普通应用在卸载后重新安装时，则会受到接口限制。 |
| <!--DelRow-->[addDisallowedUninstallBundles](arkts-bundlemanager-adddisalloweduninstallbundles-f-sys.md#addDisallowedUninstallBundles-1) | 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前用户下卸载，使用callback异步回调。 |
| <!--DelRow-->[addDisallowedUninstallBundles](arkts-bundlemanager-adddisalloweduninstallbundles-f-sys.md#addDisallowedUninstallBundles-2) | 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在指定用户（通过userId指定）下卸载。使用callback异步回调。 |
| <!--DelRow-->[addDisallowedUninstallBundles](arkts-bundlemanager-adddisalloweduninstallbundles-f-sys.md#addDisallowedUninstallBundles-3) | 添加应用至应用程序包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。使用Promise异步回调。 |
| [addDisallowedUninstallBundlesSync](arkts-bundlemanager-adddisalloweduninstallbundlessync-f.md#addDisallowedUninstallBundlesSync-1) | 添加应用至包卸载禁止名单，添加至禁止名单的应用不允许在当前/指定用户下卸载。 |
| [addInstallationAllowedAppDistributionTypes](arkts-bundlemanager-addinstallationallowedappdistributiontypes-f.md#addInstallationAllowedAppDistributionTypes-1) | 添加可安装应用的分发类型。添加成功后，当前设备可以安装对应分发类型的应用，但无法安装[AppDistributionType]{@link bundleManager.AppDistributionType}中未添加的分发类型的应 用。 应用程序签名证书的分发类型详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性。 |
| <!--DelRow-->[getAllowedInstallBundles](arkts-bundlemanager-getallowedinstallbundles-f-sys.md#getAllowedInstallBundles-1) | 获取当前用户下的应用程序包安装允许名单，使用callback异步回调。 |
| <!--DelRow-->[getAllowedInstallBundles](arkts-bundlemanager-getallowedinstallbundles-f-sys.md#getAllowedInstallBundles-2) | 获取指定用户（通过userId指定）下的应用程序包安装允许名单，使用callback异步回调。 |
| <!--DelRow-->[getAllowedInstallBundles](arkts-bundlemanager-getallowedinstallbundles-f-sys.md#getAllowedInstallBundles-3) | 获取当前/指定用户下的应用程序包安装允许名单，使用Promise异步回调。 |
| [getAllowedInstallBundlesSync](arkts-bundlemanager-getallowedinstallbundlessync-f.md#getAllowedInstallBundlesSync-1) | 获取当前/指定用户下的应用程序包安装允许名单。 |
| <!--DelRow-->[getDisallowedInstallBundles](arkts-bundlemanager-getdisallowedinstallbundles-f-sys.md#getDisallowedInstallBundles-1) | 获取当前用户下的应用程序包安装禁止名单，使用callback异步回调。 |
| <!--DelRow-->[getDisallowedInstallBundles](arkts-bundlemanager-getdisallowedinstallbundles-f-sys.md#getDisallowedInstallBundles-2) | 获取指定用户（通过userId指定）下的应用程序包安装禁止名单，使用callback异步回调。 |
| <!--DelRow-->[getDisallowedInstallBundles](arkts-bundlemanager-getdisallowedinstallbundles-f-sys.md#getDisallowedInstallBundles-3) | 获取当前/指定用户下的应用程序包安装禁止名单，使用Promise异步回调。 |
| [getDisallowedInstallBundlesSync](arkts-bundlemanager-getdisallowedinstallbundlessync-f.md#getDisallowedInstallBundlesSync-1) | 获取当前/指定用户下的应用程序包安装禁止名单。 |
| <!--DelRow-->[getDisallowedUninstallBundles](arkts-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getDisallowedUninstallBundles-1) | 获取当前用户下的应用程序包卸载禁止名单，使用callback异步回调。 |
| <!--DelRow-->[getDisallowedUninstallBundles](arkts-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getDisallowedUninstallBundles-2) | 获取指定用户（通过userId指定）下的应用程序包卸载禁止名单，使用callback异步回调。 |
| <!--DelRow-->[getDisallowedUninstallBundles](arkts-bundlemanager-getdisalloweduninstallbundles-f-sys.md#getDisallowedUninstallBundles-3) | 获取当前/指定用户下应用程序包卸载禁止名单接口，使用Promise异步回调。 |
| [getDisallowedUninstallBundlesSync](arkts-bundlemanager-getdisalloweduninstallbundlessync-f.md#getDisallowedUninstallBundlesSync-1) | 获取当前/指定用户下包卸载禁止名单。 |
| [getInstallationAllowedAppDistributionTypes](arkts-bundlemanager-getinstallationallowedappdistributiontypes-f.md#getInstallationAllowedAppDistributionTypes-1) | 获取可安装的应用程序签名证书的分发类型。 |
| [getInstalledBundleList](arkts-bundlemanager-getinstalledbundlelist-f.md#getInstalledBundleList-1) | 获取设备指定用户下已安装应用列表。使用Promise异步回调。 |
| [getInstalledBundleList](arkts-bundlemanager-getinstalledbundlelist-f.md#getInstalledBundleList-2) | 根据给定的bundleInfoGetFlag获取设备指定用户下已安装应用列表。使用Promise异步回调。 |
| [getInstalledBundleStorageStats](arkts-bundlemanager-getinstalledbundlestoragestats-f.md#getInstalledBundleStorageStats-1) | 获取设备指定用户下已安装应用的存储占用信息。使用Promise异步回调。 > **说明：** > > 1.仅能获取已安装应用的存储占用信息。 > > 2.bundleNames参数为empty或全部传入未安装的应用包名，会抛出9200012错误码。 > > 3.bundleNames参数传递的包名部分应用已安装，部分应用未安装时，接口返回正常，已安装的应用返回实际的存储占用信息，未安装的应用存储占用信息为0。 > > 4.该接口支持跨用户查询，比如可以在100用户下，查询101用户下的某些应用的存储占用信息。 |
| [install](arkts-bundlemanager-install-f.md#install-1) | 安装指定路径下的应用包。使用Promise异步回调。</br>此接口只能安装分发类型为enterprise_mdm（MDM应用）和enterprise_normal（普通企业应用）类型的应用，可以通过 [getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}接口查询应用 自身的[BundleInfo]{@link ./bundleManager/BundleInfo}，其中BundleInfo.appInfo.appDistributionType为应用的分发类型。 > **说明：** > > 该接口比较耗时，当调用此接口后，后续如果在应用主线程调用其他同步接口时需要等待该接口异步返回。 |
| <!--DelRow-->[install](arkts-bundlemanager-install-f-sys.md#install-1) | 安装指定路径下的应用包。使用callback异步回调。 |
| <!--DelRow-->[install](arkts-bundlemanager-install-f-sys.md#install-2) | 安装指定路径下的指定安装参数的应用包。使用callback异步回调。 |
| [installForResult](arkts-bundlemanager-installforresult-f.md#installForResult-1) | 安装应用 |
| [installMarketApps](arkts-bundlemanager-installmarketapps-f.md#installMarketApps-1) | 下载并安装应用市场应用。 > **说明：** > > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调 > [EnterpriseAdminExtensionAbility.onMarketAppInstallResult]{@link > **说明** > 本接口调用成功后会在桌面上生成应用下载任务，此任务与从应用市场下载所创建任务一致。下载安装结束后，安装结果会通过回调[EnterpriseAdminExtensionAbility.onMarketAppInstallResult ]{@link |
| <!--DelRow-->[removeAllowedInstallBundles](arkts-bundlemanager-removeallowedinstallbundles-f-sys.md#removeAllowedInstallBundles-1) | 移除当前用户的应用程序包安装允许名单中的指定应用。安装允许名单存在时，不在允许名单中的应用不允许在当前用户下安装，使用callback异步回调。 |
| <!--DelRow-->[removeAllowedInstallBundles](arkts-bundlemanager-removeallowedinstallbundles-f-sys.md#removeAllowedInstallBundles-2) | 移除在应用程序包安装允许名单中的应用，在允许名单存在的情况下，不在允许名单中的应用不允许在指定用户（通过userId指定）下安装，使用callback异步回调。 |
| <!--DelRow-->[removeAllowedInstallBundles](arkts-bundlemanager-removeallowedinstallbundles-f-sys.md#removeAllowedInstallBundles-3) | 移除在应用程序包安装允许名单中的应用，在允许名单存在的情况下，不在允许名单中的应用不允许在当前/指定用户下安装。使用Promise异步回调。 |
| [removeAllowedInstallBundlesSync](arkts-bundlemanager-removeallowedinstallbundlessync-f.md#removeAllowedInstallBundlesSync-1) | 在应用程序包安装允许名单中移除应用，在允许名单存在的情况下，不在应用程序包安装允许名单中的应用不允许在当前/指定用户下安装。 |
| <!--DelRow-->[removeDisallowedInstallBundles](arkts-bundlemanager-removedisallowedinstallbundles-f-sys.md#removeDisallowedInstallBundles-1) | 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前用户下安装。使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedInstallBundles](arkts-bundlemanager-removedisallowedinstallbundles-f-sys.md#removeDisallowedInstallBundles-2) | 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在指定用户（通过userId指定）下安装，使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedInstallBundles](arkts-bundlemanager-removedisallowedinstallbundles-f-sys.md#removeDisallowedInstallBundles-3) | 移除在应用程序包安装禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前/指定用户下安装。使用Promise异步回调。 |
| [removeDisallowedInstallBundlesSync](arkts-bundlemanager-removedisallowedinstallbundlessync-f.md#removeDisallowedInstallBundlesSync-1) | 在应用程序包安装禁止名单中移除应用，在禁止名单存在的情况下，在应用程序包安装禁止名单中的应用不允许在当前/指定用户下安装。 |
| <!--DelRow-->[removeDisallowedUninstallBundles](arkts-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removeDisallowedUninstallBundles-1) | 移除在应用程序包卸载禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在当前用户下卸载，使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedUninstallBundles](arkts-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removeDisallowedUninstallBundles-2) | 移除在应用程序包卸载禁止名单中的应用，在禁止名单存在的情况下，在禁止名单中的应用不允许在指定用户（通过userId指定）下卸载。使用callback异步回调。 |
| <!--DelRow-->[removeDisallowedUninstallBundles](arkts-bundlemanager-removedisalloweduninstallbundles-f-sys.md#removeDisallowedUninstallBundles-3) | 移除在应用程序包卸载禁止名单中的应用。在禁止名单存在的情况下，在禁止名单中的应用不允许在当前/指定用户下卸载。使用Promise异步回调。 |
| [removeDisallowedUninstallBundlesSync](arkts-bundlemanager-removedisalloweduninstallbundlessync-f.md#removeDisallowedUninstallBundlesSync-1) | 在包卸载禁止名单中移除应用。在禁止名单存在的情况下，在包卸载禁止名单中的应用不允许在当前/指定用户下卸载。 |
| [removeInstallationAllowedAppDistributionTypes](arkts-bundlemanager-removeinstallationallowedappdistributiontypes-f.md#removeInstallationAllowedAppDistributionTypes-1) | 移除应用的分发类型。若只移除了数组中部分的分发类型，则当前设备可以安装数组中剩下的分发类型的应用，但无法安装 [AppDistributionType]{@link bundleManager.AppDistributionType}中未添加的分发类型的应用。 应用程序签名证书的分发类型详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性。 |
| [uninstall](arkts-bundlemanager-uninstall-f.md#uninstall-1) | 卸载当前/指定用户下的指定包接口，选择是否保留包数据（由isKeepData指定）。使用Promise异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync} > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。 |
| <!--DelRow-->[uninstall](arkts-bundlemanager-uninstall-f-sys.md#uninstall-1) | 卸载当前用户下的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync} > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。 |
| <!--DelRow-->[uninstall](arkts-bundlemanager-uninstall-f-sys.md#uninstall-2) | 卸载指定用户下（由参数userId指定）的指定应用程序包，且不保留应用程序包数据。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync} > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。 |
| <!--DelRow-->[uninstall](arkts-bundlemanager-uninstall-f-sys.md#uninstall-3) | 卸载当前用户下的指定应用程序包，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync} > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。 |
| <!--DelRow-->[uninstall](arkts-bundlemanager-uninstall-f-sys.md#uninstall-4) | 卸载指定用户下（由参数userId指定）的指定应用程序包接口，选择是否保留应用程序包数据（由isKeepData指定）。使用callback异步回调。 > **说明：** > > 当应用为不可卸载的预置应用或者通过 > [addDisallowedUninstallBundlesSync]{@link @ohos.enterprise.bundleManager:bundleManager.addDisallowedUninstallBundlesSync} > 接口设置了不允许卸载时，调用此接口卸载应用会返回401错误码。 |

### Interfaces

| Name | Description |
| --- | --- |
| [ApplicationInfo](arkts-bundlemanager-applicationinfo-i.md) | 应用程序信息。 |
| [BundleInfo](arkts-bundlemanager-bundleinfo-i.md) | 描述应用包信息。 |
| [BundleStorageStats](arkts-bundlemanager-bundlestoragestats-i.md) | 应用的存储占用信息。 |
| [InstallParam](arkts-bundlemanager-installparam-i.md) | 应用包安装需指定的参数信息。 |
| [Resource](arkts-bundlemanager-resource-i.md) | 资源相关信息，包括应用包名、应用模块名、资源id。 |
| [SignatureInfo](arkts-bundlemanager-signatureinfo-i.md) | 描述应用包的签名信息。 |

### Enums

| Name | Description |
| --- | --- |
| [AppDistributionType](arkts-bundlemanager-appdistributiontype-e.md) | 应用程序签名证书的分发类型。详细介绍请参见[ApplicationInfo]{@link ./bundleManager/ApplicationInfo:ApplicationInfo}的appDistributionType属性 。 |
| [BundleInfoGetFlag](arkts-bundlemanager-bundleinfogetflag-e.md) | 包信息获取标志，指示需要获取的包信息的内容。 |

