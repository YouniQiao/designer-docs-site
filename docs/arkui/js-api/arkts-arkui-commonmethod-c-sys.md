# CommonMethod

CommonMethod.

**Since:** 11

<!--Device-unnamed-declare class CommonMethod<T>--><!--Device-unnamed-declare class CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="advancedblendmode"></a>
## advancedBlendMode

```TypeScript
advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T
```

Defines how the component's content (including the content of it child components) is blended with the existing content on the canvas (possibly offscreen canvas) below. This API cannot be used with [blendMode](arkts-arkui-commonmethod-c.md#blendmode-1).

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Widget capability:** This API can be used in ArkTS widgets since API version 13.

<!--Device-CommonMethod-advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T--><!--Device-CommonMethod-advancedBlendMode(effect: BlendMode | Blender, type?: BlendApplyType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [BlendMode](arkts-arkui-blendmode-e.md) \| Blender | Yes | Blend mode or blender type, depending on the parameter type.<br>When the parameter type is **BlendMode**, it indicates the blend mode.<br>Default value: **BlendMode.NONE**<br>When the parameter type is **Blender**, it indicates the blender type, used to describe the blending effect.<br>A **Blender** instance must be created using methods, for example,[uiEffect.createBrightnessBlender](docroot://reference/apis-arkgraphics2d/js-apis-uiEffect-sys.md#uieffectcreatebrightnessblender),from the **uiEffect** module. Using a custom object as a parameter will not take effect. |
| type | [BlendApplyType](arkts-arkui-blendapplytype-e-sys.md) | No | Whether the blend mode is implemented offscreen.<br>Default value:**BlendApplyType.FAST**<br>**NOTE**<br>1. When this parameter is set to **BlendApplyType.FAST**, the blend mode is not implemented offscreen.<br>2. When this parameter is set to **BlendApplyType.OFFSCREEN**, an offscreen canvas matching the size of the current component is created. The content of the current component (including its child components) is then drawn onto the offscreen canvas, and blended with the existing content on the underlying canvas using the specified blend mode.<br>3. For text components, this API does not apply to emoji expressions when not offscreen.<br>4. Compared with **BlendApplyType.OFFSCREEN**, when this parameter is set to **BlendApplyType.OFFSCREEN_WITH_BACKGROUND**, the system first copies a canvas with a background as the initial background color (the canvas for **BlendApplyType.OFFSCREEN** starts with a transparent background) when creating an offscreen canvas matching the current component's size. The blending operation is then performed on this base. The two modes are identical in all other functional aspects. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="constructor"></a>
## constructor

```TypeScript
constructor()
```

constructor.

**Since:** 9

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-constructor()--><!--Device-CommonMethod-constructor()-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

<a id="edgelight"></a>
## edgeLight

```TypeScript
edgeLight(params: EdgeLightParams | undefined): T
```

Sets the edge light effect for the component.

<p><strong>NOTE</strong>:<br>The edge light effect creates a glowing light effect along the component's edges,starting from the specified position and extending along the edge.<br>This effect can enhance the visual appeal and highlight important components.</p>

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CommonMethod-edgeLight(params: EdgeLightParams | undefined): T--><!--Device-CommonMethod-edgeLight(params: EdgeLightParams | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [EdgeLightParams](arkts-arkui-edgelightparams-i-sys.md) \| undefined | Yes | Edge light effect parameters.Defines the position, length, intensity, color, and thickness of the light effect.If params is undefined, the edge light effect is removed. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@systemapi@stagemodelonly |

<a id="excludefromrendergroup"></a>
## excludeFromRenderGroup

```TypeScript
excludeFromRenderGroup(exclude: boolean | undefined): T
```

Sets whether the current component and its child components are removed from the render group of the ancestor component. If this attribute is used alone, no effect is achieved. It must be used with the [renderGroup](arkts-arkui-commonmethod-c.md#rendergroup-1) attribute of the ancestor component.

Removing the current component and its children from the render group does not affect the offscreen canvas of the ancestor component, and the cache of the render group is still valid. In this way, the render group cache can be reused. If the display area of the current component occupies only a part of the display area of the render group drawing content, and the display effect of the current component and its children is frequently updated, setting **excludeFromRenderGroup** helps optimize the drawing performance.

If this attribute is not set, the current component and its children are not removed from the render group of the ancestor component by default.

> **NOTE**  
>  
> The drawing content of the component with **excludeFromRenderGroup** set to **true** and its children cannot the  
> component's own boundary range. Otherwise, the displayed content may be clipped. For example, if the child  
> component exceeds the boundary range of the current component due to attributes such as  
> [translate](arkts-arkui-commonmethod-c.md#translate-1) or  
> [scale](arkts-arkui-commonmethod-c.md#scale-1), or the drawing content extend beyond its boundaries  
> because the current component has attributes such as  
> [shadow](arkts-arkui-commonmethod-c.md#shadow-1) and  
> [pixelStretchEffect](arkts-arkui-commonmethod-c.md#pixelstretcheffect-1), the displayed  
> content may be clipped. In such scenarios, **excludeFromRenderGroup** should not be set to **true**.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

<!--Device-CommonMethod-excludeFromRenderGroup(exclude: boolean | undefined): T--><!--Device-CommonMethod-excludeFromRenderGroup(exclude: boolean | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| exclude | boolean \| undefined | Yes | Whether to remove the current component and its child components from the render group of the ancestor component.<br>**true**: yes. **false**: no.<br>If **exclude** is set to **undefined**, the value **false** is used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="spatialeffect"></a>
## spatialEffect

```TypeScript
spatialEffect(params: SpatialEffectParams | undefined): T
```

Applies a spatial effect to component.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-spatialEffect(params: SpatialEffectParams | undefined): T--><!--Device-CommonMethod-spatialEffect(params: SpatialEffectParams | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [SpatialEffectParams](arkts-arkui-spatialeffectparams-i-sys.md) \| undefined | Yes | Spatial effect parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@systemapi@stagemodelonly@atomicservice |

<a id="systemmaterial"></a>
## systemMaterial

```TypeScript
systemMaterial(material: SystemUiMaterial | undefined): T
```

Sets the system material for a component. Different system materials have different attribute effects. This API affects the background color ([backgroundColor](arkts-arkui-commonmethod-c.md#backgroundcolor-1)), border color ([borderColor](arkts-arkui-commonmethod-c.md#bordercolor-1)), border width ([borderWidth](arkts-arkui-commonmethod-c.md#borderwidth-1)), and shadow ([shadow](arkts-arkui-commonmethod-c.md#shadow-1)). You are advised not to use this API together with the aforementioned APIs. For details about the example, see [Setting the System Material](docroot://reference/apis-arkui/arkts-apis-uimaterial-sys.md#example-1-setting-the-system-material).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-CommonMethod-systemMaterial(material: SystemUiMaterial | undefined): T--><!--Device-CommonMethod-systemMaterial(material: SystemUiMaterial | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| material | [SystemUiMaterial](arkts-arkui-systemuimaterial-t-sys.md) \| undefined | Yes | System material object of the component. Setting it to **undefined** will make the component return to the no-material effect. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="useunioneffect"></a>
## useUnionEffect

```TypeScript
useUnionEffect(value: boolean | undefined): T
```

Specify whether the current component participates in the fusion effect of the ancestor component UnionEffectContainer

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-CommonMethod-useUnionEffect(value: boolean | undefined): T--><!--Device-CommonMethod-useUnionEffect(value: boolean | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| undefined | Yes | Whether the component participates in the fusion effect of the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.<br>Default value: **false**. Undefined means to default value. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

<a id="useunioneffect-1"></a>
## useUnionEffect

```TypeScript
useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): T
```

Specify whether the current component participates in the fusion effect of the ancestor component UnionEffectContainer

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

<!--Device-CommonMethod-useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): T--><!--Device-CommonMethod-useUnionEffect(value: boolean | undefined, options?: GravityCenterOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| undefined | Yes | Whether the component participates in the fusion effect of the ancestor component **UnionEffectContainer**.<br>The value **true** means that the component participates in the fusion effect of the ancestor component **UnionEffectContainer**, and **false** means the opposite.<br>Default value: **false**. Undefined means to default value. |
| options | [GravityCenterOptions](arkts-arkui-gravitycenteroptions-i-sys.md) | No | Gravitational center parameter.This parameter must be used together with UnionMode.GRAVITY_UNION. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

