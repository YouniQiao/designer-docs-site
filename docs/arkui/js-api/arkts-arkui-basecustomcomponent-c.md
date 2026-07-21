# BaseCustomComponent

Custom Component base class and it is migrated from class CustomComponent.

**Inheritance/Implementation:** BaseCustomComponent extends [CommonAttribute](arkts-arkui-common-attribute.md)

**Since:** 18

<!--Device-unnamed-declare class BaseCustomComponent extends CommonAttribute--><!--Device-unnamed-declare class BaseCustomComponent extends CommonAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttoappear"></a>
## aboutToAppear

```TypeScript
aboutToAppear?(): void
```

Invoked after a new instance of the custom component is created and before its build() function is executed. You can change state variables in aboutToAppear.The change will take effect when you execute the build() function next time.The aboutToAppear lifecycle callback of a custom component with a custom layout is invoked during the layout process.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-BaseCustomComponent-aboutToAppear?(): void--><!--Device-BaseCustomComponent-aboutToAppear?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttodisappear"></a>
## aboutToDisappear

```TypeScript
aboutToDisappear?(): void
```

Invoked when this component is about to disappear.Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.For example, the modification of the @Link decorated variable may cause unstable application running.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-BaseCustomComponent-aboutToDisappear?(): void--><!--Device-BaseCustomComponent-aboutToDisappear?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="abouttorecycle"></a>
## aboutToRecycle

```TypeScript
aboutToRecycle?(): void
```

aboutToRecycle Method and it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-aboutToRecycle?(): void--><!--Device-BaseCustomComponent-aboutToRecycle?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="build"></a>
## build

```TypeScript
build(): void
```

Customize the pop-up content constructor and it is migrated from class CustomComponent.

**Since:** 18

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-BaseCustomComponent-build(): void--><!--Device-BaseCustomComponent-build(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="getdialogcontroller"></a>
## getDialogController

```TypeScript
getDialogController(): PromptActionDialogController | undefined
```

The dialog controller of the custom component.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-getDialogController(): PromptActionDialogController | undefined--><!--Device-BaseCustomComponent-getDialogController(): PromptActionDialogController | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [PromptActionDialogController](arkts-arkui-promptactiondialogcontroller-t.md) | The controller of dialog, or undefined if it is not available |

<a id="getuicontext"></a>
## getUIContext

```TypeScript
getUIContext(): UIContext
```

Get current UIContext and it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-getUIContext(): UIContext--><!--Device-BaseCustomComponent-getUIContext(): UIContext-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [UIContext](arkts-arkui-uicontext-t.md) | The UIContext that the custom component belongs to. |

<a id="getuniqueid"></a>
## getUniqueId

```TypeScript
getUniqueId(): number
```

Get uniqueId of the custom component and it is migrated from class CustomComponent.This unique ID is assigned by the system to each component.If this API is called before the component's corresponding node is created or after it has been destroyed, an invalid unique ID, which is -1, will be returned.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-getUniqueId(): number--><!--Device-BaseCustomComponent-getUniqueId(): number-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | - The uniqueId of the custom component. |

<a id="onbackpress"></a>
## onBackPress

```TypeScript
onBackPress?(): void | boolean
```

Invoked when a user clicks the back button on a router-managed page (a custom component decorated with [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)). The value **true** means that the page executes its own return logic, and **false** (default) means that the default return logic is used.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-onBackPress?(): void | boolean--><!--Device-BaseCustomComponent-onBackPress?(): void | boolean-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="ondidbuild"></a>
## onDidBuild

```TypeScript
onDidBuild?(): void
```

The callback method after the custom component is built and it is migrated from class CustomComponent.

Triggered when the custom component has been built.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-onDidBuild?(): void--><!--Device-BaseCustomComponent-onDidBuild?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="onformrecover"></a>
## onFormRecover

```TypeScript
onFormRecover?(statusData: string): void
```

onFormRecover Method, this is only for ArkTS form, it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-BaseCustomComponent-onFormRecover?(statusData: string): void--><!--Device-BaseCustomComponent-onFormRecover?(statusData: string): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| statusData | string | Yes | indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form |

<a id="onformrecycle"></a>
## onFormRecycle

```TypeScript
onFormRecycle?(): string
```

onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be passed back as params in onFormRecover, in which you can recover the form, it is migrated from class CustomComponent.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

**Widget capability:** This API can be used in ArkTS widgets since API version 18.

<!--Device-BaseCustomComponent-onFormRecycle?(): string--><!--Device-BaseCustomComponent-onFormRecycle?(): string-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| string | status data of ArkTS form UI, this data will be passed in when recover form later |

<a id="onmeasuresize"></a>
## onMeasureSize

```TypeScript
onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult
```

Invoked when the custom component needs to determine its size. Through this callback the component receives its layout information and size constraints from the ArkUI framework. State variables should not be changed in this callback.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult--><!--Device-BaseCustomComponent-onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selfLayoutInfo | [GeometryInfo](arkts-arkui-geometryinfo-i.md) | Yes | Information about the component's computed layout properties after measurement.<br>During the first layout, the component will use its own set attributes as the basis for layout. |
| children | Array&lt;Measurable&gt; | Yes | Array containing layout information for all child components after measurement. <br>When a child component does not have its layout information set, it retains the previous layout settings or, if no previous layout settings are available, stays at the default size of 0. |
| constraint | [ConstraintSizeOptions](../arkts-apis/arkts-arkui-constraintsizeoptions-i.md) | Yes | Layout constraints applied to the component. |

**Return value:**

| Type | Description |
| --- | --- |
| [SizeResult](arkts-arkui-sizeresult-i.md) | Component size information. |

<a id="onnewparam"></a>
## onNewParam

```TypeScript
onNewParam?(param: ESObject): void
```

Triggered when the Entry custom component has been pushed with singleton mode.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

<!--Device-BaseCustomComponent-onNewParam?(param: ESObject): void--><!--Device-BaseCustomComponent-onNewParam?(param: ESObject): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| param | [ESObject](../../apis-na/arkts-apis/arkts-na-esobject-t.md) | Yes | New parameters pushed with singleton mode. |

<a id="onpagehide"></a>
## onPageHide

```TypeScript
onPageHide?(): void
```

Invoked each time a router-managed page (a custom component decorated with [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)) is hidden, including scenarios such as route navigation and the application moving to the background.

> **NOTE**

> To ensure smooth UI responsiveness, avoid executing time-consuming operations within the callback function that  
> may block the main thread. For resource-intensive tasks such as camera resource deallocation, consider  
> implementing asynchronous solutions. For best practices, see  
> [Reducing Application Latency: Postponing Resource Release](https://developer.huawei.com/consumer/en/doc/best-practices/bpta-application-latency-optimization-cases#section8783201923819).

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-onPageHide?(): void--><!--Device-BaseCustomComponent-onPageHide?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="onpageshow"></a>
## onPageShow

```TypeScript
onPageShow?(): void
```

Invoked each time a router-managed page (a custom component decorated with [\@Entry](docroot://ui/state-management/arkts-create-custom-components.md#entry)) is displayed, including scenarios such as route navigation and the application returning to the foreground.

**Since:** 7

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-onPageShow?(): void--><!--Device-BaseCustomComponent-onPageShow?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="onplacechildren"></a>
## onPlaceChildren

```TypeScript
onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void
```

Invoked when the custom component needs to determine the positions of its child components. Through this callback the component receives its child component size constraints from the ArkUI framework.State variables should not be changed in this callback.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void--><!--Device-BaseCustomComponent-onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| selfLayoutInfo | [GeometryInfo](arkts-arkui-geometryinfo-i.md) | Yes | Information about the component's computed layout properties after measurement. |
| children | Array&lt;Layoutable&gt; | Yes | Array containing layout information for all child components after measurement. |
| constraint | [ConstraintSizeOptions](../arkts-apis/arkts-arkui-constraintsizeoptions-i.md) | Yes | Layout constraints applied to the component. |

<a id="onwillapplytheme"></a>
## onWillApplyTheme

```TypeScript
onWillApplyTheme?(theme: Theme): void
```

Invoked before the **build()** function of a new instance of the custom component is executed, to obtain the **Theme** object of the component context. You can change state variables in **onWillApplyTheme**. The change will take effect when you execute the **build()** function next time.

> * * Note: * *  
> Since API version 18, this API can be used in the status management V2 component.

> **NOTE**

> Since API version 18, this API is supported in the components of V2.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseCustomComponent-onWillApplyTheme?(theme: Theme): void--><!--Device-BaseCustomComponent-onWillApplyTheme?(theme: Theme): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| theme | [Theme](arkts-arkui-theme-t.md) | Yes | Current theme object of the custom component. |

<a id="pagetransition"></a>
## pageTransition

```TypeScript
pageTransition?(): void
```

PageTransition Method and it is migrated from class CustomComponent.Implement Animation when enter this page or move to other pages.

**Since:** 9

**Atomic service API:** This API can be used in atomic services since API version 11.

<!--Device-BaseCustomComponent-pageTransition?(): void--><!--Device-BaseCustomComponent-pageTransition?(): void-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

<a id="querynavdestinationinfo"></a>
## queryNavDestinationInfo

```TypeScript
queryNavDestinationInfo(): NavDestinationInfo | undefined
```

Queries the **NavDestination** information of this custom component. This API has effect only when the component is contained within a **NavDestination** component.

**Since:** 11

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseCustomComponent-queryNavDestinationInfo(): NavDestinationInfo | undefined--><!--Device-BaseCustomComponent-queryNavDestinationInfo(): NavDestinationInfo | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [NavDestinationInfo](../arkts-apis/arkts-arkui-uiobserver-navdestinationinfo-i.md) | **NavDestinationInfo** instance obtained. |

<a id="querynavdestinationinfo-1"></a>
## queryNavDestinationInfo

```TypeScript
queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined
```

Queries the information of the nearest **NavDestination** component (a navigation page or subpage of the **Navigation** component) associated with this custom component. The search direction is controlled by **isInner**:**true** for inward search and **false** for outward search.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 18.

<!--Device-BaseCustomComponent-queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined--><!--Device-BaseCustomComponent-queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| isInner | [Optional](arkts-arkui-optional-t.md)&lt;boolean&gt; | Yes | Whether to search inward for the nearest **NavDestination** component in the navigation stack.<br>**true**: Search inward.<br>**false**: Search outward. |

**Return value:**

| Type | Description |
| --- | --- |
| [NavDestinationInfo](../arkts-apis/arkts-arkui-uiobserver-navdestinationinfo-i.md) | **NavDestinationInfo** instance obtained. |

<a id="querynavigationinfo"></a>
## queryNavigationInfo

```TypeScript
queryNavigationInfo(): NavigationInfo | undefined
```

Queries the **Navigation** information of this custom component.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseCustomComponent-queryNavigationInfo(): NavigationInfo | undefined--><!--Device-BaseCustomComponent-queryNavigationInfo(): NavigationInfo | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [NavigationInfo](arkts-arkui-navigationinfo-t.md) | **NavigationInfo** instance obtained. |

<a id="queryrouterpageinfo"></a>
## queryRouterPageInfo

```TypeScript
queryRouterPageInfo(): RouterPageInfo | undefined
```

Obtains a **RouterPageInfo** instance.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 12.

<!--Device-BaseCustomComponent-queryRouterPageInfo(): RouterPageInfo | undefined--><!--Device-BaseCustomComponent-queryRouterPageInfo(): RouterPageInfo | undefined-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| [RouterPageInfo](arkts-arkui-routerpageinfo-t.md) | **RouterPageInfo** instance obtained. |

