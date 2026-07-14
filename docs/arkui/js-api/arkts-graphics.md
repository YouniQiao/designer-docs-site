# Graphics

## Summary

### Functions

| Name | Description |
| --- | --- |
| [borderRadiuses](arkts-arkui-graphics-borderradiuses-f.md#borderradiuses-1) | Generates a **borderRadiuses** object with the specified radius for all border corners. |
| [borderStyles](arkts-arkui-graphics-borderstyles-f.md#borderstyles-1) | Generates a border style object with the specified border style color for all borders. |
| [edgeColors](arkts-arkui-graphics-edgecolors-f.md#edgecolors-1) | Generates an **edgeColors** object with the specified edge color for all edges. |
| [edgeWidths](arkts-arkui-graphics-edgewidths-f.md#edgewidths-1) | Generates an **edgeWidths** object with the specified edge width for all edges. |

### Classes

| Name | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-colormetrics-c.md) | Used to mix colors. |
| [DrawContext](arkts-arkui-drawcontext-c.md) | Graphics drawing context, which provides the canvas width and height required for drawing. |
| [LengthMetrics](arkts-arkui-lengthmetrics-c.md) | Defines the length attribute. When the length unit is PERCENT, the value **1** indicates 100%. |
| [ShapeClip](arkts-arkui-shapeclip-c.md) | Sets the clipping shape. |
| [ShapeMask](arkts-arkui-shapemask-c.md) | Describes the shape mask. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [ColorMetrics](arkts-arkui-colormetrics-c-sys.md) | Used to mix colors. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [BackgroundBlur](arkts-arkui-backgroundblur-i.md) | Defines the background blur effect. |
| [Circle](arkts-arkui-circle-i.md) | Describes a circle. |
| [CommandPath](arkts-arkui-commandpath-i.md) | Describes the command for drawing a path. |
| [ContentBlur](arkts-arkui-contentblur-i.md) | Defines the content blur effect. |
| [Corners](arkts-arkui-corners-i.md) | Describes the four corners. |
| [Edges](arkts-arkui-edges-i.md) | Describes the edges. |
| [ForegroundBlur](arkts-arkui-foregroundblur-i.md) | Defines the foreground blur effect. |
| [Frame](arkts-arkui-frame-i.md) | Sets or returns the layout size and position of the component. |
| [RoundRect](arkts-arkui-roundrect-i.md) | Describes a rectangle with rounded corners. |
| [Size](arkts-arkui-size-i.md) | Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a different unit, in which case the unit specified by the API takes precedence. |
| [SizeT](arkts-arkui-sizet-i.md) | Sets the width and height attributes. |
| [Vector2](arkts-arkui-vector2-i.md) | Defines a vector that contains the x and y coordinate values. |
| [Vector2T](arkts-arkui-vector2t-i.md) | Represents a vector of the T type that contains two values: x and y. |
| [Vector3](arkts-arkui-vector3-i.md) | Represents a vector including three values: x, y, and z. |
| [Vector4](arkts-arkui-vector4-i.md) | Defines a vector that contains the x, y, z, and w coordinate values. |

### Enums

| Name | Description |
| --- | --- |
| [LengthMetricsUnit](arkts-arkui-lengthmetricsunit-e.md) | Enumerates length units. |
| [LengthUnit](arkts-arkui-lengthunit-e.md) | Enumerates length units. |

### Types

| Name | Description |
| --- | --- |
| [BorderRadiuses](arkts-arkui-borderradiuses-t.md) | Sets the uniform radius of the four corners. |
| [CornerRadius](arkts-arkui-cornerradius-t.md) | Sets the semi-axis lengths for the x-axis and y-axis of the rounded corners. |
| [Matrix4](arkts-arkui-matrix4-t.md) | Sets a 4x4 matrix. The **Matrix4** type is used to set transformation information for components.Value range of each number: (-∞, +∞). The following is an example: ``` const transform: Matrix4 = [ 1, 0, 45, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ] ```. |
| [Offset](arkts-arkui-offset-t.md) | Sets the offset of the component or effect. |
| [Pivot](arkts-arkui-pivot-t.md) | Sets the pivot of the component. As the rotation or scaling center of the component, the pivot affects the rotation and scaling effects. X and Y coordinates of the pivot is a floating point number in the range [0.0, 1.0], and the default value is **0.5**. |
| [Position](arkts-arkui-position-t.md) | Sets or returns the position of the component. |
| [PositionT](arkts-arkui-positiont-t.md) | Sets or returns the position of the component. |
| [Rect](arkts-arkui-rect-t.md) | Describes a rectangle. |
| [Rotation](arkts-arkui-rotation-t.md) | Sets the rotation angle of the component. |
| [Scale](arkts-arkui-scale-t.md) | Sets the scale factor of the component. |
| [Translation](arkts-arkui-translation-t.md) | Sets the translation amount of the component. |

