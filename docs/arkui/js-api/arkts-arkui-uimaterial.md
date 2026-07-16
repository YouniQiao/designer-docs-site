# @ohos.arkui.uiMaterial

This module provides APIs for system materials. Different system materials correspond to different UI effects,
including the background color ([backgroundColor](../arkts-components/arkts-arkui-commonmethod-c.md#backgroundcolor-1)), border
color ([borderColor](../arkts-components/arkts-arkui-commonmethod-c.md#bordercolor-1)), border width ([borderWidth](../arkts-components/arkts-arkui-commonmethod-c.md#borderwidth-1)),
and shadow ([shadow](../arkts-components/arkts-arkui-commonmethod-c.md#shadow-1)).

**Since:** 26.0.0

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

## Modules to Import

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## Summary

### Functions

| Name | Description |
| --- | --- |
| [getGlobalMaterialLevel](arkts-arkui-getglobalmateriallevel-f.md#getglobalmateriallevel-1) | Obtains the global material level, which is related to the device computing power. This configuration itemis defined by the device and cannot be modified. |
| [getMaterialInfo](arkts-arkui-getmaterialinfo-f.md#getmaterialinfo-1) | Obtains the material configuration information of this application. The returned configuration information comes from the metadata configured in the [module.json5](../../../../quick-start/module-configuration-file.md) file of the application. |
| [isImmersiveMaterialSupported](arkts-arkui-isimmersivematerialsupported-f.md#isimmersivematerialsupported-1) | Check whether [ImmersiveMaterial](arkts-arkui-immersivematerial-c.md) is supported on the current device.If it is true, the ImmersiveMaterial object can be used in the[systemMaterial](CommonMethod#systemMaterial(material: SystemUiMaterial \| undefined)) attribute.If it is false, setting the ImmersiveMaterial object in the systemMaterial attribute will not take effect.It is defined by the device and cannot be modified. |

<!--Del-->
### Functions（系统接口）

| Name | Description |
| --- | --- |
| [convertToECMaterial](arkts-arkui-converttoecmaterial-f-sys.md#converttoecmaterial-1) | Convert from ImmersiveMaterial to another ImmersiveMaterial set on EffectComponent. |
| [convertToECSubMaterial](arkts-arkui-converttoecsubmaterial-f-sys.md#converttoecsubmaterial-1) | Convert from ImmersiveMaterial to another ImmersiveMaterial set on sub component of EffectComponent. |
<!--DelEnd-->

### Classes

| Name | Description |
| --- | --- |
| [ImmersiveMaterial](arkts-arkui-immersivematerial-c.md) | Immersive material class, which inherits from [Material](arkts-arkui-materialtype-e.md).The performance of an immersive material varies based on device computing power. The high, medium, and low levels of device computing power are determined by device vendors and defined in the system configuration files. On devices with high- and mid-level computing power, the filter and [shadow](CommonMethod#shadow(value: ShadowOptions \| ShadowStyle)) effects of the material layer are affected.On devices with low-level computing power, the [background color](../arkts-components/arkts-arkui-commonmethod-c.md#backgroundcolor-1), [border color](../arkts-components/arkts-arkui-commonmethod-c.md#bordercolor-1), [border width](../arkts-components/arkts-arkui-commonmethod-c.md#borderwidth-1), and [shadow](CommonMethod#shadow(value: ShadowOptions \| ShadowStyle)) effects are affected. In addition, the effect of the same material is affected by the immersive light configuration in the application. The material parameters and effects vary depending on the immersive light configuration. |
| [Material](arkts-arkui-material-c.md) | System material object on the UI. |

<!--Del-->
### Classes（系统接口）

| Name | Description |
| --- | --- |
| [Material](arkts-arkui-material-c-sys.md) | System material object on the UI. |
<!--DelEnd-->

### Interfaces

| Name | Description |
| --- | --- |
| [ImmersiveOptions](arkts-arkui-immersiveoptions-i.md) | Immersive material parameters. |
| [LightEffectOptions](arkts-arkui-lighteffectoptions-i.md) | Provides the light sensing interaction feedback configuration for immersive materials. The configuration is used tocustomize the color of the light sensing feedback. |
| [MaterialInfo](arkts-arkui-materialinfo-i.md) | Provides material configuration information, including the material enabling state and material type. |

<!--Del-->
### Interfaces（系统接口）

| Name | Description |
| --- | --- |
| [MaterialOptions](arkts-arkui-materialoptions-i-sys.md) | System material options. |
<!--DelEnd-->

### Enums

| Name | Description |
| --- | --- |
| [ImmersiveStyle](arkts-arkui-immersivestyle-e.md) | Enumerates immersive material styles. Different material styles correspond to different material parameters, including the blur degree and brightness. |
| [MaterialLevel](arkts-arkui-materiallevel-e.md) | Enumerates the material levels, which indicate the computing power level of the device.Use [getGlobalMaterialLevel](arkts-arkui-getglobalmateriallevel-f.md#getglobalmateriallevel-1) to obtain the material levelof the current device. |
| [MaterialState](arkts-arkui-materialstate-e.md) | Enumerates the material enabling states, indicating the states of the application-level immersive system material configuration. |
| [MaterialType](arkts-arkui-materialtype-e.md) | Enumerates system material types. |

<!--Del-->
### Enums（系统接口）

| Name | Description |
| --- | --- |
| [ImmersiveStyle](arkts-arkui-immersivestyle-e-sys.md) | Enumerates immersive material styles. Different material styles correspond to different material parameters, including the blur degree and brightness. |
| [MaterialType](arkts-arkui-materialtype-e-sys.md) | Enumerates system material types. |
<!--DelEnd-->

