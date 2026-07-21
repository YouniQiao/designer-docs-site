# CommonMethod

CommonMethod.

**Since:** 11

<!--Device-unnamed-declare class CommonMethod<T>--><!--Device-unnamed-declare class CommonMethod<T>-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="accessibilityactionoptions"></a>
## accessibilityActionOptions

```TypeScript
accessibilityActionOptions(option: AccessibilityActionOptions | undefined): T
```

Provides optional parameters for setting accessibility operations of a component, which is used to restrict or<br>modify the operations initiated by accessibility applications such as the screen reader.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-CommonMethod-accessibilityActionOptions(option: AccessibilityActionOptions | undefined): T--><!--Device-CommonMethod-accessibilityActionOptions(option: AccessibilityActionOptions | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| option | [AccessibilityActionOptions](../arkts-apis/arkts-arkui-accessibilityactionoptions-i.md) \| undefined | Yes | Parameter of the accessibility operation, which is used<br>to restrict or modify the sliding behavior in the accessibility operation.<br>The **scrollStep** parameter in **AccessibilityActionOptions** is used to set the number of sliding steps in<br>the accessibility operation. When the value is **undefined**, **scrollStep** is processed as **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return component instance who call the method. |

<a id="accessibilitychecked"></a>
## accessibilityChecked

```TypeScript
accessibilityChecked(isCheck: boolean): T
```

Sets the checked state for the accessibility node. This API is used in multi-select scenarios and only affects<br>component state announcements in screen reading scenarios.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**Widget capability:** This API can be used in ArkTS widgets since API version 13.

<!--Device-CommonMethod-accessibilityChecked(isCheck: boolean): T--><!--Device-CommonMethod-accessibilityChecked(isCheck: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isCheck | boolean | Yes | Whether the current component is selected.<br>**true**: The component is selected.<br>**false**: The component is not selected.<br>**undefined**: The component determines its own selected state.<br>Default value: **undefined** |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitycustomactions"></a>
## accessibilityCustomActions

```TypeScript
accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): T
```

Sets the custom accessibility operations of the component, allowing developers to set an array of custom actions<br>for binding custom operation callbacks to components by operation name.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-CommonMethod-accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): T--><!--Device-CommonMethod-accessibilityCustomActions(actions: Array<AccessibilityCustomAction> | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| actions | Array&lt;AccessibilityCustomAction&gt; \| undefined | Yes | Array of custom accessibility operations, where<br>each operation contains an operation name and a callback, used for binding custom operation callbacks to<br>components by operation name.<br>**NOTE**: The array supports a maximum of 16 entries; any excess will not take effect.<br>When the value is **undefined**, no custom operations are set. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return component instance who call method. |

<a id="accessibilitydefaultfocus"></a>
## accessibilityDefaultFocus

```TypeScript
accessibilityDefaultFocus(focus: boolean): T
```

Sets the initial screen reader focus on the page.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-accessibilityDefaultFocus(focus: boolean): T--><!--Device-CommonMethod-accessibilityDefaultFocus(focus: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| focus | boolean | Yes | Initial screen reader focus on the page. The value **true** means the component is the<br>default initial focus for screen readers on the current page. Other values are ignored. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitydescription"></a>
## accessibilityDescription

```TypeScript
accessibilityDescription(value: string): T
```

Sets the accessibility description.<br>This attribute provides additional context and explanation for the component, helping users understand its<br>functionality and purpose.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityDescription(value: string): T--><!--Device-CommonMethod-accessibilityDescription(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Accessibility description. You can specify further explanation of the current component,<br>such as potential operation consequences that cannot be inferred from component attributes or accessibility text.<br>If a component contains both text content and the accessibility description, the screen reader announces the<br>text first, followed by the accessibility description, when the component is selected.<br>Default value: **""** |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form |

<a id="accessibilitydescription-1"></a>
## accessibilityDescription

```TypeScript
accessibilityDescription(description: Resource): T
```

Sets the accessibility description, with support for resource references using Resource.<br>This attribute provides additional context and explanation for the component, helping users understand its<br>functionality and purpose.<p><strong>NOTE</strong>:<br>Reference resource of the accessibility description. You can specify further explanation<br>of the current component, for example, possible operation consequences, especially those that<br>cannot be learned from component attributes and accessibility text. If a component contains<br>both text information and the accessibility description, the text is read first and then the<br>accessibility description, when the component is selected.</p>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityDescription(description: Resource): T--><!--Device-CommonMethod-accessibilityDescription(description: Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| description | [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) | Yes | set description of accessibility |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilityfocusdrawlevel"></a>
## accessibilityFocusDrawLevel

```TypeScript
accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T
```

Sets the drawing level for the accessibility focus highlight (green frame).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**Widget capability:** This API can be used in ArkTS widgets since API version 19.

<!--Device-CommonMethod-accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T--><!--Device-CommonMethod-accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| drawLevel | [FocusDrawLevel](../arkts-apis/arkts-arkui-focusdrawlevel-e.md) | Yes | Drawing level for the accessibility focus highlight frame. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitygroup"></a>
## accessibilityGroup

```TypeScript
accessibilityGroup(value: boolean): T
```

Sets whether to enable accessibility grouping.

<p><strong>NOTE</strong><br>Whether to enable accessibility grouping. When accessibility grouping is enabled,<br>the component and all its children are treated as a single selectable unit, and the accessibility<br>service will no longer focus on the individual child components.</p>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityGroup(value: boolean): T--><!--Device-CommonMethod-accessibilityGroup(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | set group with accessibility, default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitygroup-1"></a>
## accessibilityGroup

```TypeScript
accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T
```

Sets whether to enable accessibility grouping.

<p><strong>NOTE</strong><br>If accessibility grouping is enabled and the component does not contain a universal text attribute<br>or an accessibility text attribute, the system will concatenate the universal text attributes of<br>its child components to form a merged text for the component. If a child component lacks a universal<br>text attribute, it will be ignored in the concatenation process.

<br>When accessibilityPreferred is set to true, the system will prioritize concatenating the accessibility<br>text attributes of the child components to form the merged text. If a child component lacks an<br>accessibility text attribute, the system will continue to concatenate its universal text attribute.<br>If a child component lacks both, it will be ignored.</p>

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**Widget capability:** This API can be used in ArkTS widgets since API version 14.

<!--Device-CommonMethod-accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T--><!--Device-CommonMethod-accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isGroup | boolean | Yes | set group with accessibility, default value is false. |
| accessibilityOptions | [AccessibilityOptions](../arkts-apis/arkts-arkui-accessibilityoptions-i.md) | Yes | accessibilityOptions for accessibility, default value is false. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitylevel"></a>
## accessibilityLevel

```TypeScript
accessibilityLevel(value: string): T
```

Sets the accessibility level.This property determines whether the component can be recognized by accessibility services.<p>Accessibility level, which is used to decide whether a component can be identified by the accessibility service.<br>The options are as follows:<br>"auto": The component's recognizability is determined by the accessibility grouping service and ArkUI.<br>"yes": The component can be recognized by accessibility services.<br>"no": The component cannot be recognized by accessibility services.<br>"no-hide-descendants": Neither the component nor its child components can be recognized by accessibility services.<strong>NOTE</strong><br>When accessibilityLevel is set to "auto", the component's recognizability depends on the following factors:<br>1. The accessibility service internally determines whether the component can be recognized.<br>2. If the parent component's accessibilityGroup property has isGroup set to true, the accessibility service will<br>not focus on its child components, making them unrecognizable.<br>3. If the parent component's accessibilityLevel is set to "no-hide-descendants", the component will not be<br>recognized by accessibility services.</p>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityLevel(value: string): T--><!--Device-CommonMethod-accessibilityLevel(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | set accessibility level, default value is auto. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitynextfocusid"></a>
## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId(nextId: string): T
```

Sets the next component to receive focus during screen reader navigation.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-accessibilityNextFocusId(nextId: string): T--><!--Device-CommonMethod-accessibilityNextFocusId(nextId: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nextId | string | Yes | [Unique ID](arkts-arkui-commonmethod-c.md#id-1) of the next component to receive focus.<br>If the ID does not correspond to any component, the setting is ignored. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitynextfocusid-1"></a>
## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T
```

Sets the next component to receive focus during screen reader navigation, with optional detailed parameters.The detailed parameters can provide additional behavior for the accessibility focus transition.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-CommonMethod-accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T--><!--Device-CommonMethod-accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nextId | string | Yes | [Unique ID](arkts-arkui-commonmethod-c.md#id-1) of the next component to receive focus.<br>If the ID does not correspond to any component, the setting is ignored. |
| nextFocusParams | [AccessibilityNextFocusParams](../arkts-apis/arkts-arkui-accessibilitynextfocusparams-i.md) \| undefined | Yes | Detailed parameters for accessibility next<br>focus processing, used to configure whether to search for focusable nodes among descendant nodes.<br>When the value is **undefined**, no detailed parameters are configured and no focus search is performed<br>among descendant nodes. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitynextfocusid-2"></a>
## accessibilityNextFocusId

```TypeScript
accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T
```

Enable or disable specific smart gesture shortcuts, and set response priorities for them.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-CommonMethod-accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T--><!--Device-CommonMethod-accessibilityNextFocusId(nextId: string, nextFocusParams : AccessibilityNextFocusParams | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nextId | string | Yes |  |
| nextFocusParams | [AccessibilityNextFocusParams](../arkts-apis/arkts-arkui-accessibilitynextfocusparams-i.md) \| undefined | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | return component instance who call the method. |

<a id="accessibilityrole"></a>
## accessibilityRole

```TypeScript
accessibilityRole(role: AccessibilityRoleType): T
```

Sets the role type of the accessibility component, which affects how the component is announced by screen readers.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-accessibilityRole(role: AccessibilityRoleType): T--><!--Device-CommonMethod-accessibilityRole(role: AccessibilityRoleType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| role | [AccessibilityRoleType](arkts-arkui-accessibilityroletype-e.md) | Yes | Role of the component as announced by screen readers (for example, button or<br>chart). You can define custom roles. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilityscrolltriggerable"></a>
## accessibilityScrollTriggerable

```TypeScript
accessibilityScrollTriggerable(isTriggerable: boolean): T
```

Sets whether the accessibility node triggers automatic screen scrolling. When no focusable components are visible<br>on the current page within a container, this setting determines whether automatic scrolling is initiated.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-accessibilityScrollTriggerable(isTriggerable: boolean): T--><!--Device-CommonMethod-accessibilityScrollTriggerable(isTriggerable: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTriggerable | boolean | Yes | Whether the component triggers automatic scrolling for screen readers when the<br>current page has no focusable components.<br>**true**: The component triggers automatic scrolling.<br>**false**: The component does not trigger automatic scrolling.<br>**undefined**: The default settings are restored.<br>Default value: **true** |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilityselected"></a>
## accessibilitySelected

```TypeScript
accessibilitySelected(isSelect: boolean): T
```

Sets the checked state for the accessibility node. This API is used in single-select scenarios and only affects<br>component state announcements in screen reading scenarios.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

**Widget capability:** This API can be used in ArkTS widgets since API version 13.

<!--Device-CommonMethod-accessibilitySelected(isSelect: boolean): T--><!--Device-CommonMethod-accessibilitySelected(isSelect: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isSelect | boolean | Yes | Whether the current component is selected.<br>**true**: The component is selected.<br>**false**: The component is not selected.<br>**undefined**: The component determines its own selected state.<br>Default value: **undefined** |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitystatedescription"></a>
## accessibilityStateDescription

```TypeScript
accessibilityStateDescription(description: string | Resource | undefined): T
```

Sets the state description of a component for broadcasting, which clearly describes the real-time state of the<br>component in screen reading scenarios. Screen reader will broadcast the state description first.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

**Widget capability:** This API can be used in ArkTS widgets since API version 23.

<!--Device-CommonMethod-accessibilityStateDescription(description: string | Resource | undefined): T--><!--Device-CommonMethod-accessibilityStateDescription(description: string | Resource | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| description | string \| Resource \| undefined | Yes | Text to be broadcasted for the current state of the component.<br>If the text contains more than 1000 characters, the first 1000 characters will be broadcasted.<br>**undefined**: The text is empty by default. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return component instance who call the method. |

<a id="accessibilitytext"></a>
## accessibilityText

```TypeScript
accessibilityText(value: string): T
```

Sets the accessibility text.When a component does not contain a text attribute, you can use this API to set an accessibility text attribute, so that accessibility services can announce the specified content for the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityText(value: string): T--><!--Device-CommonMethod-accessibilityText(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | set accessibility text, default value is "". |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitytext-1"></a>
## accessibilityText

```TypeScript
accessibilityText(text: Resource): T
```

Sets the accessibility text.

<p><strong>NOTE</strong>If a component has both text content and accessibility text, only the accessibility text is announced.<br>If a component is grouped for accessibility purposes but lacks both text content and accessibility<br>text, the screen reader will concatenate text from its child components (depth-first traversal).<br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.</p>

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityText(text: Resource): T--><!--Device-CommonMethod-accessibilityText(text: Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| text | [Resource](../../apis-localization-kit/arkts-apis/arkts-localization-resource-resource-i.md) | Yes | set accessibility text |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilitytexthint"></a>
## accessibilityTextHint

```TypeScript
accessibilityTextHint(value: string): T
```

Sets the text hint for the component, which can be queried by accessibility services.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityTextHint(value: string): T--><!--Device-CommonMethod-accessibilityTextHint(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes | Text hint for the component, which can be queried by accessibility services. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilityusesamepage"></a>
## accessibilityUseSamePage

```TypeScript
accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T
```

Sets the same-page mode for the current component and its host application.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T--><!--Device-CommonMethod-accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pageMode | [AccessibilitySamePageMode](arkts-arkui-accessibilitysamepagemode-e.md) | Yes | Same-page mode for the cross-process embedded component<br>and the host application. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="accessibilityvirtualnode"></a>
## accessibilityVirtualNode

```TypeScript
accessibilityVirtualNode(builder: CustomBuilder): T
```

Sets an accessibility virtual child node. For custom drawing components, a **CustomBuilder** is passed, which is<br>used to provide accessibility information. The components within the **CustomBuilder** are only used for layout<br>and not for display.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-accessibilityVirtualNode(builder: CustomBuilder): T--><!--Device-CommonMethod-accessibilityVirtualNode(builder: CustomBuilder): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Accessibility virtual node. Pass a custom builder to the custom drawing component.<br>The components within the custom builder are used for layout only and are not visually rendered. When<br>accessibility services retrieve node information, the node information from the custom builder is returned. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form |

<a id="align"></a>
## align

```TypeScript
align(value: Alignment): T
```

Sets the alignment mode for child elements within the container's drawing area. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-align(value: Alignment): T--><!--Device-CommonMethod-align(value: Alignment): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Alignment](../arkts-apis/arkts-arkui-alignment-e.md) | Yes | Alignment mode for child elements in container drawing area.This setting takes effect only in [Stack](../../apis-arkts/arkts-apis/arkts-arkts-util-stack-stack-c.md),[FolderStack](FolderStack),[Shape](Shape),[Button](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-mouseevent-button-e.md),[Marquee](Marquee),[StepperItem](StepperItem),[Text](Text),[TextArea](TextArea),[TextInput](TextInput),[RichEditor](RichEditor),[Hyperlink](Hyperlink),[SymbolGlyph](SymbolGlyph),[ListItem](ListItem),[GridItem](GridItem),[Scroll](Scroll),[FlowItem](FlowItem),[ImageAnimator](ImageAnimator),[LoadingProgress](LoadingProgress),[PatternLock](PatternLock),[Progress](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-progress-i.md),[QRCode](QRCode),[TextClock](TextClock),[TextTimer](TextTimer),[MenuItem](StMenuItemack),[Toggle](Toggle),[Checkbox](Checkbox), and [NodeContainer](NodeContainer).For the alignment of the **Marquee**, **Text**, **TextArea**, **TextInput**, **RichEditor**, and **Hyperlink** components related to text, see [textAlign](TextAttribute#textAlign).If a component does not support the **textAlign** attribute, horizontal text alignment cannot be configured.<br>Default value: **Alignment.Center**<br>**NOTE**<br>This attribute supports the mirroring capability only in the [Stack](../../apis-arkts/arkts-apis/arkts-arkts-util-stack-stack-c.md) component.In the **Stack** component, this attribute has the same effect as **alignContent**, which means that it sets the alignment mode of child components in the container |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="align-1"></a>
## align

```TypeScript
align(alignment: Alignment | LocalizedAlignment): T
```

Sets the alignment mode for child elements within the container's drawing area. The mirroring capability is supported. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-CommonMethod-align(alignment: Alignment | LocalizedAlignment): T--><!--Device-CommonMethod-align(alignment: Alignment | LocalizedAlignment): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignment | [Alignment](../arkts-apis/arkts-arkui-alignment-e.md) \| LocalizedAlignment | Yes | Alignment mode for child elements in container drawing area.The mirroring capability is supported.The [LocalizedAlignment](../arkts-apis/arkts-arkui-localizedalignment-e.md) type is effective only in the following components: [Shape](Shape),[Button](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-mouseevent-button-e.md),[GridItem](GridItem),[FlowItem](FlowItem),[ImageAnimator](ImageAnimator),[LoadingProgress](LoadingProgress),[PatternLock](PatternLock),[Progress](../../apis-core-file-kit/arkts-apis/arkts-corefile-file-fs-progress-i.md),[QRCode](QRCode),[TextClock](TextClock),[TextTimer](TextTimer),[StepperItem](StepperItem),[MenuItem](MenuItem),[Toggle](MenuItem),[Checkbox](Checkbox), and [ListItem](ListItem).For the above components, mirror switching is effective for all except the [ListItem](ListItem), component, which behaves identically to [Alignment](../arkts-apis/arkts-arkui-alignment-e.md). Components where **LocalizedAlignment** is not applicable will be rendered in accordance with their default behavior.<br>Default value: **Alignment.Center**, **LocalizedAlignment.CENTER**.If an invalid value is passed, the default value will be used, indicating center alignment.<br>**NOTE**<br>The [Alignment](../arkts-apis/arkts-arkui-alignment-e.md) type does not support the mirroring capability. The [LocalizedAlignment](../arkts-apis/arkts-arkui-localizedalignment-e.md) type supports mirroring based on the layout direction(configurable via [direction](arkts-arkui-commonmethod-c.md#direction-1)) or system language. The **direction** setting takes precedence over the system language direction. When **direction** is explicitly set to any value other than **auto**, **LocalizedAlignment** mirroring follows the specified direction. If **direction** is set to **auto** or not configured, **LocalizedAlignment** mirroring adapts to the system language direction |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="alignrules"></a>
## alignRules

```TypeScript
alignRules(value: AlignRuleOption): T
```

Sets the alignment rule for child components within the relative container. This attribute only takes effect when the parent container is [RelativeContainer](RelativeContainer),and supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-alignRules(value: AlignRuleOption): T--><!--Device-CommonMethod-alignRules(value: AlignRuleOption): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [AlignRuleOption](arkts-arkui-alignruleoption-i.md) | Yes | Alignment rules in the relative container. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="alignrules-1"></a>
## alignRules

```TypeScript
alignRules(alignRule: LocalizedAlignRuleOptions): T
```

Sets the alignment rules in the relative container. This API is valid only when the container is [RelativeContainer](RelativeContainer),.This attribute replaces the original **left** and **right** directional parameters with **start** and **end** to support proper mirroring in right-to-left (RTL) layout modes. It is recommended that you use this attribute for configuring child component alignment rules in relative containers. This attribute supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-alignRules(alignRule: LocalizedAlignRuleOptions): T--><!--Device-CommonMethod-alignRules(alignRule: LocalizedAlignRuleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignRule | [LocalizedAlignRuleOptions](arkts-arkui-localizedalignruleoptions-i.md) | Yes | Alignment rules in the relative container. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="alignself"></a>
## alignSelf

```TypeScript
alignSelf(value: ItemAlign): T
```

Sets the alignment mode of the child components along the cross axis of the parent container.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-alignSelf(value: ItemAlign): T--><!--Device-CommonMethod-alignSelf(value: ItemAlign): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ItemAlign](../arkts-apis/arkts-arkui-itemalign-e.md) | Yes | Alignment mode of the child components along the cross axis of the parent container.The setting overwrites the **alignItems** setting of the parent container ([Flex](Flex), [Column](Column), [Row](Row), or [GridRow](GridRow)). [GridCol](GridCol) can have the **alignSelf** attribute bound to change its own layout along the cross axis.<br>Default value: **ItemAlign.Auto** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="allowdrop"></a>
## allowDrop

```TypeScript
allowDrop(value: Array<UniformDataType> | null | Array<string>): T
```

Sets the types of data that can be dropped to the component. If **allowDrop** is not set, the component accepts all data types by default.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-allowDrop(value: Array<UniformDataType> | null | Array<string>): T--><!--Device-CommonMethod-allowDrop(value: Array<UniformDataType> | null | Array<string>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;UniformDataType&gt; \| null \| Array&lt;string&gt; | Yes | Types of data that can be dropped to the component. Since API version 12, this parameter can be set to **null** to make the component reject all data types. Starting from API version 23, this parameter can be set to an application-defined data type string array Array<string> is supported. While there is no strict format requirement for the string, it should not duplicate the format of standard types in **UniformDataType**. You are advised to define them based on the principle of being easy to remember and distinguish.<br>**Since:** 23 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="allowforcedark"></a>
## allowForceDark

```TypeScript
allowForceDark(value: boolean): T
```

Set whether the component enables the ability to invert colors.This interface needs to be set as the first attribute of the component.

**Since:** 21

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 21.

<!--Device-CommonMethod-allowForceDark(value: boolean): T--><!--Device-CommonMethod-allowForceDark(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | value indicates whether the component enables the ability to invert colors. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

<a id="animation"></a>
## animation

```TypeScript
animation(value: AnimateParam): T
```

Sets a property animation for the component.

> **NOTE**  
>  
> - When a single page contains a large number of components with animations, use  
> [renderGroup](arkts-arkui-commonmethod-c.md#rendergroup-1) to minimize frame freezing and improve animation  
> performance. For best practices, see  
> [Animation Usage Guide – Using RenderGroup](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-fair-use-animation#section1223162922415).  
>  
>  
> - This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-animation(value: AnimateParam): T--><!--Device-CommonMethod-animation(value: AnimateParam): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [AnimateParam](arkts-arkui-animateparam-i.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="aspectratio"></a>
## aspectRatio

```TypeScript
aspectRatio(value: number): T
```

Sets the aspect ratio of the component, which can be obtained using the following formula: width/height.<br>- If only **width** and **aspectRatio** are set, the height is calculated using the following formula:width/aspectRatio.<br>- If only **height** and **aspectRatio** are set, the width is calculated using the following formula:height x aspectRatio.<br>- If **width**, **height**, and **aspectRatio** are all set, the explicitly set height is ignored, and the effective height is calculated using the following formula: width/aspectRatio.<br>After the **aspectRatio** attribute is set, the component's width and height will be limited by the size of the parent component's content area. The priority of [constraintSize](arkts-arkui-commonmethod-c.md#constraintsize-1) is higher than that of **aspectRatio**.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-aspectRatio(value: number): T--><!--Device-CommonMethod-aspectRatio(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Aspect ratio of the component.The default value varies by API version.<br>API version 9 and earlier: **1.0**<br>API version 10: none<br>**NOTE**<br>This parameter takes effect only when a valid value greater than 0 is specified. For example, if a **Row** component has only its width set and does not have any child component, then when **aspectRatio** is not set or is set to a negative value, the height of the **Row** component is 0<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="attributemodifier"></a>
## attributeModifier

```TypeScript
attributeModifier(modifier: AttributeModifier<T>): T
```

Sets the attribute modifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-attributeModifier(modifier: AttributeModifier<T>): T--><!--Device-CommonMethod-attributeModifier(modifier: AttributeModifier<T>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [AttributeModifier](arkts-arkui-attributemodifier-i.md)&lt;T&gt; | Yes | The if/else syntax is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="backdropblur"></a>
## backdropBlur

```TypeScript
backdropBlur(value: number, options?: BlurOptions): T
```

Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-backdropBlur(value: number, options?: BlurOptions): T--><!--Device-CommonMethod-backdropBlur(value: number, options?: BlurOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Background blur effect to apply to the component. The input parameter is the blur radius.The larger the radius is, the more blurred the background is. If the value is **0**, the background is not blurred. |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backdropblur-1"></a>
## backdropBlur

```TypeScript
backdropBlur(radius: Optional<number>, options?: BlurOptions): T
```

Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.Compared to [backdropBlur](arkts-arkui-commonmethod-c.md#backdropblur-1), the **radius** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-backdropBlur(radius: Optional<number>, options?: BlurOptions): T--><!--Device-CommonMethod-backdropBlur(radius: Optional<number>, options?: BlurOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Background blur effect to apply to the component. The input parameter is the blur radius. The larger the radius is, the more blurred the background is. If the value is **0**, the background is not blurred.<br>If **radius** is **undefined**, the background blur reverts to its default state(that is, no blur). |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backdropblur-2"></a>
## backdropBlur

```TypeScript
backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T
```

Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.Compared with [backdropBlur<sup>18+</sup>](arkts-arkui-commonmethod-c.md#backdropblur-1),this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**Widget capability:** This API can be used in ArkTS widgets since API version 19.

<!--Device-CommonMethod-backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T--><!--Device-CommonMethod-backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Background blur effect to apply to the component. The input parameter is the blur radius. The larger the radius is, the more blurred the background is. If the value is **0**, the background is not blurred.<br>If **radius** is **undefined**, the background blur reverts to its default state(that is, no blur). |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters. |
| sysOptions | [SystemAdaptiveOptions](arkts-arkui-systemadaptiveoptions-i.md) | No | System adaptive adjustment options.<br>Default value:**{ disableSystemAdaptation: false }** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="background"></a>
## background

```TypeScript
background(content: CustomBuilder | ResourceColor, options?: BackgroundOptions): T
```

Add a background for the component.

Anonymous Object Rectification.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-background(content: CustomBuilder | ResourceColor, options?: BackgroundOptions): T--><!--Device-CommonMethod-background(content: CustomBuilder | ResourceColor, options?: BackgroundOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| ResourceColor | Yes |  |
| options | [BackgroundOptions](arkts-arkui-backgroundoptions-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="backgroundblurstyle"></a>
## backgroundBlurStyle

```TypeScript
backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T
```

Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity,saturation, and brightness values through enum values.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T--><!--Device-CommonMethod-backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BlurStyle](arkts-arkui-blurstyle-e.md) | Yes | Settings of the background blur style, including the blur radius, mask color, mask opacity, saturation, and brightness. |
| options | [BackgroundBlurStyleOptions](arkts-arkui-backgroundblurstyleoptions-i.md) | No | Background blur options.<br>This parameter cannot be used in ArkTS widgets. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundblurstyle-1"></a>
## backgroundBlurStyle

```TypeScript
backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T
```

Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity,saturation, and brightness values through enum values. Compared to [backgroundBlurStyle<sup>9+</sup>](arkts-arkui-commonmethod-c.md#backgroundblurstyle-1),the **style** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T--><!--Device-CommonMethod-backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;BlurStyle&gt; | Yes | Settings of the background blur style, including the blur radius, mask color, mask opacity, saturation, and brightness.<br>If **style** is **undefined**, the background blur reverts to its default state (that is, no blur). |
| options | [BackgroundBlurStyleOptions](arkts-arkui-backgroundblurstyleoptions-i.md) | No | Background blur options.<br>This parameter cannot be used in ArkTS widgets. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundblurstyle-2"></a>
## backgroundBlurStyle

```TypeScript
backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T
```

Defines the background material blur style. It encapsulates various blur radius, mask color, mask opacity,saturation, and brightness values through enum values. Compared with [backgroundBlurStyle<sup>18+</sup>](arkts-arkui-commonmethod-c.md#backgroundblurstyle-1),this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**Widget capability:** This API can be used in ArkTS widgets since API version 19.

<!--Device-CommonMethod-backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T--><!--Device-CommonMethod-backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;BlurStyle&gt; | Yes | Settings of the background blur style, including the blur radius, mask color, mask opacity, saturation, and brightness.<br>If **style** is **undefined**, the background blur reverts to its default state (that is, no blur). |
| options | [BackgroundBlurStyleOptions](arkts-arkui-backgroundblurstyleoptions-i.md) | No | Background blur options.<br>This parameter cannot be used in ArkTS widgets. |
| sysOptions | [SystemAdaptiveOptions](arkts-arkui-systemadaptiveoptions-i.md) | No | System adaptive adjustment options.<br>Default value:**{ disableSystemAdaptation: false }** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundbrightness"></a>
## backgroundBrightness

```TypeScript
backgroundBrightness(params: BackgroundBrightnessOptions): T
```

Sets the background brightness of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-backgroundBrightness(params: BackgroundBrightnessOptions): T--><!--Device-CommonMethod-backgroundBrightness(params: BackgroundBrightnessOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| params | [BackgroundBrightnessOptions](arkts-arkui-backgroundbrightnessoptions-i.md) | Yes | Parameters for setting the background brightness. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

<a id="backgroundbrightness-1"></a>
## backgroundBrightness

```TypeScript
backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T
```

Sets the background brightness of the component. Compared to [backgroundBrightness<sup>12+</sup>](arkts-arkui-commonmethod-c.md#backgroundbrightness-1),the **options** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T--><!--Device-CommonMethod-backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;BackgroundBrightnessOptions&gt; | Yes | Parameters for setting the background brightness.<br>If **options** is **undefined**, the background reverts to its default state with no brightness effect. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundcolor"></a>
## backgroundColor

```TypeScript
backgroundColor(value: ResourceColor): T
```

Background color

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-backgroundColor(value: ResourceColor): T--><!--Device-CommonMethod-backgroundColor(value: ResourceColor): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@form@atomicservice |

<a id="backgroundcolor-1"></a>
## backgroundColor

```TypeScript
backgroundColor(color: Optional<ResourceColor>): T
```

Background color

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-backgroundColor(color: Optional<ResourceColor>): T--><!--Device-CommonMethod-backgroundColor(color: Optional<ResourceColor>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;ResourceColor&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="backgroundcolor-2"></a>
## backgroundColor

```TypeScript
backgroundColor(color: Optional<ResourceColor | ColorMetrics>): T
```

Background color

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-CommonMethod-backgroundColor(color: Optional<ResourceColor | ColorMetrics>): T--><!--Device-CommonMethod-backgroundColor(color: Optional<ResourceColor | ColorMetrics>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;ResourceColor \| ColorMetrics&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="backgroundeffect"></a>
## backgroundEffect

```TypeScript
backgroundEffect(options: BackgroundEffectOptions): T
```

Sets the background effect of the component, including the blur radius, brightness, saturation, and color.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-backgroundEffect(options: BackgroundEffectOptions): T--><!--Device-CommonMethod-backgroundEffect(options: BackgroundEffectOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [BackgroundEffectOptions](arkts-arkui-backgroundeffectoptions-i.md) | Yes | Background effect of the component, including the blur radius,brightness, saturation, and color. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundeffect-1"></a>
## backgroundEffect

```TypeScript
backgroundEffect(options: Optional<BackgroundEffectOptions>): T
```

Sets the background effect of the component, including the blur radius, brightness, saturation, and color. Compared to [backgroundEffect<sup>11+</sup>](arkts-arkui-commonmethod-c.md#backgroundeffect-1), the **options** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-backgroundEffect(options: Optional<BackgroundEffectOptions>): T--><!--Device-CommonMethod-backgroundEffect(options: Optional<BackgroundEffectOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;BackgroundEffectOptions&gt; | Yes | Background effect of the component, including the blur radius, brightness, saturation, and color.<br>If **options** is **undefined**, the background reverts to its default state with no effect. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundeffect-2"></a>
## backgroundEffect

```TypeScript
backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T
```

Sets the background effect of the component, including the blur radius, brightness, saturation, and color. Compared with [backgroundEffect<sup>18+</sup>](arkts-arkui-commonmethod-c.md#backgroundeffect-1),this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.

> **NOTE**  
>  
> **backgroundEffect** performs real-time rendering per frame, resulting in high performance overhead. When the  
> background blur effect remains unchanged, it is recommended that you use the static blur API  
> [blur](../../apis-arkgraphics2d/arkts-apis/arkts-arkgraphics2d-effectkit-filter-i.md#blur-1). For best practices, see  
> [Image Blurring Optimization – When to Use](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-fuzzy-scene-performance-optimization#section4945532519).

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-CommonMethod-backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T--><!--Device-CommonMethod-backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;BackgroundEffectOptions&gt; | Yes | Background effect of the component, including the blur radius, brightness, saturation, and color.<br>If **options** is **undefined**, the background reverts to its default state with no effect. |
| sysOptions | [SystemAdaptiveOptions](arkts-arkui-systemadaptiveoptions-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundfilter"></a>
## backgroundFilter

```TypeScript
backgroundFilter(filter: Filter): T
```

Sets the visual effect of the background filter.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-backgroundFilter(filter: Filter): T--><!--Device-CommonMethod-backgroundFilter(filter: Filter): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Yes | Visual effect of the background filter. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="backgroundimage"></a>
## backgroundImage

```TypeScript
backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T
```

Background image src: Image address url

**Since:** 12

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T--><!--Device-CommonMethod-backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) \| PixelMap | Yes |  |
| repeat | [ImageRepeat](../arkts-apis/arkts-arkui-imagerepeat-e.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@form@atomicservice |

<a id="backgroundimage-1"></a>
## backgroundImage

```TypeScript
backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T
```

Background image

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T--><!--Device-CommonMethod-backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| src | [ResourceStr](../arkts-apis/arkts-arkui-resourcestr-t.md) \| PixelMap | Yes | the background image source |
| options | [BackgroundImageOptions](arkts-arkui-backgroundimageoptions-i.md) | No | config the options |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="backgroundimageposition"></a>
## backgroundImagePosition

```TypeScript
backgroundImagePosition(value: Position | Alignment): T
```

Background image position x:Horizontal coordinate;y:Vertical axis coordinate.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-backgroundImagePosition(value: Position | Alignment): T--><!--Device-CommonMethod-backgroundImagePosition(value: Position | Alignment): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Position](../arkts-apis/arkts-arkui-display-position-i.md) \| Alignment | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@form@atomicservice |

<a id="backgroundimageresizable"></a>
## backgroundImageResizable

```TypeScript
backgroundImageResizable(value: ResizableOptions): T
```

Background image resizable.value:resizable options

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-backgroundImageResizable(value: ResizableOptions): T--><!--Device-CommonMethod-backgroundImageResizable(value: ResizableOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResizableOptions](arkts-arkui-resizableoptions-i.md) | Yes | Indicates the resizable options. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="backgroundimagesize"></a>
## backgroundImageSize

```TypeScript
backgroundImageSize(value: SizeOptions | ImageSize): T
```

Background image size

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-backgroundImageSize(value: SizeOptions | ImageSize): T--><!--Device-CommonMethod-backgroundImageSize(value: SizeOptions | ImageSize): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SizeOptions](../arkts-apis/arkts-arkui-sizeoptions-i.md) \| ImageSize | Yes | The width and height of the background image. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@form@atomicservice |

<a id="bindcontentcover"></a>
## bindContentCover

```TypeScript
bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T
```

Binds a full-screen modal to the component, which can be displayed when the component is touched. The content of the modal is customizable. The transition type can be set to none, slide-up and slide-down animation, and opacity gradient animation.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T--><!--Device-CommonMethod-bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShow | boolean | Yes | Whether to display the full-screen modal.<br>- **true**: Display the modal.<br>-**false**: Hide the modal.<br>Since API version 10, this attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two   -way binding through [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters). |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Content of the modal. The root node in **builder** must be unique. |
| type | [ModalTransition](arkts-arkui-modaltransition-e.md) | No | System transition mode of the modal.<br> Default value:**ModalTransition.DEFAULT**.<br>**NOTE**<br> This property has no effect when it is set together with **transition**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="bindcontentcover-1"></a>
## bindContentCover

```TypeScript
bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T
```

Binds a full-screen modal to the component, which can be displayed when the component is touched. The modal page content and transition mode are configurable.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T--><!--Device-CommonMethod-bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShow | boolean | Yes | Whether to display the full-screen modal.<br>- **true**: Display the modal.<br>-**false**: Hide the modal.<br>Since API version 10, this attribute supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two   -way binding through [!!](docroot://ui/state-management/arkts-new-binding.md#two-way-binding-between-built-in-component-parameters). |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Content of the modal. |
| options | [ContentCoverOptions](arkts-arkui-contentcoveroptions-i.md) | No | Optional attributes of the modal. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="bindcontextmenu"></a>
## bindContextMenu

```TypeScript
bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T
```

Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the component. Only custom menu items are supported.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Indicates the content of context menu. |
| responseType | [ResponseType](../arkts-apis/arkts-arkui-responsetype-e.md) | Yes | Indicates response type of context menu, Long pressing with a mouse device is not supported. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="bindcontextmenu-1"></a>
## bindContextMenu

```TypeScript
bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T
```

Binds a context menu to the component, whose visibility is subject to the isShown settings.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShown | boolean | Yes | true means display content, false means hide content, default is false.<p><strong>NOTE</strong>:<br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop up, may occur. To trigger dragging by long presses is not supported.</p> |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Indicates the content of context menu. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindcontextmenubyisshow"></a>
## bindContextMenuByIsShow

```TypeScript
bindContextMenuByIsShow(isShow: boolean, content: CustomBuilder | Array<MenuElement>, options?: ContextMenuOptions): T
```

Binds a context menu to the component, whose visibility is subject to the isShow settings.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-bindContextMenuByIsShow(isShow: boolean, content: CustomBuilder | Array<MenuElement>, options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenuByIsShow(isShow: boolean, content: CustomBuilder | Array<MenuElement>, options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShow | boolean | Yes | true means display content, false means hide content, default is false.<p><strong>NOTE</strong>:<br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop up, may occur. Dragging via long press is not supported.</p>. |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| Array&lt;MenuElement&gt; | Yes | Indicates the content of context menu. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindcontextmenubyresponsetype"></a>
## bindContextMenuByResponseType

```TypeScript
bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement>, responseType: ResponseType,
      options?: ContextMenuOptions): T
```

Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the component. Custom or fixed-style menu items are supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement>, responseType: ResponseType,
      options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenuByResponseType(content: CustomBuilder | Array<MenuElement>, responseType: ResponseType,
      options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| Array&lt;MenuElement&gt; | Yes | Indicates the content of context menu. |
| responseType | [ResponseType](../arkts-apis/arkts-arkui-responsetype-e.md) | Yes | Indicates response type of context menu. Long pressing with a mouse device is not supported. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindcontextmenuwithresponse"></a>
## bindContextMenuWithResponse

```TypeScript
bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T
```

Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the component. Only custom menu items are supported. Long pressing with a mouse device is not supported.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CommonMethod-bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | undefined, options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [CustomBuilderT](arkts-arkui-custombuildert-t.md)&lt;ResponseType&gt; \| undefined | Yes | Indicates the content of context menu. Undefined means unbinding. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindcontextmenuwithresponse-1"></a>
## bindContextMenuWithResponse

```TypeScript
bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
    options?: ContextMenuOptions): T
```

Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the component. Custom or fixed-style menu items are supported. Long pressing with a mouse device is not supported.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
    options?: ContextMenuOptions): T--><!--Device-CommonMethod-bindContextMenuWithResponse(content: CustomBuilderT<ResponseType> | Array<MenuElement> | undefined,
    options?: ContextMenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | [CustomBuilderT](arkts-arkui-custombuildert-t.md)&lt;ResponseType&gt; \| Array&lt;MenuElement&gt; \| undefined | Yes | Indicates the content of context menu. Undefined means unbinding. |
| options | [ContextMenuOptions](arkts-arkui-contextmenuoptions-i.md) | No | Indicates the options of context menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindmenu"></a>
## bindMenu

```TypeScript
bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T
```

Menu control

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T--><!--Device-CommonMethod-bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | Array&lt;MenuElement&gt; \| CustomBuilder | Yes | Indicates the content of menu.<br>**Since:** 11 |
| options | [MenuOptions](arkts-arkui-menuoptions-i.md) | No | Indicates the options of menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="bindmenu-1"></a>
## bindMenu

```TypeScript
bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T
```

Menu control

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T--><!--Device-CommonMethod-bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShow | boolean | Yes | true means display menu, false means hide menu, default is false. |
| content | Array&lt;MenuElement&gt; \| CustomBuilder | Yes | Indicates the content of menu. |
| options | [MenuOptions](arkts-arkui-menuoptions-i.md) | No | Indicates the options of menu. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="bindpopup"></a>
## bindPopup

```TypeScript
bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T
```

Popup control<p><strong>NOTE</strong>:<br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect display positions and shapes, do not set this parameter to true while the page is still being constructed.</p>

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T--><!--Device-CommonMethod-bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| show | boolean | Yes |  |
| popup | [PopupOptions](arkts-arkui-popupoptions-i.md) \| CustomPopupOptions | Yes | [since 7 - 7] |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="bindsheet"></a>
## bindSheet

```TypeScript
bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T
```

Binds a sheet to the component, which is displayed when the component is touched.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T--><!--Device-CommonMethod-bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isShow | boolean | Yes | Whether to display the sheet.<br>**true**: Display the sheet.<br>**false**: Hide the sheet.<br>Since API version 10, this parameter supports two-way binding through [$$](docroot://ui/state-management/arkts-two-way-sync.md).<br>Since API version 18, this attribute supports two   -way binding through [!!](docroot://ui/state-management/arkts-new-binding.md). |
| builder | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes | Content of the sheet. |
| options | [SheetOptions](arkts-arkui-sheetoptions-i.md) | No | Optional attributes of the sheet. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="bindtips"></a>
## bindTips

```TypeScript
bindTips(message: TipsMessageType, options?: TipsOptions): T
```

Tips control

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-CommonMethod-bindTips(message: TipsMessageType, options?: TipsOptions): T--><!--Device-CommonMethod-bindTips(message: TipsMessageType, options?: TipsOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| message | [TipsMessageType](arkts-arkui-tipsmessagetype-t.md) | Yes |  |
| options | [TipsOptions](arkts-arkui-tipsoptions-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="blendmode"></a>
## blendMode

```TypeScript
blendMode(value: BlendMode, type?: BlendApplyType): T
```

Defines how the component's content (including the content of it child components) is blended with the existing content on the canvas (possibly offscreen canvas) below.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-blendMode(value: BlendMode, type?: BlendApplyType): T--><!--Device-CommonMethod-blendMode(value: BlendMode, type?: BlendApplyType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BlendMode](arkts-arkui-blendmode-e.md) | Yes | Blend mode.<br>Default value: **BlendMode.NONE**<br>**NOTE**<br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER** by default, and **BlendApplyType** does not take effect. |
| type | [BlendApplyType](arkts-arkui-blendapplytype-e.md) | No | Whether the blend mode is implemented offscreen.<br>Default value:**BlendApplyType.FAST**<br>**NOTE**<br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.<br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component is created. The content of the current component (including child components) is then drawn onto the offscreen canvas, and blended with the existing content on the canvas below using the specified blend mode. This approach may cause issues with screen capture for APIs such as [linearGradientBlur<sup>12+</sup>](arkts-arkui-commonmethod-c.md#lineargradientblur-1),[backgroundEffect](arkts-arkui-commonmethod-c.md#backgroundeffect-1),[brightness](arkts-arkui-commonmethod-c.md#brightness-1), and [blur](arkts-arkui-commonmethod-c.md#blur-1). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="blendmode-1"></a>
## blendMode

```TypeScript
blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T
```

Defines how the component's content (including the content of it child components) is blended with the existing content on the canvas (possibly offscreen canvas) below. Compared to [blendMode<sup>11+</sup>](arkts-arkui-commonmethod-c.md#blendmode-1), the **mode** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T--><!--Device-CommonMethod-blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mode | [Optional](arkts-arkui-optional-t.md)&lt;BlendMode&gt; | Yes | Blend mode.<br>Default value: **BlendMode.NONE**<br>If **mode** is **undefined**, the component reverts to its original effect of not enabling offscreen rendering as a whole before blending with the parent component.<br>**NOTE**<br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER** by default, and **BlendApplyType** does not take effect. |
| type | [BlendApplyType](arkts-arkui-blendapplytype-e.md) | No | Whether the blend mode is implemented offscreen.<br>Default value:**BlendApplyType.FAST**<br>**NOTE**<br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.<br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component is created. The content of the current component (including child components) is then drawn onto the offscreen canvas, and blended with the existing content on the canvas below using the specified blend mode. This approach may cause issues with screen capture for APIs such as [linearGradientBlur<sup>12+</sup>](arkts-arkui-commonmethod-c.md#lineargradientblur-1),[backgroundEffect](arkts-arkui-commonmethod-c.md#backgroundeffect-1),[brightness](arkts-arkui-commonmethod-c.md#brightness-1), and [blur](arkts-arkui-commonmethod-c.md#blur-1). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="blur"></a>
## blur

```TypeScript
blur(value: number, options?: BlurOptions): T
```

Applies a foreground blur effect to the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-blur(value: number, options?: BlurOptions): T--><!--Device-CommonMethod-blur(value: number, options?: BlurOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Foreground blur effect to apply to the component. The input parameter is the blur radius.The larger the radius is, the more blurred the content is. If the value is **0**, the content is not blurred. |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="blur-1"></a>
## blur

```TypeScript
blur(blurRadius: Optional<number>, options?: BlurOptions): T
```

Applies a foreground blur effect to the component. Compared to [blur](arkts-arkui-commonmethod-c.md#blur-1), the **blurRadius** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-blur(blurRadius: Optional<number>, options?: BlurOptions): T--><!--Device-CommonMethod-blur(blurRadius: Optional<number>, options?: BlurOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Foreground blur effect to apply to the component. The input parameter is the blur radius. The larger the radius is, the more blurred the content is. If the value is **0**, the content is not blurred.<br>If **blurRadius** is set to **undefined**, the previous value is retained. |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="blur-2"></a>
## blur

```TypeScript
blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T
```

Applies a foreground blur effect to the component. Compared to [blur<sup>18+</sup>](arkts-arkui-commonmethod-c.md#blur-1), this API adds the **sysOptions** parameter, which allows for system adaptive adjustments.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**Widget capability:** This API can be used in ArkTS widgets since API version 19.

<!--Device-CommonMethod-blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T--><!--Device-CommonMethod-blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Foreground blur effect to apply to the component. The input parameter is the blur radius. The larger the radius is, the more blurred the content is. If the value is **0**, the content is not blurred.<br>If **blurRadius** is set to **undefined**, the previous value is retained. |
| options | [BlurOptions](arkts-arkui-bluroptions-i.md) | No | Grayscale parameters. |
| sysOptions | [SystemAdaptiveOptions](arkts-arkui-systemadaptiveoptions-i.md) | No | System adaptive adjustment options.<br>Default value:**{ disableSystemAdaptation: false }** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="border"></a>
## border

```TypeScript
border(value: BorderOptions): T
```

Sets the border. When neither color nor radius is specified, set borderColor and borderRadius after border to ensure they take effect.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-border(value: BorderOptions): T--><!--Device-CommonMethod-border(value: BorderOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BorderOptions](../arkts-apis/arkts-arkui-borderoptions-i.md) | Yes | - Unified border style.<br>The default value is **0**, indicating that no border is displayed.<br>Since API version 9, the parent node's border is displayed above child node content. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="bordercolor"></a>
## borderColor

```TypeScript
borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T
```

Sets the border color.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T--><!--Device-CommonMethod-borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) \| EdgeColors \| LocalizedEdgeColors | Yes | Border color.<br>Default value: **Color.Black** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="borderimage"></a>
## borderImage

```TypeScript
borderImage(value: BorderImageOption): T
```

Sets the border image of the component.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-borderImage(value: BorderImageOption): T--><!--Device-CommonMethod-borderImage(value: BorderImageOption): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BorderImageOption](arkts-arkui-borderimageoption-i.md) | Yes | Border image or border gradient. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@form@atomicservice |

<a id="borderradius"></a>
## borderRadius

```TypeScript
borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T
```

Sets the border radius.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T--><!--Device-CommonMethod-borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) \| BorderRadiuses \| LocalizedBorderRadiuses | Yes | Radius of the border corners. The value can be expressed as a percentage of the component's width. When combined with the [clip](arkts-arkui-commonmethod-c.md#clip-1)attribute, this setting clips child components to prevent them from extending beyond the component's boundaries.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="borderradius-1"></a>
## borderRadius

```TypeScript
borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses, type?: RenderStrategy): T
```

Sets the border corner radius and the rendering strategy for rounded corners.NOTE1. **RenderStrategy.FAST**: The current component and its child components will be drawn directly onto the canvas with rounded corners applied.2. **RenderStrategy.OFFSCREEN**: The current component and its child components will first be rendered onto an off-screen canvas, then undergo a rounded corner clipping, and finally be drawn onto the main canvas.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

**Widget capability:** This API can be used in ArkTS widgets since API version 22.

<!--Device-CommonMethod-borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses, type?: RenderStrategy): T--><!--Device-CommonMethod-borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses, type?: RenderStrategy): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) \| BorderRadiuses \| LocalizedBorderRadiuses | Yes | Radius of the border corners. The value can be expressed as a percentage of the component's width. When combined with the clip attribute, this setting clips child components to prevent them from extending beyond the component's boundaries. |
| type | [RenderStrategy](../arkts-apis/arkts-arkui-renderstrategy-e.md) | No | Rendering strategy for drawing rounded corners.<br>Default value: RenderStrategy.FAST. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="borderstyle"></a>
## borderStyle

```TypeScript
borderStyle(value: BorderStyle | EdgeStyles): T
```

Border style

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-borderStyle(value: BorderStyle | EdgeStyles): T--><!--Device-CommonMethod-borderStyle(value: BorderStyle | EdgeStyles): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BorderStyle](../arkts-apis/arkts-arkui-borderstyle-e.md) \| EdgeStyles | Yes | Border style.<br>Default value: **BorderStyle.Solid**.<br>**Since:** 9 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="borderwidth"></a>
## borderWidth

```TypeScript
borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T
```

Sets the border width.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T--><!--Device-CommonMethod-borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) \| EdgeWidths \| LocalizedEdgeWidths | Yes | Border width. This parameter cannot be set in percentage.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="brightness"></a>
## brightness

```TypeScript
brightness(value: number): T
```

Applies a brightness effect to the component. If this API is not used, there will be no change by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-brightness(value: number): T--><!--Device-CommonMethod-brightness(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Brightness effect of the component. **1**: No brightness adjustment. Less than 1.0:decreases brightness. 0 or less: Complete black. Greater than 1: increases brightness. 2 or greater: complete white.<br>Value range:[0, +∞)<br>Recommended value range: [0, 2]<br>**NOTE**<br>A value less than 0 evaluates to the value **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="brightness-1"></a>
## brightness

```TypeScript
brightness(brightness: Optional<number>): T
```

Applies a brightness effect to the component. If this API is not used, there will be no change by default. Compared with [brightness](arkts-arkui-commonmethod-c.md#brightness-1), this API supports the **undefined** type for the **brightness** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-brightness(brightness: Optional<number>): T--><!--Device-CommonMethod-brightness(brightness: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| brightness | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Brightness effect of the component. **1**: No brightness adjustment. Less than 1.0: decreases brightness. 0 or less: Complete black. Greater than 1: increases brightness. 2 or greater:complete white.<br>Value range:[0, +∞)<br>Recommended value range: [0, 2]<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **brightness** is **undefined**, the brightness level is reset to **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="chainmode"></a>
## chainMode

```TypeScript
chainMode(direction: Axis, style: ChainStyle): T
```

Sets the parameters of the chain in which the component is the head. This attribute takes effect only when the parent container is RelativeContainer. The chain head is the first component in the chain that satisfies the chain formation rules. In a horizontal layout, it starts from the left (or from the right in a mirrored language layout).In a vertical layout, it starts from the top.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-chainMode(direction: Axis, style: ChainStyle): T--><!--Device-CommonMethod-chainMode(direction: Axis, style: ChainStyle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| direction | [Axis](../arkts-apis/arkts-arkui-axis-e.md) | Yes | indicates direction of the chain |
| style | [ChainStyle](arkts-arkui-chainstyle-e.md) | Yes | indicates style of the chain |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="chainweight"></a>
## chainWeight

```TypeScript
chainWeight(chainWeight: ChainWeightOptions): T
```

Sets the weight of the component in a chain, which is used to re-lay out components that form the chain. This attribute takes effect only when the parent container is [RelativeContainer](RelativeContainer).

**NOTE**

Since API version 23, dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) is supported

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-CommonMethod-chainWeight(chainWeight: ChainWeightOptions): T--><!--Device-CommonMethod-chainWeight(chainWeight: ChainWeightOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| chainWeight | [ChainWeightOptions](../arkts-apis/arkts-arkui-chainweightoptions-i.md) | Yes | Layout weight of the component in the horizontal or vertical direction.The component with **chainWeight** set will have its size in the horizontal or vertical direction allocated according to the set weights. The allocation ignores the component's intrinsic size and enables the component to adaptively fill the remaining space. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clickeffect"></a>
## clickEffect

```TypeScript
clickEffect(value: ClickEffect | null): T
```

Sets the click feedback effect of the component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-clickEffect(value: ClickEffect | null): T--><!--Device-CommonMethod-clickEffect(value: ClickEffect | null): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ClickEffect](arkts-arkui-clickeffect-i.md) \| null | Yes | Click feedback effect of the component.<br>**NOTE**<br>Use **null** to disable the click feedback effect.<br>Avoid using this feature in scenarios where the component size dynamically changes.<br>This attribute is not supported when the component cannot trigger universal events.<br>After the click feedback effect triggers scaling, the touch point may fall outside the control, making the component unresponsive to gesture events. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clickeffect-1"></a>
## clickEffect

```TypeScript
clickEffect(effect: Optional<ClickEffect | null>): T
```

Sets the click feedback effect of the component. Compared with [clickEffect](arkts-arkui-commonmethod-c.md#clickeffect-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-clickEffect(effect: Optional<ClickEffect | null>): T--><!--Device-CommonMethod-clickEffect(effect: Optional<ClickEffect | null>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [Optional](arkts-arkui-optional-t.md)&lt;ClickEffect \| null&gt; | Yes | Click feedback effect of the component.<br>**NOTE**<br>Use **undefined** or **null** to disable the click feedback effect.<br>Avoid using this feature in scenarios where the component size dynamically changes.<br>This attribute is not supported when the component cannot trigger universal events.<br>After the click feedback effect triggers scaling, the touch point may fall outside the control, making the component unresponsive to gesture events. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clip"></a>
## clip

```TypeScript
clip(value: boolean): T
```

Sets whether to clip the areas of child components that extend beyond this component's bounds, that is, whether to perform clipping based on the edge contour of the parent container If this API is not used, the area of child components extending beyond the current component's bounds is not clipped by default.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-clip(value: boolean): T--><!--Device-CommonMethod-clip(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to clip the areas of child components that extend beyond the current component's bounds.<br>The value **true** means to clip the areas of child components that extend beyond the current component's bounds, and **false** means the opposite.<br>Note: If this parameter is set to **true**, child components exceeding the current component's bounds will not respond to bound gesture events. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clip-1"></a>
## clip

```TypeScript
clip(clip: Optional<boolean>): T
```

Sets whether to clip the areas of child components that extend beyond this component's bounds, that is, whether to perform clipping based on the edge contour of the parent container If this API is not used, the area of child components extending beyond the current component's bounds is not clipped by default. Compared with [clip<sup>12+</sup>](arkts-arkui-commonmethod-c.md#clip-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-clip(clip: Optional<boolean>): T--><!--Device-CommonMethod-clip(clip: Optional<boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| clip | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to clip the areas of child components that extend beyond the current component's bounds.<br>Note: If this parameter is set to **true**, child components exceeding the current component's bounds will not respond to bound gesture events.<br>If **clip** is set to **undefined**, clipping is disabled, and child components are not clipped. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clip-2"></a>
## clip

```TypeScript
clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T
```

Sets whether to clip this component based on the given shape.

> **NOTE**

**Since:** 7

**Deprecated since:** 12

**Substitutes:** [clipShape](arkts-arkui-commonmethod-c.md#clipshape-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T--><!--Device-CommonMethod-clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean \| CircleAttribute \| EllipseAttribute \| PathAttribute \| RectAttribute | Yes | Clip mode. If the value is a shape attribute, the component is clipped based on the specified shape. If the value is of the Boolean type, it specifies whether to clip the component based on the boundaries of the parent container.<br>Default value: **false**.<br>Note: If the value is a shape attribute, the clipped area can still respond to bound gesture events. If the value is of the Boolean type, the clipped area will not respond to bound gesture events. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clipshape"></a>
## clipShape

```TypeScript
clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T
```

Clips this component according to the specified shape (which may include position information).

> **NOTE**  
>  
> Different shapes support different ranges of attributes. A path is one type of shape, along with others like  
> ellipses and rectangles.  
>  
> Path shapes do not support setting width and height attributes. For details about the supported attributes, see  
> the specific shape documentation.  
>  
> The [fill](../arkts-apis/arkts-arkui-arkui-shape-commonshapemethod-c.md#fill-1) attribute of shapes has no effect on the **clipShape**  
> API.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T--><!--Device-CommonMethod-clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CircleShape](arkts-arkui-circleshape-t.md) \| EllipseShape \| PathShape \| RectShape | Yes | Shape (which may include position information) to clip the current component.<br>Note: The clipped area remains responsive to bound gesture events. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="clipshape-1"></a>
## clipShape

```TypeScript
clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T
```

Clips this component according to the specified shape (which may include position information). Compared with [clipShape<sup>12+</sup>](arkts-arkui-commonmethod-c.md#clipshape-1),this API supports the **undefined** type.

> **NOTE**  
>  
> Different shapes support different ranges of attributes. A path is one type of shape, along with others like  
> ellipses and rectangles.  
>  
> Path shapes do not support setting width and height attributes. For details about the supported attributes, see  
> the specific shape documentation.  
>  
> The [fill](../arkts-apis/arkts-arkui-arkui-shape-commonshapemethod-c.md#fill-1) attribute of shapes has no effect on the **clipShape**  
> API.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T--><!--Device-CommonMethod-clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | [Optional](arkts-arkui-optional-t.md)&lt;CircleShape \| EllipseShape \| PathShape \| RectShape&gt; | Yes | Shape (which may include position information) to clip the current component.<br>Note: The clipped area remains responsive to bound gesture events.<br>If the value of **shape** is **undefined**, the current setting will be reset to its default state. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="colorblend"></a>
## colorBlend

```TypeScript
colorBlend(value: Color | string | Resource): T
```

Applies a color blend effect to the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-colorBlend(value: Color | string | Resource): T--><!--Device-CommonMethod-colorBlend(value: Color | string | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Color](../../apis-arkgraphics3d/arkts-apis/arkts-arkgraphics3d-scenetypes-color-i.md) \| string \| Resource | Yes | Color to blend with the component. The value can be a string, for example, **'0x000000'** or **'rgba(0,0,0,1)'**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="colorblend-1"></a>
## colorBlend

```TypeScript
colorBlend(color: Optional<Color | string | Resource>): T
```

Applies a color blend effect to the component. Compared with [colorBlend](arkts-arkui-commonmethod-c.md#colorblend-1), this API supports the **undefined** type for the **color** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-colorBlend(color: Optional<Color | string | Resource>): T--><!--Device-CommonMethod-colorBlend(color: Optional<Color | string | Resource>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;Color \| string \| Resource&gt; | Yes | Color to blend with the component. The value can be a string, for example, **'0x000000'** or **'rgba(0,0,0,1)'**.<br>If **color** is **undefined**, the component reverts to its original effect with no color blending. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="compositingfilter"></a>
## compositingFilter

```TypeScript
compositingFilter(filter: Filter): T
```

Sets the visual effect of the compositing filter.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-compositingFilter(filter: Filter): T--><!--Device-CommonMethod-compositingFilter(filter: Filter): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Yes | Visual effect of the compositing filter. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="constraintsize"></a>
## constraintSize

```TypeScript
constraintSize(value: ConstraintSizeOptions): T
```

Sets the constraint size of the component, which is used to limit the size range during component layout.<br>Since API version 10, this API supports the calc calculation feature.

**Impact of constraintSize(minWidth/maxWidth/minHeight/maxHeight) on width/height**  
| Default Value | Result |  
| ---------------------------------------- | ---------------------------------------- |  
| \ | width=MAX(minWidth,MIN(maxWidth,width))<br>height=MAX(minHeight,MIN(maxHeight,height)) |  
| maxWidth, maxHeight| width=MAX(minWidth,width)<br>height=MAX(minHeight,height)  
| minWidth, minHeight| width=MIN(maxWidth,width)<br>height=MIN(maxHeight,height) |  
| width, height| If minWidth < maxWidth, the layout logic of the component takes effect, and the value range of **width** is [minWidth, maxWidth]. Otherwise, width = MAX(minWidth, maxWidth).<br>If minHeight < maxHeight,the layout logic of the component takes effect, and the value range of **height** is [minHeight, maxHeight].Otherwise, height = MAX (minHeight, maxHeight).|  
| width and maxWidth; height and maxHeight| width = minWidth<br>height = minHeight |  
| width and minWidth; and height and minHeight| The layout logic of the component takes effect, and the value of **width** cannot be greater than that of **maxWidth**.<br>The layout logic of the component takes effect, and the value of **height** cannot be greater than that of **maxHeight**.|  
| minWidth and maxWidth; minHeight and maxHeight| The width of the component is initially determined by the value of **width**, and it may be adjusted based on other layout attributes.<br>The height of the component is initially determined by the value of **height**, and it may be adjusted based on other layout attributes.|  
| width, minWidth, and maxWidth| The layout restrictions passed by the parent container are used for layout.|  
| height, minHeight, and maxHeight| The layout restrictions passed by the parent container are used for layout.|

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-constraintSize(value: ConstraintSizeOptions): T--><!--Device-CommonMethod-constraintSize(value: ConstraintSizeOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ConstraintSizeOptions](../arkts-apis/arkts-arkui-constraintsizeoptions-i.md) | Yes | Constraint size of the component to set.**constraintSize** takes precedence over **width** and **height**.<br>Default value: {minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity}<br>Exception handling: For strings beginning with numerals, only the numeric part is parsed.Strings not beginning with numerals are parsed as 0. For other invalid values, the **constraintSize** attribute reverts to its default behavior when unconfigured.<br>Unit: vp. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="contrast"></a>
## contrast

```TypeScript
contrast(value: number): T
```

Applies a contrast effect to the component. If this API is not used, there will be no change by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-contrast(value: number): T--><!--Device-CommonMethod-contrast(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Contrast of the component. The input parameter is a contrast value. If the value is **1**, the source image is displayed. If the value is greater than 1, a larger value indicates a higher contrast and a clearer image. If the value is less than 1, a smaller value indicates a lower contrast is. If the value is **0**, the image becomes all gray.<br>Recommended value range:[0, 10)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="contrast-1"></a>
## contrast

```TypeScript
contrast(contrast: Optional<number>): T
```

Applies a contrast effect to the component. If this API is not used, there will be no change by default. Compared to [contrast](arkts-arkui-commonmethod-c.md#contrast-1), the **contrast** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-contrast(contrast: Optional<number>): T--><!--Device-CommonMethod-contrast(contrast: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| contrast | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Contrast of the component. The input parameter is a contrast value. If the value is **1**, the source image is displayed. If the value is greater than 1, a larger value indicates a higher contrast and a clearer image. If the value is less than 1, a smaller value indicates a lower contrast is. If the value is **0**, the image becomes all gray.<br>Recommended value range:[0, 10)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **contrast** is **undefined**, the contrast effect is reset to **1.0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="customproperty"></a>
## customProperty

```TypeScript
customProperty(name: string, value: Optional<Object>): T
```

Sets a custom property for this component.

In versions earlier than API 26.0.0,[custom components](docroot://ui/state-management/arkts-create-custom-components.md) do not support custom properties.

Since API 26.0.0, custom components support setting and reading custom properties.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-customProperty(name: string, value: Optional<Object>): T--><!--Device-CommonMethod-customProperty(name: string, value: Optional<Object>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | Name of the custom property. |
| value | [Optional](arkts-arkui-optional-t.md)&lt;Object&gt; | Yes | Value of the custom property. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="defaultfocus"></a>
## defaultFocus

```TypeScript
defaultFocus(value: boolean): T
```

Specifies whether to set this component as the default focus of the current [hierarchical page](docroot://ui/arkts-common-events-focus-event.md#basic-concepts). If **defaultFocus** is not set, the component will not receive initial focus on the current page.

> **NOTE**  
>  
> This setting applies to pages that support routing or modal-type container components, such as **Page**,  
> **NaviDestination**, **NavBar**, **PopUp**, and **Dialog**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-defaultFocus(value: boolean): T--><!--Device-CommonMethod-defaultFocus(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to set the component as the default focus of the current [hierarchical page](docroot://ui/arkts-common-events-focus-event.md#basic-concepts). This parameter takes effect only when the hierarchical page is new and accessed for the first time.<br>**NOTE**<br>The value **true** means to set the component as the default focus, and the value **false** has no effect.<br>If no component on the hierarchical page has **defaultFocus(true)** set:<br>For API version 11 and earlier, the default focus is on the first focusable non-container component.<br>For API version versions later than 11, the default focus is on the hierarchical page's root container.<br>If **defaultFocus(true)** is set for multiple components on the hierarchical page, the first component found in the component tree depth-first traversal is used as the default focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="direction"></a>
## direction

```TypeScript
direction(value: Direction): T
```

Sets how elements are laid out along the main axis of the container. This attribute supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-direction(value: Direction): T--><!--Device-CommonMethod-direction(value: Direction): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Direction](../../apis-ime-kit/arkts-apis/arkts-ime-inputmethod-direction-e.md) | Yes | How elements are laid out along the main axis of the container.If this parameter is set to **auto**, the layout is subject to the system language.The setting does not take effect in the **Column** component.<br>Default value: **Direction.Auto**.If the **direction** attribute receives an **undefined** or **null** input parameter, the system will apply the default value |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="displaypriority"></a>
## displayPriority

```TypeScript
displayPriority(value: number): T
```

Sets the display priority for the component in the layout container.<br>This parameter is only effective in [Row](Row), [Column](Column), and [Flex (single-line)](Flex) container components.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-displayPriority(value: number): T--><!--Device-CommonMethod-displayPriority(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Display priority of the component in the layout container.<br>The value range is all integers. Default value: **1**.<br>**NOTE**<br>The digits after the decimal point are not counted in determining the display priority. That is, numbers in the [x, x + 1) range are considered to represent the same priority. For example, **1.0** and **1.9** represent the same priority.<br>If the **displayPriority** value of all child components is not greater than 1, there is no difference in priority. When the **displayPriority** value of a child component is greater than 1, a larger value indicates higher priority. If the parent container does not have enough space, child components with lower priority are hidden. If child components of a certain priority are hidden, those with an even lower priority are also hidden.<br>The value range is all integers. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="doublesided"></a>
## doubleSided

```TypeScript
doubleSided(value: Optional<boolean>): T
```

Sets whether to component is double-sided.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-CommonMethod-doubleSided(value: Optional<boolean>): T--><!--Device-CommonMethod-doubleSided(value: Optional<boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to draw both sides of component.**true**: Both front and back sides are visible (default).**false**: Only to front side is visible, to back side is hidden when rotated.When **value** is **undefined**, the component reverts to default double-sided setting (**true**). |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="dragpreview"></a>
## dragPreview

```TypeScript
dragPreview(value: CustomBuilder | DragItemInfo | string): T
```

Sets the preview image displayed during component drag operations.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-dragPreview(value: CustomBuilder | DragItemInfo | string): T--><!--Device-CommonMethod-dragPreview(value: CustomBuilder | DragItemInfo | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| DragItemInfo \| string | Yes | Preview image displayed during component drag operations.It only applies to [onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) drag mode.<br>If the component supports drag and drop and a preview is specified through [bindContextMenu](arkts-arkui-commonmethod-c.md#bindcontextmenu-1),that specified preview is displayed when the component is dragged. The priority of the background image returned in [onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) is lower than that of the preview set in [dragPreview](arkts-arkui-commonmethod-c.md#dragpreview-1). This means that,once set, the latter will be used in place of the former. Using [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) requires offline rendering and may increase performance overhead and latency. In light of this, you are advised to use [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md) in [DragItemInfo](arkts-arkui-dragiteminfo-i.md) instead.<br> When an ID of the string type is passed in, the snapshot of the component assigned the ID is used as the preview image. If the component assigned the ID cannot be found or its [Visibility](../arkts-apis/arkts-arkui-visibility-e.md) attribute is set to **None** or **Hidden**, a snapshot of the current component is used as the preview image. Currently,snapshots do not support visual effects, such as brightness, shadow, blur, and rotation.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="dragpreview-1"></a>
## dragPreview

```TypeScript
dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T
```

Sets the drag preview for the component. This API specifically configures or disables the lift animation effect.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T--><!--Device-CommonMethod-dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| preview | [CustomBuilder](arkts-arkui-custombuilder-t.md) \| DragItemInfo \| string | Yes | Preview image displayed during component drag operations. It only applies to [onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) drag mode.<br>If the component supports drag and drop and a preview is specified through [bindContextMenu](arkts-arkui-commonmethod-c.md#bindcontextmenu-1),that specified preview is displayed when the component is dragged. The priority of the background image returned in [onDragStart](arkts-arkui-commonmethod-c.md#ondragstart-1) is lower than that of the preview set in [dragPreview](arkts-arkui-commonmethod-c.md#dragpreview-1). This means that,once set, the latter will be used in place of the former. Using [CustomBuilder](docroot://reference/apis-arkui/arkui-ts/ts-types.md#custombuilder8) requires offline rendering and may increase performance overhead and latency. In light of this, you are advised to use [PixelMap](../../apis-image-kit/arkts-apis/arkts-image-image-pixelmap-i.md) in [DragItemInfo](arkts-arkui-dragiteminfo-i.md) instead.<br> When an ID of the string type is passed in, the snapshot of the component assigned the ID is used as the preview image. If the component assigned the ID cannot be found or its [Visibility](../arkts-apis/arkts-arkui-visibility-e.md) attribute is set to **None** or **Hidden**, a snapshot of the current component is used as the preview image. Currently,snapshots do not support visual effects, such as brightness, shadow, blur, and rotation. |
| config | [PreviewConfiguration](arkts-arkui-previewconfiguration-i.md) | No | Additional settings for the drag preview.<br>This parameter is effective only for previews set using [dragPreview](arkts-arkui-commonmethod-c.md#dragpreview-1). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="dragpreviewoptions"></a>
## dragPreviewOptions

```TypeScript
dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T
```

Sets the preview image processing mode, badge count, and interaction behavior during drag operations. The **onItemDragStart** drag mode is not supported.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T--><!--Device-CommonMethod-dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [DragPreviewOptions](arkts-arkui-dragpreviewoptions-i.md) | Yes | Preview image processing mode and badge count during dragging. |
| options | [DragInteractionOptions](arkts-arkui-draginteractionoptions-i.md) | No | Interaction behavior for the floating preview image.<br>Default value:empty<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="draggable"></a>
## draggable

```TypeScript
draggable(value: boolean): T
```

Sets whether the component is draggable. By default, the component is not draggable.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-draggable(value: boolean): T--><!--Device-CommonMethod-draggable(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component is draggable. <br>**true**: The component is draggable.<br>**false**: The component is not draggable. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="drawmodifier"></a>
## drawModifier

```TypeScript
drawModifier(modifier: DrawModifier | undefined): T
```

Sets the drawModifier of the current component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-drawModifier(modifier: DrawModifier | undefined): T--><!--Device-CommonMethod-drawModifier(modifier: DrawModifier | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [DrawModifier](arkts-arkui-drawmodifier-c.md) \| undefined | Yes | drawModifier used to draw, or undefined if it is not available.Default value: undefined A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="enableclicksoundeffect"></a>
## enableClickSoundEffect

```TypeScript
enableClickSoundEffect(enabled: boolean | undefined): T
```

Sets whether to enable the default click sound effect for a component. Whether the sound can be played depends on the sound settings of the device. For example, the sound effect is not played in mute mode.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-CommonMethod-enableClickSoundEffect(enabled: boolean | undefined): T--><!--Device-CommonMethod-enableClickSoundEffect(enabled: boolean | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| enabled | boolean \| undefined | Yes | Whether to enable the default click sound effect for a component.<br>The value **true** indicates that the default click sound effect is enabled, and **false** indicates the opposite.<br>If the value is **undefined**, the default click sound effect is enabled. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="enabled"></a>
## enabled

```TypeScript
enabled(value: boolean): T
```

Sets whether the component responds to user interactions. If **enabled** is not set, the component responds to user interactions by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-enabled(value: boolean): T--><!--Device-CommonMethod-enabled(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component responds to user interactions, including clicks and touches. The value **true** means that the component responds to user interactions, and **false** means the opposite. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="expandsafearea"></a>
## expandSafeArea

```TypeScript
expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T
```

Expands the safe area.

> **NOTE**  
>  
> - When using **expandSafeArea** to expand the drawing of a component, avoid setting fixed width and height values  
> (except percentages). If fixed width and height values are set (including **'auto'**), the edges for expanding the  
> safe area can only be **[SafeAreaEdge.TOP, SafeAreaEdge.START]**, and the size of the component remains unchanged  
> after safe area expansion.  
>  
> - The safe area does not restrict the layout or size of components inside, nor does it clip the components.  
>  
> - If the parent container is a scrollable container, the component does not extend after the **expandSafeArea**  
> attribute is set, but it can still trigger updates to the extension range of its child nodes that have  
> **expandSafeArea** set.  
>  
> - When **expandSafeArea()** is set without parameters, default values are applied. When **expandSafeArea([],[])**  
> is used with empty arrays, the setting has no effect.  
>  
> - Prerequisites for the **expandSafeArea** attribute to take effect:  
> 1. When **type** is set to **SafeAreaType.KEYBOARD**, the settings take effect by default. This behaves as the  
> component not avoiding the virtual keyboard.  
> 2. When **type** is set to any other value, the settings take effect only if its boundaries overlap with the  
> safe area. For example, if the height of the status bar is 100, the absolute position of the component on the  
> screen must be 0 <= y <= 100 for the settings to take effect.  
>  
> - When a component extends into a non-safe area, events in the non-safe area (such as click events) may be  
> intercepted by the system. Built-in components like the status bar will be given priority to respond to these  
> events.  
>  
> - Avoid setting the **expandSafeArea** attribute for components within scrollable containers. If you do set it,  
> you must apply the **expandSafeArea** attribute to all direct nodes from the current node to the scrollable  
> ancestor container, following the component nesting relationship. Otherwise, the **expandSafeArea** attribute may  
> become ineffective after scrolling.  
>  
> - The **expandSafeArea** attribute only affects the current component and does not propagate to parent or child  
> components. Therefore, all relevant components must be configured individually.  
>  
> - When both **expandSafeArea** and **position** attributes are set, the **position** attribute takes effect first,  
> followed by the **expandSafeArea** attribute. For components that do not have **position**, **offset**, or other  
> rendering attributes set, such as dialog boxes and sheets, the **expandSafeArea** attribute will not take effect if  
> their boundaries do not overlap with the non-safe area.  
>  
> - In scenarios where the **expandSafeArea** attribute is ineffective, and you need to place a component in the  
> safe area, you will need to manually adjust the component's coordinates.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T--><!--Device-CommonMethod-expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;SafeAreaType&gt; | No | Types of non-safe areas to extend into. For the CUTOUT type to take effect,the Metadata item must be added to the configuration file.<br>Default value: [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD].<br>Invalid values are treated as the default value. |
| edges | Array&lt;SafeAreaEdge&gt; | No | Edges for expanding the safe area.<br>Default value: [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END].<br>Invalid values are treated as the default value. The default value means to extend to all non-safe areas. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="flexbasis"></a>
## flexBasis

```TypeScript
flexBasis(value: number | string): T
```

Sets the base size of the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-flexBasis(value: number | string): T--><!--Device-CommonMethod-flexBasis(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Base size of the component in the main axis of the parent container (indicating that the base size of the component in the main axis is the original size of the component). Default value: **'auto'**.<br>For the string type, the value must be a string that can be converted into a number (for example,**'10'**),a string that includes a length unit (for example, **'10px'**), or the literal string **'auto'**;percentage-based strings are not supported.<br>For the number type, the value range is (0, +∞), and the unit is vp.<br>Invalid values are treated as the default value **'auto'** |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="flexgrow"></a>
## flexGrow

```TypeScript
flexGrow(value: number): T
```

Sets the percentage of the parent container's remaining space that is allocated to the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-flexGrow(value: number): T--><!--Device-CommonMethod-flexGrow(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Percentage of the parent container's remaining space that is allocated to the component.<br>The value must be greater than or equal to 0, <br>. Default value: **0**.<br>If this parameter is set to an invalid value, the default value will be used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="flexshrink"></a>
## flexShrink

```TypeScript
flexShrink(value: number): T
```

Sets the percentage of the parent container's shrink size that is allocated to the component.When the parent container is [Column](Column) or [Row](Row), you must set the size along the main axis.

When [getInspectorByKey](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-component-id.md#getinspectorbykey9)is used to obtain the **flexShrink** attribute, if the node does not have **flexShrink** set, the default value of **1** is returned by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-flexShrink(value: number): T--><!--Device-CommonMethod-flexShrink(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Percentage of the parent container's shrink size that is allocated to the component<br>The value range is all integers, If the parent container is [Column](Column) or [Row](Row), the default value is **0**, and the value range is (0, +∞).If the parent container is [Flex](Flex), the default value is **1**.<br>[constraintSize](arkts-arkui-commonmethod-c.md#constraintsize-1)limits the component's size range. For Column and Row components without explicit main axis size specified (through width, height, or size), the default layout behavior (adapt-to-fit child components)applies, even when constraintSize is configured. In this case, **flexShrink** has no effect.<br>If this parameter is set to an invalid value, the default value will be used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="focusbox"></a>
## focusBox

```TypeScript
focusBox(style: FocusBoxStyle): T
```

Sets the system focus box style for the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-focusBox(style: FocusBoxStyle): T--><!--Device-CommonMethod-focusBox(style: FocusBoxStyle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [FocusBoxStyle](../arkts-apis/arkts-arkui-focusboxstyle-i.md) | Yes | System focus box style for the component.<br>**NOTE**<br>This style affects only the components that display the system focus box during focus traversal. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="focusontouch"></a>
## focusOnTouch

```TypeScript
focusOnTouch(value: boolean): T
```

Sets whether the component is focusable on touch. If **focusOnTouch** is not set, the component is not focusable on touch by default.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-focusOnTouch(value: boolean): T--><!--Device-CommonMethod-focusOnTouch(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component is focusable on touch. <br>**true**: The component is focusable on touch.<br>**false**: The component is not focusable on touch.<br>**NOTE**<br>This setting requires the component to be touchable. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="focusscopeid"></a>
## focusScopeId

```TypeScript
focusScopeId(id: string, isGroup?: boolean): T
```

Set container as a focus group with a specific identifier.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-focusScopeId(id: string, isGroup?: boolean): T--><!--Device-CommonMethod-focusScopeId(id: string, isGroup?: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | focus scope identifier. |
| isGroup | boolean | No | whether this scope is a focus group, the default value is false |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="focusscopeid-1"></a>
## focusScopeId

```TypeScript
focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T
```

Set container as a focus group with a specific identifier.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-CommonMethod-focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T--><!--Device-CommonMethod-focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | focus scope identifier. |
| isGroup | boolean | No | whether this scope is a focus group, the default value is false. |
| arrowStepOut | boolean | No | whether the arrow keys can move focus from inside the focus group to outside,only effective when isGroup is true, the default value is true. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="focusscopepriority"></a>
## focusScopePriority

```TypeScript
focusScopePriority(scopeId: string, priority?: FocusPriority): T
```

Set the focus priority of component in a specific focus scope.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-focusScopePriority(scopeId: string, priority?: FocusPriority): T--><!--Device-CommonMethod-focusScopePriority(scopeId: string, priority?: FocusPriority): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| scopeId | string | Yes |  |
| priority | [FocusPriority](../arkts-apis/arkts-arkui-focuspriority-e.md) | No | the default value is AUTO |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="focusable"></a>
## focusable

```TypeScript
focusable(value: boolean): T
```

Sets whether the component is focusable.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-focusable(value: boolean): T--><!--Device-CommonMethod-focusable(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component is focusable.<br>**true**: The component is focusable.<br>**false**: The component is not focusable.<br>**NOTE**<br>Components that have default interaction logic, such as [Button](../../apis-input-kit/arkts-apis/arkts-input-multimodalinput-mouseevent-button-e.md) and [TextInput](arkts-arkui-textinput.md), are focusable by default. Other components, such as [Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md) and [Image](../../apis-image-kit/arkts-apis/arkts-multimedia-image.md), are not focusable by default. Only focusable components can trigger a [focus event](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundblurstyle"></a>
## foregroundBlurStyle

```TypeScript
foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T
```

Applies a foreground blur style to the component.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 18.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T--><!--Device-CommonMethod-foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [BlurStyle](arkts-arkui-blurstyle-e.md) | Yes | Settings of the foreground blur style. |
| options | [ForegroundBlurStyleOptions](arkts-arkui-foregroundblurstyleoptions-i.md) | No | Defines the foreground blur options. For details about the default value, see [ForegroundBlurStyleOptions](arkts-arkui-foregroundblurstyleoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundblurstyle-1"></a>
## foregroundBlurStyle

```TypeScript
foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T
```

Applies a foreground blur style to the component. Compared to [foregroundBlurStyle](arkts-arkui-commonmethod-c.md#foregroundblurstyle-1),the **style** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T--><!--Device-CommonMethod-foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;BlurStyle&gt; | Yes | Settings of the foreground blur style.<br>If **style** is set to **undefined**, no blur is applied. |
| options | [ForegroundBlurStyleOptions](arkts-arkui-foregroundblurstyleoptions-i.md) | No | Defines the foreground blur options. For details about the default value, see [ForegroundBlurStyleOptions](arkts-arkui-foregroundblurstyleoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundblurstyle-2"></a>
## foregroundBlurStyle

```TypeScript
foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T
```

Foreground blur style.blurStyle:Blur style type.sysOptions: system adaptive options.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-CommonMethod-foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T--><!--Device-CommonMethod-foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;BlurStyle&gt; | Yes |  |
| options | [ForegroundBlurStyleOptions](arkts-arkui-foregroundblurstyleoptions-i.md) | No |  |
| sysOptions | [SystemAdaptiveOptions](arkts-arkui-systemadaptiveoptions-i.md) | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="foregroundcolor"></a>
## foregroundColor

```TypeScript
foregroundColor(value: ResourceColor | ColoringStrategy): T
```

Sets the foreground color of the component. Components without explicit foreground color settings inherit from their parent components by default.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-foregroundColor(value: ResourceColor | ColoringStrategy): T--><!--Device-CommonMethod-foregroundColor(value: ResourceColor | ColoringStrategy): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) \| ColoringStrategy | Yes | Foreground color. The value can be a specific color or a coloring strategy. The [attribute animation](../../apis-ability-kit/arkts-apis/arkts-app-ability-common.md) is not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundcolor-1"></a>
## foregroundColor

```TypeScript
foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T
```

Sets the foreground color of the component. Components without explicit foreground color settings inherit from their parent components by default. Compared to [foregroundColor](arkts-arkui-commonmethod-c.md#foregroundcolor-1), the **color** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T--><!--Device-CommonMethod-foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;ResourceColor \| ColoringStrategy&gt; | Yes | Foreground color. The value can be a specific color or a coloring strategy. Property animations are not supported.<br>If the color value is **undefined**, the previous setting or the component's default value is retained. The specific behavior may vary across components. It is recommended that you use explicit color values or [ColoringStrategy](../arkts-apis/arkts-arkui-coloringstrategy-e.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundeffect"></a>
## foregroundEffect

```TypeScript
foregroundEffect(options: ForegroundEffectOptions): T
```

Sets the foreground effect of the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-foregroundEffect(options: ForegroundEffectOptions): T--><!--Device-CommonMethod-foregroundEffect(options: ForegroundEffectOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ForegroundEffectOptions](arkts-arkui-foregroundeffectoptions-i.md) | Yes | Foreground effect settings, including the blur radius. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="foregroundfilter"></a>
## foregroundFilter

```TypeScript
foregroundFilter(filter: Filter): T
```

Sets the visual effect of the foreground (content) filter.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-foregroundFilter(filter: Filter): T--><!--Device-CommonMethod-foregroundFilter(filter: Filter): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) | Yes | Visual effect of the foreground (content) filter. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="freeze"></a>
## freeze

```TypeScript
freeze(value: boolean): T
```

Sets whether to freeze the component. When frozen, the component and its children are cached for repeated drawing after offscreen rendering, without updating internal attributes.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-freeze(value: boolean): T--><!--Device-CommonMethod-freeze(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to freeze the component. When frozen, the component and its children are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the opacity of the component is not 1, the drawing effect may vary depending on the value.<br>Default value: **false**<br>**true**: Freeze the component.<br>**false**: Do not freeze the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="freeze-1"></a>
## freeze

```TypeScript
freeze(freeze: Optional<boolean>): T
```

Sets whether to freeze the component. When frozen, the component and its children are cached for repeated drawing after offscreen rendering, without updating internal attributes. Compared with [freeze](arkts-arkui-commonmethod-c.md#freeze-1), this API supports the **undefined** type for the **freeze** parameter.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-freeze(freeze: Optional<boolean>): T--><!--Device-CommonMethod-freeze(freeze: Optional<boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| freeze | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to freeze the component. When frozen, the component and its children are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the opacity of the component is not 1, the drawing effect may vary depending on the value.<br>Default value: **false**<br>**true**: Freeze the component.<br>**false**: Do not freeze the component.<br>If **freeze** is set to **undefined**, the previous value is retained. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="geometrytransition"></a>
## geometryTransition

```TypeScript
geometryTransition(id: string): T
```

Implements an implicit shared element transition.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-geometryTransition(id: string): T--><!--Device-CommonMethod-geometryTransition(id: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | ID used to set up a binding relationship. Setting **id** to an empty string clears the binding relationship. The value can be changed to re-establish the binding relationship. One ID can be bound to only two components, which function as in and out components. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="geometrytransition-1"></a>
## geometryTransition

```TypeScript
geometryTransition(id: string, options?: GeometryTransitionOptions): T
```

Implements an implicit shared element transition.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-geometryTransition(id: string, options?: GeometryTransitionOptions): T--><!--Device-CommonMethod-geometryTransition(id: string, options?: GeometryTransitionOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | ID used to set up a binding relationship. Setting **id** to an empty string clears the binding relationship. The value can be changed to re-establish the binding relationship. One ID can be bound to only two components, which function as in and out components. |
| options | [GeometryTransitionOptions](arkts-arkui-geometrytransitionoptions-i.md) | No | Settings of the implicit shared element transition. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="gesture"></a>
## gesture

```TypeScript
gesture(gesture: GestureType, mask?: GestureMask): T
```

Gesture to bind.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-gesture(gesture: GestureType, mask?: GestureMask): T--><!--Device-CommonMethod-gesture(gesture: GestureType, mask?: GestureMask): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gesture | [GestureType](../../apis-accessibility-kit/arkts-apis/arkts-accessibility-gesturetype-t.md) | Yes | Type of the gesture to bind. |
| mask | [GestureMask](../arkts-apis/arkts-arkui-gesturemask-e.md) | No | Mask for gesture events.<br>Default value: **GestureMask.Normal**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="gesturemodifier"></a>
## gestureModifier

```TypeScript
gestureModifier(modifier: GestureModifier): T
```

Creates a gesture modifier.

> **NOTE**  
>  
> **gestureModifier** does not support custom components.  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-gestureModifier(modifier: GestureModifier): T--><!--Device-CommonMethod-gestureModifier(modifier: GestureModifier): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| modifier | [GestureModifier](arkts-arkui-gesturemodifier-i.md) | Yes | for dynamically setting gestures bound to the current component. The if/else syntax is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="grayscale"></a>
## grayscale

```TypeScript
grayscale(value: number): T
```

Applies a grayscale effect to the component. The grayscale rendering of the upper layer will overlay that of lower-layer child components. If this API is not used, there will be no change by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-grayscale(value: number): T--><!--Device-CommonMethod-grayscale(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Grayscale conversion ratio of the component. If the value is **1.0**, the component is completely converted to grayscale. If the value is **0.0**, the component remains unchanged. Between **0** and **1**, the value applies a linear multiplier on the grayscale effect.<br>Value range: [0.0, 1.0]<br>**NOTE**<br   >A value less than **0.0** evaluates to the value **0.0**. A value greater than **1.0** evaluates to the value **1.0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="grayscale-1"></a>
## grayscale

```TypeScript
grayscale(grayscale: Optional<number>): T
```

Applies a grayscale effect to the component. The grayscale rendering of the upper layer will overlay that of lower-layer child components. If this API is not used, there will be no change by default. Compared to [grayscale](arkts-arkui-commonmethod-c.md#grayscale-1), the **grayscale** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-grayscale(grayscale: Optional<number>): T--><!--Device-CommonMethod-grayscale(grayscale: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| grayscale | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Grayscale conversion ratio of the component. If the value is **1.0**, the component is completely converted to grayscale. If the value is **0.0**, the component remains unchanged.Between **0** and **1**, the value applies a linear multiplier on the grayscale effect.<br>Value range:[0.0, 1.0]<br>**NOTE**<br>A value less than **0.0** evaluates to the value **0.0**. A value greater than **1.0** evaluates to the value **1.0**.<br>If **grayscale** is set to **undefined**, the default value **0.0** is used, which means the component reverts to its original effect with no grayscale. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="gridoffset"></a>
## gridOffset

```TypeScript
gridOffset(value: number): T
```

The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,the current component is located in the nth column.

**Since:** 11

**Deprecated since:** 14

**Substitutes:** grid_col/GridColInterface

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-gridOffset(value: number): T--><!--Device-CommonMethod-gridOffset(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@atomicservice |

<a id="gridspan"></a>
## gridSpan

```TypeScript
gridSpan(value: number): T
```

Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.

**Since:** 11

**Deprecated since:** 14

**Substitutes:** grid_col/GridColInterface

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-gridSpan(value: number): T--><!--Device-CommonMethod-gridSpan(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@atomicservice |

<a id="groupdefaultfocus"></a>
## groupDefaultFocus

```TypeScript
groupDefaultFocus(value: boolean): T
```

Specifies whether to set the component as the default focus of the container. If **groupDefaultFocus** is not set,the component will not receive focus by default when its container is focused.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-groupDefaultFocus(value: boolean): T--><!--Device-CommonMethod-groupDefaultFocus(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to set the component as the default focus of the parent container. This parameter takes effect only when the container is new and obtains focus for the first time. <br>**true**: The component is the default focus of the parent container.<br>**false**: The component is not the default focus of the parent container.<br>**NOTE**<br>This parameter must be used together with [tabIndex](arkts-arkui-commonmethod-c.md#tabindex-1). When **tabIndex** is set for a container and **groupDefaultFocus(true)** is set for a child in the container or for the container itself, then when the container obtains focus for the first time through sequential Tab navigation, the focus automatically moves to the specified component. If **groupDefaultFocus(true)** is set for multiple components in the container (including the container itself), the first component found in the component tree in-depth traversal receives the focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="height"></a>
## height

```TypeScript
height(value: Length): T
```

Sets the height of the component. By default, the height required to fully hold the component content is used. If a component is higher than its parent, it will overflow.<br>Since API version 10, this API supports the calc calculation feature.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-height(value: Length): T--><!--Device-CommonMethod-height(value: Length): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Height of the component to set.<br>Unit: vp   > **NOTE**   >   > In the [Row](Row), [Column](Column), and [RelativeContainer](RelativeContainer)components, setting **width** and **height** to **auto** means that the size adapts to the size of their child components. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="height-1"></a>
## height

```TypeScript
height(heightValue: Length | LayoutPolicy): T
```

Sets the height of the component or its vertical layout policy. By default, the component uses the height required for its content. If a component is higher than its parent, it will overflow.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-CommonMethod-height(heightValue: Length | LayoutPolicy): T--><!--Device-CommonMethod-height(heightValue: Length | LayoutPolicy): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| heightValue | [Length](../arkts-apis/arkts-arkui-length-t.md) \| LayoutPolicy | Yes | Height of the component to set.<br>Unit: vp. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="hittestbehavior"></a>
## hitTestBehavior

```TypeScript
hitTestBehavior(value: HitTestMode): T
```

Sets the hit test mode for a component. If **hitTestBehavior** is not set, the component defaults to **HitTestMode.Default**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 26.0.0.

<!--Device-CommonMethod-hitTestBehavior(value: HitTestMode): T--><!--Device-CommonMethod-hitTestBehavior(value: HitTestMode): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [HitTestMode](../arkts-apis/arkts-arkui-hittestmode-e.md) | Yes | Hit test mode for a component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="hovereffect"></a>
## hoverEffect

```TypeScript
hoverEffect(value: HoverEffect): T
```

Sets the hover effect for the component. When no hover effect is specified, the component uses the default **HoverEffect.Auto** effect. For components with hover effects applied, the hover effect is hidden when the mouse hovers and presses down on the component, and restored when the mouse button is released.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-hoverEffect(value: HoverEffect): T--><!--Device-CommonMethod-hoverEffect(value: HoverEffect): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [HoverEffect](../arkts-apis/arkts-arkui-hovereffect-e.md) | Yes | Hover effect of the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="huerotate"></a>
## hueRotate

```TypeScript
hueRotate(value: number | string): T
```

Rotates the hue of the component. If this API is not used, there will be no change by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-hueRotate(value: number | string): T--><!--Device-CommonMethod-hueRotate(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Hue rotation angle of the component.<br>Value range: (-∞, +∞)<br>**NOTE**<br>A rotation of 360 degrees leaves the color unchanged. A rotation of 180 degrees and then -180 degrees also leaves the color unchanged. When the data type is number, the value **90** is equivalent to **'90deg'**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="huerotate-1"></a>
## hueRotate

```TypeScript
hueRotate(rotation: Optional<number | string>): T
```

Rotates the hue of the component. If this API is not used, there will be no change by default. Compared to [hueRotate](arkts-arkui-commonmethod-c.md#huerotate-1), the **rotation** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-hueRotate(rotation: Optional<number | string>): T--><!--Device-CommonMethod-hueRotate(rotation: Optional<number | string>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| rotation | [Optional](arkts-arkui-optional-t.md)&lt;number \| string&gt; | Yes | Hue rotation angle of the component.<br>Value range: (-∞, +∞)<br>For the string type, the value must be a numeric string.<br>**NOTE**<br>A rotation of 360 degrees leaves the color unchanged. A rotation of 180 degrees and then -180 degrees also leaves the color unchanged. When the data type is number, the value **90** is equivalent to **'90deg'**.<br>If **sepia** is **undefined**, the component reverts to its original effect with no hue rotation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="id"></a>
## id

```TypeScript
id(value: string): T
```

Id. User can set an id to the component to identify it.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-id(value: string): T--><!--Device-CommonMethod-id(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@FaAndStageModel@crossplatform@form@atomicservice |

<a id="ignorelayoutsafearea"></a>
## ignoreLayoutSafeArea

```TypeScript
ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T
```

Ignores the safe area for component layout.

> **NOTE**  
>  
> - For a component that ignores layout safe area edges: If its width or height is set to  
> [LayoutPolicy.matchParent](arkts-arkui-layoutpolicy-c.md#matchparent), both its size and position  
> will change; otherwise, only its position will change.  
>  
> - Based on the **safeAreaPadding** accumulation feature, a component can expand its safe area edges to all  
> detectable continuous safe areas.  
>  
> - When child elements of scrollable components ignore layout safe area edges, the safe areas of the scrollable  
> component itself and its parent components are not considered in the scrolling direction. Scrollable components  
> include **List**, **ArcListItem**, **Grid**, **WaterFlow**, **Swiper**, and **Tabs**.  
>  
> - When both the layout safe area ignore attribute (**.ignoreLayoutSafeArea**) and the rendering safe area ignore  
> attribute (**.expandSafeArea**) are set: **.ignoreLayoutSafeArea** takes effect first, and **.expandSafeArea**  
> takes effect on the basis of the former.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T--><!--Device-CommonMethod-ignoreLayoutSafeArea(types?: Array<LayoutSafeAreaType>, edges?: Array<LayoutSafeAreaEdge>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| types | Array&lt;LayoutSafeAreaType&gt; | No | Types of layout safe areas to expand.<br>Default value:[LayoutSafeAreaType.SYSTEM](expands to all safe areas, including the status bar, navigation bar, andcomponent-level safe area (safeAreaPadding)). navigation bar, and component-level safe area<br>Invalid values are treated as the default value. |
| edges | Array&lt;LayoutSafeAreaEdge&gt; | No | Edges of the layout safe area to expand, with mirroring capability supported.<br>Default value: [LayoutSafeAreaEdge.ALL](expands all edges of the component).<br>Invalid values are treated as the default value. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="inspectorlabel"></a>
## inspectorLabel

```TypeScript
inspectorLabel(label: string | undefined): T
```

Set the component's inspector label which only display on DevEco Studio.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-inspectorLabel(label: string | undefined): T--><!--Device-CommonMethod-inspectorLabel(label: string | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| label | string \| undefined | Yes | the inspector label. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@atomicservice |

<a id="invert"></a>
## invert

```TypeScript
invert(value: number | InvertOptions): T
```

Inverts an image.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-invert(value: number | InvertOptions): T--><!--Device-CommonMethod-invert(value: number | InvertOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| InvertOptions | Yes | How an image is inverted.<br>When the input parameter is a number: If the value is **1**, the component is completely inverted. If the value is **0**, the component remains unchanged.<br>Value range: [0, 1].<br>A value less than 0 evaluates to the value **0**. A value larger than 1 is treated as **1**.<br>If the value is of the InvertOptions type, the grayscale value of the background color is compared with the threshold range. If the grayscale value is greater than the upper bound of the threshold range, the **high** value is used. If the grayscale value is less than the lower bound of the threshold range, the **low** value is used. If the grayscale value is within the threshold range, the background color changes linearly from high to low.<br>**NOTE**<br>The number and InvertOptions parameter types produce different inversion effects.When you switch parameter types, previous effects persist and both effects coexist. Use consistent parameter types for predictable results.<br>**Since:** 11 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="invert-1"></a>
## invert

```TypeScript
invert(options: Optional<number | InvertOptions>): T
```

Inverts an image. Compared with [invert](arkts-arkui-commonmethod-c.md#invert-1), this API supports the **undefined** type for the **options** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-invert(options: Optional<number | InvertOptions>): T--><!--Device-CommonMethod-invert(options: Optional<number | InvertOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;number \| InvertOptions&gt; | Yes | How an image is inverted.<br>When the input parameter is a number: If the value is **1**, the component is completely inverted. If the value is **0**, the component remains unchanged.<br>Value range: [0, 1].<br>A value less than 0 evaluates to the value **0**. A value larger than 1 is treated as **1**.<br>If the value is of the InvertOptions type, the grayscale value of the background color is compared with the threshold range. If the grayscale value is greater than the upper bound of the threshold range, the **high** value is used. If the grayscale value is less than the lower bound of the threshold range, the **low** value is used. If the grayscale value is within the threshold range, the background color changes linearly from high to low.<br>If **options** is **undefined**, the component reverts to its original effect.<br>**NOTE**<br>The number and InvertOptions parameter types produce different inversion effects. When you switch parameter types, previous effects persist and both effects coexist. Use consistent parameter types for predictable results. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="key"></a>
## key

```TypeScript
key(value: string): T
```

Key. User can set an key to the component to identify it.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CommonMethod-key(value: string): T--><!--Device-CommonMethod-key(value: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="keyboardshortcut"></a>
## keyboardShortcut

```TypeScript
keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T
```

Sets a keyboard shortcut for the component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T--><!--Device-CommonMethod-keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| FunctionKey | Yes | Character key (which can be entered through the keyboard) or [function key](../arkts-apis/arkts-arkui-functionkey-e.md).<br>An empty string means to disable the keyboard shortcut.<br> |
| keys | Array&lt;ModifierKey&gt; | Yes | Modifier keys.<br>This parameter can be left empty only when **value** is set to a [function key](../arkts-apis/arkts-arkui-functionkey-e.md).<br> |
| action | () =&gt; void | No | Callback for a custom event after the keyboard shortcut is triggered. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="layoutgravity"></a>
## layoutGravity

```TypeScript
layoutGravity(alignment: LocalizedAlignment): T
```

Sets the alignment rule for child components in the **Stack** container. This API only takes effect when the parent container is **Stack**. When used with the [align](arkts-arkui-commonmethod-c.md#align-1) attribute, **layoutGravity** takes precedence. This attribute supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-CommonMethod-layoutGravity(alignment: LocalizedAlignment): T--><!--Device-CommonMethod-layoutGravity(alignment: LocalizedAlignment): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| alignment | [LocalizedAlignment](../arkts-apis/arkts-arkui-localizedalignment-e.md) | Yes | Alignment rule of child components in the **Stack** container.If an invalid value is passed, the default value is used. Default value: **LocalizedAlignment.CENTER**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="layoutweight"></a>
## layoutWeight

```TypeScript
layoutWeight(value: number | string): T
```

Sets the weight of the component during layout. A component with this attribute is allocated space along the main axis of its parent container ([Row](Row), [Column](Column), or [Flex](Flex) based on its specified weight.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-layoutWeight(value: number | string): T--><!--Device-CommonMethod-layoutWeight(value: number | string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| string | Yes | Layout weight of the component.<br>When the parent container size is determined:<br>Elements without **layoutWeight** or with **layoutWeight** set to **0** take precedence in occupying space.<br>The remaining space on the main axis is then allocated proportionally among elements with a **layoutWeight** value greater than 0, ignoring their own size settings.<br>Default value: **0**<br>**NOTE**<br>This parameter is only effective in [Row](Row), [Column](Column), and [Flex](Flex) container components.<br>The value can be a number greater than or equal to 0 or a string that can be converted to a number.<br>If any child component in a container has the **layoutWeight** attribute set to a value greater than 0, then child components will no longer be laid out based on [flexShrink](arkts-arkui-commonmethod-c.md#flexshrink-1) and [flexGrow](arkts-arkui-commonmethod-c.md#flexgrow-1). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lightupeffect"></a>
## lightUpEffect

```TypeScript
lightUpEffect(value: number): T
```

Applies a light up effect to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-lightUpEffect(value: number): T--><!--Device-CommonMethod-lightUpEffect(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Light up degree of the component.<br>The value ranges from 0 to 1.<br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated. Between **0** and **1**, a larger value indicates higher luminance. A value less than 0 is handled as the value **0**. A value greater than 1 is handled as the value **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lightupeffect-1"></a>
## lightUpEffect

```TypeScript
lightUpEffect(degree: Optional<number>): T
```

Applies a light up effect to the component. Compared to [lightUpEffect<sup>12+</sup>](arkts-arkui-commonmethod-c.md#lightupeffect-1), the **degree** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-lightUpEffect(degree: Optional<number>): T--><!--Device-CommonMethod-lightUpEffect(degree: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| degree | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Light up degree of the component.<br>The value ranges from 0 to 1.<br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated. Between **0** and **1**, a larger value indicates higher luminance. A value less than 0 is handled as the value **0**. A value greater than 1 is handled as the value **1**.<br>If **degree** is **undefined**, the light up degree reverts to **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lineargradient"></a>
## linearGradient

```TypeScript
linearGradient(value: LinearGradientOptions): T
```

Creates a linear gradient.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-linearGradient(value: LinearGradientOptions): T--><!--Device-CommonMethod-linearGradient(value: LinearGradientOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [LinearGradientOptions](arkts-arkui-lineargradientoptions-i.md) | Yes | Linear gradient.<br>**Since:** 18 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lineargradient-1"></a>
## linearGradient

```TypeScript
linearGradient(options: Optional<LinearGradientOptions>): T
```

Creates a linear gradient. Compared to [linearGradient](arkts-arkui-commonmethod-c.md#lineargradient-1), this API supports the **undefined** type for the **options** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-linearGradient(options: Optional<LinearGradientOptions>): T--><!--Device-CommonMethod-linearGradient(options: Optional<LinearGradientOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;LinearGradientOptions&gt; | Yes | Linear gradient.<br>If **options** is **undefined**, the linear gradient is disabled. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lineargradientblur"></a>
## linearGradientBlur

```TypeScript
linearGradientBlur(value: number, options: LinearGradientBlurOptions): T
```

Applies a linear gradient foreground blur effect to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-linearGradientBlur(value: number, options: LinearGradientBlurOptions): T--><!--Device-CommonMethod-linearGradientBlur(value: number, options: LinearGradientBlurOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Blur radius. A larger value indicates a higher blur degree. If the value is 0, the content is not blurred.<br>Value range: [0, 1000] |
| options | [LinearGradientBlurOptions](arkts-arkui-lineargradientbluroptions-i.md) | Yes | Linear gradient blur effect.<br>The linear gradient blur effect is defined by [fractionStops](arkts-arkui-lineargradientbluroptions-i.md) and [direction](arkts-arkui-lineargradientbluroptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="lineargradientblur-1"></a>
## linearGradientBlur

```TypeScript
linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T
```

Applies a linear gradient foreground blur effect to the component. Compared with [linearGradientBlur<sup>12+</sup>](arkts-arkui-commonmethod-c.md#lineargradientblur-1),this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T--><!--Device-CommonMethod-linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| blurRadius | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Blur radius. A larger value indicates a higher blur degree. If the value is 0, the content is not blurred.<br>Value range: [0, 1000]<br>If **blurRadius** is **undefined**, the gradient blur effect reverts to **0**. |
| options | [Optional](arkts-arkui-optional-t.md)&lt;LinearGradientBlurOptions&gt; | Yes | Linear gradient blur effect.<br>If **options** is **undefined**, the gradient blur effect reverts to **0**.<br>The linear gradient blur effect is defined by [fractionStops](arkts-arkui-lineargradientbluroptions-i.md) and [direction](arkts-arkui-lineargradientbluroptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="margin"></a>
## margin

```TypeScript
margin(value: Margin | Length | LocalizedMargin): T
```

Sets the margin of the component. The margin is considered as a part of the component's size during position calculation, thereby affecting the component's placement.<br>Since API version 10, this API supports the calc calculation feature.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-margin(value: Margin | Length | LocalizedMargin): T--><!--Device-CommonMethod-margin(value: Margin | Length | LocalizedMargin): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Margin](../arkts-apis/arkts-arkui-margin-t.md) \| Length \| LocalizedMargin | Yes | Margin of the component to set.<br>When the parameter is of the **Length** type, the four margins take effect.<br>Default value: **0**<br>Unit: vp<br>When **margin** is set to a percentage, the width of the parent container is used as the basic value. When child components are laid out along the cross axis of the [Row](Row), [Column](Column), or [Flex](Flex) container, the cross axis size of the child components and the margins add up to the total size of the container.<br>For example, if the width of the **Column** container is 100, the width of the child component is 50, the left margin is 10, and the right margin is 20, then the actual horizontal offset of the child component is 10.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="markanchor"></a>
## markAnchor

```TypeScript
markAnchor(value: Position | LocalizedPosition): T
```

Sets the anchor for element positioning. This attribute supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-markAnchor(value: Position | LocalizedPosition): T--><!--Device-CommonMethod-markAnchor(value: Position | LocalizedPosition): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Position](../arkts-apis/arkts-arkui-display-position-i.md) \| LocalizedPosition | Yes | Positioning anchor that offsets an element from the position specified by [position](arkts-arkui-commonmethod-c.md#position-1) or [offset](arkts-arkui-commonmethod-c.md#offset-1)**.position({x: value1, y: value2}).markAnchor({x: value3, y: value4})** has the same effect as **.position({x: value1 - value3, y: value2 - value4})**. The same applies to **offset**.<br>If **.markAnchor({x: value1, y: value2})** is set separately, the effect is the same as that of **.offset({x: -value1, y: -value2})**.<br>API version 9 and earlier: The default value is **{x: 0, y: 0}**.<br>API version 10: no default value.<br>This attribute does not take effect when it is set to an abnormal value.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="mask"></a>
## mask

```TypeScript
mask(value: ProgressMask): T
```

Adds a mask to the component to indicate the progress.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-mask(value: ProgressMask): T--><!--Device-CommonMethod-mask(value: ProgressMask): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ProgressMask](arkts-arkui-progressmask-c.md) | Yes | Mask to add to the component, which allows for dynamic adjustment of progress,maximum value, and color settings. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="mask-1"></a>
## mask

```TypeScript
mask(mask: Optional<ProgressMask>): T
```

Adds a mask to the component to indicate the progress. Compared with [mask<sup>12+</sup>](arkts-arkui-commonmethod-c.md#mask-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-mask(mask: Optional<ProgressMask>): T--><!--Device-CommonMethod-mask(mask: Optional<ProgressMask>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| mask | [Optional](arkts-arkui-optional-t.md)&lt;ProgressMask&gt; | Yes | Mask to add to the component, which allows for dynamic adjustment of progress, maximum value, and color settings.<br>If **mask** is set to **undefined**, the component to revert to its original effect without the mask to indicate the progress. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="mask-2"></a>
## mask

```TypeScript
mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T
```

Adds a mask of the specified shape to the component.

> **NOTE**

**Since:** 7

**Deprecated since:** 12

**Substitutes:** [maskShape](arkts-arkui-commonmethod-c.md#maskshape-1)

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T--><!--Device-CommonMethod-mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CircleAttribute](arkts-arkui-circle-attribute.md) \| EllipseAttribute \| PathAttribute \| RectAttribute \| ProgressMask | Yes | Mask of the specified shape to add to the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="maskshape"></a>
## maskShape

```TypeScript
maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T
```

Adds a mask of the specified shape to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T--><!--Device-CommonMethod-maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CircleShape](arkts-arkui-circleshape-t.md) \| EllipseShape \| PathShape \| RectShape | Yes | Mask of the specified shape to add to the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="maskshape-1"></a>
## maskShape

```TypeScript
maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T
```

Adds a mask of the specified shape to the component. Compared with [maskShape<sup>12+</sup>](arkts-arkui-commonmethod-c.md#maskshape-1),this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T--><!--Device-CommonMethod-maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| shape | [Optional](arkts-arkui-optional-t.md)&lt;CircleShape \| EllipseShape \| PathShape \| RectShape&gt; | Yes | Mask of the specified shape to add to the component.<br>If the value of **shape** is **undefined**, the current setting will be reset to its default state. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="materialfilter"></a>
## materialFilter

```TypeScript
materialFilter(filter: Filter | undefined): T
```

Sets the visual effect of the material filter. The effects it contains are rendered at a level before the shadow.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 23.

<!--Device-CommonMethod-materialFilter(filter: Filter | undefined): T--><!--Device-CommonMethod-materialFilter(filter: Filter | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| filter | [Filter](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-agent-filter-i.md) \| undefined | Yes | Filter effect parameters.Undefined means to none material filter. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="monopolizeevents"></a>
## monopolizeEvents

```TypeScript
monopolizeEvents(monopolize: boolean): T
```

Sets whether the component exclusively handles events.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-monopolizeEvents(monopolize: boolean): T--><!--Device-CommonMethod-monopolizeEvents(monopolize: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| monopolize | boolean | Yes | Whether the component exclusively handles events. true: The component exclusively handles events. false: The component does not exclusively handle events.Default value: false.NOTE1. If a component is exclusively handling events after a finger is pressed on it, and another finger is pressed before the first finger is lifted,the component continues to exclusively handle events while interacting with the second finger. The same case applies to a third and more fingers.2. If a component is bound through [parallelGesture](arkts-arkui-commonmethod-c.md#parallelgesture-1) to a gesture, for example, pan gesture, that can also be triggered by its child component,and the child component has event monopolization and is the first to respond, then the parent will not respond to the gesture. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="motionblur"></a>
## motionBlur

```TypeScript
motionBlur(value: MotionBlurOptions):T
```

Applies a motion blur effect to the component being scaled or moved.

> **NOTE**  
>  
> - Do not use this API in intra-component transitions, shared element transitions, implicit element transitions,  
> or particle animations. Doing so may cause unexpected results.  
>  
> - The **radius** parameter of **motionBlur** must be set to **0** for the initial state. Otherwise, there may be  
> unexpected results during a cold start.  
>  
> - This API must be used together with the **onFinish** parameter of **AnimateParam**. Its **radius** parameter  
> must be set to **0** when the animation ends; otherwise, there may be unexpected results.  
>  
> - When using this API, do not frequently change the blur radius of the same component; otherwise, there may be  
> unexpected results. For example, if you frequently click the image in the example, the blur effect may not work  
> sometimes.  
>  
> - To avoid unexpected results, make sure the coordinates of the motion blur anchor point are the same as those of  
> the animation scaling anchor point.  
>  
> - To avoid unexpected results, set the blur radius to a value less than 1.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-motionBlur(value: MotionBlurOptions):T--><!--Device-CommonMethod-motionBlur(value: MotionBlurOptions):T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [MotionBlurOptions](arkts-arkui-motionbluroptions-i.md) | Yes | Motion blur options. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="motionblur-1"></a>
## motionBlur

```TypeScript
motionBlur(motionBlur: Optional<MotionBlurOptions>): T
```

Applies a motion blur effect to the component being scaled or moved. Compared with [motionBlur](arkts-arkui-commonmethod-c.md#motionblur-1), this API supports the **undefined** type for the **motionBlur** parameter.

1. Do not use this API in intra-component transitions, shared element transitions, implicit element transitions,or particle animations. Doing so may cause unexpected results.

2. The **radius** parameter of **motionBlur** must be set to **0** for the initial state. Otherwise, there may be unexpected results during a cold start.

3. This API must be used together with the **onFinish** parameter of **AnimateParam**. Its **radius** parameter must be set to **0** when the animation ends; otherwise, there may be unexpected results.

4. When using this API, do not frequently change the blur radius of the same component; otherwise, there may be unexpected results. For example, if you frequently click the image in the example, the blur effect may not work sometimes.

5. To avoid unexpected results, make sure the coordinates of the motion blur anchor point are the same as those of the animation scaling anchor point.

6. To avoid unexpected results, set the blur radius to a value less than 1.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-motionBlur(motionBlur: Optional<MotionBlurOptions>): T--><!--Device-CommonMethod-motionBlur(motionBlur: Optional<MotionBlurOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| motionBlur | [Optional](arkts-arkui-optional-t.md)&lt;MotionBlurOptions&gt; | Yes | Motion blur options.<br>If **motionBlur** is set to **undefined**, the previous value is retained. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="motionpath"></a>
## motionPath

```TypeScript
motionPath(value: MotionPathOptions): T
```

Sets a path animation for the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-motionPath(value: MotionPathOptions): T--><!--Device-CommonMethod-motionPath(value: MotionPathOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [MotionPathOptions](arkts-arkui-motionpathoptions-i.md) | Yes | Motion path of the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="mouseresponseregion"></a>
## mouseResponseRegion

```TypeScript
mouseResponseRegion(value: Array<Rectangle> | Rectangle): T
```

Sets one or more mouse response regions.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-mouseResponseRegion(value: Array<Rectangle> | Rectangle): T--><!--Device-CommonMethod-mouseResponseRegion(value: Array<Rectangle> | Rectangle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;Rectangle&gt; \| Rectangle | Yes | Mouse response regions, defining the position and size.<br>The default touch target is the entire component. Default value:<br>{<br>x: 0,<br>y: 0,<br>width: '100%',<br>height: '100%'<br>} |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="nextfocus"></a>
## nextFocus

```TypeScript
nextFocus(nextStep: Optional<FocusMovement>): T
```

Set nextFocus.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-nextFocus(nextStep: Optional<FocusMovement>): T--><!--Device-CommonMethod-nextFocus(nextStep: Optional<FocusMovement>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| nextStep | [Optional](arkts-arkui-optional-t.md)&lt;FocusMovement&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="obscured"></a>
## obscured

```TypeScript
obscured(reasons: Array<ObscuredReasons>): T
```

Sets how the component content is obscured.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-obscured(reasons: Array<ObscuredReasons>): T--><!--Device-CommonMethod-obscured(reasons: Array<ObscuredReasons>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| reasons | Array&lt;ObscuredReasons&gt; | Yes | How the component content is obscured.<br>This API is only available for the [Image](./image)<!--Del-->, [FormComponent](./form_component)<sup>12+</sup>,<!--DelEnd--> and [Text](./text) components.<br>**NOTE**<br>To obscure an image when it is being loaded, you must set the width and height of the **Image** component.<br>Obscuring is not available for **Text** components that have child components or have any [styled string](./styled_string) configured.<br>Default value: []. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Returns the current component. |

<a id="offset"></a>
## offset

```TypeScript
offset(value: Position | Edges | LocalizedEdges): T
```

Sets the offset of the component relative to its original position. When **offset** is used in combination with the [position](arkts-arkui-commonmethod-c.md#position-1) attribute, the **position** attribute takes precedence and the configured offset will not be applied. This attribute supports dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-offset(value: Position | Edges | LocalizedEdges): T--><!--Device-CommonMethod-offset(value: Position | Edges | LocalizedEdges): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Position](../arkts-apis/arkts-arkui-display-position-i.md) \| Edges \| LocalizedEdges | Yes | Offset of the component relative to its original layout position. The **offset** attribute does not affect the layout of the parent container. It adjusts the component position only during drawing.If of the [Position](../arkts-apis/arkts-arkui-position-t.md) type, this parameter sets the offset relative to the upper left corner of the component. If of the [Edges](../arkts-apis/arkts-arkui-graphics-edges-i.md) type, this parameter sets the offset relative to the four edges of the component. **{x: x, y: y}** has the same effect as **{left: x, top: y}** and **{right: -x, bottom: -y}**. The [LocalizedEdges](../arkts-apis/arkts-arkui-localizededges-i.md) type supports the mirror mode:**start** is equivalent to **x** with left-to-right scripts and **-x** with right-to-left scripts.<br>API version 9 and earlier: The default value is **{x: 0, y: 0}**.<br>Default unit: vp<br>API version 10: no default value.<br>This attribute does not take effect when it is set to an abnormal value.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onaccessibilityactionintercept"></a>
## onAccessibilityActionIntercept

```TypeScript
onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T
```

Register accessibility action intercept callback,when accessibility action is to be executed,the callback will be executed

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-CommonMethod-onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T--><!--Device-CommonMethod-onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AccessibilityActionInterceptCallback](arkts-arkui-accessibilityactioninterceptcallback-t.md) | Yes | accessibility action intercept callback function |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="onaccessibilityfocus"></a>
## onAccessibilityFocus

```TypeScript
onAccessibilityFocus(callback: AccessibilityFocusCallback): T
```

Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-onAccessibilityFocus(callback: AccessibilityFocusCallback): T--><!--Device-CommonMethod-onAccessibilityFocus(callback: AccessibilityFocusCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AccessibilityFocusCallback](arkts-arkui-accessibilityfocuscallback-t.md) | Yes | accessibility focus callback function |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="onaccessibilityhover"></a>
## onAccessibilityHover

```TypeScript
onAccessibilityHover(callback: AccessibilityCallback): T
```

Trigger a accessibility hover event.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onAccessibilityHover(callback: AccessibilityCallback): T--><!--Device-CommonMethod-onAccessibilityHover(callback: AccessibilityCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AccessibilityCallback](arkts-arkui-accessibilitycallback-t.md) | Yes | A callback instance used when the component is touched after accessibility mode is enabled. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onaccessibilityhovertransparent"></a>
## onAccessibilityHoverTransparent

```TypeScript
onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T
```

prompt for current component and descendants unable to handle accessibility hover event

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T--><!--Device-CommonMethod-onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [AccessibilityTransparentCallback](arkts-arkui-accessibilitytransparentcallback-t.md) | Yes | A callback instance used when current component and descendants not handled accessibility hover event |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onappear"></a>
## onAppear

```TypeScript
onAppear(event: () => void): T
```

Triggered when this component appears.

> **NOTE**  
>  
> This callback may be called after the component layout and rendering process.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-onAppear(event: () => void): T--><!--Device-CommonMethod-onAppear(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function of the **onAppear** event, which indicates that the component is displayed. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onareachange"></a>
## onAreaChange

```TypeScript
onAreaChange(event: (oldValue: Area, newValue: Area) => void): T
```

Triggered when the component area changes in size or position due to layout updates.

This event is not triggered for render attribute changes caused by re-rendering, such as changes to [translate](arkts-arkui-commonmethod-c.md#translate-1), [offset](arkts-arkui-commonmethod-c.md#offset-1),[markAnchor](arkts-arkui-commonmethod-c.md#markanchor-1), [scale](arkts-arkui-commonmethod-c.md#scale-1), or [transform](arkts-arkui-commonmethod-c.md#transform-1). In addition, if the component position is altered due to drawing changes, for example, through [bindSheet](arkts-arkui-commonmethod-c.md#bindsheet-1), this event is also not triggered.

> **NOTE**  
>  
> When a component is bound to both the **onAreaChange** event and the [position](arkts-arkui-commonmethod-c.md#position-1)  
> attribute, the **onAreaChange** event responds to changes in the **position** attribute of type  
> [Position](../arkts-apis/arkts-arkui-position-t.md), but does not respond to changes in the **position** attribute of type  
> [Edges](../arkts-apis/arkts-arkui-graphics-edges-i.md) or [LocalizedEdges](../arkts-apis/arkts-arkui-localizededges-i.md).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onAreaChange(event: (oldValue: Area, newValue: Area) => void): T--><!--Device-CommonMethod-onAreaChange(event: (oldValue: Area, newValue: Area) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (oldValue: Area, newValue: Area) =&gt; void | Yes | Position information of the target element. **oldValue** indicates the width and height of the target element as well as its coordinates relative to the parent element and the upper left corner of the page before the change. **newValue** indicates these dimensions and coordinates after the change. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onareachange-1"></a>
## onAreaChange

```TypeScript
onAreaChange(event: AreaChangeCallback, options?: AreaChangeOptions): T
```

Triggered when the component area changes. The interval at which the callback is triggered can be set using expectedUpdateInterval in [AreaChangeOptions](arkts-arkui-areachangeoptions-i.md). This event is triggered only in response to changes in component size or position caused by layout updates.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-onAreaChange(event: AreaChangeCallback, options?: AreaChangeOptions): T--><!--Device-CommonMethod-onAreaChange(event: AreaChangeCallback, options?: AreaChangeOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [AreaChangeCallback](arkts-arkui-areachangecallback-t.md) | Yes | Callback function for the **onAreaChange** event. Triggered when the component's size or position changes. |
| options | [AreaChangeOptions](arkts-arkui-areachangeoptions-i.md) | No | Parameters related to the area change. If not specified,**expectedUpdateInterval** is treated as **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onattach"></a>
## onAttach

```TypeScript
onAttach(callback: Callback<void>): T
```

Triggered when this component is mounted to the component tree. Due to the following limitations, it is recommended that you use [onAppear](arkts-arkui-commonmethod-c.md#onappear-1) instead of this callback.

> **NOTE**  
>  
> - This callback is triggered before the component layout and rendering process.  
>  
> - Modifying the component tree within the callback is prohibited, including initiating animations or altering the  
> component structure through conditional statements like **if-else**.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onAttach(callback: Callback<void>): T--><!--Device-CommonMethod-onAttach(callback: Callback<void>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; | Yes | Callback function of the **onAttach** event, indicating that the component has been mounted to the component tree. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onaxisevent"></a>
## onAxisEvent

```TypeScript
onAxisEvent(event: Callback<AxisEvent>): T
```

Triggered by mouse wheel scrolling, a two-finger sliding gesture, or a pinch gesture on the touchpad.

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-CommonMethod-onAxisEvent(event: Callback<AxisEvent>): T--><!--Device-CommonMethod-onAxisEvent(event: Callback<AxisEvent>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;AxisEvent&gt; | Yes | [AxisEvent](arkts-arkui-axisevent-i.md) object. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onblur"></a>
## onBlur

```TypeScript
onBlur(event: () => void): T
```

Triggered when the current component loses focus.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onBlur(event: () => void): T--><!--Device-CommonMethod-onBlur(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function of **onBlur**, which indicates that the component has lost focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onchildtouchtest"></a>
## onChildTouchTest

```TypeScript
onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T
```

Allows the current component to customize the hit test and control child component behavior during the test by setting a callback.

> **NOTE**  
>  
> - The array of child node information only includes information about named nodes, that is, nodes for which the  
> **id** attribute is explicitly set.  
>  
> - This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T--><!--Device-CommonMethod-onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (value: Array&lt;TouchTestInfo&gt;) =&gt; TouchResult | Yes | Touch event information. **value**: array of child node information. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onclick"></a>
## onClick

```TypeScript
onClick(event: (event: ClickEvent) => void): T
```

Called when a click event occurs.

When triggered by keyboard or gamepad input, the event's **SourceTool** is **Unknown**, and [SourceType](arkts-arkui-sourcetype-e.md) is **KEY** or **JOYSTICK**.

> **NOTE**  
>  
> Since API version 9, the following constraints apply when this API is used in service widgets:  
>  
> 1. Click events will not be triggered if the finger is pressed for more than 800 ms.  
>  
> 2. Click events will not be triggered if the finger moves more than 20 px after pressing down.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-onClick(event: (event: ClickEvent) => void): T--><!--Device-CommonMethod-onClick(event: (event: ClickEvent) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: ClickEvent) =&gt; void | Yes | Callback for the click event. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onclick-1"></a>
## onClick

```TypeScript
onClick(event: Callback<ClickEvent>, distanceThreshold: number): T
```

Called when a click event occurs.

When triggered by keyboard or gamepad input, the event's [SourceTool](arkts-arkui-sourcetool-e.md) is **Unknown**, and [SourceType](arkts-arkui-sourcetype-e.md) is **KEY** or **JOYSTICK**.

Compared with the original **onClick** API, this API has the **distanceThreshold** parameter that specifies the finger movement threshold for click events. If the finger's movement exceeds the set threshold, the gesture recognition will fail. The click gesture recognition will fail if finger movement exceeds this threshold.

For scenarios where there is no restriction on the finger movement distance during a click, the original API is preferred. To limit finger movement range during a click, use this new API.

> **NOTE**  
>  
> - Since API version 12, the following constraints apply when this API is used in service widgets:  
> > 1. Click events will not be triggered if the finger is pressed for more than 800 ms.  
> > 2. Click events will not be triggered if the finger moves more than 20 px after pressing down.  
>  
> - This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-onClick(event: Callback<ClickEvent>, distanceThreshold: number): T--><!--Device-CommonMethod-onClick(event: Callback<ClickEvent>, distanceThreshold: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;ClickEvent&gt; | Yes | Callback for the click event. |
| distanceThreshold | number | Yes | Finger movement threshold for click events. If the value specified is less than or equal to 0, it will be converted to the default value.<br>Default value: 2^31-1<br>Unit: vp<br>**NOTE**<br>If the finger movement exceeds the preset movement threshold, the gesture recognition fails. If the default threshold is used during initialization and the finger moves beyond the component's touch target, the gesture recognition fails. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondetach"></a>
## onDetach

```TypeScript
onDetach(callback: Callback<void>): T
```

Triggered when this component is unmounted from the component tree. You are advised to use [onDisAppear](arkts-arkui-commonmethod-c.md#ondisappear-1) instead.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onDetach(callback: Callback<void>): T--><!--Device-CommonMethod-onDetach(callback: Callback<void>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;void&gt; | Yes | Callback function of the **onDetach** event, indicating that the component has been unmounted from the component tree. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondigitalcrown"></a>
## onDigitalCrown

```TypeScript
onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T
```

Called when the crown is rotated while the component has focus.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T--><!--Device-CommonMethod-onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| handler | [Optional](arkts-arkui-optional-t.md)&lt;Callback&lt;CrownEvent&gt;&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondisappear"></a>
## onDisAppear

```TypeScript
onDisAppear(event: () => void): T
```

Triggered when this component disappears.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-onDisAppear(event: () => void): T--><!--Device-CommonMethod-onDisAppear(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function of the **onDisAppear** event, which indicates that the component is hidden. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragend"></a>
## onDragEnd

```TypeScript
onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T
```

Triggered when the dragging of the component bound to the event ends.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T--><!--Device-CommonMethod-onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; void | Yes | Callback function.<br>**NOTE**<br> **event**: drag event information. The coordinates of the drag point are not included in **onDragEnd**.<br> **extraParams**: additional information about the drag event. Its value must be parsed into JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragenter"></a>
## onDragEnter

```TypeScript
onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T
```

Triggered when a dragged item enters a valid drop target. This event takes effect only when a listener for the [onDrop](arkts-arkui-commonmethod-c.md#ondrop-1) event is enabled.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T--><!--Device-CommonMethod-onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; void | Yes | Callback function.<br>**NOTE**<br> **event**: drag event information, including the coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must be parsed into JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragleave"></a>
## onDragLeave

```TypeScript
onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T
```

Triggered when a dragged item leaves a valid drop target. This event takes effect only when a listener for the [onDrop](arkts-arkui-commonmethod-c.md#ondrop-1) event is enabled.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T--><!--Device-CommonMethod-onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; void | Yes | Callback function.<br>**NOTE**<br> **event**: drag event information, including the coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must be parsed into JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragmove"></a>
## onDragMove

```TypeScript
onDragMove(event: (event: DragEvent, extraParams?: string) => void): T
```

Triggered when a dragged item moves in a valid drop target. This event takes effect only when a listener for the [onDrop](arkts-arkui-commonmethod-c.md#ondrop-1) event is enabled.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDragMove(event: (event: DragEvent, extraParams?: string) => void): T--><!--Device-CommonMethod-onDragMove(event: (event: DragEvent, extraParams?: string) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; void | Yes | Callback function.<br>**NOTE**<br> **event**: drag event information, including the coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must be parsed into JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragspringloading"></a>
## onDragSpringLoading

```TypeScript
onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T
```

The component bound to this event can be used as a drag-response target with hover detection capability. When the dragged object hovers over the target, the callback is triggered. Only one target can become the responder at any time, and child components always have higher response priority.

For details about the hover detection triggering mechanism and usage, see [Spring Loading (Hover Detection) Support](docroot://ui/arkts-common-events-drag-event.md#spring-loading-hover-detection-support).

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T--><!--Device-CommonMethod-onDragSpringLoading(callback: Callback<SpringLoadingContext> | null, configuration?: DragSpringLoadingConfiguration): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;SpringLoadingContext&gt; \| null | Yes | Hover detection callback. If the value is **null**,hover detection is disabled. |
| configuration | [DragSpringLoadingConfiguration](arkts-arkui-dragspringloadingconfiguration-t.md) | No | Hover detection configuration. If the value is **undefined**, the default value of [DragSpringLoadingConfiguration](../arkts-apis/arkts-arkui-dragcontroller-dragspringloadingconfiguration-i.md)is used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondragstart"></a>
## onDragStart

```TypeScript
onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T
```

In a gesture-based drag scenario, this callback is triggered when a user long-presses a draggable component for more than 500 ms and then moves the finger more than 10 vp. In a mouse-drag scenario, it is triggered when the left mouse button is pressed on a draggable component and moved more than 1 vp.

For components that provide drag and drop capabilities by default, a custom **onDragStart** event, if set, is executed and:

- If a custom drag preview is returned, it is used in place of the default drag preview.  
- If drag data is set, it is used in place of the default drag data.

The custom drag preview is not supported for dragging selected text in the following components:[Text](../../apis-arkgraphics2d/arkts-apis/arkts-graphics-text.md), [Search](arkts-arkui-search.md), [TextInput](arkts-arkui-textinput.md), [TextArea](arkts-arkui-textarea.md),[RichEditor](arkts-arkui-richeditor.md) When **onDragStart** is used with menu preview or any component that provides default drag and drop capabilities, custom content on menu items and the preview cannot be dragged.

> **NOTE**  
>  
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 13.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T--><!--Device-CommonMethod-onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; CustomBuilder \| DragItemInfo | Yes | Callback function.<br> **NOTE**<br> **event**: drag event information.<br>**extraParams**: additional information about the drag event. Its value must be parsed into JSON format.<br>**CustomBuilder**: component information displayed during dragging. Global builders are not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondrop"></a>
## onDrop

```TypeScript
onDrop(event: (event: DragEvent, extraParams?: string) => void): T
```

A component bound with this event can serve as a drop target. This callback is triggered when the drag-and-drop action stops within the bounds of this component If **event.setResult()** is not explicitly called in the **onDrop** callback to set the drag-and-drop result, then: For supported components, the result is determined based on the actual data processed; for other components, the system considers the data as successfully received.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onDrop(event: (event: DragEvent, extraParams?: string) => void): T--><!--Device-CommonMethod-onDrop(event: (event: DragEvent, extraParams?: string) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: DragEvent, extraParams?: string) =&gt; void | Yes | Callback function.<br>**NOTE**<br> **event**: drag event information, including the coordinates of the drag point.<br> **extraParams**: additional information about the drag event. Its value must be parsed into JSON format. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ondrop-1"></a>
## onDrop

```TypeScript
onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T
```

Triggered when a dragged item is dropped on a valid drop target. If you do not explicitly call event.[setResult](arkts-arkui-dragevent-i.md#setresult-1)() in **onDrop** to set the result of the drag reception, the system handles it as follows:

- If the component being dragged is one that supports drop actions by default, the system's actual data processing result is used.  
- For other components, the system assumes that the data is received successfully.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T--><!--Device-CommonMethod-onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| eventCallback | [OnDragEventCallback](arkts-arkui-ondrageventcallback-t.md) | Yes | Callback function. |
| dropOptions | [DropOptions](arkts-arkui-dropoptions-i.md) | No | Parameters for the drop process. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onfocus"></a>
## onFocus

```TypeScript
onFocus(event: () => void): T
```

Triggered when the current component obtains focus.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onFocus(event: () => void): T--><!--Device-CommonMethod-onFocus(event: () => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | () =&gt; void | Yes | Callback function of **onFocus**, indicating that the component has gained focus. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onfocusaxisevent"></a>
## onFocusAxisEvent

```TypeScript
onFocusAxisEvent(event: Callback<FocusAxisEvent>): T
```

Binds a focus axis event callback to the component. Triggered when any operation is performed with the game controller's directional pad or joystick on the bound component.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-onFocusAxisEvent(event: Callback<FocusAxisEvent>): T--><!--Device-CommonMethod-onFocusAxisEvent(event: Callback<FocusAxisEvent>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;FocusAxisEvent&gt; | Yes | Focus axis event callback. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ongesturecollectintercept"></a>
## onGestureCollectIntercept

```TypeScript
onGestureCollectIntercept(callback: GestureCollectInterceptCallback): T
```

Triggered after events and gestures on the current node and higher-priority nodes are collected. This callback can be used to intervene in the collection results of events and gestures. This callback uses an asynchronous callback.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-onGestureCollectIntercept(callback: GestureCollectInterceptCallback): T--><!--Device-CommonMethod-onGestureCollectIntercept(callback: GestureCollectInterceptCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [GestureCollectInterceptCallback](arkts-arkui-gesturecollectinterceptcallback-t.md) | Yes | A callback instance used when the component does a touch test. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ongesturejudgebegin"></a>
## onGestureJudgeBegin

```TypeScript
onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T
```

Binds a custom gesture determination callback to the component. When the gesture is about to succeed, the user-defined callback is triggered to obtain the result.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T--><!--Device-CommonMethod-onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | (gestureInfo: GestureInfo, event: BaseGestureEvent) =&gt; GestureJudgeResult | Yes | A callback instance used when a gesture bound to this component will be accepted. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ongesturerecognizerjudgebegin"></a>
## onGestureRecognizerJudgeBegin

```TypeScript
onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T
```

Binds a custom gesture recognizer judgment callback to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T--><!--Device-CommonMethod-onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [GestureRecognizerJudgeBeginCallback](arkts-arkui-gesturerecognizerjudgebegincallback-t.md) | Yes | A callback instance used when a gesture bound to this component will be accepted. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ongesturerecognizerjudgebegin-1"></a>
## onGestureRecognizerJudgeBegin

```TypeScript
onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T
```

Binds a custom gesture recognizer judgment callback to the component.

The **exposeInnerGesture** parameter indicates whether to expose gestures from built-in components within ArkUI system composite components to developers. When this parameter is set to **true**, these internal gestures are exposed.

For scenarios where exposure of internal gestures is not required, use the original [onGestureRecognizerJudgeBegin](arkts-arkui-commonmethod-c.md#ongesturerecognizerjudgebegin-1)API. Use this API with **exposeInnerGesture** set to **true** only when internal gesture exposure is necessary.

**Since:** 13

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 13.

<!--Device-CommonMethod-onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T--><!--Device-CommonMethod-onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [GestureRecognizerJudgeBeginCallback](arkts-arkui-gesturerecognizerjudgebegincallback-t.md) | Yes | A callback instance used when a gesture bound to this component will be accepted. |
| exposeInnerGesture | boolean | Yes | This parameter is a flag. This flag determines whether to expose internal gestures. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onhover"></a>
## onHover

```TypeScript
onHover(event: (isHover: boolean, event: HoverEvent) => void): T
```

Triggered when the mouse pointer or stylus enters or leaves the component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onHover(event: (isHover: boolean, event: HoverEvent) => void): T--><!--Device-CommonMethod-onHover(event: (isHover: boolean, event: HoverEvent) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (isHover: boolean, event: HoverEvent) =&gt; void | Yes | Callback for mouse or stylus hover status.<br>**event**: event bubbling control and coordinates of the hover position; available since API version 11.<br>**isHover**: whether the mouse pointer or stylus is hovering over the component. **true**: The mouse pointer or stylus has entered the component.**false**: The mouse pointer or stylus has left the component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onhovermove"></a>
## onHoverMove

```TypeScript
onHoverMove(event: Callback<HoverEvent>): T
```

Triggered when a stylus hovers over the component.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-onHoverMove(event: Callback<HoverEvent>): T--><!--Device-CommonMethod-onHoverMove(event: Callback<HoverEvent>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;HoverEvent&gt; | Yes | Callback that controls event bubbling blocking and obtains the stylus hover position coordinates. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onkeyevent"></a>
## onKeyEvent

```TypeScript
onKeyEvent(event: (event: KeyEvent) => void): T
```

Triggered when a key event occurs.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onKeyEvent(event: (event: KeyEvent) => void): T--><!--Device-CommonMethod-onKeyEvent(event: (event: KeyEvent) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: KeyEvent) =&gt; void | Yes | **KeyEvent** object. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onkeyevent-1"></a>
## onKeyEvent

```TypeScript
onKeyEvent(event: Callback<KeyEvent, boolean>): T
```

Triggered when a key operation is performed on the bound component after it obtains focus. If the callback returns **true**, the key event is considered handled.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-onKeyEvent(event: Callback<KeyEvent, boolean>): T--><!--Device-CommonMethod-onKeyEvent(event: Callback<KeyEvent, boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;KeyEvent, boolean&gt; | Yes | Callback for handling the key event. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onkeyeventdispatch"></a>
## onKeyEventDispatch

```TypeScript
onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T
```

Triggered when the bound component receives a key event. The key event will not be dispatched to its child components. Only existing key events can be intercepted; creating new **KeyEvent** objects for dispatch is not supported.

If the callback returns **true**, the key event is marked as consumed and will not [bubble up](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) to parent components.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

<!--Device-CommonMethod-onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T--><!--Device-CommonMethod-onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;KeyEvent, boolean&gt; | Yes | Callback for handling key event dispatch. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onkeypreime"></a>
## onKeyPreIme

```TypeScript
onKeyPreIme(event: Callback<KeyEvent, boolean>): T
```

Triggered before other callbacks when a key operation is performed on the bound component after it obtains focus.

If the return value of this callback is **true**, the key event is considered consumed, and subsequent event callbacks (**keyboardShortcut**, input method events, **onKeyEventDispatch**, and **onKeyEvent**) will be intercepted and no longer triggered.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onKeyPreIme(event: Callback<KeyEvent, boolean>): T--><!--Device-CommonMethod-onKeyPreIme(event: Callback<KeyEvent, boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;KeyEvent, boolean&gt; | Yes | Callback for handling the key event. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onmouse"></a>
## onMouse

```TypeScript
onMouse(event: (event: MouseEvent) => void): T
```

Triggered when the component is clicked by a mouse button or the mouse pointer moves on the component.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onMouse(event: (event: MouseEvent) => void): T--><!--Device-CommonMethod-onMouse(event: (event: MouseEvent) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: MouseEvent) =&gt; void | Yes | Timestamp, mouse button, action, coordinates of the clicked point on the entire screen,and coordinates of the clicked point relative to the component when the event is triggered. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onneedsoftkeyboard"></a>
## onNeedSoftkeyboard

```TypeScript
onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): T
```

Called when component is focused, the return value indicates whether keyboard is needed.

**Since:** 24

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 24.

<!--Device-CommonMethod-onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): T--><!--Device-CommonMethod-onNeedSoftkeyboard(onNeedSoftkeyboardCallback: OnNeedSoftkeyboardCallback | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| onNeedSoftkeyboardCallback | [OnNeedSoftkeyboardCallback](arkts-arkui-onneedsoftkeyboardcallback-t.md) \| undefined | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="onpredrag"></a>
## onPreDrag

```TypeScript
onPreDrag(callback: Callback<PreDragStatus>): T
```

Triggered when the component enters a state prior to a gesture-based drag operation. For details about the state prior to the drag-and-drop operation, see [PreDragStatus](arkts-arkui-predragstatus-e.md). This API cannot be triggered in mouse-based drag scenarios.

> **NOTE**  
>  
> This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onPreDrag(callback: Callback<PreDragStatus>): T--><!--Device-CommonMethod-onPreDrag(callback: Callback<PreDragStatus>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;PreDragStatus&gt; | Yes | Callback function. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onsizechange"></a>
## onSizeChange

```TypeScript
onSizeChange(event: SizeChangeCallback): T
```

Triggered when the component size changes due to layout updates.

> **NOTE**  
>  
> 1. This API is triggered upon layout changes. Due to calculation precision limitations, the return value may  
> deviate slightly from the actual physical size.  
>  
> 2. **onSizeChange** is a synchronous callback triggered during the layout process. Directly modifying state  
> variables within **onSizeChange** may cause the changes to be included in the animation closure. Specifically,  
> animations compare the layout state before the animation starts with the state after the animation closure is  
> executed. If the **onSizeChange** callback is triggered synchronously during the pre-animation layout phase, the  
> changes made in this callback will be processed as part of the animation, along with the changes in the animation  
> closure. To avoid this issue, you can use [setTimeout](api/@internal/ets/global:setTimeout) or  
> [postFrameCallback](../arkts-apis/arkts-arkui-arkui-uicontext-uicontext-c.md#postframecallback-1) (with a 0 ms delay) inside  
> **onSizeChange** to defer the UI processing logic to asynchronous execution.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-onSizeChange(event: SizeChangeCallback): T--><!--Device-CommonMethod-onSizeChange(event: SizeChangeCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | [SizeChangeCallback](arkts-arkui-sizechangecallback-t.md) | Yes | Size of the component before and after the change. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ontouch"></a>
## onTouch

```TypeScript
onTouch(event: (event: TouchEvent) => void): T
```

Invoked when a touch event is triggered. Touch events [bubble](docroot://ui/arkts-interaction-basic-principles.md#event-bubbling) by default and can be consumed by multiple components. To prevent event bubbling, use the **stopPropagation** API of [TouchEvent](arkts-arkui-touchevent-i.md).Mouse left-click events are converted to touch events and will also trigger this callback.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onTouch(event: (event: TouchEvent) => void): T--><!--Device-CommonMethod-onTouch(event: (event: TouchEvent) => void): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | (event: TouchEvent) =&gt; void | Yes | **TouchEvent** object. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ontouchintercept"></a>
## onTouchIntercept

```TypeScript
onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T
```

Binds a custom event interception callback to a component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T--><!--Device-CommonMethod-onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [Callback](../../apis-basic-service-kit/arkts-apis/arkts-basicservices-base-callback-i.md)&lt;TouchEvent, HitTestMode&gt; | Yes | Custom event interception callback.Triggered during hit testing and sets the hit test behavior for the component based on the return value. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="ontouchtestdone"></a>
## onTouchTestDone

```TypeScript
onTouchTestDone(callback: TouchTestDoneCallback): T
```

Specifies whether gesture recognizers participate in subsequent processing after [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing) completes.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-onTouchTestDone(callback: TouchTestDoneCallback): T--><!--Device-CommonMethod-onTouchTestDone(callback: TouchTestDoneCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [TouchTestDoneCallback](arkts-arkui-touchtestdonecallback-t.md) | Yes | Callback to specify gesture recognizer participation in subsequent processing. Triggered after [hit testing](docroot://ui/arkts-interaction-basic-principles.md#hit-testing)completes but before user gesture recognition begins. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onvisibleareaapproximatechange"></a>
## onVisibleAreaApproximateChange

```TypeScript
onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T
```

Configures a callback for the **onVisibleAreaApproximateChange** event, with options to limit the callback execution interval.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 23.

**Since:** 17

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 17.

<!--Device-CommonMethod-onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T--><!--Device-CommonMethod-onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [VisibleAreaEventOptions](arkts-arkui-visibleareaeventoptions-i.md) | Yes | Visible area change configuration options. |
| event | [VisibleAreaChangeCallback](arkts-arkui-visibleareachangecallback-t.md) \| undefined | Yes | Callback for the **onVisibleAreaChange** event. This callback is triggered when the ratio of the component's visible area to its total area approaches the threshold set in **options**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onvisibleareachange"></a>
## onVisibleAreaChange

```TypeScript
onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T
```

Called when the visible area of the component changes. For details about the development guidelines and FAQs, see [Detecting Component Visibility](docroot://ui/arkts-manage-components-visibility.md).

> **NOTE**  
>  
> - This API can be called in [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.  
>  
> - This API only takes into account the relative clipped area ratio of the component with respect to all ancestor  
> nodes (up to the window boundary) and its own area.  
>  
> - The following calculation scenarios are not supported: clipping by sibling nodes, clipping by siblings of any  
> ancestor node, window-level occlusion, and component rotation. Examples include layouts using  
> [Stack](../../apis-arkts/arkts-apis/arkts-arkts-util-stack-stack-c.md), [z-order control](arkts-arkui-commonmethod-c.md#zindex-1), and  
> [rotate](arkts-arkui-commonmethod-c.md#rotate-1) transformations.  
>  
> - It does not support visibility change calculations for nodes that are not in the component tree. For example,  
> preloaded nodes or custom nodes mounted using the  
> [overlay](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#overlay) capability.  
>  
> - This API does not support the [scale](arkts-arkui-commonmethod-c.md#scale-1) attribute. To enable  
> support for the [scale](arkts-arkui-commonmethod-c.md#scale-1) attribute, use  
> [onVisibleAreaChange<sup>22+</sup>](arkts-arkui-commonmethod-c.md#onvisibleareachange-1)  
> and set **measureFromViewport** to **true**.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T--><!--Device-CommonMethod-onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratios | Array&lt;number&gt; | Yes | Threshold array. Each threshold represents a ratio of the component's visible area (that is, the area of the component that is visible on screen; only the area within the parent component is counted) to the component's total area. This callback is invoked when the ratio of the component's visible area to its total area is greater than or less than the threshold. The value of each threshold ranges from 0.0to 1.0. If a threshold value is less than 0.0, it is clamped to 0.0; if it is greater than 1.0, it is clamped to 1.0.<br>**NOTE**<br>When the value is close to the boundary 0 or 1, it is rounded off with a round-off error not greater than 0.001. For example, 0.9997 is rounded off to 1. |
| event | [VisibleAreaChangeCallback](arkts-arkui-visibleareachangecallback-t.md) | Yes | Callback for visible area changes of the component.<br>**Since:** 13 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="onvisibleareachange-1"></a>
## onVisibleAreaChange

```TypeScript
onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T
```

Called when the visible area of the component changes. You can use **measureFromViewport** to set the visible area calculation mode. For details about the development guidelines and FAQs, see [Detecting Component Visibility](docroot://ui/arkts-manage-components-visibility.md).

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-CommonMethod-onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T--><!--Device-CommonMethod-onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback, measureFromViewport: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| ratios | Array&lt;number&gt; | Yes | Threshold array. Each threshold represents the ratio of the component's visible area to its own total area. This callback is invoked when the ratio of the component's visible area to its total area is greater than or less than the threshold. The value of each threshold ranges from 0.0 to 1.0. If a threshold value is less than 0.0, it is clamped to 0.0; if it is greater than 1.0, it is clamped to 1.0.<br>**NOTE**<br>When the value is close to the boundary 0 or 1, it is rounded off with a round-off error not greater than 0.001. For example, 0.9997 is rounded off to 1. |
| event | [VisibleAreaChangeCallback](arkts-arkui-visibleareachangecallback-t.md) | Yes | Callback for visible area changes of the component. |
| measureFromViewport | boolean | Yes | Visible area calculation mode.<br>**true**: considers the parent's [clip](arkts-arkui-commonmethod-c.md#clip-1) attribute. If [clip](arkts-arkui-commonmethod-c.md#clip-1)is **false**, areas of the child component beyond the parent's bounds are counted as visible; if [clip](arkts-arkui-commonmethod-c.md#clip-1) is **true**, such areas are counted as invisible. **false**:ignores the parent's [clip](arkts-arkui-commonmethod-c.md#clip-1) attribute, treating areas beyond the parent's bounds as invisible.<br>When **measureFromViewport** is set to **true**, and an ancestor node has the [scale](arkts-arkui-commonmethod-c.md#scale-1) attribute set, the component's visible ratio will be correctly calculated. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="opacity"></a>
## opacity

```TypeScript
opacity(value: number | Resource): T
```

Sets the opacity of the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-opacity(value: number | Resource): T--><!--Device-CommonMethod-opacity(value: number | Resource): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number \| Resource | Yes | Component opacity. Value range: 0 to 1. Values less than 0 are treated as 0.Values greater than 1 are treated as 1. **1**: fully opaque. **0**: fully transparent (where the component is hidden but occupies layout space).<br> Default value: **1**.<br>**NOTE**<br> Child components inherit parent opacity and combine with their own opacity. Example: Parent opacity 0.1 x Child opacity 0.8 = Effective opacity0.08. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="opacity-1"></a>
## opacity

```TypeScript
opacity(opacity: Optional<number | Resource>): T
```

Sets the opacity of the component. Compared with [opacity](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-opacity.md#opacity), this API supports the **undefined** type for the **opacity** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-opacity(opacity: Optional<number | Resource>): T--><!--Device-CommonMethod-opacity(opacity: Optional<number | Resource>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| opacity | [Optional](arkts-arkui-optional-t.md)&lt;number \| Resource&gt; | Yes | Component opacity. Value range: 0 to 1. Values less than 0 are treated as 0. Values greater than 1 are treated as 1. **1**: fully opaque. **0**: fully transparent (where the component is hidden but occupies layout space).<br> Default value: **1**.<br>**NOTE**<br> Child components inherit parent opacity and combine with their own opacity. Example: Parent opacity 0.1 x Child opacity 0.8 =Effective opacity 0.08.<br>When **opacity** is **undefined**, the component reverts to the default opacity of **1**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outline"></a>
## outline

```TypeScript
outline(value: OutlineOptions): T
```

Sets the outline attributes in one declaration.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-outline(value: OutlineOptions): T--><!--Device-CommonMethod-outline(value: OutlineOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [OutlineOptions](../arkts-apis/arkts-arkui-outlineoptions-i.md) | Yes | Outline attributes. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outline-1"></a>
## outline

```TypeScript
outline(options: Optional<OutlineOptions>): T
```

Sets the outline attributes in one declaration. Compared with [outline](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-outline.md#outline), this API supports the **undefined** type for the **options** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-outline(options: Optional<OutlineOptions>): T--><!--Device-CommonMethod-outline(options: Optional<OutlineOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;OutlineOptions&gt; | Yes | Outline attributes.<br>If **options** is **undefined**, the component reverts to its original style with no outline. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinecolor"></a>
## outlineColor

```TypeScript
outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T
```

Sets the outline color. If this API is not used, the default color black will be applied.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T--><!--Device-CommonMethod-outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ResourceColor](../arkts-apis/arkts-arkui-resourcecolor-t.md) \| EdgeColors \| LocalizedEdgeColors | Yes | Outline color.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinecolor-1"></a>
## outlineColor

```TypeScript
outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T
```

Sets the outline color. If this API is not used, the default color black will be applied. Compared with [outlineColor](arkts-arkui-commonmethod-c.md#outlinecolor-1), this API supports the **undefined** type for the **color** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T--><!--Device-CommonMethod-outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| color | [Optional](arkts-arkui-optional-t.md)&lt;ResourceColor \| EdgeColors \| LocalizedEdgeColors&gt; | Yes | Outline color.<br>If **color** is **undefined**, the component reverts to its original style with the outline color of **Color.Black**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlineradius"></a>
## outlineRadius

```TypeScript
outlineRadius(value: Dimension | OutlineRadiuses): T
```

Sets the radius of the outline corners. If this API is not used, there will be no change by default.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-outlineRadius(value: Dimension | OutlineRadiuses): T--><!--Device-CommonMethod-outlineRadius(value: Dimension | OutlineRadiuses): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) \| OutlineRadiuses | Yes | Radius of the outline corners. Percentage values are not supported.<br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlineradius-1"></a>
## outlineRadius

```TypeScript
outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T
```

Sets the radius of the outline corners. If this API is not used, there will be no change by default. Compared with [outlineRadius](arkts-arkui-commonmethod-c.md#outlineradius-1), this API supports the **undefined** type for the **radius** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T--><!--Device-CommonMethod-outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| radius | [Optional](arkts-arkui-optional-t.md)&lt;Dimension \| OutlineRadiuses&gt; | Yes | Radius of the outline corners. Percentage values are not supported.<br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth<br   >If **radius** is **undefined**, the component reverts to its original style with the outline corner radius of0. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinestyle"></a>
## outlineStyle

```TypeScript
outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T
```

Sets the outline style. If this API is not used, a solid line is displayed by default.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T--><!--Device-CommonMethod-outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [OutlineStyle](arkts-arkui-outlinestyle-e.md) \| EdgeOutlineStyles | Yes | Outline style. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinestyle-1"></a>
## outlineStyle

```TypeScript
outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T
```

Sets the outline style. If this API is not used, a solid line is displayed by default. Compared with [outlineStyle](arkts-arkui-commonmethod-c.md#outlinestyle-1), this API supports the **undefined** type for the **style** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T--><!--Device-CommonMethod-outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | [Optional](arkts-arkui-optional-t.md)&lt;OutlineStyle \| EdgeOutlineStyles&gt; | Yes | Outline style.<br>If **style** is **undefined**, the component reverts to its original style with no outline. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinewidth"></a>
## outlineWidth

```TypeScript
outlineWidth(value: Dimension | EdgeOutlineWidths): T
```

Sets the thickness of the outline. If this API is not used, there will be no change by default.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-outlineWidth(value: Dimension | EdgeOutlineWidths): T--><!--Device-CommonMethod-outlineWidth(value: Dimension | EdgeOutlineWidths): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Dimension](../arkts-apis/arkts-arkui-dimension-t.md) \| EdgeOutlineWidths | Yes | Outline thickness. Percentage values are not supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="outlinewidth-1"></a>
## outlineWidth

```TypeScript
outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T
```

Sets the thickness of the outline. If this API is not used, there will be no change by default. Compared with [outlineWidth](arkts-arkui-commonmethod-c.md#outlinewidth-1), this API supports the **undefined** type for the **width** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T--><!--Device-CommonMethod-outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| width | [Optional](arkts-arkui-optional-t.md)&lt;Dimension \| EdgeOutlineWidths&gt; | Yes | Outline thickness. Percentage values are not supported.<br>If **width** is **undefined**, the component reverts to its original style with no outline width. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="overlay"></a>
## overlay

```TypeScript
overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T
```

Adds an overlay to this component, which can be text, a custom component, or [ComponentContent](arkts-arkui-componentcontent-t.md). The overlay is positioned based on the current component. The overlay is not rendered through the component tree, meaning some APIs (for example,[getRectangleById](../arkts-apis/arkts-arkui-componentutils-getrectanglebyid-f.md#getrectanglebyid-1)) cannot access components within the overlay.

> **NOTE**  
>  
> The overlay places the floating layer component above the bound component, blocking all user interactions with  
> components beneath it. To enable interaction with underlying components, refer to  
> [Example 2: Setting an Overlay Using a Custom Builder](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-overlay.md#example-2-setting-an-overlay-using-a-custom-builder)  
> and apply **.hitTestBehavior(HitTestMode.Transparent)** to the outermost component in the overlay builder. This  
> configuration is particularly crucial for watermark implementations, where the overlay must not interfere with  
> user interaction with the underlying content.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T--><!--Device-CommonMethod-overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | string \| CustomBuilder \| ComponentContent | Yes | Content of the overlay, which can be text or a custom component.<br>**NOTE**<br>When the overlay is a custom component, it cannot obtain focus through sequential keyboard navigation. Using **CustomBuilder** will cause the overlay content to be destroyed and recreated on page refresh, which may incur performance overhead. For scenarios with frequent page updates, using **ComponentContent** is recommended.<br>**Since:** 12 |
| options | [OverlayOptions](arkts-arkui-overlayoptions-i.md) | No | Options for positioning the overlay.<br>**NOTE**<br>In versions earlier than API version 12, **options** is defined as follows:<br>{<br>align?: [Alignment](../arkts-apis/arkts-arkui-alignment-e.md), <br>offset?: {x?: number, y?: number}<br>}<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="padding"></a>
## padding

```TypeScript
padding(value: Padding | Length | LocalizedPadding): T
```

Sets the padding of the component.<br>Since API version 10, this API supports the calc calculation feature.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-padding(value: Padding | Length | LocalizedPadding): T--><!--Device-CommonMethod-padding(value: Padding | Length | LocalizedPadding): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Padding](../arkts-apis/arkts-arkui-padding-t.md) \| Length \| LocalizedPadding | Yes | Padding of the component to set<br>When the parameter is of the **Length** type, the four paddings take effect.<br>Default value: **0**<br>Unit: vp<br>When **padding** is set to a percentage, the width of the parent container is used as the basic value.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="parallelgesture"></a>
## parallelGesture

```TypeScript
parallelGesture(gesture: GestureType, mask?: GestureMask): T
```

Gesture that can be recognized at once by the component and its child component. The gesture event is not a bubbling event. When **parallelGesture** is set for a component, both it and its child component can respond to the same gesture events, thereby implementing a quasi-bubbling effect.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-parallelGesture(gesture: GestureType, mask?: GestureMask): T--><!--Device-CommonMethod-parallelGesture(gesture: GestureType, mask?: GestureMask): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gesture | [GestureType](../../apis-accessibility-kit/arkts-apis/arkts-accessibility-gesturetype-t.md) | Yes | Gesture object to bind. |
| mask | [GestureMask](../arkts-apis/arkts-arkui-gesturemask-e.md) | No | Mask for gesture events.<br>Default value: **GestureMask.Normal**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="pixelround"></a>
## pixelRound

```TypeScript
pixelRound(value: PixelRoundPolicy): T
```

Sets the pixel rounding policy for the current component in the specified direction.If a direction is not set, the pixels are rounded to the nearest whole number in that direction.

> **NOTE**  
>  
> - In API version 11, this API uses half-pixel alignment (that is, 0-0.25 rounds to 0, 0.25-0.75 rounds to 0.5,  
> 0.75-1.0 rounds to 1). Since API version 12, this API rounds pixels to the nearest integers and allows you to  
> disable pixel rounding for individual components.  
>  
> - This API can be called within  
> [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1)  
> since API version 12.

In normal calculations, the vertical direction (top and bottom) correspond to the component height, and the horizontal direction (the starting direction of mirroring is considered "left") correspond to the component width.For ease of description, these two sets of directions are referred to as top-left and bottom-right.

- Calculate the top-left coordinates of the current component: offset of the top-left corner relative to the parent container.  
- Calculate the bottom-right coordinates of the current component: offset of the top-left corner relative to the parent container plus the size of the component itself.  
- Recalculate the size of the current component: bottom-right corner rounded value minus the top-left corner rounded value.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-pixelRound(value: PixelRoundPolicy): T--><!--Device-CommonMethod-pixelRound(value: PixelRoundPolicy): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [PixelRoundPolicy](arkts-arkui-pixelroundpolicy-i.md) | Yes | Rounding policy for the bounds of the component.<br>**NOTE**<br>This attribute is applicable in scenarios where artifacts occur due to floating-point drawing. The rounding result is related not only to the component's width and height but also to its position. Even if the component's width and height are set to be the same, due to different floating-point positions described,the final width and height of the component may also be different after rounding. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="pixelstretcheffect"></a>
## pixelStretchEffect

```TypeScript
pixelStretchEffect(options: PixelStretchEffectOptions): T
```

Applies a pixel stretch effect to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-pixelStretchEffect(options: PixelStretchEffectOptions): T--><!--Device-CommonMethod-pixelStretchEffect(options: PixelStretchEffectOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [PixelStretchEffectOptions](arkts-arkui-pixelstretcheffectoptions-i.md) | Yes | Pixel stretch effect options.<br>The value includes the length by which a pixel is stretched toward the four edges.<br>**NOTE**<br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge pixels grow by the set length toward the top, bottom, left, and right edges.<br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains unchanged:<br>Shrinking mode:<br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.<br>(2) The image is stretched back to the original size with edge pixels.<br>3. Constraints on **options**:<br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are stretched or shrink at the same time in the same direction.<br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and specific value is not allowed.<br>If the input value is invalid, the image is displayed as {0,0, 0, 0}, that is, the image remains unchanged. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="pixelstretcheffect-1"></a>
## pixelStretchEffect

```TypeScript
pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T
```

Applies a pixel stretch effect to the component. Compared to [pixelStretchEffect<sup>12+</sup>](arkts-arkui-commonmethod-c.md#pixelstretcheffect-1), the **options** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T--><!--Device-CommonMethod-pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;PixelStretchEffectOptions&gt; | Yes | Pixel stretch effect options.<br>The value includes the length by which a pixel is stretched toward the four edges.<br>**NOTE**<br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge pixels grow by the set length toward the top, bottom, left, and right edges.<br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains unchanged:<br>Shrinking mode:<br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.<br>(2) The image is stretched back to the original size with edge pixels.<br>3. Constraints on **options**:<br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are stretched or shrink at the same time in the same direction.<br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and specific value is not allowed.<br>If the input value is invalid, the image is displayed as {0,0, 0, 0}, that is, the image remains unchanged.<br>If **options** is **undefined**, the component reverts to its original effect with no pixel stretch. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="position"></a>
## position

```TypeScript
position(value: Position | Edges | LocalizedEdges): T
```

Sets the absolute positioning, which determines the position of a child component relative to the content area of the parent component. Dynamic configuration via [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) is supported.

**NOTE**  
- This API takes effect after the component's size measurement is complete.  
- When the parent container is [Row](Row),[Column](Column), or [Flex](Flex), the child component with **position** set does not occupy any space.  
- The [Position](arkts-arkui-commonmethod-c.md#position-1) type uses the upper left corner of the parent's content area as the reference point. The [Edges](../arkts-apis/arkts-arkui-graphics-edges-i.md) type uses all four sides of the parent's content area as reference, where **top**, **left**, **right**, and **bottom** define the margins between the component and corresponding sides of the parent's content area. The [LocalizedEdges](../arkts-apis/arkts-arkui-localizededges-i.md) type provides the same functionality as Edges while supporting layout mirroring.  
- This attribute is applicable to scenarios where the component's position in the parent container is fixed, for example, where it is pinned to top or floating on the UI.  
- This attribute is unavailable for a layout container whose width and height are zero.  
- In [RelativeContainer](docroot://reference/apis-arkui/arkui-ts/ts-container-relativecontainer.md), if the child component has [alignRules](arkts-arkui-commonmethod-c.md#alignrules-1) set, the **position** attribute will not take effect

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-position(value: Position | Edges | LocalizedEdges): T--><!--Device-CommonMethod-position(value: Position | Edges | LocalizedEdges): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Position](../arkts-apis/arkts-arkui-display-position-i.md) \| Edges \| LocalizedEdges | Yes | Absolute positioning that determines the child component's position relative to the parent's content area. The content area of the parent component is calculated by subtracting the [border](arkts-arkui-commonmethod-c.md#border-1), [padding](arkts-arkui-commonmethod-c.md#padding-1), and [safeAreaPadding](arkts-arkui-commonmethod-c.md#safeareapadding-1)values from the parent component's total size. This resulting content area defines the available layout space for child components. This attribute does not take effect when it is set to an abnormal value.<br>**Since:** 12 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="prioritygesture"></a>
## priorityGesture

```TypeScript
priorityGesture(gesture: GestureType, mask?: GestureMask): T
```

Gesture to preferentially recognize.

1. By default, the child component preferentially recognizes the gesture specified by **gesture**, and the parent component preferentially recognizes the gesture specified by **priorityGesture** (if set).2. For long press gestures, the component with the shortest minimum hold-down time responds first, ignoring the **priorityGesture** settings.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-priorityGesture(gesture: GestureType, mask?: GestureMask): T--><!--Device-CommonMethod-priorityGesture(gesture: GestureType, mask?: GestureMask): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| gesture | [GestureType](../../apis-accessibility-kit/arkts-apis/arkts-accessibility-gesturetype-t.md) | Yes | Gesture object to bind. |
| mask | [GestureMask](../arkts-apis/arkts-arkui-gesturemask-e.md) | No | Mask for gesture events.<br>Default value: **GestureMask.Normal**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="radialgradient"></a>
## radialGradient

```TypeScript
radialGradient(value: RadialGradientOptions): T
```

Radial Gradient center:Center point of radial gradient radius:Radius of Radial Gradient. value range [0, +∞)colors:Color description for gradients repeating: Refill. The default value is false

Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-radialGradient(value: RadialGradientOptions): T--><!--Device-CommonMethod-radialGradient(value: RadialGradientOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RadialGradientOptions](arkts-arkui-radialgradientoptions-i.md) | Yes | [since 7 - 17] |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="radialgradient-1"></a>
## radialGradient

```TypeScript
radialGradient(options: Optional<RadialGradientOptions>): T
```

Radial Gradient center:Center point of radial gradient radius:Radius of Radial Gradient. value range [0, +∞)colors:Color description for gradients repeating: Refill. The default value is false

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-radialGradient(options: Optional<RadialGradientOptions>): T--><!--Device-CommonMethod-radialGradient(options: Optional<RadialGradientOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;RadialGradientOptions&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="renderfit"></a>
## renderFit

```TypeScript
renderFit(fitMode: RenderFit): T
```

Sets how the final state of the component's content is rendered during its width and height animation process. If it is not set via this API, the content size at the end of the animation is maintained, and the content always remains top-left aligned with the component.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-renderFit(fitMode: RenderFit): T--><!--Device-CommonMethod-renderFit(fitMode: RenderFit): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fitMode | [RenderFit](../arkts-apis/arkts-arkui-renderfit-e.md) | Yes | Sets how the final state of the component's content is rendered during its width and height animation process. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="renderfit-1"></a>
## renderFit

```TypeScript
renderFit(fitMode: Optional<RenderFit>): T
```

Sets how the final state of the component's content is rendered during its width and height animation process. If it is not set via this API, the content size at the end of the animation is maintained, and the content always remains top-left aligned with the component. Compared to [renderFit](arkts-arkui-commonmethod-c.md#renderfit-1), this API supports the **undefined** type for the **fitMode** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-renderFit(fitMode: Optional<RenderFit>): T--><!--Device-CommonMethod-renderFit(fitMode: Optional<RenderFit>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| fitMode | [Optional](arkts-arkui-optional-t.md)&lt;RenderFit&gt; | Yes | Sets how the final state of the component's content is rendered during its width and height animation process.<br>If **fitMode** is set to **undefined**, the default value is used, which is equivalent to **RenderFit.TOP_LEFT**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="rendergroup"></a>
## renderGroup

```TypeScript
renderGroup(value: boolean): T
```

Sets whether to form a render group. A render group means that the subtree composed of the current component and its child components is first rendered on an offscreen canvas and then composited with the parent component.Setting a render group allows the system to cache the rendering result, improving performance. However, if components within the render group are frequently updated, cache invalidation may lead to performance degradation.Additionally, when a render group is set and the current component's opacity is not **1**, the rendering effect may differ.

If this attribute is not set, no render group is formed by default.

**Since:** 10

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-renderGroup(value: boolean): T--><!--Device-CommonMethod-renderGroup(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the current component and its child components form a render group.<br>**false**: no. Rendering is performed directly without offscreen rendering.<br> **true**: yes. The current component and its child components are rendered offscreen first and then composited with the parent component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="rendergroup-1"></a>
## renderGroup

```TypeScript
renderGroup(isGroup: Optional<boolean>): T
```

Composite the contents of this view and its children into an offscreen cache before display in the screen.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-renderGroup(isGroup: Optional<boolean>): T--><!--Device-CommonMethod-renderGroup(isGroup: Optional<boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isGroup | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | if this view and its children need to composite into an offscreen cache. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="responseregion"></a>
## responseRegion

```TypeScript
responseRegion(value: Array<Rectangle> | Rectangle): T
```

Sets one or more touch targets.

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-responseRegion(value: Array<Rectangle> | Rectangle): T--><!--Device-CommonMethod-responseRegion(value: Array<Rectangle> | Rectangle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | Array&lt;Rectangle&gt; \| Rectangle | Yes | Touch target, including the position and size.<br>The default touch target is the entire component. Default value:<br>{<br>x: 0,<br>y: 0,<br>width: '100%',<br>height: '100%'<br>}<br> |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="responseregionlist"></a>
## responseRegionList

```TypeScript
responseRegionList(regions: Array<ResponseRegion>): T
```

Sets the touch target list for the component. When this API is called, the [responseRegion](arkts-arkui-commonmethod-c.md#responseregion-1) and [mouseResponseRegion](arkts-arkui-commonmethod-c.md#mouseresponseregion-1) APIs do not take effect.

**Since:** 22

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 22.

<!--Device-CommonMethod-responseRegionList(regions: Array<ResponseRegion>): T--><!--Device-CommonMethod-responseRegionList(regions: Array<ResponseRegion>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| regions | Array&lt;ResponseRegion&gt; | Yes | Array of touch targets for the component.<br>Each touch target contains the input tool type, position, and size.<br>Default value:<br>[{<br>tool: ResponseRegionSupportedTool.ALL,<br>x: LengthMetrics.vp(0),<br>y: LengthMetrics.vp(0),<br>width: LengthMetrics.percent(1),<br>height: LengthMetrics.percent(1)<br>}] |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="restoreid"></a>
## restoreId

```TypeScript
restoreId(value: number): T
```

id for distribute identification.

**Since:** 11

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-restoreId(value: number): T--><!--Device-CommonMethod-restoreId(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform@atomicservice |

<a id="reuse"></a>
## reuse

```TypeScript
reuse(options: ReuseOptions): T
```

Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-reuse(options: ReuseOptions): T--><!--Device-CommonMethod-reuse(options: ReuseOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [ReuseOptions](arkts-arkui-reuseoptions-i.md) | Yes | The configuration parameter for reusable custom component. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="reuseid"></a>
## reuseId

```TypeScript
reuseId(id: string): T
```

Reuse id is used for identify the reuse type for each custom node.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-reuseId(id: string): T--><!--Device-CommonMethod-reuseId(id: string): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | The id for reusable custom node. |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="rotate"></a>
## rotate

```TypeScript
rotate(value: RotateOptions): T
```

Rotates the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-rotate(value: RotateOptions): T--><!--Device-CommonMethod-rotate(value: RotateOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [RotateOptions](arkts-arkui-rotateoptions-i.md) | Yes | How the component is rotated within the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the upper-left corner of the component as the origin (as shown in the figure below). (x, y, z) specifies a vector as the axis of rotation.<br>The axis and center of rotation are set based on the coordinate system, which remains where it is when the component is moved.<br>Default value: When **x**, **y**, and **z** are not specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and **z** is specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50%',<br>centerZ: 0,<br>perspective: 0<br>}<br>Unit: vp<br>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png) |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="rotate-1"></a>
## rotate

```TypeScript
rotate(options: Optional<RotateOptions>): T
```

Rotates the component. Compared with [rotate](arkts-arkui-commonmethod-c.md#rotate-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-rotate(options: Optional<RotateOptions>): T--><!--Device-CommonMethod-rotate(options: Optional<RotateOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;RotateOptions&gt; | Yes | How the component is rotated within the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the upper-left corner of the component as the origin (as shown in the figure below). (x, y, z) specifies a vector as the axis of rotation.<br>The axis and center of rotation are set based on the coordinate system, which remains where it is when the component is moved.<br>Default value: When **x**, **y**, and **z** are not specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and **z** is specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50%',<br>centerZ: 0,<br>perspective: 0<br>}<br>Unit: vp<br>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>If **options** is **undefined**, the component reverts to its original state with no rotation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="rotate-2"></a>
## rotate

```TypeScript
rotate(options: Optional<RotateOptions | RotateAngleOptions>): T
```

Sets the component rotation effect. Compared with [rotate](arkts-arkui-commonmethod-c.md#rotate-1), this API supports the **RotateAngleOptions** type for the **options** parameter.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**Widget capability:** This API can be used in ArkTS widgets since API version 20.

<!--Device-CommonMethod-rotate(options: Optional<RotateOptions | RotateAngleOptions>): T--><!--Device-CommonMethod-rotate(options: Optional<RotateOptions | RotateAngleOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;RotateOptions \| RotateAngleOptions&gt; | Yes | **RotateOptions**: How the component rotates in the coordinate system (as shown below) with the upper left corner of the component as the coordinate origin. (x, y, z) specifies a vector as the axis of rotation.<br>The rotation axis and center point are defined based on the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system). When the component moves, the coordinate system does not follow it.<br>Default value: When **x**, **y**, and **z** are not specified, their default values are **0**, **0**, and **1**, respectively. If any of **x**, **y**, and **z** is specified, the default value for the unspecified one is **0**.<br>{<br>centerX: '50%',<br>centerY: '50%',<br>centerZ: 0,<br>perspective: 0<br>}<br>**RotateAngleOptions**: How the component rotates in the coordinate system (as shown below) with the upper left corner of the component as the coordinate origin. angleX, angleY, angleZ specifies the rotation angle on the three axes.<br>Default value:<br>{<br>angleX:0,<br>angleY:0,<br>angleZ:0,<br>centerX: '50%',<br>centerY: '50%',<br>centerZ: 0,<br>perspective: 0<br>}<br>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>If **options** is **undefined**, the component reverts to its original state with no rotation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="safeareapadding"></a>
## safeAreaPadding

```TypeScript
safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T
```

Sets the safe area padding. This allows the container to add a component-level safe area for its child components to extend into. This attribute can be dynamically set using [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

> **NOTE**  
> In API version 18, this API can be invoked in attributeModifier.  
> When parent and ancestor containers define component-level safe areas, child components can detect and utilize  
> these areas, referred to as Accumulated Safe Area Expansion (SAE), which represents the maximum extendable length  
> in each direction.  
> When ancestor containers have contiguous safeAreaPadding (undivided by margin, border, or padding),  
> SAE accumulates recursively outward until no adjacent outer safeAreaPadding exists or the recursion extends  
> beyond the page container.  
> System-level avoid areas (status bar, navigation bar, notch areas, and more) are treated as the page container's  
> inherent safeAreaPadding and participate in SAE calculations.  
> For details about the avoid areas, see Safe Area. These component-level safe areas can be leveraged by combining  
> with other attributes.  
> For example, setting the ignoreLayoutSafeArea attribute on a child component allows it to extend its layout into  
> the SAE region.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

**Widget capability:** This API can be used in ArkTS widgets since API version 14.

<!--Device-CommonMethod-safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T--><!--Device-CommonMethod-safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| paddingValue | [Padding](../arkts-apis/arkts-arkui-padding-t.md) \| LengthMetrics \| LocalizedPadding | Yes | Safe area padding.<br>Unit: vp. Default value: **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="saturate"></a>
## saturate

```TypeScript
saturate(value: number): T
```

Applies a saturation effect to the component. If this API is not used, there will be no change by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-saturate(value: number): T--><!--Device-CommonMethod-saturate(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Saturation of the component. The saturation is the ratio of the chromatic component to the achromatic component (gray) in a color. If the value is **1**, the original image is displayed. If the value is greater than **1**, a higher percentage of the chromatic component indicates a higher saturation. If the value is less than **1**, a higher percentage of the achromatic component indicates a lower saturation.<br>Recommended value range: [0, 50)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="saturate-1"></a>
## saturate

```TypeScript
saturate(saturate: Optional<number>): T
```

Applies a saturation effect to the component. If this API is not used, there will be no change by default. Compared to [saturate](arkts-arkui-commonmethod-c.md#saturate-1), the **saturate** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-saturate(saturate: Optional<number>): T--><!--Device-CommonMethod-saturate(saturate: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| saturate | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Saturation of the component. The saturation is the ratio of the chromatic component to the achromatic component (gray) in a color. If the value is **1**, the original image is displayed. If the value is greater than **1**, a higher percentage of the chromatic component indicates a higher saturation. If the value is less than **1**, a higher percentage of the achromatic component indicates a lower saturation.<br>Recommended value range:[0, 50)<br>**NOTE**<br>A value less than 0 evaluates to the value **0**.<br>If **saturate** is **undefined**, the saturation effect is reset to **1.0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="scale"></a>
## scale

```TypeScript
scale(value: ScaleOptions): T
```

Scales the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-scale(value: ScaleOptions): T--><!--Device-CommonMethod-scale(value: ScaleOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ScaleOptions](arkts-arkui-scaleoptions-i.md) | Yes | Scale ratio along the x-, y-, and z-axis. The default value is **1**. **centerX** and **centerY** are used to set the scale center point.<br>Default value:<br>{<br>x: 1,<br>y: 1,<br>z: 1,<br>centerX:'50%',<br>centerY:'50%'<br>} |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="scale-1"></a>
## scale

```TypeScript
scale(options: Optional<ScaleOptions>): T
```

Scales the component. Compared with [scale](arkts-arkui-commonmethod-c.md#scale-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-scale(options: Optional<ScaleOptions>): T--><!--Device-CommonMethod-scale(options: Optional<ScaleOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;ScaleOptions&gt; | Yes | Scale ratio along the x-, y-, and z-axis. The default value is **1**.**centerX** and **centerY** are used to set the scale center point.<br>Default value:<br>{<br>x: 1,<br>y: 1,<br   >z: 1,<br>centerX:'50%',<br>centerY:'50%'<br>}<br>If **options** is **undefined**, the component reverts to its original state with no scaling. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="sepia"></a>
## sepia

```TypeScript
sepia(value: number): T
```

Converts the image to a sepia tone, reducing color intensity to create a warm, vintage image style.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-sepia(value: number): T--><!--Device-CommonMethod-sepia(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Intensity of the sepia filter. A value of 1 results in a completely sepia image, values less than or equal to 0 leave the image unchanged, and values greater than 1 increase the color shift, making the image brighter and more yellow or red, though this is not a standard sepia effect.<br>Value range:[0, +∞). Recommended value range: (0, 1]. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="sepia-1"></a>
## sepia

```TypeScript
sepia(sepia: Optional<number>): T
```

Converts the image to a sepia tone, reducing color intensity to create a warm, vintage image style. Compared to [sepia](arkts-arkui-commonmethod-c.md#sepia-1), this API supports the **undefined** type for the **sepia** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-sepia(sepia: Optional<number>): T--><!--Device-CommonMethod-sepia(sepia: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| sepia | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Intensity of the sepia filter. A value of 1 results in a completely sepia image, values less than or equal to 0 leave the image unchanged, and values greater than 1 increase the color shift, making the image brighter and more yellow or red, though this is not a standard sepia effect.<br>If **sepia** is **undefined**, the component reverts to its original effect.<br> Value range:[0, +∞). Recommended value range: (0, 1]. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="shadow"></a>
## shadow

```TypeScript
shadow(value: ShadowOptions | ShadowStyle): T
```

Applies a shadow effect to the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-shadow(value: ShadowOptions | ShadowStyle): T--><!--Device-CommonMethod-shadow(value: ShadowOptions | ShadowStyle): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [ShadowOptions](arkts-arkui-shadowoptions-i.md) \| ShadowStyle | Yes | Shadow of the component.<br>When the value type is **ShadowOptions**, the blur radius, shadow color, and offset along the x-axis and y-axis can be specified.<br>When the value type is **ShadowStyle**, the shadow style can be specified.<br>**Since:** 10 |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="shadow-1"></a>
## shadow

```TypeScript
shadow(options: Optional<ShadowOptions | ShadowStyle>): T
```

Applies a shadow effect to the component. Compared to [shadow](arkts-arkui-commonmethod-c.md#shadow-1), the **options** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-shadow(options: Optional<ShadowOptions | ShadowStyle>): T--><!--Device-CommonMethod-shadow(options: Optional<ShadowOptions | ShadowStyle>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;ShadowOptions \| ShadowStyle&gt; | Yes | Shadow of the component.<br>When the value type is **ShadowOptions**, the blur radius, shadow color, and offset along the x-axis and y-axis can be specified.<br>When the value type is **ShadowStyle**, the shadow style can be specified.<br>If **options** is **undefined**,the component reverts to its original effect with no shadow. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="sharedtransition"></a>
## sharedTransition

```TypeScript
sharedTransition(id: string, options?: sharedTransitionOptions): T
```

Sets the shared transition animation.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-sharedTransition(id: string, options?: sharedTransitionOptions): T--><!--Device-CommonMethod-sharedTransition(id: string, options?: sharedTransitionOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| id | string | Yes | Transition of the shared element. If the same **id** value is configured for a component on the two pages, this component is considered as a shared element of the pages. If the **id** value is an empty string, no transition will be applied to the component. |
| options | [sharedTransitionOptions](arkts-arkui-sharedtransitionoptions-i.md) | No | Parameters of the shared element transition animation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="shouldbuiltinrecognizerparallelwith"></a>
## shouldBuiltInRecognizerParallelWith

```TypeScript
shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T
```

Provides a callback to set the parallel relationship between built-in gestures and gestures of other components in the response chain. The corresponding C API is [setInnerGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-1.md#setinnergestureparallelto).

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T--><!--Device-CommonMethod-shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [ShouldBuiltInRecognizerParallelWithCallback](arkts-arkui-shouldbuiltinrecognizerparallelwithcallback-t.md) | Yes | A callback instance used when a component is doing touch test. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="shouldrecognizerparallelwith"></a>
## shouldRecognizerParallelWith

```TypeScript
shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback): T
```

Provides a callback to set the parallel relationship between gestures of the current component and gestures of other components in the response chain. This callback uses an asynchronous callback. The corresponding C API is [setGestureParallelTo](docroot://reference/apis-arkui/capi-arkui-nativemodule-arkui-nativegestureapi-3.md#setgestureparallelto).

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback): T--><!--Device-CommonMethod-shouldRecognizerParallelWith(callback: ShouldRecognizerParallelWithCallback): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | [ShouldRecognizerParallelWithCallback](arkts-arkui-shouldrecognizerparallelwithcallback-t.md) | Yes | A callback instance used when a component is doing touch test. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="size"></a>
## size

```TypeScript
size(value: SizeOptions): T
```

Sets the width and height of the component.<br>Since API version 10, this API supports the calc calculation feature.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-size(value: SizeOptions): T--><!--Device-CommonMethod-size(value: SizeOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SizeOptions](../arkts-apis/arkts-arkui-sizeoptions-i.md) | Yes | The [SizeOptions](../arkts-apis/arkts-arkui-sizeoptions-i.md) type is used to set the width and height.<br>Exception handling: If the parameter is **undefined**, the attribute setting does not take effect. For other invalid values, the **size** attribute reverts to its default behavior when unconfigured.<br>Unit: vp |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="smartgestureshortcut"></a>
## smartGestureShortcut

```TypeScript
smartGestureShortcut(options?: SmartGestureShortcutOptions): T
```

Enable or disable specific smart gesture shortcuts, and set response priorities for them.

**Since:** 26.0.0

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 26.0.0.

<!--Device-CommonMethod-smartGestureShortcut(options?: SmartGestureShortcutOptions): T--><!--Device-CommonMethod-smartGestureShortcut(options?: SmartGestureShortcutOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [SmartGestureShortcutOptions](arkts-arkui-smartgestureshortcutoptions-i.md) | No | Options for configuring smart gesture shortcuts.In SmartGestureShortcutOptions:enabled is used to configure whether the component responds to smart gestures.selectable is used to set whether the component displays and retains a selected state after being selected by a smart gesture operation.action is used to set the smart gesture response priority. Currently, only GestureShortcut.PRIMARY is supported, which makes the component the primary response target for smart gesture operations such as swiping and tapping.It is recommended to explicitly pass these parameters to avoid inconsistencies caused by default configurations. For default configuration handling, please refer to [SmartGestureShortcutOptions](arkts-arkui-smartgestureshortcutoptions-i.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | return component instance who call the method. |

<a id="sphericaleffect"></a>
## sphericalEffect

```TypeScript
sphericalEffect(value: number): T
```

Applies a spherical effect to the component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-sphericalEffect(value: number): T--><!--Device-CommonMethod-sphericalEffect(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Spherical degree of the component.<br>The value ranges from 0 to 1.<br>**NOTE**<br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely spherical.Between **0** and **1**, a larger value indicates a higher spherical degree.<br>A value less than 0 is handled as the value **0**. A value greater than 1 is handled as the value **1**.<br>2. The component's shadow and outer stroke do not support spherical effects.<br>3. If the value is greater than 0, the component is frozen,and its content is drawn to the transparent offscreen buffer. To update the component attributes, set the value to **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="sphericaleffect-1"></a>
## sphericalEffect

```TypeScript
sphericalEffect(effect: Optional<number>): T
```

Applies a spherical effect to the component. Compared to [sphericalEffect<sup>12+</sup>](arkts-arkui-commonmethod-c.md#sphericaleffect-1), the **effect** parameter supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-sphericalEffect(effect: Optional<number>): T--><!--Device-CommonMethod-sphericalEffect(effect: Optional<number>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [Optional](arkts-arkui-optional-t.md)&lt;number&gt; | Yes | Spherical degree of the component.<br>The value ranges from 0 to 1.<br>**NOTE**<br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely spherical. Between **0** and **1**, a larger value indicates a higher spherical degree.<br>A value less than 0 is handled as the value **0**. A value greater than 1 is handled as the value **1**.<br>2. The component's shadow and outer stroke do not support spherical effects.<br>3. If **effect** is set to a positive number, the component is frozen, and its content is drawn to the transparent offscreen buffer. To update the component attributes, set **effect** to **0**.<br>If **effect** is **undefined**, the spherical degree reverts to **0**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="statestyles"></a>
## stateStyles

```TypeScript
stateStyles(value: StateStyles): T
```

Sets the state-specific styles for the component.

> **NOTE**  
>  
> This API cannot be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1).

**Since:** 8

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-stateStyles(value: StateStyles): T--><!--Device-CommonMethod-stateStyles(value: StateStyles): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [StateStyles](arkts-arkui-statestyles-i.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="sweepgradient"></a>
## sweepGradient

```TypeScript
sweepGradient(value: SweepGradientOptions): T
```

Angle Gradient center:is the center point of the angle gradient start:Start point of angle gradient. The default value is 0end:End point of angle gradient. The default value is 0rotating:rotating. The default value is 0colors:Color description for gradients repeating:repeating. The default value is false

Anonymous Object Rectification.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-sweepGradient(value: SweepGradientOptions): T--><!--Device-CommonMethod-sweepGradient(value: SweepGradientOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [SweepGradientOptions](arkts-arkui-sweepgradientoptions-i.md) | Yes | [since 7 - 17] |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@crossplatform |

<a id="sweepgradient-1"></a>
## sweepGradient

```TypeScript
sweepGradient(options: Optional<SweepGradientOptions>): T
```

Angle Gradient center:is the center point of the angle gradient start:Start point of angle gradient. The default value is 0end:End point of angle gradient. The default value is 0rotating:rotating. The default value is 0colors:Color description for gradients repeating:repeating. The default value is false

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-sweepGradient(options: Optional<SweepGradientOptions>): T--><!--Device-CommonMethod-sweepGradient(options: Optional<SweepGradientOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | [Optional](arkts-arkui-optional-t.md)&lt;SweepGradientOptions&gt; | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@form@atomicservice |

<a id="systembareffect"></a>
## systemBarEffect

```TypeScript
systemBarEffect(): T
```

Applies a system bar effect to the component, which means to invert colors based on the background and add a blur.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-systemBarEffect(): T--><!--Device-CommonMethod-systemBarEffect(): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

<a id="tabindex"></a>
## tabIndex

```TypeScript
tabIndex(index: number): T
```

Sets the tab navigation order of the component in sequential focus navigation with the **Tab** key. Components without explicit **tabIndex** settings follow default focus navigation rules.

> **NOTE**  
>  
> - **tabIndex** only customizes **Tab** key navigation. For arrow key navigation customization, use  
> [nextFocus](arkts-arkui-commonmethod-c.md#nextfocus-1).

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-tabIndex(index: number): T--><!--Device-CommonMethod-tabIndex(index: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | Tab navigation order of the component in sequential focus navigation with the **Tab** key. When components with positive **tabIndex** values are present, only these components are reachable through sequential focus navigation, and they are navigated cyclically in ascending order based on the **tabIndex** value. When components with positive **tabIndex** values are not present, those components with a **tabIndex** value of **0** are navigated based on the preset focus navigation rule.<br>The [UiExtension](../arkts-apis/arkts-arkui-uiextension.md) component does not support **tabIndex**. As such,using **tabIndex** on [hierarchical pages](docroot://ui/arkts-common-events-focus-event.md#basic-concepts) that contain **UiExtension** components may lead to disordered focus navigation.<br>- **tabIndex** >= 0: The component is focusable and can be reached through sequential keyboard navigation.<br>- **tabIndex** < 0 (usually **tabIndex** = -1): The component is focusable, but cannot be reached through sequential keyboard navigation.<br> **NOTE**<br> **tabIndex** and **focusScopeId** cannot be used together. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="tabstop"></a>
## tabStop

```TypeScript
tabStop(isTabStop: boolean): T
```

Set TabStop on component focus

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-CommonMethod-tabStop(isTabStop: boolean): T--><!--Device-CommonMethod-tabStop(isTabStop: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isTabStop | boolean | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform@atomicservice |

<a id="toolbar"></a>
## toolbar

```TypeScript
toolbar(value: CustomBuilder): T
```

Config toolbar for current component.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

<!--Device-CommonMethod-toolbar(value: CustomBuilder): T--><!--Device-CommonMethod-toolbar(value: CustomBuilder): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [CustomBuilder](arkts-arkui-custombuilder-t.md) | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full@stagemodelonly@crossplatform |

<a id="touchable"></a>
## touchable

```TypeScript
touchable(value: boolean): T
```

Whether the component can respond to finger interactions such as click and touch events.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** [hitTestBehavior](arkts-arkui-commonmethod-c.md#hittestbehavior-1)

<!--Device-CommonMethod-touchable(value: boolean): T--><!--Device-CommonMethod-touchable(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component can respond to finger interactions such as click and touch events.<br>**true** (default): The component can respond to finger interactions. **false**: The component cannot respond to finger interactions. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="transform"></a>
## transform

```TypeScript
transform(value: object): T
```

Displays the matrix transformation when 2D transformation is performed. If 3D transformation is included, the [transform3D](arkts-arkui-commonmethod-c.md#transform3d-1) API is required.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-CommonMethod-transform(value: object): T--><!--Device-CommonMethod-transform(value: object): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | object | Yes | Transformation matrix of the component. Only the [Matrix4Transit](../arkts-apis/arkts-matrix4.md) object type is supported. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="transform-1"></a>
## transform

```TypeScript
transform(transform: Optional<object>): T
```

Displays the matrix transformation when 2D transformation is performed. If 3D transformation is included, the [transform3D](arkts-arkui-commonmethod-c.md#transform3d-1) API is required. Compared with [transform](docroot://reference/apis-arkui/arkui-ts/ts-universal-attributes-transformation.md#transform), the transform<sup>18+</sup> parameter supports the undefined type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-transform(transform: Optional<object>): T--><!--Device-CommonMethod-transform(transform: Optional<object>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transform | [Optional](arkts-arkui-optional-t.md)&lt;object&gt; | Yes | Transformation matrix of the component. Only the [Matrix4Transit](../arkts-apis/arkts-matrix4.md) object type is supported.<br>If **transform** is **undefined**,the component reverts to the identity matrix (no transformation). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="transform3d"></a>
## transform3D

```TypeScript
transform3D(transform: Optional<Matrix4Transit>): T
```

Sets the 3D transformation matrix of the component. When 3D transformation with the perspective effect is involved,the display effect of the transform interface may be incorrect. In this case, the transform3D interface is recommended.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

<!--Device-CommonMethod-transform3D(transform: Optional<Matrix4Transit>): T--><!--Device-CommonMethod-transform3D(transform: Optional<Matrix4Transit>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| transform | [Optional](arkts-arkui-optional-t.md)&lt;Matrix4Transit&gt; | Yes | 3D transformation matrix.<br>If **transform** is **undefined**, the component reverts to the identity matrix (no transformation). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="transition"></a>
## transition

```TypeScript
transition(value: TransitionOptions | TransitionEffect): T
```

Sets the transition effects used when a component is inserted or removed.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-transition(value: TransitionOptions | TransitionEffect): T--><!--Device-CommonMethod-transition(value: TransitionOptions | TransitionEffect): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TransitionOptions](arkts-arkui-transitionoptions-i.md) \| TransitionEffect | Yes | Transition effects used when a component is inserted or removed.<br>**NOTE**<br>For details, see [TransitionOptions](arkts-arkui-transitionoptions-i.md) and [TransitionEffect](arkts-arkui-transitioneffect-c.md). |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="transition-1"></a>
## transition

```TypeScript
transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T
```

Sets the transition effects used when a component is inserted or removed. Compared with [transition](arkts-arkui-commonmethod-c.md#transition-1), this API provides the callback when the transition animation ends.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 12.

<!--Device-CommonMethod-transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T--><!--Device-CommonMethod-transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [TransitionEffect](arkts-arkui-transitioneffect-c.md) | Yes | Transition effects used when a component is inserted or removed. |
| onFinish | [Optional](arkts-arkui-optional-t.md)&lt;TransitionFinishCallback&gt; | Yes | Callback when the transition animation ends. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="translate"></a>
## translate

```TypeScript
translate(value: TranslateOptions): T
```

Translates the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-translate(value: TranslateOptions): T--><!--Device-CommonMethod-translate(value: TranslateOptions): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [TranslateOptions](arkts-arkui-translateoptions-i.md) | Yes | How the component is translated within the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the upper-left corner of the component as the origin (as shown in the figure below). Values of **x**, **y**, and **z** indicate the translation distance along the respective axis. A positive value indicates a forward movement towards the respective axis, and a negative value indicates a backward movement towards the respective axis. The translation distance can be a number or a string (for example, **'10px'** or **'10%'**).<br>Default value:<br>{<br>x: 0,<br>y: 0,<br>z: 0<br>}<br>Unit: vp<br>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>**NOTE**<br>When the component is translated along the z-axis, the position of the observation point remains unchanged. As such, the component appears larger when the value of **z** places it closer to the observation point and smaller when the value of **z** places it further away from the observation point.<br>![coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png) |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="translate-1"></a>
## translate

```TypeScript
translate(translate: Optional<TranslateOptions>): T
```

Translates the component. Compared with [translate](arkts-arkui-commonmethod-c.md#translate-1), this API supports the **undefined** type.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-translate(translate: Optional<TranslateOptions>): T--><!--Device-CommonMethod-translate(translate: Optional<TranslateOptions>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| translate | [Optional](arkts-arkui-optional-t.md)&lt;TranslateOptions&gt; | Yes | How the component is translated within the [component coordinate system](docroot://ui/arkui-glossary.md#component-coordinate-system), which takes the upper-left corner of the component as the origin (as shown in the figure below). Values of **x**, **y**, and **z** indicate the translation distance along the respective axis. A positive value indicates a forward movement towards the respective axis, and a negative value indicates a backward movement towards the respective axis. The translation distance can be a number or a string (for example, **'10px'** or **'10%'**).<br>Default value:<br>{<br>x: 0,<br>y: 0,<br>z: 0<br>}<br>Unit: vp<br>![coordinates](docroot://reference/apis-arkui/arkui-ts/figures/coordinates.png)<br>**NOTE**<br>When the component is translated along the z-axis, the position of the observation point remains unchanged. As such, the component appears larger when the value of **z** places it closer to the observation point and smaller when the value of **z** places it further away from the observation point.<br>![coordinateNode](docroot://reference/apis-arkui/arkui-ts/figures/coordinateNote.png)<br>If **translate** is **undefined**, the component reverts to its original state with no translation. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="useeffect"></a>
## useEffect

```TypeScript
useEffect(useEffect: boolean, effectType: EffectType): T
```

Specifies whether to apply the effect defined by <!--Del-->the parent [EffectComponent](ts-container-effectcomponent-sys.md) or <!--DelEnd-->the window.

**Since:** 14

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 14.

<!--Device-CommonMethod-useEffect(useEffect: boolean, effectType: EffectType): T--><!--Device-CommonMethod-useEffect(useEffect: boolean, effectType: EffectType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| useEffect | boolean | Yes | Whether to apply the effect defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>Default value: **false**. |
| effectType | [EffectType](arkts-arkui-effecttype-e.md) | Yes | Type of effect to apply to the component, which is defined by<!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>Default value: **EffectType.DEFAULT**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

<a id="useeffect-1"></a>
## useEffect

```TypeScript
useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T
```

Specifies whether to apply the effect defined by <!--Del-->the parent EffectComponent or

<!--DelEnd-->the window. Compared to useEffect<sup>14+</sup>,

this API supports the **undefined** type for the **useEffect** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-CommonMethod-useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T--><!--Device-CommonMethod-useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| useEffect | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to apply the effect defined by<!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>Default value: **false**.<br>If **useEffect** is set to **undefined**, the previous value is retained. |
| effectType | [EffectType](arkts-arkui-effecttype-e.md) | No | Type of effect to apply to the component, which is defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.<br>Default value: **EffectType.DEFAULT**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

<a id="useeffect-2"></a>
## useEffect

```TypeScript
useEffect(value: boolean): T
```

Specifies whether to combine the drawing of special effects, such as background blur.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-useEffect(value: boolean): T--><!--Device-CommonMethod-useEffect(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether the component inherits the special effect settings of the **EffectComponent** component.<br>The value **true** means that the component inherits the special effect settings of the **EffectComponent** component, and **false** means the opposite.<br>Default value: **false**. |

**Return value:**

| Type | Description |
| --- | --- |
| T | return the component attribute. |

<a id="useshadowbatching"></a>
## useShadowBatching

```TypeScript
useShadowBatching(value: boolean): T
```

Sets whether to render child node shadows at the same layer, enabling shadow overlap within the same layer.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

**Widget capability:** This API can be used in ArkTS widgets since API version 11.

<!--Device-CommonMethod-useShadowBatching(value: boolean): T--><!--Device-CommonMethod-useShadowBatching(value: boolean): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | Whether to render child node shadows at the same layer.<br>Default value: **false**<br>**true**: Child node shadows are rendered at the same layer without overlapping.<br> **false**: Child node shadows are rendered separately, with later shadows overlapping earlier ones.<br>**NOTE**<br>1. This feature is disabled by default. When child nodes have large shadow radius and overlapping areas, later-rendered shadows cover earlier ones. Enabling this feature renders all child shadows simultaneously without overlap.<br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching** takes effect for the current child node only and cannot be recursively used. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="useshadowbatching-1"></a>
## useShadowBatching

```TypeScript
useShadowBatching(use: Optional<boolean>): T
```

Sets whether to render child node shadows at the same layer, enabling shadow overlap within the same layer.Compared with [useShadowBatching<sup>11+</sup>](arkts-arkui-commonmethod-c.md#useshadowbatching-1), this API supports the **undefined** type for the **use** parameter.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-CommonMethod-useShadowBatching(use: Optional<boolean>): T--><!--Device-CommonMethod-useShadowBatching(use: Optional<boolean>): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| use | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to render child node shadows at the same layer.<br>Default value:**false**<br> **true**: Child node shadows are rendered at the same layer without overlapping.<br> **false**:Child node shadows are rendered separately, with later shadows overlapping earlier ones.<br>**NOTE**<br>1. This feature is disabled by default. When child nodes have large shadow radius and overlapping areas, later-rendered shadows cover earlier ones. Enabling this feature renders all child shadows simultaneously without overlap.<br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching** takes effect for the current child node only and cannot be recursively used.<br>If **use** is **undefined**, the component reverts to its original effect of not using shadow overlapping. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="usesizetype"></a>
## useSizeType

```TypeScript
useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T
```

Sets the number of occupied columns and offset columns for a specific device width type.

**Since:** 7

**Deprecated since:** 9

**Substitutes:** grid_col/GridColColumnOption

<!--Device-CommonMethod-useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T--><!--Device-CommonMethod-useSizeType(value: {
    xs?: number | { span: number; offset: number };
    sm?: number | { span: number; offset: number };
    md?: number | { span: number; offset: number };
    lg?: number | { span: number; offset: number };
  }): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | {     xs?: number \| { span: number; offset: number };     sm?: number \| { span: number; offset: number };     md?: number \| { span: number; offset: number };     lg?: number \| { span: number; offset: number };   } | Yes |  |

**Return value:**

| Type | Description |
| --- | --- |
| T | @syscap SystemCapability.ArkUI.ArkUI.Full |

<a id="visibility"></a>
## visibility

```TypeScript
visibility(value: Visibility): T
```

Sets the visibility of the component. If **visibility** is not set, the component is displayed by default.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-visibility(value: Visibility): T--><!--Device-CommonMethod-visibility(value: Visibility): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Visibility](../../apis-arkdata/arkts-apis/arkts-arkdata-unifieddatachannel-visibility-e.md) | Yes | Whether the component is visible. When appropriate, consider using [conditional rendering](docroot://ui/rendering-control/arkts-rendering-control-ifelse.md) as a substitute. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="visualeffect"></a>
## visualEffect

```TypeScript
visualEffect(effect: VisualEffect): T
```

Sets a visual effect that is not a filter effect.

> **NOTE**  
>  
> This API can be called within [attributeModifier](arkts-arkui-commonmethod-c.md#attributemodifier-1) since API version 20.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-CommonMethod-visualEffect(effect: VisualEffect): T--><!--Device-CommonMethod-visualEffect(effect: VisualEffect): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| effect | [VisualEffect](arkts-arkui-visualeffect-t.md) | Yes | Visual effect. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="width"></a>
## width

```TypeScript
width(value: Length): T
```

Sets the width of the component. By default, the width required to fully hold the component content is used. If a component is wider than its parent, it will overflow.<br>Since API version 10, this API supports the calc calculation feature.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-width(value: Length): T--><!--Device-CommonMethod-width(value: Length): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | [Length](../arkts-apis/arkts-arkui-length-t.md) | Yes | Width of the component to set.<br>Unit: vp   > **NOTE**   >   > - In the [TextInput](TextInput) component, setting **width** to **auto** means that   > the width adapts to the width of the text content.   >   > - In the [AlphabetIndexer](AlphabetIndexer) component, setting **width** to **auto**   > means that the width adapts to the maximum width of index entries. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="width-1"></a>
## width

```TypeScript
width(widthValue: Length | LayoutPolicy): T
```

Sets the width of the component or its horizontal layout policy. By default, the component uses the width required for its content. If a component is wider than its parent, it will overflow.

**Since:** 15

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 15.

**Widget capability:** This API can be used in ArkTS widgets since API version 15.

<!--Device-CommonMethod-width(widthValue: Length | LayoutPolicy): T--><!--Device-CommonMethod-width(widthValue: Length | LayoutPolicy): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| widthValue | [Length](../arkts-apis/arkts-arkui-length-t.md) \| LayoutPolicy | Yes | Width of the component to set<br>Unit: vp. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

<a id="zindex"></a>
## zIndex

```TypeScript
zIndex(value: number): T
```

Sets the stacking order of the component.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

**Widget capability:** This API can be used in ArkTS widgets since API version 9.

<!--Device-CommonMethod-zIndex(value: number): T--><!--Device-CommonMethod-zIndex(value: number): T-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | number | Yes | Stacking order of the component relative to its sibling components in a container. The components with a larger **zIndex** value cover those with a smaller one. When dynamically changing zIndex does not involve adding or removing sibling nodes, the components are sorted stably based on their previous stack level. |

**Return value:**

| Type | Description |
| --- | --- |
| T | Current component. |

