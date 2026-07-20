# @ohos.arkui.componentUtils

The **componentUtils** module provides API for obtaining the coordinates and size of the drawing area of a component.

**Since:** 10

<!--Device-unnamed-declare namespace componentUtils--><!--Device-unnamed-declare namespace componentUtils-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { componentUtils } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRectangleById](arkts-arkui-componentutils-getrectanglebyid-f.md#getrectanglebyid-1) | Obtains a **ComponentInfo** object based on the component ID and synchronously returns the geometric properties of the component. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getItemsInShapePath](arkts-arkui-componentutils-getitemsinshapepath-f-sys.md#getitemsinshapepath-1) | Get the image objects located within the selected area. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ComponentInfo](arkts-arkui-componentutils-componentinfo-i.md) | Implements a **ComponentInfo** object, which provides the size, position, translation, scaling, rotation, and affine matrix information of the component. |
| [Offset](arkts-arkui-componentutils-offset-i.md) | Defines the offset property. |
| [RotateResult](arkts-arkui-componentutils-rotateresult-i.md) | Rotation Result. |
| [ScaleResult](arkts-arkui-componentutils-scaleresult-i.md) | Scale Result |
| [Size](arkts-arkui-componentutils-size-i.md) | Defines the size property. |
| [TranslateResult](arkts-arkui-componentutils-translateresult-i.md) | Translation Result |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [GetItemsInShapePathParams](arkts-arkui-componentutils-getitemsinshapepathparams-i-sys.md) | Image options setted when need to get the image objects. |
| [ImageItem](arkts-arkui-componentutils-imageitem-i-sys.md) | Image object with layout information. |
| [Rotation2D](arkts-arkui-componentutils-rotation2d-i-sys.md) | Describes a rotation in 2D, which can be defined by rotation angle and rotation center. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [Matrix4Result](arkts-arkui-componentutils-matrix4result-t.md) | The matrix is column-first fourth-order matrix. |

