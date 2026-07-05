# ArcAlphabetIndexerInterface

弧形索引条是一种弧形的、可按字母顺序排序进行快速定位的组件，可以与容器组件联动，按逻辑结构快速定位至容器显示区域。 > **说明：** > - 该组件支持在Phone、PC/2in1、Tablet、TV、Wearable设备上使用。API version 22及以前版本，在Phone、PC/2in1、Tablet、TV上使用会编译告警，但可以正常运行。

**Since:** 18

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

## Modules to Import

```TypeScript
import { ArcAlphabetIndexerAttribute,ArcAlphabetIndexer } from '@kit.ArkUI';
```

## constructor

```TypeScript
(info: ArcAlphabetIndexerInitInfo): ArcAlphabetIndexerAttribute
```

创建弧形索引条实例，传入弧形索引条配置项参数。

**Since:** 18

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Circle

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | ArcAlphabetIndexerInitInfo | Yes | 定义弧形字母索引条的初始化参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ArcAlphabetIndexerAttribute |  |

