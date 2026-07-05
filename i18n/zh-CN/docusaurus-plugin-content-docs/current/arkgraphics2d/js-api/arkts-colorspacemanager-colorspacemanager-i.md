# ColorSpaceManager

当前色域对象实例。 下列API示例中都需先使用[create()]colorSpaceManager.create(colorSpaceName: ColorSpace)获取到ColorSpaceManager实例，再通过此实例调用对 应方法。

**起始版本：** 9

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## 导入模块

```TypeScript
import { colorSpaceManager } from '@kit.ArkGraphics2D';
```

## getColorSpaceName

```TypeScript
getColorSpaceName(): ColorSpace
```

获取色域类型。

**起始版本：** 9

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| ColorSpace | 返回色域类型枚举值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**示例：**

```TypeScript
try {
  // 获取色域类型
  let spaceName = colorSpace.getColorSpaceName();
  console.info(`spaceName: ` + spaceName.toString());
} catch (err) {
  console.error(`Failed to get colorSpace's name. Code: ${err.code}, message: ${err.message}`);
}

```

## getGamma

```TypeScript
getGamma(): double
```

获取色域gamma值。

**起始版本：** 9

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| double | 返回色域gamma值。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**示例：**

```TypeScript
try {
  // 获取色域gamma值
  let gamma = colorSpace.getGamma();
  console.info(`gamma: ` + gamma.toString());
} catch (err) {
  console.error(`Failed to get gamma. Code: ${err.code}, message: ${err.message}`);
}

```

## getWhitePoint

```TypeScript
getWhitePoint(): Array<double>
```

获取色域白点值。

**起始版本：** 9

**系统能力：** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Array&lt;double> | 返回色域白点值[x, y]。 |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**示例：**

```TypeScript
try {
  // 获取色域白点值
  let point = colorSpace.getWhitePoint();
  console.info(`point: ` + point.toString());
} catch (err) {
  console.error(`Failed to get white point. Code: ${err.code}, message: ${err.message}`);
}

```

