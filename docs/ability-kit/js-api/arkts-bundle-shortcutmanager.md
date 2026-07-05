# @ohos.bundle.shortcutManager

本模块提供应用对于[快捷方式](docroot://quick-start/typical-scenario-configuration.md)的管理能力，包括设置快捷方式是否显示等。

**Since:** 12

**System capability:** SystemCapability.BundleManager.BundleFramework.Launcher

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { shortcutManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[addDesktopShortcutInfo](arkts-shortcutmanager-adddesktopshortcutinfo-f-sys.md#addDesktopShortcutInfo-1) | 增加指定用户的快捷方式信息。使用Promise异步回调。 |
| <!--DelRow-->[addDynamicShortcutInfos](arkts-shortcutmanager-adddynamicshortcutinfos-f-sys.md#addDynamicShortcutInfos-1) | 添加指定用户的动态快捷方式。 |
| <!--DelRow-->[deleteDesktopShortcutInfo](arkts-shortcutmanager-deletedesktopshortcutinfo-f-sys.md#deleteDesktopShortcutInfo-1) | 删除指定用户的快捷方式信息。使用Promise异步回调。 |
| <!--DelRow-->[deleteDynamicShortcutInfos](arkts-shortcutmanager-deletedynamicshortcutinfos-f-sys.md#deleteDynamicShortcutInfos-1) | 删除指定的动态快捷方式。 |
| <!--DelRow-->[getAllDesktopShortcutInfo](arkts-shortcutmanager-getalldesktopshortcutinfo-f-sys.md#getAllDesktopShortcutInfo-1) | 查询指定用户的所有快捷方式信息。 |
| [getAllShortcutInfoForSelf](arkts-shortcutmanager-getallshortcutinfoforself-f.md#getAllShortcutInfoForSelf-1) | 查询当前应用[配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的所有快捷方式信息。使用Promise异步回调。 |
| <!--DelRow-->[getShortcutInfoByAbility](arkts-shortcutmanager-getshortcutinfobyability-f-sys.md#getShortcutInfoByAbility-1) | 查询指定用户下指定UIAbility的快捷方式信息。 |
| [isShortcutSupported](arkts-shortcutmanager-isshortcutsupported-f.md#isShortcutSupported-1) | 查询当前设备是否支持快捷方式。 |
| [setShortcutVisibleForSelf](arkts-shortcutmanager-setshortcutvisibleforself-f.md#setShortcutVisibleForSelf-1) | 设置当前应用指定的快捷方式是否显示。使用Promise异步回调。 |
| <!--DelRow-->[setShortcutsEnabled](arkts-shortcutmanager-setshortcutsenabled-f-sys.md#setShortcutsEnabled-1) | 设置启用或禁用传入的静态快捷方式。使用Promise异步回调。 |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[ParameterItem](arkts-shortcutmanager-parameteritem-t-sys.md) | 快捷方式配置信息中的自定义数据。 |
| <!--DelRow-->[ShortcutInfo](arkts-shortcutmanager-shortcutinfo-t-sys.md) | 应用[module.json5配置文件](docroot://quick-start/module-configuration-file.md#shortcuts标签)中定义的快捷方式信息。 |
| <!--DelRow-->[ShortcutWant](arkts-shortcutmanager-shortcutwant-t-sys.md) | 快捷方式内定义的目标[wants](docroot://quick-start/module-configuration-file.md#wants标签)信息集合。 |

