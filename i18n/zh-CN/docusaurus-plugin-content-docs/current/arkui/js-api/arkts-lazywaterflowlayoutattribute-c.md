# LazyWaterFlowLayoutAttribute

Defines the lazy waterflow layout attribute.

**继承实现关系：** LazyWaterFlowLayoutAttribute继承自：CommonMethod<T>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { LazyVWaterFlowLayout,LazyWaterFlowLayoutAttribute,LazyVWaterFlowLayoutAttribute } from '@kit.ArkUI';
```

## columnsGap

```TypeScript
columnsGap(value: LengthMetrics | undefined): T
```

The spacing between columns.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | 是 | The spacing between columns.  Default value: LengthMetrics.vp(0) |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## footer

```TypeScript
footer(builder: CustomBuilder | undefined): T
```

Sets the footer of the lazy waterflow layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | 是 | The footer builder function.  Passing undefined will remove the footer. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## header

```TypeScript
header(builder: CustomBuilder | undefined): T
```

Sets the header of the lazy waterflow layout.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| builder | CustomBuilder \| undefined | 是 | The header builder function.  Passing undefined will remove the header. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: OnVisibleIndexesChangeCallback | undefined): T
```

Called when the first or last item displayed in the component changes. It is triggered once when the component is initialized.

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
| T |  |

## rowsGap

```TypeScript
rowsGap(value: LengthMetrics | undefined): T
```

The spacing between rows.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | LengthMetrics \| undefined | 是 | The spacing between rows.  Default value: LengthMetrics.vp(0) |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| T |  |

## sticky

```TypeScript
sticky(sticky: StickyStyle | undefined): T
```

Sets the sticky style for header and footer.

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
| T |  |

