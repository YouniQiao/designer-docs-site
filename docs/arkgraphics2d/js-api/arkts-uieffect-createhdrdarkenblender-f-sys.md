# createHdrDarkenBlender

## createHdrDarkenBlender

```TypeScript
function createHdrDarkenBlender(hdrBrightnessRatio: double,
    grayscaleFactor?: [double, double, double]): HdrDarkenBlender
```

创建HdrDarkenBlender实例用于HDR图层的压暗混合效果。

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Graphics.Drawing

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| hdrBrightnessRatio | double | Yes | HDR的提亮倍数。取值范围[1.0, 设备当前支持最大提亮倍数]。  设置小于1.0的值时，按值为1.0处理；当值等于1.0时，为组件原本亮度；  设置大于设备当前支持最大提亮倍数的值时，按值为设备当前支持最大提亮倍数处理，  支持最大提亮倍数 = 设备最大亮度 / 设备默认亮度。 |
| grayscaleFactor | [double, double, double] | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| HdrDarkenBlender | 返回HDR压暗混合器，用于将压暗效果添加到指定的组件上。 |

