# FolderStackAttribute

除支持[通用事件]common外，还支持以下事件：

**继承实现关系：** FolderStackAttribute继承自：CommonMethod<FolderStackAttribute>。

**起始版本：** 11

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## alignContent

```TypeScript
alignContent(value: Alignment)
```

设置子组件在容器内的对齐方式。该属性与[align]CommonMethod#align(value: Alignment)同时设置时，后设置的属性生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | Alignment | 是 | 子组件在容器内的对齐方式。 默认值：Alignment.Center 非法值：按默认值处理。 |

## autoHalfFold

```TypeScript
autoHalfFold(value: boolean)
```

设置是否开启自动旋转，仅在系统自动旋转关闭时该属性生效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否开启自动旋转。 默认值：true，设置true表示FolderStack在半折叠状态（见[FoldStatus]FoldStatus）进行布局时开启  自动旋转，设置false表示关闭自动旋转。该属性不区分设备类型。 非法值：按默认值处理。 |

## enableAnimation

```TypeScript
enableAnimation(value: boolean)
```

设置是否使用默认动效。 > **说明：** > > 从API version 12开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 是否使用默认动效。 默认值：true，设置true表示使用默认动效，设置false表示不使用默认动效。 非法值：按默认值处理。 |

## onFolderStateChange

```TypeScript
onFolderStateChange(callback: OnFoldStatusChangeCallback)
```

当前设备的折叠状态改变时触发回调，仅在横屏状态下生效。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 11

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 12开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnFoldStatusChangeCallback | 是 | 当前设备的折叠状态改变时触发的回调。 [since 18] |

## onHoverStatusChange

```TypeScript
onHoverStatusChange(handler: OnHoverStatusChangeCallback)
```

当前设备的悬停状态改变时触发回调。 > **说明：** > > 从API version 20开始，该接口支持在[attributeModifier]CommonMethod#attributeModifier中调用。

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| handler | OnHoverStatusChangeCallback | 是 | 当前设备的悬停状态改变时触发的回调。 [since 18] |

