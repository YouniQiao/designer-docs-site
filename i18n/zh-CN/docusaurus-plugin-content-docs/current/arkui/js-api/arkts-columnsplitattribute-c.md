# ColumnSplitAttribute

除支持[通用属性]common外，还支持以下属性： 支持[通用事件]common。

**继承实现关系：** ColumnSplitAttribute继承自：CommonMethod<ColumnSplitAttribute>。

**起始版本：** 7

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## divider

```TypeScript
divider(value: ColumnSplitDividerStyle | null)
```

设置分割线的margin。

**起始版本：** 10

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ColumnSplitDividerStyle \| null | 是 | 分割线的margin，即设置分割线与子组件的距离。 默认值：null。当设置为null时，分割线与子组件的距离为0vp。非法值：按默认值处理。 |

## resizeable

```TypeScript
resizeable(value: boolean)
```

设置分割线是否可拖拽。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | boolean | 是 | 分割线是否可拖拽。设置为true时表示分割线可拖拽，设置为false时表示分割线不可拖拽。 默认值：false 非法值：按默认值处理。 |

