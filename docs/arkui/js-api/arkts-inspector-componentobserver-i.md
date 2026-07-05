# ComponentObserver

The ComponentObserver is used to listen for layout and draw events.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { inspector } from '@kit.ArkUI';
```

## off('layout')

```TypeScript
off(type: 'layout', callback?: () => void): void
```

Deregisters a callback with the corresponding query condition by using the handle. This callback is not triggered when the component layout complete.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'layout' | Yes | type of the listened event. [since 12] |
| callback | () => void | No | callback of the listened event. [since 12] |

## off('draw')

```TypeScript
off(type: 'draw', callback?: () => void): void
```

Deregisters a callback with the corresponding query condition by using the handle. This callback is not triggered when the component draw complete.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'draw' | Yes | type of the listened event. [since 12] |
| callback | () => void | No | callback of the listened event. [since 12] |

## off('drawChildren')

```TypeScript
off(type: 'drawChildren', callback?: Callback<void>): void
```

使用句柄注销具有相应查询条件的回调。 当组件的子级绘制完成时，不会触发此回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drawChildren' | Yes | 监听事件的类型。 |
| callback | Callback&lt;void> | No | 监听事件的回调。 |

## offDrawChildren

```TypeScript
offDrawChildren(callback?: Callback<int[]>): void
```

使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点绘制送显完成时不再触发回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int[]> | No |  |

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

使用监听句柄取消注册指定事件的回调函数，当组件的任一子节点布局完成时不再触发回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | No |  |

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

Registers a callback with the corresponding query condition by using the handle. This callback is triggered when the component layout complete.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'layout' | Yes | type of the listened event. [since 12] |
| callback | () => void | Yes | callback of the listened event. [since 12] |

## on('draw')

```TypeScript
on(type: 'draw', callback: () => void): void
```

Registers a callback with the corresponding query condition by using the handle. This callback is triggered when the component draw complete.

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'draw' | Yes | type of the listened event. [since 12] |
| callback | () => void | Yes | callback of the listened event. [since 12] |

## on('drawChildren')

```TypeScript
on(type: 'drawChildren', callback: Callback<void>): void
```

使用句柄注册具有相应查询条件的回调。 当组件的子级绘制完成时，会触发此回调。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| type | 'drawChildren' | Yes | 监听事件的类型。 |
| callback | Callback&lt;void> | Yes | 监听事件的回调。 |

## onDrawChildren

```TypeScript
onDrawChildren(callback: Callback<int[]>): void
```

使用监听句柄注册指定事件的回调函数，当组件的任一子节点绘制送显完成时会触发回调。

**Since:** 24

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;int[]> | Yes | 监听事件的回调函数，回调函数的参数为发生绘制送显节点的UniqueId。 |

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
}

```

## onLayoutChildren

```TypeScript
onLayoutChildren(callback: Callback<void>): void
```

使用监听句柄注册指定事件的回调函数，当组件的任一子节点布局完成时会触发回调。

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | Callback&lt;void> | Yes | 事件触发时的回调方法。 |

