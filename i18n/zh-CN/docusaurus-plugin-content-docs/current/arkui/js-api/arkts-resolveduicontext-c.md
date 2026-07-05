# ResolvedUIContext

ResolvedUIContext实例对象。 > **说明：** > > - 示例效果请以真机运行为准，当前DevEco Studio预览器不支持。 > > - ResolvedUIContext继承自[UIContext]@ohos.arkui.UIContext，该类对象包含[UIContext]@ohos.arkui.UIContext实例和 > [UIContext]@ohos.arkui.UIContext的解析策略。

**继承实现关系：** ResolvedUIContext继承自：UIContext。

**起始版本：** 22

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## strategy

```TypeScript
strategy: ResolveStrategy
```

[UIContext]@ohos.arkui.UIContext的解析策略。

**类型：** ResolveStrategy

**起始版本：** 22

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

