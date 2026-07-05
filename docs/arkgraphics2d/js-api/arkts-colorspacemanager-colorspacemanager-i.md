# ColorSpaceManager

当前色域对象实例。 下列API示例中都需先使用[create()]colorSpaceManager.create(colorSpaceName: ColorSpace)获取到ColorSpaceManager实例，再通过此实例调用对 应方法。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## Modules to Import

```TypeScript
import { colorSpaceManager } from '@kit.ArkGraphics2D';
```

## getColorSpaceName

```TypeScript
getColorSpaceName(): ColorSpace
```

获取色域类型。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| ColorSpace | 返回色域类型枚举值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**Example**

```TypeScript
try {
  let spaceName = colorSpace.getColorSpaceName();
  console.info(`spaceName: ` + spaceName.toString());
} catch (err) {
  console.error(`Fail to get colorSpace's name. Cause: ` + JSON.stringify(err));
}

```

## getGamma

```TypeScript
getGamma(): double
```

获取色域gamma值。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| double | 返回色域gamma值。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**Example**

```TypeScript
try {
  let gamma = colorSpace.getGamma();
  console.info(`gamma: ` + gamma.toString());
} catch (err) {
  console.error(`Failed to get gamma. Cause: ` + JSON.stringify(err));
}

```

## getWhitePoint

```TypeScript
getWhitePoint(): Array<double>
```

获取色域白点值。

**Since:** 9

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;double> | 返回色域白点值[x, y]。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 18600001 | The parameter value is abnormal. [since 9 - 22] |

**Example**

```TypeScript
try {
  let point = colorSpace.getWhitePoint();
  console.info(`point: ` + point.toString());
} catch (err) {
  console.error(`Failed to get white point. Cause: ` + JSON.stringify(err));
}

```

