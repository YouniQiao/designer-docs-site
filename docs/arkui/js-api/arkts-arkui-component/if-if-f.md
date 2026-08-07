# If

## If

```TypeScript
export declare function If(
  condition: boolean,
  content_: CustomBuilder
): IfAttribute
```

Defines If Component.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Sta only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function If(  condition: boolean,  content_: CustomBuilder): IfAttribute--><!--Device-unnamed-export declare function If(  condition: boolean,  content_: CustomBuilder): IfAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| condition | boolean | Yes | condition of the branch. |
| content\_ | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | code for the branch |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ |  |


## If

```TypeScript
export declare function If(
    style: CustomBuilderT<IfAttribute>,
    content_: CustomBuilder
): IfAttribute
```

Defines If Component. It requires call setIfOptions at start of component attribute set-up,and it requires call applyAttributeFinish at end of component attribute set-up.

**Since:** 26.1.0

**ArkTS mode:** ArkTS-Sta only, since version 26.1.0.

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function If(    style: CustomBuilderT<IfAttribute>,    content_: CustomBuilder): IfAttribute--><!--Device-unnamed-export declare function If(    style: CustomBuilderT<IfAttribute>,    content_: CustomBuilder): IfAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;\_\_\_MD\_LINK\_USD\_1\_\_\_&gt; | Yes | callback to set up If's attributes. |
| content\_ | \_\_\_MD\_LINK\_USD\_0\_\_\_ | Yes | code for the branch |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | The attribute of If. |

