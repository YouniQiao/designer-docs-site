# ImmersiveMaterial

Immersive material class, which inherits from [Material](arkts-arkui-uimaterial-materialtype-e-sys.md).

The performance of an immersive material varies based on device computing power. The high, medium, and low levels of device computing power are determined by device vendors and defined in the system configuration files. On devices with high- and mid-level computing power, the filter and [shadow](../arkts-components/arkts-arkui-common-commonmethod-c.md#shadow-1) effects of the material layer are affected.On devices with low-level computing power, the [background color](../arkts-components/arkts-arkui-common-commonmethod-c.md#backgroundcolor-1),[border color](../arkts-components/arkts-arkui-common-commonmethod-c.md#bordercolor-1), [border width](../arkts-components/arkts-arkui-common-commonmethod-c.md#borderwidth-1), and [shadow](../arkts-components/arkts-arkui-common-commonmethod-c.md#shadow-1) effects are affected. In addition, the effect of the same material is affected by the immersive light configuration in the application. The material parameters and effects vary depending on the immersive light configuration.

**Inheritance/Implementation:** ImmersiveMaterial extends [Material](arkts-arkui-uimaterial-material-c-sys.md)

**Since:** 26.0.0

<!--Device-uiMaterial-class ImmersiveMaterial extends Material--><!--Device-uiMaterial-class ImmersiveMaterial extends Material-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Modules to Import

```TypeScript
import { uiMaterial } from '@kit.ArkUI';
```

## constructor

```TypeScript
constructor(options?: ImmersiveOptions)
```

Constructs **ImmersiveMaterial**.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-ImmersiveMaterial-constructor(options?: ImmersiveOptions)--><!--Device-ImmersiveMaterial-constructor(options?: ImmersiveOptions)-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ImmersiveOptions](arkts-arkui-uimaterial-immersiveoptions-i.md) | No | System material configuration options, including the material style and material layer coloring.<br>For details about the default values, see the default values of the parameters in the **ImmersiveOptions** API, that is,**{style:ImmersiveStyle.REGULAR, materialColor:Color.Transparent, colorInvert:false, applyShadow:true, interactive:false, lightEffect:undefined}**. |

