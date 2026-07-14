# @ohos.matrix4

Provides matrix transformation capabilities for components, including translation, rotation, and scaling. For details, see [Transformation](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). **Matrix4** can be used in the following scenarios: In [Transformation](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md), the [transform](../arkts-components/arkts-arkui-commonmethod-c.md#transform-2) API uses the **Matrix4** object to display the matrix transformation in two-dimensional transformation, and the [transform3D](../arkts-components/arkts-arkui-commonmethod-c.md#transform3d-1) API uses the **Matrix4** object to set the three-dimensional transformation matrix for a component.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { matrix4 } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [combine](arkts-arkui-combine-f.md#combine-1) | Combines the effects of two matrices to generate a new matrix object. |
| [copy](arkts-arkui-copy-f.md#copy-1) | Copies this matrix object. |
| [identity](arkts-arkui-identity-f.md#identity-1) | Constructs an identity matrix. |
| [init](arkts-arkui-init-f.md#init-1) | Matrix constructor, which is used to create a 4 x 4 matrix with the input parameters. Column-major order is used. |
| [invert](arkts-arkui-invert-f.md#invert-1) | Inverts this matrix object. |
| [rotate](arkts-arkui-rotate-f.md#rotate-1) | Rotates this matrix object along the x, y, and z axes. |
| [scale](arkts-arkui-scale-f.md#scale-1) | Scales this matrix object along the x, y, and z axes. |
| [transformPoint](arkts-arkui-transformpoint-f.md#transformpoint-1) | Applies the current transformation effect to a coordinate point. |
| [translate](arkts-arkui-translate-f.md#translate-1) | Translates this matrix object along the x, y, and z axes. |

### Interfaces

| Name | Description |
| --- | --- |
| [Matrix4Transit](arkts-arkui-matrix4transit-i.md) | Implements a **Matrix4Transit** object. |
| [Point](arkts-arkui-point-i.md) | Defines the data structure of a coordinate point. |
| [PolyToPolyOptions](arkts-arkui-polytopolyoptions-i.md) | Describes the configuration options for polygon-to-polygon transformation mapping. |
| [RotateOption](arkts-arkui-rotateoption-i.md) | Describes the rotation parameters. |
| [ScaleOption](arkts-arkui-scaleoption-i.md) | Describes the scale parameters. |
| [TranslateOption](arkts-arkui-translateoption-i.md) | Describes the translation parameters. |

