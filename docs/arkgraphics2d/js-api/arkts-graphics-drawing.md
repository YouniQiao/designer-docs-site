# @ohos.graphics.drawing

During application development, you often need to draw different elements. Typically, you can use ArkUI components to
draw the desired elements or effects. However, sometimes these components cannot meet the needs for custom graphics
or effects. In such cases, you can turn to the Drawing module for flexible custom drawing. This module provides basic
drawing capabilities, such as drawing rectangles, circles, points, straight lines, custom paths, and fonts.

> **NOTE**
>
> - This module uses the physical pixel unit, px.
>
> - The module operates under a single-threaded model. The caller needs to manage thread safety and context state
> transitions.

**Since:** 11

**System capability:** SystemCapability.Graphics.Drawing

## Modules to Import

```TypeScript
import { drawing } from '@kit.ArkGraphics2D';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [Brush](arkts-arkgraphics2d-brush-c.md) | Defines a brush, which is used to describe the style and color to fill in a shape.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Canvas](arkts-arkgraphics2d-canvas-c.md) | A carrier that carries the drawn content and drawing status.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions.&gt;&gt;&gt; The canvas comes with a default brush. The brush is black, has anti-aliasing enabled, and has no other style&gt; effects. This default brush is used when no brush or pen is actively set in the canvas. |
| [ColorFilter](arkts-arkgraphics2d-colorfilter-c.md) | Defines a color filter.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Font](arkts-arkgraphics2d-font-c.md) | Describes the attributes used for text rendering, such as size and typeface.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [ImageFilter](arkts-arkgraphics2d-imagefilter-c.md) | Implements an image filter.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Lattice](arkts-arkgraphics2d-lattice-c.md) | Lattice object. which is used to divide an image by lattice.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [MaskFilter](arkts-arkgraphics2d-maskfilter-c.md) | Implements a mask filter.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Matrix](arkts-arkgraphics2d-matrix-c.md) | Implements a matrix.A 3 x 3 matrix is shown as below.![matrix_3x3](../../../../reference/apis-arkgraphics2d/figures/matrix3X3.PNG)Elements in the matrix from left to right and from top to bottom respectively represent a horizontal scalecoefficient, a horizontal skew coefficient, a horizontal translation coefficient, a vertical skew coefficient, avertical scale coefficient, a vertical translation coefficient, an X-axis perspective coefficient, a Y-axisperspective coefficient, and a perspective scale coefficient.If (x&lt;sub&gt;1&lt;/sub&gt;, y&lt;sub&gt;1&lt;/sub&gt;) is the source coordinate point, (x&lt;sub&gt;2&lt;/sub&gt;, y&lt;sub&gt;2&lt;/sub&gt;) is the coordinatepoint obtained by transforming the source coordinate point using the matrix, then the relationship between the twocoordinate points is as follows:![matrix_xy](../../../../reference/apis-arkgraphics2d/figures/matrix_xy.PNG)&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Path](arkts-arkgraphics2d-path-c.md) | A compound geometric path consisting of line segments, arcs, quadratic Bezier curves, and cubic Bezier curves.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [PathEffect](arkts-arkgraphics2d-patheffect-c.md) | Implements a path effect.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [PathIterator](arkts-arkgraphics2d-pathiterator-c.md) | Implements a path operation iterator. You can read path operation instructions by traversing the iterator.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 18.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Pen](arkts-arkgraphics2d-pen-c.md) | Defines a pen, which is used to describe the style and color to outline a shape.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [PointUtils](arkts-arkgraphics2d-pointutils-c.md) | This class offers a comprehensive set of operations for handling common2D Point objects. |
| [RectUtils](arkts-arkgraphics2d-rectutils-c.md) | This module provides tools for processing rectangles.Use scenarios:1. Quickly create rectangles and get their basic features, like making a new rectangle, copying one, and obtaining its width, height, and center point.2. Calculate and adjust boundaries, such as obtaining the inclusion relationship, calculating and updating intersections and unions between rectangles, and updating boundary values.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 20.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Region](arkts-arkgraphics2d-region-c.md) | Describes a region, which is used to describe the region where the shape can be drawn.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [RoundRect](arkts-arkgraphics2d-roundrect-c.md) | Rounded rectangle.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [SamplingOptions](arkts-arkgraphics2d-samplingoptions-c.md) | Implements sampling options.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [ShaderEffect](arkts-arkgraphics2d-shadereffect-c.md) | Implements the shader effect. After a shader effect is set for a pen or brush, the shader effect instead of thecolor attribute is used for drawing. In this case, the alpha value set for the pen or brush still takes effect.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [ShadowLayer](arkts-arkgraphics2d-shadowlayer-c.md) | Implements a shadow layer.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 12.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - This module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [TextBlob](arkts-arkgraphics2d-textblob-c.md) | Defines a block consisting of one or more characters with the same font.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Tool](arkts-arkgraphics2d-tool-c.md) | A utility class that provides only static methods to convert data structs defined in other modules and[common2D](arkts-graphics-common2d.md).&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 15.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [Typeface](arkts-arkgraphics2d-typeface-c.md) | Describes the style of a typeface, such as SimSun or KaiTi.&gt; **NOTE**&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |
| [TypefaceArguments](arkts-arkgraphics2d-typefacearguments-c.md) | This module defines a struct for setting typeface arguments.&gt; **NOTE**&gt;&gt; - The initial APIs of this class are supported since API version 20.&gt;&gt; - This module uses the physical pixel unit, px.&gt;&gt; - The module operates under a single-threaded model. The caller needs to manage thread safety and context state&gt; transitions. |

### Interfaces

| Name | Description |
| --- | --- |
| [FontFeature](arkts-arkgraphics2d-fontfeature-i.md) | Defines font features, which are typesetting rules within a font that determine how glyphs look, such as ligatures,alternates, and superscripts/subscripts. |
| [FontMetrics](arkts-arkgraphics2d-fontmetrics-i.md) | Describes the attributes that describe the font size and layout. A typeface has similar font metrics. |
| [TextBlobRunBuffer](arkts-arkgraphics2d-textblobrunbuffer-i.md) | Describes a series of consecutive glyphs with the same attributes in a text blob. |

### Enums

| Name | Description |
| --- | --- |
| [BlendMode](arkts-arkgraphics2d-blendmode-e.md) | Enumerates the blend modes. A blend mode combines two colors (source color and destination color) in a specific wayto create a new color. This is commonly used in graphics operations like overlaying, filtering, and masking. Theblending process applies the same logic to the red, green, and blue color channels separately. The alpha channel,however, is handled according to the specific definitions of each blend mode.For brevity, the following abbreviations are used:s: source. d: destination. sa: source alpha. da: destination alpha.The following abbreviations are used in the calculation result:r: used when the calculation method is the same for the four channels (alpha, red, green, and blue channels). ra:used when only the alpha channel is manipulated. **rc**: used when the other three color channels are manipulated.The table below shows the effect of each blend mode, where the yellow rectangle is the source and the blue circleis the destination. |
| [BlurType](arkts-arkgraphics2d-blurtype-e.md) | Enumerates the blur types of a mask filter.\| Name \| Value\| Description \| Diagram \|\| ------ \| - \| ------------------ \| -------- \|\| NORMAL \| 0 \| Both the outer edges and the inner solid parts are blurred.\|![image_BlueType_Normal.png](../../../../reference/apis-arkgraphics2d/figures/zh-ch_image_BlueType_Normal.png)\|\| SOLID \| 1 \| The inner solid part remains unchanged, while only the outer edges are blurred.\|![image_BlueType_Solid.png](../../../../reference/apis-arkgraphics2d/figures/zh-ch_image_BlueType_Solid.png)\|\| OUTER \| 2 \| Only the outer edges are blurred, with the inner solid part being fully transparent.\|![image_BlueType_Outer.png](../../../../reference/apis-arkgraphics2d/figures/zh-ch_image_BlueType_Outer.png)\|\| INNER \| 3 \| Only the inner solid part is blurred, while the outer edges remain sharp.\|![image_BlueType_Inner.png](../../../../reference/apis-arkgraphics2d/figures/zh-ch_image_BlueType_Inner.png)\| |
| [CapStyle](arkts-arkgraphics2d-capstyle-e.md) | Enumerates the cap styles of a pen. The cap style defines the style of both ends of a line segment drawn by thepen. |
| [ClipOp](arkts-arkgraphics2d-clipop-e.md) | Enumerates the canvas clipping modes.&gt; **NOTE**&gt;&gt; The diagrams show the result of cropping a circle based on different enumerated values after a rectangle is&gt; cropped in INTERSECT mode. The green area is the final area obtained. |
| [CornerPos](arkts-arkgraphics2d-cornerpos-e.md) | Enumerates the corner positions of a rounded rectangle. |
| [FilterMode](arkts-arkgraphics2d-filtermode-e.md) | Enumerates the filter modes. |
| [FontEdging](arkts-arkgraphics2d-fontedging-e.md) | Enumerates the font edging types. |
| [FontHinting](arkts-arkgraphics2d-fonthinting-e.md) | Enumerates the font hinting types. |
| [FontMetricsFlags](arkts-arkgraphics2d-fontmetricsflags-e.md) | Enumerates the font measurement flags, which is used to specify whether a field in the[FontMetrics](arkts-arkgraphics2d-fontmetrics-i.md) struct is valid. |
| [JoinStyle](arkts-arkgraphics2d-joinstyle-e.md) | Enumerates the join styles of a pen. The join style defines the shape of the joints of a polyline segment drawn bythe pen. |
| [PathDashStyle](arkts-arkgraphics2d-pathdashstyle-e.md) | Enumerates the drawing styles for path effects.\| Name \| Value\| Description \|\| ------ \| - \| ------------------ \|\| TRANSLATE \| 0 \| Translates only, not rotating with the path.\|\| ROTATE \| 1 \| Rotates with the path.\|\| MORPH \| 2 \| Rotates with the path and stretches or compresses at turns to enhance smoothness.\| |
| [PathDirection](arkts-arkgraphics2d-pathdirection-e.md) | Enumerates the directions of a closed contour. |
| [PathFillType](arkts-arkgraphics2d-pathfilltype-e.md) | Enumerates the fill types of a path.&gt; **NOTE**&gt; ![image_PathFillType_Winding_Even_Odd.png](../../../../reference/apis-arkgraphics2d/figures/zh-ch_image_PathFillType_Winding_Even_Odd.png)&gt; As shown in the above figure, the path is a circle, the arrow indicates the path direction, **p** is any point "&gt; inside" the path, the blue line is the ray emitted from **p**, and the black arrow indicates the fill result&gt; using blue under the corresponding fill type. Under the **WINDING** fill rule, the number of intersection points&gt; of the ray and path is 2 (not 0), and therefore **p** is colored. Under the **EVEN_ODD** filling rule, the number&gt; of intersection points of the ray and path is 2 (an even number), and therefore **p** is not colored. |
| [PathIteratorVerb](arkts-arkgraphics2d-pathiteratorverb-e.md) | Enumerates the path operation types contained in an iterator. It is used to read path operation instructions. |
| [PathMeasureMatrixFlags](arkts-arkgraphics2d-pathmeasurematrixflags-e.md) | Enumerates the dimensions of matrix information in path measurement. It is often used in animation scenarios whereobjects move along a path. |
| [PathOp](arkts-arkgraphics2d-pathop-e.md) | Enumerates the path operation types. It is often used in path combination and clipping scenarios. |
| [PointMode](arkts-arkgraphics2d-pointmode-e.md) | Enumerates the modes for drawing multiple points in an array. |
| [RectType](arkts-arkgraphics2d-recttype-e.md) | Enumerates the types of rectangles used to fill the lattices. Used only in[Lattice](arkts-graphics-drawing.md). |
| [RegionOp](arkts-arkgraphics2d-regionop-e.md) | Enumerates the operations for combining two regions.&gt; **NOTE**&gt;&gt; The schematic diagram shows the result obtained by combining a red region with a blue region at different&gt; operation mode. The green region is the region obtained. |
| [ScaleToFit](arkts-arkgraphics2d-scaletofit-e.md) | Enumerates the modes of scaling a source rectangle into a destination rectangle. |
| [ShadowFlag](arkts-arkgraphics2d-shadowflag-e.md) | Enumerates the shadow drawing behaviors. |
| [SrcRectConstraint](arkts-arkgraphics2d-srcrectconstraint-e.md) | Enumerates the constraints on the source rectangle. It is used to specify whether to limit the sampling rangewithin the source rectangle when drawing an image on a canvas. |
| [TextEncoding](arkts-arkgraphics2d-textencoding-e.md) | Enumerates the text encoding types. |
| [TileMode](arkts-arkgraphics2d-tilemode-e.md) | Enumerates the tile modes of the shader effect. |
| [VertexMode](arkts-arkgraphics2d-vertexmode-e.md) | Enumerates the connection modes for vertex drawing. |

