# NodeController

通常搭配{@link node_container}进行使用。 用于创建控制器管理绑定的{@link node_container}组件。 一个NodeController只允许与一个{@link node_container}进行绑定。 最佳实践请参考[组件动态创建-组件动态添加、更新和删除](https://developer.huawei.com/consumer/cn/doc/best-practices/ bpta-ui-dynamic-operations#section153921947151012)。

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToAppear

```TypeScript
aboutToAppear?(): void
```

当NodeController绑定的[NodeContainer]node_container挂载显示后触发此回调。 > **说明：** > > 回调时机参考[onAppear]CommonMethod#onAppear。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToDisappear

```TypeScript
aboutToDisappear?(): void
```

当NodeController绑定的[NodeContainer]node_container销毁时触发此回调。 > **说明：** > > 回调时机参考[onDisAppear]CommonMethod#onDisAppear。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## aboutToResize

```TypeScript
aboutToResize?(size: Size): void
```

当NodeController绑定的[NodeContainer]node_container布局的时候触发此回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| size | Size | Yes | 用于返回组件布局大小的宽和高，单位为vp。 |

## makeNode

```TypeScript
abstract makeNode(uiContext: UIContext): FrameNode | null
```

当实例绑定的[NodeContainer]node_container创建的时候进行回调。回调方法将返回一个节点，将该节点挂载至[NodeContainer]node_container。 或者可以通过NodeController的rebuild()方法进行回调的触发。 > **说明：** > > [NodeContainer]node_container不支持跨实例复用。如果出现跨实例复用[NodeContainer]node_container，传入 > [NodeContainer]node_container的[NodeController](arkts-nodecontroller-c.md#NodeController)触发 > [makeNode](arkts-nodecontroller-c.md#makeNode)回调方法时，入参中的[UIContext]@ohos.arkui.UIContext对象可能为undefined，此时需要开发者 > 判断入参中的[UIContext]@ohos.arkui.UIContext对象是否为undefined，防止后续使用此入参时出现 > [UIContext无效的JS异常](docroot://ui/arkts-wrong-uicontext-debug.md#定位uicontext错误问题)。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uiContext | UIContext | Yes | 回调该方法的时候，绑定[NodeContainer]node_container的UI上下文。 |

**Return value:**

| Type | Description |
| --- | --- |
| FrameNode | FrameNode object, which will be mounted to the placeholder node of the  [NodeContainer]node_container component. If a null object is returned, the child nodes of the  corresponding [NodeContainer]node_container component are removed. |

## onAttach

```TypeScript
onAttach?(): void
```

当NodeController绑定的[NodeContainer]node_container挂载至主节点树时触发此回调。 > **说明：** > > 回调时机参考[onAttach]CommonMethod#onAttach。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onBind

```TypeScript
onBind?(containerId: number): void
```

当NodeController与[NodeContainer]node_container绑定后触发此回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| containerId | number | Yes | 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]node_container绑定完成。 |

## onDetach

```TypeScript
onDetach?(): void
```

当NodeController绑定的[NodeContainer]node_container从主节点树卸载时触发此回调。 > **说明：** > > 回调时机参考[onDetach]CommonMethod#onDetach。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onTouchEvent

```TypeScript
onTouchEvent?(event: TouchEvent): void
```

当NodeController绑定的[NodeContainer]node_container收到Touch事件时触发此回调。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | TouchEvent | Yes | 触摸事件。 |

## onUnbind

```TypeScript
onUnbind?(containerId: number): void
```

当NodeController与[NodeContainer]node_container解绑后触发此回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| containerId | number | Yes | 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]node_container解绑完成。 |

## onWillBind

```TypeScript
onWillBind?(containerId: number): void
```

当NodeController与[NodeContainer]node_container即将绑定前触发此回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| containerId | number | Yes | 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]node_container即将绑定。 |

## onWillUnbind

```TypeScript
onWillUnbind?(containerId: number): void
```

当NodeController与[NodeContainer]node_container即将解绑前触发此回调。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| containerId | number | Yes | 回调该方法时，NodeController与NodeContainerId对应的[NodeContainer]node_container即将解绑。 |

## rebuild

```TypeScript
rebuild(): void
```

调用此接口通知[NodeContainer]node_container组件重新回调[makeNode](arkts-nodecontroller-c.md#makeNode)方法，更改子节点。 > **说明：** > > 由于rebuild方法为应用主动调用的方法，且该操作与UI相关。需要开发者自行保证调用该接口时UI上下文有效，即与绑定的NodeContainer保持UI上下文一致。 > > 监听回调等[UI上下文不明确](docroot://ui/arkts-global-interface.md#ui上下文不明确)时，可以通过[UIContext]@ohos.arkui.UIContext的 > [runScopedTask](docroot://reference/apis-arkui/arkts-apis-uicontext-uicontext.md#runscopedtask)方法明确调用时的UI上下文。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

