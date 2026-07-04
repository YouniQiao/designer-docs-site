# GestureTriggerInfo

Defines the information provided when a specific gesture callback is triggered.

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@ohos.arkui.UIContext';
```

## current

```TypeScript
current: GestureRecognizer
```

Gesture recognizer object. Detailed gesture information can be obtained from this object. However, avoid retaining this object locally as it may become invalid after the node is released.

**Type:** GestureRecognizer

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## currentPhase

```TypeScript
currentPhase: GestureActionPhase
```

Phase of the gesture action callback.

**Type:** GestureActionPhase

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## event

```TypeScript
event: GestureEvent
```

Gesture event object.

**Type:** GestureEvent

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## node

```TypeScript
node?: FrameNode
```

Node that triggers the gesture. The default value is **null**, indicating that no specific node triggers the gesture.

**Type:** FrameNode

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

