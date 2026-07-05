# create

## create

```TypeScript
function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager
```

创建标准可共享的色彩管理。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| colorSpaceName | colorSpaceManager.ColorSpace | 是 | 标准色域类型枚举值。 UNKNOWN与CUSTOM不可用于直接创建色域对象。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorSpaceManager | 返回当前创建的可共享的色彩管理实例。  该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考  [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

## create

```TypeScript
function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager
```

创建用户自定义可共享的色彩管理实例。

**起始版本：** 12

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| primaries | colorSpaceManager.ColorSpacePrimaries | 是 | 色域标准三原色。 |
| gamma | number | 是 | 色域gamma值，取值为大于0的浮点数。 |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorSpaceManager | 返回当前创建的可共享的色彩管理实例。  色域类型定义为[colorSpaceManager.ColorSpace](arkts-colorspacemanager-colorspace-e.md#ColorSpace)枚举值`  CUSTOM`。  该实例继承ISendable，可以在ArkTS并发实例间（包括主线程、TaskPool&Worker工作线程）传递，传递的行为是引用传递，参考  [Sendable使用场景](docroot://arkts-utils/sendable-guide.md)。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible cause: 1.Incorrect parameter type.  2.Parameter verification failed. |
| 18600001 | The parameter value is abnormal. |

