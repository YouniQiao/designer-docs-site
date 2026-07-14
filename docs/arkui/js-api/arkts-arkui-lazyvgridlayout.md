# LazyVGridLayout

Implements a grid layout that supports lazy loading. In versions earlier than API version 26.0.0, the parent component of the **LazyVGridLayout** component supports the [WaterFlow]{@link water_flow} and [FlowItem]{@link flow_item} components. You can also encapsulate the parent component using a custom component or [NodeContainer]{@link node_container} component and use it in **WaterFlow** or **FlowItem**. Since API version 26.0.0, the parent component of this component also supports [List]{@link list}, [Scroll]{@link scroll}, or [LazyColumnLayout](docroot://reference/apis-arkui/arkui-ts/ts-container-lazycolumnlayout.md). Additionally, custom components or [NodeContainer]{@link node_container} components can be encapsulated and then used in **List**, **Scroll**, or **LazyColumnLayout**. > **NOTE** > > - This component is supported since API version 19. Updates will be marked with a superscript to indicate their > earliest API version. > > - This component's height adapts to content by default. Setting the height, height constraints, or aspect ratio > causes display anomalies. > > - The lazy loading conditions of this component in different parent components are as follows: > >   1. In the **WaterFlow** component, lazy loading is supported only when it uses single-column mode or single- > column segments in segmented layout and [FlexDirection]{@link FlexDirection} is set to **FlexDirection.Column**. > Lazy loading is not supported if the **WaterFlow** component is in multi-column mode or the layout direction is > **FlexDirection.Row** or **FlexDirection.RowReverse**. Using this component with **FlexDirection.ColumnReverse** in > the **WaterFlow** component causes display anomalies. > >   2. In the **List** component, the layout direction must be vertical (that is, the > [listDirection]{@link ListAttribute#listDirection} property is set to **Axis.Vertical**). Using this component in a > non-vertical **List** component will cause an application crash. If any of the **lanes**, **chainAnimation**, and > **scrollSnapAlign** properties is set for the **List** component, the lazy loading of this component will become > invalid. > >   3. In the **Scroll** component, the layout direction must be vertical (that is, the value of the > [scrollable]{@link ScrollAttribute#scrollable} property is **ScrollDirection.Vertical**). Using this component in a > non-vertical **Scroll** component will cause an application crash. > > - When lazy loading is enabled, the component only loads child components within the visible area of the parent > component, with pre-loading of half-screen content above and below the viewport during frame idle periods.

## LazyVGridLayout

```TypeScript
LazyVGridLayout()
```

Creates a vertical lazy-loading grid layout container.

**Since:** 19

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 19.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## Summary

