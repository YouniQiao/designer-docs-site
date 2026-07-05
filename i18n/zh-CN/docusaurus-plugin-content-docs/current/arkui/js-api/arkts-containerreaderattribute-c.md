# ContainerReaderAttribute

Defines the ContainerReader attribute functions. Provides methods for configuring container reading parameters and breakpoint analysis properties.

**继承实现关系：** ContainerReaderAttribute继承自：CommonMethod<ContainerReaderAttribute>。

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## breakpointConfig

```TypeScript
breakpointConfig(value?: BreakpointOptions): ContainerReaderAttribute
```

Sets the breakpoint configuration for container dimension analysis. Defines a set of threshold values that trigger different layout behaviors based on container size.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | BreakpointOptions | 否 |  |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ContainerReaderAttribute |  |

