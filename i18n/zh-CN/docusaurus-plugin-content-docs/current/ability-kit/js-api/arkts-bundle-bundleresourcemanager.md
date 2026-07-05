# @ohos.bundle.bundleResourceManager

本模块提供应用资源数据查询能力，支持[BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo}和 [LauncherAbilityResourceInfo]{@link ./bundleManager/LauncherAbilityResourceInfo:LauncherAbilityResourceInfo}等信息的查询。 > **说明：** > > 本模块从API version 12 开始支持查询被禁用应用和设备上已安装应用(不区用户)的图标和名称资源。 > > 本模块为系统接口。

**起始版本：** 11

**系统能力：** SystemCapability.BundleManager.BundleFramework.Resource

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { bundleResourceManager } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getAllBundleResourceInfo](arkts-bundleresourcemanager-getallbundleresourceinfo-f-sys.md#getAllBundleResourceInfo-1) | 根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllBundleResourceInfo](arkts-bundleresourcemanager-getallbundleresourceinfo-f-sys.md#getAllBundleResourceInfo-2) | 根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用Promise异步回调。 |
| <!--DelRow-->[getAllLauncherAbilityResourceInfo](arkts-bundleresourcemanager-getalllauncherabilityresourceinfo-f-sys.md#getAllLauncherAbilityResourceInfo-1) | 根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用callback异步回调。 |
| <!--DelRow-->[getAllLauncherAbilityResourceInfo](arkts-bundleresourcemanager-getalllauncherabilityresourceinfo-f-sys.md#getAllLauncherAbilityResourceInfo-2) | 根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用Promise异步回调。 |
| <!--DelRow-->[getAllUninstalledBundleResourceInfo](arkts-bundleresourcemanager-getalluninstalledbundleresourceinfo-f-sys.md#getAllUninstalledBundleResourceInfo-1) | 根据给定的resourceFlags获取所有已卸载且保留数据的应用的BundleResourceInfo。使用Promise异步回调。 |
| <!--DelRow-->[getBundleResourceInfo](arkts-bundleresourcemanager-getbundleresourceinfo-f-sys.md#getBundleResourceInfo-1) | 以同步方法根据给定的bundleName和resourceFlags获取当前应用的BundleResourceInfo。 |
| <!--DelRow-->[getBundleResourceInfo](arkts-bundleresourcemanager-getbundleresourceinfo-f-sys.md#getBundleResourceInfo-2) | 以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的BundleResourceInfo。 |
| <!--DelRow-->[getExtensionAbilityResourceInfo](arkts-bundleresourcemanager-getextensionabilityresourceinfo-f-sys.md#getExtensionAbilityResourceInfo-1) | 根据应用包名、扩展组件类型、资源信息标志、应用分身ID获取应用的扩展组件资源。使用同步方式返回。 |
| <!--DelRow-->[getLauncherAbilityResourceInfo](arkts-bundleresourcemanager-getlauncherabilityresourceinfo-f-sys.md#getLauncherAbilityResourceInfo-1) | 以同步方法根据给定的bundleName和resourceFlags获取当前应用的LauncherAbilityResourceInfo。 |
| <!--DelRow-->[getLauncherAbilityResourceInfo](arkts-bundleresourcemanager-getlauncherabilityresourceinfo-f-sys.md#getLauncherAbilityResourceInfo-2) | 以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的LauncherAbilityResourceInfo。 |
| <!--DelRow-->[getLauncherAbilityResourceInfoList](arkts-bundleresourcemanager-getlauncherabilityresourceinfolist-f-sys.md#getLauncherAbilityResourceInfoList-1) | 根据传入的optionsList获取列表中每个BundleOptions元素对应的应用的LauncherAbilityResourceInfo。使用Promise异步回调。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[BundleResourceInfo](arkts-bundleresourcemanager-bundleresourceinfo-t-sys.md) | 应用配置的图标和名称信息。 |
| <!--DelRow-->[LauncherAbilityResourceInfo](arkts-bundleresourcemanager-launcherabilityresourceinfo-t-sys.md) | 应用配置的入口图标和名称信息。 |

### 枚举

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[ResourceFlag](arkts-bundleresourcemanager-resourceflag-e-sys.md) | 资源信息标志，指示需要获取的资源信息的内容。 |

