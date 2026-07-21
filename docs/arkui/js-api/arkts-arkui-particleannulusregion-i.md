# ParticleAnnulusRegion

Configures the annular emitter area.

> **NOTE**  
>  
> - If the value of outerRadius or innerRadius is less than 0 or uses the percentage unit, the value is considered as  
> 0.  
>  
> - If the value of outerRadius is less than that of innerRadius, the smaller value is used as the new inner radius  
> and the larger value is used as the new outer radius.  
>  
> - If the value of endAngle is less than that of startAngle, the smaller value is used as the new start angle and  
> the larger value is used as the new end angle.  
>  
> ![](docroot://reference/apis-arkui/arkui-ts/figures/annulus.png)

**Since:** 20

<!--Device-unnamed-declare interface ParticleAnnulusRegion--><!--Device-unnamed-declare interface ParticleAnnulusRegion-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## center

```TypeScript
center?: PositionT<LengthMetrics>
```

The coordinates of the center of the annulus

**Type:** PositionT&lt;LengthMetrics&gt;

**Default:** {x:LengthMetrics.percent(0.5),y:LengthMetrics.percent(0.5)}

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParticleAnnulusRegion-center?: PositionT<LengthMetrics>--><!--Device-ParticleAnnulusRegion-center?: PositionT<LengthMetrics>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## endAngle

```TypeScript
endAngle?: number
```

The end angle of the annulus, in degree

**Type:** number

**Default:** 360

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParticleAnnulusRegion-endAngle?: number--><!--Device-ParticleAnnulusRegion-endAngle?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## innerRadius

```TypeScript
innerRadius: LengthMetrics
```

The inner radius of the annulus

**Type:** LengthMetrics

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParticleAnnulusRegion-innerRadius: LengthMetrics--><!--Device-ParticleAnnulusRegion-innerRadius: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## outerRadius

```TypeScript
outerRadius: LengthMetrics
```

The outer radius of the annulus

**Type:** LengthMetrics

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParticleAnnulusRegion-outerRadius: LengthMetrics--><!--Device-ParticleAnnulusRegion-outerRadius: LengthMetrics-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## startAngle

```TypeScript
startAngle?: number
```

The start angle of the annulus, in degree

**Type:** number

**Default:** 0

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-ParticleAnnulusRegion-startAngle?: number--><!--Device-ParticleAnnulusRegion-startAngle?: number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

