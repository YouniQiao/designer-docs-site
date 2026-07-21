# MediaQuery

class MediaQuery

**Since:** 10

<!--Device-unnamed-export class MediaQuery--><!--Device-unnamed-export class MediaQuery-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { OverlayManager, FrameCallback, ResolvedUIContext, NodeRenderStateChangeCallback, MediaQuery, OverlayManagerOptions, TextMenuController, UIObserver, Font, KeyboardAvoidMode, MarqueeDynamicSyncScene, PromptAction, NodeRenderState, UIContext, TextSelectionClearPolicy, SwiperDynamicSyncScene, Router, MarqueeDynamicSyncSceneType, DialogPresenter, Magnifier, ContextMenuController, UIInspector, CursorController, SwiperDynamicSyncSceneType, AtomicServiceBar, PageInfo, TargetInfo, ComponentUtils, DragController, MeasureUtils, NodeIdentity } from '@kit.ArkUI';
```

<a id="matchmediasync"></a>
## matchMediaSync

```TypeScript
matchMediaSync(condition: string): mediaQuery.MediaQueryListener
```

Sets the media query criteria and returns the corresponding listening handle

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-MediaQuery-matchMediaSync(condition: string): mediaQuery.MediaQueryListener--><!--Device-MediaQuery-matchMediaSync(condition: string): mediaQuery.MediaQueryListener-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | string | Yes | media conditions |

**Return value:**

| Type | Description |
| --- | --- |
| mediaQuery.MediaQueryListener | the corresponding listening handle |

