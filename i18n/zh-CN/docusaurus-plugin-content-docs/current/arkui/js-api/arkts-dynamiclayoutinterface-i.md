# DynamicLayoutInterface

动态布局容器组件，支持在运行时动态切换不同的布局算法，不改变子组件的状态。 > **说明：

**起始版本：** 24

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { DynamicLayoutAttribute,DynamicLayout } from '@kit.ArkUI';
```

## constructor

```TypeScript
(algorithm: LayoutAlgorithm): DynamicLayoutAttribute
```

动态布局容器。

**起始版本：** 24

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| algorithm | LayoutAlgorithm | 是 | 指定动态布局组件的布局算法。取非法值时，按照[堆叠布局算法](arkts-stacklayoutalgorithm-c.md#StackLayoutAlgorithm)  布局子组件，子组件堆叠排列。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| DynamicLayoutAttribute |  |

