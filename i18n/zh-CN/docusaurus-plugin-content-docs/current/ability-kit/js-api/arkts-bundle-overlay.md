# @ohos.bundle.overlay

本模块提供overlay特征应用的[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息查询以及禁用使能的能力。 overlay特征应用指应用中包含有overlay资源包，overlay资源包详见 [overlay机制](docroot://quick-start/resource-categories-and-access.md#overlay机制)。 > **说明：** > > 本模块接口仅适用于stage模型，且仅适用于[静态overlay](docroot://quick-start/resource-categories-and-access.md#静态overlay配置方式)。

**起始版本：** 10

**系统能力：** SystemCapability.BundleManager.BundleFramework.Overlay

## 导入模块

```TypeScript
import { overlay } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| [getOverlayModuleInfo](arkts-overlay-getoverlaymoduleinfo-f.md#getOverlayModuleInfo-1) | 获取当前应用中overlay特征module的OverlayModuleInfo信息。使用callback异步回调。 |
| [getOverlayModuleInfo](arkts-overlay-getoverlaymoduleinfo-f.md#getOverlayModuleInfo-2) | 获取当前应用中overlay特征module的OverlayModuleInfo信息。使用Promise异步回调。 |
| <!--DelRow-->[getOverlayModuleInfoByBundleName](arkts-overlay-getoverlaymoduleinfobybundlename-f-sys.md#getOverlayModuleInfoByBundleName-1) | 获取指定应用中所有module的OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。 |
| <!--DelRow-->[getOverlayModuleInfoByBundleName](arkts-overlay-getoverlaymoduleinfobybundlename-f-sys.md#getOverlayModuleInfoByBundleName-2) | 获取指定应用中指定module的OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。 |
| <!--DelRow-->[getOverlayModuleInfoByBundleName](arkts-overlay-getoverlaymoduleinfobybundlename-f-sys.md#getOverlayModuleInfoByBundleName-3) | 获取指定应用中指定module的OverlayModuleInfo信息。使用promise异步回调。 指定应用是调用方自身时不需要权限。 |
| [getTargetOverlayModuleInfos](arkts-overlay-gettargetoverlaymoduleinfos-f.md#getTargetOverlayModuleInfos-1) | 获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标 module。使用callback异步回调。 |
| [getTargetOverlayModuleInfos](arkts-overlay-gettargetoverlaymoduleinfos-f.md#getTargetOverlayModuleInfos-2) | 获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标 module。使用Promise异步回调。 |
| <!--DelRow-->[getTargetOverlayModuleInfosByBundleName](arkts-overlay-gettargetoverlaymoduleinfosbybundlename-f-sys.md#getTargetOverlayModuleInfosByBundleName-1) | 获取指定应用中所有module关联的所有OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。 |
| <!--DelRow-->[getTargetOverlayModuleInfosByBundleName](arkts-overlay-gettargetoverlaymoduleinfosbybundlename-f-sys.md#getTargetOverlayModuleInfosByBundleName-2) | 获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用callback异步回调。 指定应用是调用方自身时不需要权限。 |
| <!--DelRow-->[getTargetOverlayModuleInfosByBundleName](arkts-overlay-gettargetoverlaymoduleinfosbybundlename-f-sys.md#getTargetOverlayModuleInfosByBundleName-3) | 获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用promise异步回调。 指定应用是调用方自身时不需要权限。 |
| [setOverlayEnabled](arkts-overlay-setoverlayenabled-f.md#setOverlayEnabled-1) | 设置当前应用中overlay module的禁用使能状态。使用callback异步回调。 |
| [setOverlayEnabled](arkts-overlay-setoverlayenabled-f.md#setOverlayEnabled-2) | 设置当前应用中overlay特征module的禁用使能状态。使用Promise异步回调。 |
| <!--DelRow-->[setOverlayEnabledByBundleName](arkts-overlay-setoverlayenabledbybundlename-f-sys.md#setOverlayEnabledByBundleName-1) | 设置指定应用的overlay module的禁用使能状态。使用callback异步回调。 指定应用是调用方自身时不需要权限。 |
| <!--DelRow-->[setOverlayEnabledByBundleName](arkts-overlay-setoverlayenabledbybundlename-f-sys.md#setOverlayEnabledByBundleName-2) | 设置指定应用的overlay module的禁用使能状态。使用Promise异步回调。 指定应用是调用方自身时不需要权限。 |

### 类型

| 名称 | 描述 |
| --- | --- |
| [OverlayModuleInfo](arkts-overlay-overlaymoduleinfo-t.md) | OverlayModuleInfo信息。 |
| [OverlayModuleInfo](arkts-overlay-overlaymoduleinfo-t.md) | overlayHap的配置文件信息 |

