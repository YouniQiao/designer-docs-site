# LazyLayoutHelper

Helper class for lazy layout algorithm. Provides layout direction and view position information for lazy layout.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## getLazyLayoutDirection

```TypeScript
getLazyLayoutDirection(): LazyLayoutDirection
```

Get the lazy layout direction.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyLayoutDirection | The lazy layout direction. |

## getViewEnd

```TypeScript
getViewEnd(): int
```

Get the end position of the visible view.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | The end position of the visible view.  Unit: px. |

## getViewStart

```TypeScript
getViewStart(): int
```

Get the start position of the visible view.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**返回值：**

| 类型 | 说明 |
| --- | --- |
| int | The start position of the visible view.  Unit: px. |

## setAdjustedOffset

```TypeScript
setAdjustedOffset(offset: int): void
```

Set the adjusted offset for the lazy layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| offset | int | 是 | The adjusted offset value to set.  Unit: px. |

## setChildrenInactive

```TypeScript
setChildrenInactive(children: int[]): void
```

Set children inactive. If child components are generated via ForEach or Repeat without virtualScroll, they will not be displayed after being set to inactive. If child components are generated via LazyForEach or Repeat with virtualScroll, they will be destroyed or recycled after being set to inactive. LazyForEach or Repeat with virtualScroll only support consecutive active child components; setting a child component to inactive between two active child components will not take effect. Child components laid out outside the display area will be automatically set to inactive.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| children | int[] | 是 | The indices of child components to set inactive. |

