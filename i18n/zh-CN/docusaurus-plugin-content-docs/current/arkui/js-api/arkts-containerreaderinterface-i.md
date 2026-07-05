# ContainerReaderInterface

Defines the ContainerReader Component. Used for reading and analyzing container layout information based on size breakpoints in dynamic scenarios. Provides container dimension analysis and breakpoint detection capabilities.

**起始版本：** 26.0.0

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

## 导入模块

```TypeScript
import { BreakpointOptions,ContainerReader,ContainerReaderAttribute } from '@kit.ArkUI';
```

## constructor

```TypeScript
(value: ContainerReaderInfo): ContainerReaderAttribute
```

Sets the container reading configuration for ContainerReader component. Configures the size parameters and breakpoint rules for container layout analysis.

**起始版本：** 26.0.0

**模型约束：** 此接口仅可在Stage模型下使用。

**原子化服务API：** 该接口支持在原子化服务中使用。

**卡片能力：** 该接口支持在ArkTS卡片中使用。

**系统能力：** SystemCapability.ArkUI.ArkUI.Full

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| value | ContainerReaderInfo | 是 | The configuration options for container reading |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ContainerReaderAttribute |  |

