# ContentBlur

设置内容模糊效果。

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## radius

```TypeScript
radius: double
```

模糊半径。取值范围为[0, +∞)，默认值为0，值越大模糊效果越明显，为0时不模糊。

**Type:** double

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## grayscale

```TypeScript
grayscale?: [int, int]
```

灰阶模糊参数，两参数取值范围均为[0, 127]，默认值为[0, 0]。对图像中的黑白色进行色阶调整，使其趋于灰色更为柔和美观，对图像中的彩色调整没有效果。参数一表示对黑色的提亮程度，参数二表示对白色的压暗程度，参数值越大调整效果 越明显（黑白色变得越灰）。例如：设置参数为（20, 20），图片中的黑色像素RGB:[0, 0, 0]会调整为[20, 20, 20]（0+20），白色像素RGB:[255, 255, 255]会调整为 [235, 235, 235]（255-20），图像中的彩色像素维持不变。

**Type:** [int, int]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

