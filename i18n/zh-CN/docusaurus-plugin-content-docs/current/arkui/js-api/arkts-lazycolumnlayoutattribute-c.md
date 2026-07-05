# LazyColumnLayoutAttribute

Defines the lazy column layout attribute.

**继承实现关系：** LazyColumnLayoutAttribute继承自：CommonMethod<LazyColumnLayoutAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { LazyColumnLayoutAttribute,LazyColumnLayout } from '@kit.ArkUI';
```

## alignItems

```TypeScript
alignItems(value: HorizontalAlign | undefined): LazyColumnLayoutAttribute
```

Sets the horizontal alignment of the row content.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | HorizontalAlign \| undefined | 是 | the horizontal alignment of the row content.  Default value HorizontalAlign.Center. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the footer of the lazy column layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | 是 | The footer builder function  Passing undefined will remove the footer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## header

```TypeScript
header(builder: CustomBuilder | undefined): LazyColumnLayoutAttribute
```

Sets the header of the lazy column layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | 是 | The header builder function  Passing undefined will remove the header. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): LazyColumnLayoutAttribute
```

Triggered when the index of child components in the visible area changes.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | OnVisibleIndexesChangeCallback \| undefined | 是 | callback function, triggered  when the index of child components in the visible area changes.  Passing undefined will unregister the callback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## space

```TypeScript
space(space: LengthMetrics | undefined): LazyColumnLayoutAttribute
```

The spacing between rows.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| space | LengthMetrics \| undefined | 是 | the spacing between rows.  Default value: 0. Range: [0, +∞). |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): LazyColumnLayoutAttribute
```

Sets sticky style for header and footer.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| sticky | StickyStyle \| undefined | 是 | The sticky style for header and footer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyColumnLayoutAttribute |  |

