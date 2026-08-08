# ColorSpaceManager

Implements management of color space objects.Before calling any of the following APIs, you must use  
[create()]\_\_\_JSDOC\_LINK\_DESC\_USD\_0\_\_\_ to create a color space manager.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-colorSpaceManager-interface ColorSpaceManager--><!--Device-colorSpaceManager-interface ColorSpaceManager-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

## getColorSpaceName

```TypeScript
getColorSpaceName(): ColorSpace
```

Obtains the color space type.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-ColorSpaceManager-getColorSpaceName(): ColorSpace--><!--Device-ColorSpaceManager-getColorSpaceName(): ColorSpace-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | Color space type. |

**Example**

```TypeScript
try {
    let spaceName = colorSpace.getColorSpaceName();
} catch (err) {
    console.error(`Fail to get colorSpace's name. Cause: ` + JSON.stringify(err));
}
```

## getGamma

ArkTS-Dyn:
```TypeScript
getGamma(): number
```

ArkTS-Sta:
```TypeScript
getGamma(): double
```

Obtains the gamma of the color space.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-ColorSpaceManager-getGamma(): double--><!--Device-ColorSpaceManager-getGamma(): double-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: number  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：double | Gamma of the color space. |

**Example**

```TypeScript
try {
    let gamma = colorSpace.getGamma();
} catch (err) {
    console.error(`Failed to get gamma. Cause: ` + JSON.stringify(err));
}
```

## getWhitePoint

ArkTS-Dyn:
```TypeScript
getWhitePoint(): Array<number>
```

ArkTS-Sta:
```TypeScript
getWhitePoint(): Array<double>
```

Obtains the coordinates of the white point in the color space.

**Since:** 9

**ArkTS mode:** ArkTS-Dyn since version 9; ArkTS-Sta since version 23.

<!--Device-ColorSpaceManager-getWhitePoint(): Array<double>--><!--Device-ColorSpaceManager-getWhitePoint(): Array<double>-End-->

**System capability:** SystemCapability.Graphic.Graphic2D.ColorManager.Core

**Return value:**

| Type | Description |
| --- | --- |
| ArkTS-Dyn: Array&lt;number&gt;  \_\_\_HTML\_TAG\_USD\_0\_\_\_ArkTS-Sta：Array&lt;double&gt; | Coordinates [x, y] of the white point. |

**Example**

```TypeScript
try {
    let point = colorSpace.getWhitePoint();
} catch (err) {
    console.error(`Failed to get white point. Cause: ` + JSON.stringify(err));
}
```

