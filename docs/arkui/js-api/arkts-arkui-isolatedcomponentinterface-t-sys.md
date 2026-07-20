# IsolatedComponentInterface (System API)

```TypeScript
declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute
```

Provide an interface for the IsolatedComponent, which is used to render UI of other ABC

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute--><!--Device-unnamed-declare type IsolatedComponentInterface = (options: IsolatedOptions) => IsolatedComponentAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | IsolatedOptions | Yes | Construction configuration of IsolatedComponentAttribute |

**Return value:**

| Type | Description |
| --- | --- |
| IsolatedComponentAttribute | Attribute of IsolatedComponent |

