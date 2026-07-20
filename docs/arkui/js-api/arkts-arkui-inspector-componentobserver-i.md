# ComponentObserver

The ComponentObserver is used to listen for layout, draw and drawChildren events.

**Since:** 10

<!--Device-inspector-interface ComponentObserver--><!--Device-inspector-interface ComponentObserver-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { inspector } from '@kit.ArkUI';
```

## off('layout')

```TypeScript
off(type: 'layout', callback?: () => void): void
```

Deregisters a callback with the corresponding query condition by using the handle.This callback is not triggered when the component layout complete.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentObserver-off(type: 'layout', callback?: () => void): void--><!--Device-ComponentObserver-off(type: 'layout', callback?: () => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'layout' | Yes | type of the listened event.<br>**Since:** 12 |
| callback | () => void | No | callback of the listened event.<br>**Since:** 12 |

## off('draw')

```TypeScript
off(type: 'draw', callback?: () => void): void
```

Deregisters a callback with the corresponding query condition by using the handle.This callback is not triggered when the component draw complete.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentObserver-off(type: 'draw', callback?: () => void): void--><!--Device-ComponentObserver-off(type: 'draw', callback?: () => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'draw' | Yes | type of the listened event.<br>**Since:** 12 |
| callback | () => void | No | callback of the listened event.<br>**Since:** 12 |

## off('drawChildren')

```TypeScript
off(type: 'drawChildren', callback?: Callback<void>): void
```

Deregisters a callback with the corresponding query condition by using the handle.This callback is not triggered when the child of component draw complete.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComponentObserver-off(type: 'drawChildren', callback?: Callback<void>): void--><!--Device-ComponentObserver-off(type: 'drawChildren', callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drawChildren' | Yes | type of the listened event. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<void> | No | callback of the listened event. |

## offDrawChildren

```TypeScript
offDrawChildren(callback?: Callback<number[]>): void
```

Deregisters a callback with the corresponding query condition by using the handle.This callback is not triggered when the child of component draw complete.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-ComponentObserver-offDrawChildren(callback?: Callback<int[]>): void--><!--Device-ComponentObserver-offDrawChildren(callback?: Callback<int[]>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number[]> | No | callback of the listened event. |

**Example**

```TypeScript
import { inspector } from '@kit.ArkUI';

@Entry
@Component
struct ImageExample {
  build() {
    Column() {
      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {
        Row({ space: 5 }) {
          Image($r('app.media.startIcon'))
            .width(110)
            .height(110)
            .border({ width: 1 })
            .id('IMAGE_ID')
        }
        .id('ROW_ID')
      }
    }.height(320).width(360).padding({ right: 10, top: 10 })
  }

  listenerForRow: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('ROW_ID')

  aboutToAppear() {
    let onDrawChildrenComplete_uniqueId:(childIds: number[])=>void = (childIds: number[]) : void => {
      // The onDrawChildren API is added since API version 24. After the DrawChildren event is received, you can customize the implementation logic.
    }

    let uniqueId: number = this.getUniqueId();
    this.listenerForRow.onDrawChildren(onDrawChildrenComplete_uniqueId)
  }
  // Unregister callbacks through the handle. You should decide when to call these APIs.
  // this.listenerForRow.offDrawChildren(onDrawChildrenComplete_uniqueId)
}

```

## offLayoutChildren

```TypeScript
offLayoutChildren(callback?: Callback<void>): void
```

Deregisters a callback with the corresponding query condition by using the handle.This callback will not be triggered when the child of component layout is complete.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ComponentObserver-offLayoutChildren(callback?: Callback<void>): void--><!--Device-ComponentObserver-offLayoutChildren(callback?: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<void> | No | callback of the listened event. |

**Example**

The following example demonstrates how to register the component layout and drawing completion callbacks. In addition, you can use the [onLayoutChildren23+](#onlayoutchildren23) API to listen for the callback event triggered when the layout of a node in the subtree is complete.

```TypeScript
import { inspector } from '@kit.ArkUI';

@Entry
@Component
struct ImageExample {
  build() {
    Column() {
      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {
        Row({ space: 5 }) {
          Image($r('app.media.startIcon'))
            .width(110)
            .height(110)
            .border({ width: 1 })
            .id('IMAGE_ID')
        }
        .id('ROW_ID')
      }
    }.height(320).width(360).padding({ right: 10, top: 10 })
  }

  listenerForImage: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('IMAGE_ID')
  listenerForRow: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('ROW_ID')

  aboutToAppear() {
    let onLayoutComplete: () => void = (): void => {
      // Supplement the implementation code as required.
    }
    let onDrawComplete: () => void = (): void => {
      // Supplement the implementation code as required.
    }
    let onDrawChildrenComplete: () => void = (): void => {
      // Supplement the implementation code as required.
    }
    // Bind to the current JS instance.
    let FuncLayout = onLayoutComplete
    let FuncDraw = onDrawComplete
    let FuncDrawChildren = onDrawChildrenComplete
    let OffFuncLayout = onLayoutComplete
    let OffFuncDraw = onDrawComplete
    let OffFuncDrawChildren = onDrawChildrenComplete

    this.listenerForImage.on('layout', FuncLayout)
    this.listenerForImage.on('draw', FuncDraw)
    this.listenerForRow.on('drawChildren', FuncDrawChildren)

    // Unregister callbacks through the handle. You should decide when to call these APIs.
    // this.listenerForImage.off('layout', OffFuncLayout)
    // this.listenerForImage.off('draw', OffFuncDraw)
    // this.listenerForRow.off('drawChildren', OffFuncDrawChildren)

    let onLayoutChildrenComplete: () => void = (): void => {
      // After the LayoutChildren event is received, you can customize the implementation logic.
    }

    let uniqueId: number = this.getUniqueId();
    let listenerForUniqueId: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver(uniqueId.toString())
    listenerForUniqueId.onLayoutChildren(onLayoutChildrenComplete)
  }

  // Unregister callbacks through the handle. You should decide when to call these APIs.
  // listenerForUniqueId.offLayoutChildren(onLayoutChildrenComplete)
}

```

## on('layout')

```TypeScript
on(type: 'layout', callback: () => void): void
```

Registers a callback with the corresponding query condition by using the handle.This callback is triggered when the component layout complete.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentObserver-on(type: 'layout', callback: () => void): void--><!--Device-ComponentObserver-on(type: 'layout', callback: () => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'layout' | Yes | type of the listened event.<br>**Since:** 12 |
| callback | () => void | Yes | callback of the listened event.<br>**Since:** 12 |

## on('draw')

```TypeScript
on(type: 'draw', callback: () => void): void
```

Registers a callback with the corresponding query condition by using the handle.This callback is triggered when the component draw complete.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ComponentObserver-on(type: 'draw', callback: () => void): void--><!--Device-ComponentObserver-on(type: 'draw', callback: () => void): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'draw' | Yes | type of the listened event.<br>**Since:** 12 |
| callback | () => void | Yes | callback of the listened event.<br>**Since:** 12 |

## on('drawChildren')

```TypeScript
on(type: 'drawChildren', callback: Callback<void>): void
```

Registers a callback with the corresponding query condition by using the handle.This callback is triggered when the child of component draw complete.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ComponentObserver-on(type: 'drawChildren', callback: Callback<void>): void--><!--Device-ComponentObserver-on(type: 'drawChildren', callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drawChildren' | Yes | type of the listened event. |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | callback of the listened event. |

## onDrawChildren

```TypeScript
onDrawChildren(callback: Callback<number[]>): void
```

Registers a callback with the corresponding query condition by using the handle.This callback is triggered when the child of component draw complete.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-ComponentObserver-onDrawChildren(callback: Callback<int[]>): void--><!--Device-ComponentObserver-onDrawChildren(callback: Callback<int[]>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<number[]> | Yes | callback of the listened event. |

**Example**

The following example demonstrates how to register the component layout and drawing completion callbacks. After the rendering of the node in the subtree is complete, you can use the [onDrawChildren24+](#ondrawchildren24) API to return the unique ID of the node through a callback.

```TypeScript
import { inspector } from '@kit.ArkUI';

@Entry
@Component
struct ImageExample {
  build() {
    Column() {
      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {
        Row({ space: 5 }) {
          Image($r('app.media.startIcon'))
            .width(110)
            .height(110)
            .border({ width: 1 })
            .id('IMAGE_ID')
        }
        .id('ROW_ID')
      }
    }.height(320).width(360).padding({ right: 10, top: 10 })
  }

  listenerForRow: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('ROW_ID')

  aboutToAppear() {
    let onDrawChildrenComplete_uniqueId:(childIds: number[])=>void = (childIds: number[]) : void => {
      // The onDrawChildren API is added since API version 24. After the DrawChildren event is received, you can customize the implementation logic.
    }

    let uniqueId: number = this.getUniqueId();
    this.listenerForRow.onDrawChildren(onDrawChildrenComplete_uniqueId)
  }
}

```

## onLayoutChildren

```TypeScript
onLayoutChildren(callback: Callback<void>): void
```

Registers a callback with the corresponding query condition by using the handle.This callback will be triggered when the child of component layout is complete.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-ComponentObserver-onLayoutChildren(callback: Callback<void>): void--><!--Device-ComponentObserver-onLayoutChildren(callback: Callback<void>): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../arkts-components/arkts-arkui-common-callback-i.md)<void> | Yes | callback of the listened event. |

