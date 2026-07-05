# innerBundleManager

本模块提供launcher应用使用的接口。 > **说明：** > > 本模块从API version 9开始不再支持。建议使用[launcherBundleManager](arkts-bundle-launcherbundlemanager.md#launcherBundleManager) > 及[bundleMonitor](arkts-bundle-bundlemonitor.md#bundleMonitor)替代。 > > 本模块为系统接口。

**起始版本：** 8

**废弃版本：** 9

**替代接口：** @ohos.bundle.launcherBundleManager:launcherBundleManager

**系统能力：** SystemCapability.BundleManager.BundleFramework

**系统接口：** 此接口为系统接口。

## 导入模块

```TypeScript
import { BundleStatusCallback } from '@kit.AbilityKit';
```

## 汇总

### 函数

| 名称 | 描述 |
| --- | --- |
| <!--DelRow-->[getAllLauncherAbilityInfos](arkts-innerbundlemanager-getalllauncherabilityinfos-f-sys.md#getAllLauncherAbilityInfos-1) | 获取所有的LauncherAbilityInfos，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getAllLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。 |
| <!--DelRow-->[getAllLauncherAbilityInfos](arkts-innerbundlemanager-getalllauncherabilityinfos-f-sys.md#getAllLauncherAbilityInfos-2) | 获取LauncherAbilityInfos，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getAllLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getAllLauncherAbilityInfo(userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。 |
| <!--DelRow-->[getLauncherAbilityInfos](arkts-innerbundlemanager-getlauncherabilityinfos-f-sys.md#getLauncherAbilityInfos-1) | 根据给定的Bundle名称获取LauncherAbilityInfos，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。 |
| <!--DelRow-->[getLauncherAbilityInfos](arkts-innerbundlemanager-getlauncherabilityinfos-f-sys.md#getLauncherAbilityInfos-2) | 根据给定的Bundle名称获取LauncherAbilityInfos，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getLauncherAbilityInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getLauncherAbilityInfo(bundleName: string, userId: int, callback: AsyncCallback<Array<LauncherAbilityInfo>>) > 替代。 |
| <!--DelRow-->[getShortcutInfos](arkts-innerbundlemanager-getshortcutinfos-f-sys.md#getShortcutInfos-1) | 根据给定的Bundle名称获取快捷方式信息，使用callback异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getShortcutInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) > 替代。 |
| <!--DelRow-->[getShortcutInfos](arkts-innerbundlemanager-getshortcutinfos-f-sys.md#getShortcutInfos-2) | 根据给定的Bundle名称获取快捷方式信息，使用Promise异步回调。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [getShortcutInfo]@ohos.bundle.launcherBundleManager:launcherBundleManager.getShortcutInfo(bundleName :string, callback: AsyncCallback<Array<ShortcutInfo>>) > 替代。 |
| <!--DelRow-->[off](arkts-innerbundlemanager-off-f-sys.md#off-1) | 取消注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [off](arkts-bundlemonitor-off-f-sys.md#off-1) > 替代。 |
| <!--DelRow-->[off](arkts-innerbundlemanager-off-f-sys.md#off-2) | 取消注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [off](arkts-bundlemonitor-off-f-sys.md#off-1) > 替代。 |
| <!--DelRow-->[on](arkts-innerbundlemanager-on-f-sys.md#on-1) | 注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [on](arkts-bundlemonitor-on-f-sys.md#on-1) > 替代。 |
| <!--DelRow-->[on](arkts-innerbundlemanager-on-f-sys.md#on-2) | 注册Callback。 > **说明：** > > 从API version 8开始支持，从API version 9开始废弃，建议使用 > [on](arkts-bundlemonitor-on-f-sys.md#on-1) > 替代。 |

