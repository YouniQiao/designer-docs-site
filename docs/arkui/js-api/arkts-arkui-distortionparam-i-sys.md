# DistortionParam (System API)

Defines the spatial distortion parameters.

> **NOTE**  
>  
> - The coordinates of the four corners of the component can be set as follows: top-left corner: [0, 0], top-right  
> corner: [1, 0], bottom-left corner: [0, 1], bottom-right corner: [1, 1].  
>  
> - For example, if the **bottomLeft** attribute is set to **[0.5, 0.5]**, the bottom-left corner is deformed to the  
> position of the component center, and the corresponding distortion effect is generated.  
>  
> - When setting the coordinates of the four corners, ensure they follow spatial logic. For example, if **topLeft**  
> is **[0, 0.7]** and **bottomLeft** is **[0, 0.2]**, the top-left corner is lower than the bottom-left corner, which  
> violates the spatial logic and may cause rendering exceptions.

**Since:** 26.0.0

<!--Device-unnamed-declare interface DistortionParam--><!--Device-unnamed-declare interface DistortionParam-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## barrelDistortion

```TypeScript
barrelDistortion: Vector4
```

Barrel distortion degree of the four edges.

The four values in **Vector4** are as follows: **x** indicates the left edge, **y** indicates the right edge, **z** indicates the top edge, and **w** indicates the bottom edge.

Default value: **[0, 0, 0, 0]**

A positive value indicates outward distortion, and a negative value indicates inward distortion. When the absolute value of the distortion parameter reaches 1, the distortion degree is extreme.

Recommended value range for x, y, z, and w: **[-1, 1]**

**Type:** Vector4

**Default:** [0, 0, 0, 0]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-DistortionParam-barrelDistortion: Vector4--><!--Device-DistortionParam-barrelDistortion: Vector4-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## bottomLeft

```TypeScript
bottomLeft: Vector2
```

Coordinates of the bottom-left corner.

Default value: **[0, 1]**

**Type:** Vector2

**Default:** [0, 1]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-DistortionParam-bottomLeft: Vector2--><!--Device-DistortionParam-bottomLeft: Vector2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## bottomRight

```TypeScript
bottomRight: Vector2
```

Coordinates of the bottom-right corner.

Default value: **[1, 1]**

**Type:** Vector2

**Default:** [1, 1]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-DistortionParam-bottomRight: Vector2--><!--Device-DistortionParam-bottomRight: Vector2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## topLeft

```TypeScript
topLeft: Vector2
```

Coordinates of the top-left corner.

Default value: **[0, 0]**

**Type:** Vector2

**Default:** [0, 0]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-DistortionParam-topLeft: Vector2--><!--Device-DistortionParam-topLeft: Vector2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## topRight

```TypeScript
topRight: Vector2
```

Coordinates of the top-right corner.

Default value: **[1, 0]**

**Type:** Vector2

**Default:** [1, 0]

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-DistortionParam-topRight: Vector2--><!--Device-DistortionParam-topRight: Vector2-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

