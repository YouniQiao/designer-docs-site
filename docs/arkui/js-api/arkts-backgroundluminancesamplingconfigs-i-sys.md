# BackgroundLuminanceSamplingConfigs

背景取色参数配置。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { OverlayManager,FrameCallback,ResolvedUIContext,NodeRenderStateChangeCallback,MediaQuery,OverlayManagerOptions,TextMenuController,UIObserver,Font,KeyboardAvoidMode,MarqueeDynamicSyncScene,PromptAction,NodeRenderState,UIContext,TextSelectionClearPolicy,SwiperDynamicSyncScene,Router,MarqueeDynamicSyncSceneType,DialogPresenter,Magnifier,ContextMenuController,UIInspector,CursorController,SwiperDynamicSyncSceneType,AtomicServiceBar,PageInfo,TargetInfo,ComponentUtils,DragController,MeasureUtils,NodeIdentity } from '@kit.ArkUI';
```

## samplingInterval

```TypeScript
samplingInterval?: number
```

取色间隔，单位为毫秒，最小值180ms。 默认值：500

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## darkThreshold

```TypeScript
darkThreshold?: number
```

深色亮度阈值：[0, 255]内的整数，设置的深色亮度阈值应小于浅色亮度阈值。 默认值：150

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## region

```TypeScript
region?: Edges<LengthMetrics>
```

相对组件的取色区域偏移，以组件自身的左上点为基准进行偏移计算。 默认使用组件自身区域

**Type:** Edges<LengthMetrics>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## brightThreshold

```TypeScript
brightThreshold?: number
```

浅色亮度阈值：[0, 255]内的整数，设置的深色亮度阈值应小于浅色亮度阈值。 默认值：220

**Type:** number

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

