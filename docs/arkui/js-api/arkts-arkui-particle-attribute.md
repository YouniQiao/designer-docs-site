# Particle properties/events

Defines the Particle component attribute functions.

**Inheritance/Implementation:** ParticleAttribute extends [CommonMethod<ParticleAttribute>](CommonMethod<ParticleAttribute>)

**Since:** 10

<!--Device-unnamed-declare class ParticleAttribute extends CommonMethod<ParticleAttribute>--><!--Device-unnamed-declare class ParticleAttribute extends CommonMethod<ParticleAttribute>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disturbanceFields

```TypeScript
disturbanceFields(fields: Array<DisturbanceFieldOptions>)
```

Sets the disturbance fields.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParticleAttribute-disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute--><!--Device-ParticleAttribute-disturbanceFields(fields: Array<DisturbanceFieldOptions>): ParticleAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<DisturbanceFieldOptions> | Yes | Array of disturbance fields. |

## emitter

```TypeScript
emitter(value: Array<EmitterProperty>)
```

Sets the emitter parameters.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-ParticleAttribute-emitter(value: Array<EmitterProperty>): ParticleAttribute--><!--Device-ParticleAttribute-emitter(value: Array<EmitterProperty>): ParticleAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<EmitterProperty> | Yes | Array of emitter parameters to set. |

## rippleFields

```TypeScript
rippleFields(fields: Array<RippleFieldOptions> | undefined)
```

Sets the particle wave field. The wave field applies a force that changes according to the waveform to particles within the affected range, producing an effect similar to the spreading of ripples.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParticleAttribute-rippleFields(fields: Array<RippleFieldOptions> | undefined): ParticleAttribute--><!--Device-ParticleAttribute-rippleFields(fields: Array<RippleFieldOptions> | undefined): ParticleAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<RippleFieldOptions> \| undefined | Yes | Particle wave field array. You can set multiple particle wave fields in array form. If this parameter is set to undefined, no wave field is available. |

## velocityFields

```TypeScript
velocityFields(fields: Array<VelocityFieldOptions> | undefined)
```

Sets the particle velocity field. The velocity field applies a force to particles within the affected range, so that the particles move at the velocity specified by the velocity field in addition to their original velocity.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-ParticleAttribute-velocityFields(fields: Array<VelocityFieldOptions> | undefined): ParticleAttribute--><!--Device-ParticleAttribute-velocityFields(fields: Array<VelocityFieldOptions> | undefined): ParticleAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fields | [Array](../../apis-na/arkts-apis/arkts-na-lib-es5-array-i.md)<VelocityFieldOptions> \| undefined | Yes | Particle velocity field array. You can set multiple particle velocity fields in array form. If this parameter is set to undefined, there is no velocity field. |

