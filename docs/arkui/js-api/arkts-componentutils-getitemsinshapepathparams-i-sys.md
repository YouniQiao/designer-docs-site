# GetItemsInShapePathParams

需要获取图像对象时设置的图像选项。

**Since:** 23

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { componentUtils } from '@kit.ArkUI';
```

## images

```TypeScript
images: Array<ImageItem>
```

图片信息

**Type:** Array<ImageItem>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## shapePath

```TypeScript
shapePath: Array<common2D.Point>
```

表示路径的点信息

**Type:** Array<common2D.Point>

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## ratio

```TypeScript
ratio?: double
```

所选区域中非透明空白像素的比例 相对于图像总像素的比例。默认值为0.15。

**Type:** double

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

