# LazyForEach

## LazyForEach

```TypeScript
export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
): LazyForEachAttribute
```

Enter the value to obtain the LazyForEach.

**Since:** 23

**ArkTS mode:** ArkTS-Sta only, since version 23.

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,    itemGenerator: ItemGeneratorFunc<T>,    keyGenerator?: KeyGeneratorFunc<T>,): LazyForEachAttribute--><!--Device-unnamed-export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,    itemGenerator: ItemGeneratorFunc<T>,    keyGenerator?: KeyGeneratorFunc<T>,): LazyForEachAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | Yes | the array collection to be used in UI. |
| itemGenerator | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | Yes | item generator function. |
| keyGenerator | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | No | key generator function |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | LazyForEach attribute |


## LazyForEach

```TypeScript
export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,
    itemGenerator: ItemGeneratorFunc<T>,
    keyGenerator?: KeyGeneratorFunc<T>,
    options?: LazyForEachOptions,
): LazyForEachAttribute
```

Enter the value to obtain the LazyForEach.

**Since:** 26.0.0

**ArkTS mode:** ArkTS-Sta only, since version 26.0.0.

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,    itemGenerator: ItemGeneratorFunc<T>,    keyGenerator?: KeyGeneratorFunc<T>,    options?: LazyForEachOptions,): LazyForEachAttribute--><!--Device-unnamed-export declare function LazyForEach<T = Any>(dataSource: IDataSource<T>,    itemGenerator: ItemGeneratorFunc<T>,    keyGenerator?: KeyGeneratorFunc<T>,    options?: LazyForEachOptions,): LazyForEachAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| dataSource | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | Yes | the array collection to be used in UI. |
| itemGenerator | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | Yes | item generator function. |
| keyGenerator | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;T&gt; | No | key generator function. |
| options | \_\_\_MD\_LINK\_USD\_0\_\_\_ | No | options for LazyForEach behavior. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | LazyForEach attribute |


## LazyForEach

```TypeScript
export declare function LazyForEach<T = Any>(
    style: CustomBuilderT<LazyForEachAttribute>
): LazyForEachAttribute
```

Defines LazyForEach Component. It requires call setLazyForEachOptions at start of component attribute set-up,and it requires call applyAttributeFinish at end of component attribute set-up.

**Since:** 26.1.0

**ArkTS mode:** ArkTS-Sta only, since version 26.1.0.

**Decorator:** @Builder

**Model restriction:** This API can be used only in the stage model.

<!--Device-unnamed-export declare function LazyForEach<T = Any>(    style: CustomBuilderT<LazyForEachAttribute>): LazyForEachAttribute--><!--Device-unnamed-export declare function LazyForEach<T = Any>(    style: CustomBuilderT<LazyForEachAttribute>): LazyForEachAttribute-End-->

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| style | \_\_\_MD\_LINK\_USD\_0\_\_\_&lt;\_\_\_MD\_LINK\_USD\_1\_\_\_&gt; | Yes | callback to set up LazyForEach's attributes. |

**Return value:**

| Type | Description |
| --- | --- |
| \_\_\_MD\_LINK\_USD\_0\_\_\_ | The attribute of LazyForEach. |

