# create

## create

```TypeScript
function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager
```

Creates a standard color space object that is sendable.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-sendableColorSpaceManager-function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager--><!--Device-sendableColorSpaceManager-function create(colorSpaceName: colorSpaceManager.ColorSpace): ColorSpaceManager-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| colorSpaceName | colorSpaceManager.ColorSpace | Yes | Type of the color space.\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_**UNKNOWN** and **CUSTOM** cannot be used when creating standard color space objects. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Sendable color space object created. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_1\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_This instance inherits from **ISendable** and can be passed by reference between concurrent ArkTS instances (including the main thread and the worker threads of TaskPool or Worker). For details, see \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_MD\_\_\_ESCAPED\_UNDERSCORE\_\_\_LINK\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Incorrect parameter type. 2.Parameter verification failed. |
| [18600001](../errorcode-colorspace-manager.md#18600001-abnormal-parameter-value) | The parameter value is abnormal. |

**Example**

```TypeScript
import { colorSpaceManager, sendableColorSpaceManager } from '@kit.ArkGraphics2D';
let colorSpace: sendableColorSpaceManager.ColorSpaceManager;
colorSpace = sendableColorSpaceManager.create(colorSpaceManager.ColorSpace.SRGB);
```


## create

```TypeScript
function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager
```

Creates a custom color space object that is sendable.

**Since:** 12

**ArkTS mode:** ArkTS-Dyn only, since version 12.

<!--Device-sendableColorSpaceManager-function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager--><!--Device-sendableColorSpaceManager-function create(primaries: colorSpaceManager.ColorSpacePrimaries, gamma: number): ColorSpaceManager-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| primaries | colorSpaceManager.ColorSpacePrimaries | Yes | Primaries of the color space. |
| gamma | number | Yes | Gamma value of the color space, which is a floating point number greater than 0. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Sendable color space object created. \_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_HTML\_\_\_ESCAPED\_UNDERSCORE\_\_\_TAG\_\_\_ESCAPED\_UNDERSCORE\_\_\_DESC\_\_\_ESCAPED\_UNDERSCORE\_\_\_USD\_\_\_ESCAPED\_UNDERSCORE\_\_\_0\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_\_\_\_ESCAPED\_UNDERSCORE\_\_\_The color space type is **CUSTOM**, which is one of the enumerated values of [colorSpaceManager.ColorSpace]{ |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [401](../../apis-ads-kit/errorcode-ads.md#401-incorrect-ads-request-parameter) | Parameter error. Possible cause: 1.Incorrect parameter type. 2.Parameter verification failed. |
| [18600001](../errorcode-colorspace-manager.md#18600001-abnormal-parameter-value) | The parameter value is abnormal. |

**Example**

```TypeScript
import { colorSpaceManager, sendableColorSpaceManager } from '@kit.ArkGraphics2D';
let colorSpace: sendableColorSpaceManager.ColorSpaceManager;
let primaries: colorSpaceManager.ColorSpacePrimaries = {
  redX: 0.1,
  redY: 0.1,
  greenX: 0.2,
  greenY: 0.2,
  blueX: 0.3,
  blueY: 0.3,
  whitePointX: 0.4,
  whitePointY: 0.4
};
let gamma: number = 2.2;
colorSpace = sendableColorSpaceManager.create(primaries, gamma);
```

