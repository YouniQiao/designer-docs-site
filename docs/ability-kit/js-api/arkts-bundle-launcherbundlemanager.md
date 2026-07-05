# @ohos.bundle.launcherBundleManager

本模块支持launcher应用（桌面有图标的应用）所需的查询能力，支持 [LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}信息的查询。

**Since:** 9

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

## Modules to Import

```TypeScript
import { launcherBundleManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[getAllLauncherAbilityInfo](arkts-launcherbundlemanager-getalllauncherabilityinfo-f-sys.md#getAllLauncherAbilityInfo-1) | 查询指定用户下所有应用的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用callback异步回调。 |
| <!--DelRow-->[getAllLauncherAbilityInfo](arkts-launcherbundlemanager-getalllauncherabilityinfo-f-sys.md#getAllLauncherAbilityInfo-2) | 查询指定用户下所有应用的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用Promise异步回调。 |
| <!--DelRow-->[getLauncherAbilityInfo](arkts-launcherbundlemanager-getlauncherabilityinfo-f-sys.md#getLauncherAbilityInfo-1) | 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用callback异步 回调。 |
| <!--DelRow-->[getLauncherAbilityInfo](arkts-launcherbundlemanager-getlauncherabilityinfo-f-sys.md#getLauncherAbilityInfo-2) | 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。使用Promise异步回 调。 |
| [getLauncherAbilityInfoSync](arkts-launcherbundlemanager-getlauncherabilityinfosync-f.md#getLauncherAbilityInfoSync-1) | 查询指定bundleName及用户的[LauncherAbilityInfo]{@link ./bundleManager/LauncherAbilityInfo:LauncherAbilityInfo}。 |
| <!--DelRow-->[getShortcutInfo](arkts-launcherbundlemanager-getshortcutinfo-f-sys.md#getShortcutInfo-1) | 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。使用callback异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getShortcutInfo](arkts-launcherbundlemanager-getshortcutinfo-f-sys.md#getShortcutInfo-2) | 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。使用Promise异步回调。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getShortcutInfoByAppIndex](arkts-launcherbundlemanager-getshortcutinfobyappindex-f-sys.md#getShortcutInfoByAppIndex-1) | 查询当前用户下指定分身应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}。 调用方获取自己的信息时不需要权限。 |
| <!--DelRow-->[getShortcutInfoSync](arkts-launcherbundlemanager-getshortcutinfosync-f-sys.md#getShortcutInfoSync-1) | 查询当前用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[getShortcutInfoSync](arkts-launcherbundlemanager-getshortcutinfosync-f-sys.md#getShortcutInfoSync-2) | 查询指定用户下指定应用的快捷方式信息[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}，只支持查询主应用的ShortcutInfo，查询分身应用请使用 [getShortcutInfoByAppIndex]{@link launcherBundleManager.getShortcutInfoByAppIndex}。 获取调用方自身的信息时不需要权限。 |
| <!--DelRow-->[startShortcut](arkts-launcherbundlemanager-startshortcut-f-sys.md#startShortcut-1) | 拉起指定[ShortcutInfo]{@link ./bundleManager/ShortcutInfo}中的ability。使用Promise异步回调。 |
| <!--DelRow-->[startShortcutWithReason](arkts-launcherbundlemanager-startshortcutwithreason-f-sys.md#startShortcutWithReason-1) | 根据指定的快捷方式信息，拉起对应的Ability，并携带快捷方式的启动原因。使用Promise异步回调。 被拉起方可以通过[LaunchParam]{@link @ohos.app.ability.AbilityConstant:AbilityConstant.LaunchParam}的launchReasonMessage字段获取到 启动原因，并根据启动原因进行业务逻辑处理。 |

### Types

| Name | Description |
| --- | --- |
| [LauncherAbilityInfo](arkts-launcherbundlemanager-launcherabilityinfo-t.md) | LauncherAbilityInfo信息。 |
| <!--DelRow-->[ParameterItem](arkts-launcherbundlemanager-parameteritem-t-sys.md) | 快捷方式配置信息中的自定义数据。 |
| <!--DelRow-->[ShortcutInfo](arkts-launcherbundlemanager-shortcutinfo-t-sys.md) | 应用[module.json5配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的快捷方式信息。 |
| <!--DelRow-->[ShortcutWant](arkts-launcherbundlemanager-shortcutwant-t-sys.md) | 快捷方式内定义的目标[wants](docroot://quick-start/module-configuration-file.md#wants标签)信息集合。 |

