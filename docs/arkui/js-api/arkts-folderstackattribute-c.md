# FolderStackAttribute

除支持[通用事件]common外，还支持以下事件：

**Inheritance:** FolderStackAttributeextends: CommonMethod<FolderStackAttribute>.

**Since:** 11

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## alignContent

```TypeScript
alignContent(value: Alignment)
```

设置子组件在容器内的对齐方式。该属性与[align]CommonMethod#align(value: Alignment)同时设置时，后设置的属性生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Alignment | Yes | 子组件在容器内的对齐方式。 默认值：Alignment.Center 非法值：按默认值处理。 |

## autoHalfFold

```TypeScript
autoHalfFold(value: boolean)
```

设置是否开启自动旋转，仅在系统自动旋转关闭时该属性生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否开启自动旋转。 默认值：true，设置true表示FolderStack在半折叠状态（见[FoldStatus]FoldStatus）进行布局时开启  自动旋转，设置false表示关闭自动旋转。该属性不区分设备类型。 非法值：按默认值处理。 |

## enableAnimation

```TypeScript
enableAnimation(value: boolean)
```

设置是否使用默认动效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否使用默认动效。 默认值：true，设置true表示使用默认动效，设置false表示不使用默认动效。 非法值：按默认值处理。 |

## onFolderStateChange

```TypeScript
onFolderStateChange(callback: OnFoldStatusChangeCallback)
```

当前设备的折叠状态改变时触发回调，仅在横屏状态下生效。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | OnFoldStatusChangeCallback | Yes | 当前设备的折叠状态改变时触发的回调。 [since 18] |

## onHoverStatusChange

```TypeScript
onHoverStatusChange(handler: OnHoverStatusChangeCallback)
```

当前设备的悬停状态改变时触发回调。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | OnHoverStatusChangeCallback | Yes | 当前设备的悬停状态改变时触发的回调。 [since 18] |

