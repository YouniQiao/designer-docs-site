# Constants

## FolderStack

```TypeScript
declare const FolderStack: FolderStackInterface
```

FolderStack继承于[Stack]stack(层叠布局)控件，新增了<!--RP1-->折叠屏悬停<!--RP1End-->能力，通过在FolderStack的配置项 [FolderStackOptions](arkts-folderstackoptions-i.md#FolderStackOptions)的upperItems数组上设置子组件id，使相应子组件自动避让折叠屏折痕区后移到上半屏。 > **说明：** > 该组件的悬停态能力针对<!--RP2-->双折叠<!--RP2End-->设计，只在双折叠设备生效。 > > 当该组件的父组件为[if/else：条件渲染](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md)节点时，折叠屏悬停能力将会失效。 ###### 子组件 可以包含多个子组件。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## FolderStackInstance

```TypeScript
declare const FolderStackInstance: FolderStackAttribute
```

Defines FolderStack Component instance.

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

