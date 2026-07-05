# @ohos.app.ability.quickFixManager

quickFixManager模块提供快速修复的能力，快速修复是系统提供给开发者的一种技术手段，支持开发者以远快于（小时级、分钟级）应用升级的方式进行缺陷修复。

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.QuickFix

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { quickFixManager } from '@kit.AbilityKit';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| <!--DelRow-->[applyQuickFix](arkts-quickfixmanager-applyquickfix-f-sys.md#applyQuickFix-1) | 快速修复的补丁安装接口。使用callback异步回调。 |
| <!--DelRow-->[applyQuickFix](arkts-quickfixmanager-applyquickfix-f-sys.md#applyQuickFix-2) | 快速修复的补丁安装接口。使用Promise异步回调。 |
| <!--DelRow-->[getApplicationQuickFixInfo](arkts-quickfixmanager-getapplicationquickfixinfo-f-sys.md#getApplicationQuickFixInfo-1) | 获取应用的快速修复信息。使用callback异步回调。 |
| <!--DelRow-->[getApplicationQuickFixInfo](arkts-quickfixmanager-getapplicationquickfixinfo-f-sys.md#getApplicationQuickFixInfo-2) | 获取应用的快速修复信息。使用Promise异步回调。 |
| <!--DelRow-->[revokeQuickFix](arkts-quickfixmanager-revokequickfix-f-sys.md#revokeQuickFix-1) | 撤销快速修复的接口，使用callback方式返回结果。 |
| <!--DelRow-->[revokeQuickFix](arkts-quickfixmanager-revokequickfix-f-sys.md#revokeQuickFix-2) | 撤销快速修复的接口。使用Promise异步回调。 |

### Interfaces

| Name | Description |
| --- | --- |
| <!--DelRow-->[ApplicationQuickFixInfo](arkts-quickfixmanager-applicationquickfixinfo-i-sys.md) | 应用级别的快速修复信息。 |
| <!--DelRow-->[HapModuleQuickFixInfo](arkts-quickfixmanager-hapmodulequickfixinfo-i-sys.md) | hap级别的快速修复信息。 |

