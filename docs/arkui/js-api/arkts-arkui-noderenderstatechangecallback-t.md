# NodeRenderStateChangeCallback

```TypeScript
export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void
```

Defines the callback type for listening for the rendering state of a specific node in **UIObserver**.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-unnamed-export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void--><!--Device-unnamed-export declare type NodeRenderStateChangeCallback = (state: NodeRenderState, node?: FrameNode) => void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| state | NodeRenderState | Yes | Information about the gesture event that triggers the callback. |
| node | FrameNode | No | Component bound to the gesture event that triggers the listener; returns **null** ifthe component has been released. |

