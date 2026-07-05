# folder_stack

Defines FolderStack Component instance.

## folder_stack

```TypeScript
folder_stack(options?: FolderStackOptions)
```

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | FolderStackOptions | No |  |

## Summary

### Classes

| Name | Description |
| --- | --- |
| [FolderStackAttribute](arkts-folderstackattribute-c.md) | 除支持[通用事件]{@link common}外，还支持以下事件： |

### Interfaces

| Name | Description |
| --- | --- |
| [FolderStackInterface](arkts-folderstackinterface-i.md) | FolderStack继承于[Stack]{@link stack}(层叠布局)控件，新增了<!--RP1-->折叠屏悬停<!--RP1End-->能力，通过在FolderStack的配置项 [FolderStackOptions]{@link FolderStackOptions}的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。 > **说明：** > 该组件的悬停态能力针对<!--RP2-->双折叠<!--RP2End-->设计，只在双折叠设备生效。 > > 当该组件的父组件为[if/else：条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)节点时，折叠屏悬停能力将会失效。 |
| [FolderStackOptions](arkts-folderstackoptions-i.md) | > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |
| [HoverEventParam](arkts-hovereventparam-i.md) |  |
| [OnFoldStatusChangeInfo](arkts-onfoldstatuschangeinfo-i.md) | 当折叠状态改变的时候回调，仅在横屏状态下生效。 > **说明：** > > 为规范匿名对象的定义，API 18版本修改了此处的元素定义。其中，保留了历史匿名对象的起始版本信息，会出现外层元素@since版本号高于内层元素版本号的情况，但这不影响接口的使用。 |

### Types

| Name | Description |
| --- | --- |
| [OnFoldStatusChangeCallback](arkts-onfoldstatuschangecallback-t.md) | 当前设备的折叠状态。 |
| [OnHoverStatusChangeCallback](arkts-onhoverstatuschangecallback-t.md) | 当前设备的悬停状态改变时触发的回调。 |
| [WindowStatusType](arkts-windowstatustype-t.md) | 窗口模式枚举。 |

### Constants

| Name | Description |
| --- | --- |
| [FolderStack](arkts-folder-stack-con.md#FolderStack) | FolderStack继承于[Stack]{@link stack}(层叠布局)控件，新增了<!--RP1-->折叠屏悬停<!--RP1End-->能力，通过在FolderStack的配置项 [FolderStackOptions]{@link FolderStackOptions}的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。 > **说明：** > 该组件的悬停态能力针对<!--RP2-->双折叠<!--RP2End-->设计，只在双折叠设备生效。 > > 当该组件的父组件为[if/else：条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)节点时，折叠屏悬停能力将会失效。 ###### 子组件 可以包含多个子组件。 |
| [FolderStackInstance](arkts-folder-stack-con.md#FolderStackInstance) | Defines FolderStack Component instance. |

