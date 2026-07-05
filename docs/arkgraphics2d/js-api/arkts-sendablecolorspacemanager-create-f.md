# create

## create

```TypeScript
function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager
```

创建标准可共享的色彩管理。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpaceName | colorSpaceManager.ColorSpace | Yes | 标准色域类型枚举值。 UNKNOWN与CUSTOM不可用于直接创建色域对象。 |

**Return value:**

| Type | Description |
| --- | --- |
| ColorSpaceManager | 返回当前创建的可共享的色彩管理实例。  该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考  [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

## create

```TypeScript
function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager
```

创建用户自定义可共享的色彩管理实例。

**Since:** 12

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primaries | colorSpaceManager.ColorSpacePrimaries | Yes | 色域标准三原色。 |
| gamma | number | Yes | 色域gamma值，取值为大于0的浮点数。 |

**Return value:**

| Type | Description |
| --- | --- |
| ColorSpaceManager | 返回当前创建的可共享的色彩管理实例。  色域类型定义为[colorSpaceManager.ColorSpace](arkts-colorspacemanager-colorspace-e.md#ColorSpace)枚举值`  CUSTOM`。  该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考  [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

