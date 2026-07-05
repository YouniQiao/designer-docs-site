# LazyDynamicLayoutAttribute

Defines the LazyDynamicLayout attribute functions.

**继承实现关系：** LazyDynamicLayoutAttribute继承自：CommonMethod<LazyDynamicLayoutAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { LazyDynamicLayoutAttribute,LazyDynamicLayout } from '@kit.ArkUI';
```

## onVisibleIndexesChange

```TypeScript
onVisibleIndexesChange(callback: Callback<int[]> | undefined): LazyDynamicLayoutAttribute
```

Called when visible indexes change.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | Callback&lt;int[]> \| undefined | 是 | Callback used to return the list of index  numbers of visible subcomponents.  Passing undefined will unregister the callback. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| LazyDynamicLayoutAttribute |  |

