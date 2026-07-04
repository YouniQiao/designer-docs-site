# @ohos.arkui.componentUtils

The **componentUtils** module provides API for obtaining the coordinates and size of the drawing area of a component.

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { componentUtils } from '@ohos.arkui.componentUtils';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getRectangleById](arkts-arkui-getrectanglebyid-f.md#getrectanglebyid-1) | Obtains a **ComponentInfo** object based on the component ID and synchronously returns the geometric properties of the component. &gt; **NOTE** &gt; &gt; - Since API version 10, you can use the &gt; [getComponentUtils](arkts-arkui-uicontext-c.md#getcomponentutils-1) API in &gt; [UIContext](arkts-arkui-uicontext.md) to obtain the [ComponentUtils](arkts-arkui-uicontext.md) object &gt; associated with the current UI context. This API provides access to component coordinates and size information &gt; after the target component completes layout. It is recommended that you invoke this API within &gt; [layout completion callbacks](arkts-arkui-inspector.md#inspector). Note that dynamically created components &gt; must be mounted to the component tree before this API can obtain their information, as unmounted components are &gt; not measured or laid out by the UI framework. Always ensure that component mounting precedes information &gt; retrieval attempts. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [getItemsInShapePath](arkts-arkui-getitemsinshapepath-f-sys.md#getitemsinshapepath-1) | Get the image objects located within the selected area. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ComponentInfo](arkts-arkui-componentinfo-i.md) | Implements a **ComponentInfo** object, which provides the size, position, translation, scaling, rotation, and affine matrix information of the component. |
| [Offset](arkts-arkui-offset-i.md) | Defines the offset property. |
| [RotateResult](arkts-arkui-rotateresult-i.md) | Rotation Result. |
| [ScaleResult](arkts-arkui-scaleresult-i.md) | Scale Result |
| [Size](arkts-arkui-size-i.md) | Defines the size property. |
| [TranslateResult](arkts-arkui-translateresult-i.md) | Translation Result |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [GetItemsInShapePathParams](arkts-arkui-getitemsinshapepathparams-i-sys.md) | Image options setted when need to get the image objects. |
| [ImageItem](arkts-arkui-imageitem-i-sys.md) | Image object with layout information. |
| [Rotation2D](arkts-arkui-rotation2d-i-sys.md) | Describes a rotation in 2D, which can be defined by rotation angle and rotation center. |
<!--DelEnd-->

### Types

| Name | Description |
| --- | --- |
| [Matrix4Result](arkts-arkui-matrix4result-t.md) | The matrix is column-first fourth-order matrix. |

