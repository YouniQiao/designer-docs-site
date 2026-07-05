# TouchRecognizer

触摸识别器对象。

**Since:** 20

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## cancelTouch

```TypeScript
cancelTouch(): void
```

向当前触摸识别器发送触摸取消事件的信息。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## getEventTargetInfo

```TypeScript
getEventTargetInfo(): EventTargetInfo
```

返回当前触摸识别器对应组件的信息。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| EventTargetInfo | 当前触摸识别器对应组件的信息。 |

## isHostBelongsTo

```TypeScript
isHostBelongsTo(uniqueId: number): boolean
```

Check whether the current gesture binding node is a descendant of the passed-in component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueId | number | Yes | the unique id of the component. |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | - the query result. |

## isHostBelongsTo

```TypeScript
isHostBelongsTo(uniqueId: int): boolean
```

返回当前触摸识别器绑定节点是否为传入组件的后代节点。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uniqueId | int | Yes | 组件的唯一ID。可以通过[getUniqueId](arkts-eventtargetinfo-c.md#getUniqueId)接口获取该ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 当前触摸识别器绑定节点是否为传入组件的后代节点。true表示当前绑定节点为传入组件的后代节点，false表示当前绑定节点非传入组件的后代节点。 |

