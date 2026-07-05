# Constants

## ColumnSplitInstance

```TypeScript
declare const ColumnSplitInstance: ColumnSplitAttribute
```

Defines ColumnSplit Component instance.

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## ColumnSplit

```TypeScript
declare const ColumnSplit: ColumnSplitInterface
```

将子组件纵向布局，并在每个子组件之间插入横向分割线。 > **说明：** ###### 子组件 可以包含子组件。 ColumnSplit通过分割线限制子组件的高度。初始化时，分割线位置根据子组件的高度来计算。初始化后，动态修改子组件的高度不生效，分割线位置保持不变，可通过拖动相邻分割线改变子组件高度。 初始化后，动态修改[margin]CommonMethod#margin、[border]CommonMethod#border、 [padding]CommonMethod#padding通用属性导致子组件尺寸大于相邻分割线间距的异常情况下，不支持拖动分割线改变子组件的高度。

**起始版本：** 7

**原子化服务API：** 从API version 11开始，该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

