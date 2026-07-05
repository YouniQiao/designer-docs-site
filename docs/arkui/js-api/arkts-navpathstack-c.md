# NavPathStack

Navigation导航控制器，以栈的数据结构管理Navigation中所有的子页面，并提供栈操作的方法用于控制Navigation中子页面的切换。 从API version 12开始，NavPathStack允许被继承，派生类对象可以替代基类NavPathStack对象使用。使用示例参见 [示例10](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#示例10定义导航控制器派生类)。 > **说明：** > > 1.连续调用多个导航控制器操作方法时，中间过程会被忽略，显示最终的栈操作结果。 > 例如：在Page1页面先pop再push一个Page1，系统会认为操作前和操作后的结果一致而不进行任何操作，如果需要强行push一个Page1实例，可以设置 > [NavigationOption](arkts-navigationoptions-i.md#NavigationOptions)中的launchMode属性值为LaunchMode.NEW_INSTANCE模式。 > > 2.不建议开发者通过监听页面生命周期的方式管理自己的导航控制器。 > > 3.在应用处于后台状态下，调用NavPathStack的栈操作方法，会在应用再次回到前台状态时触发刷新。

**Since:** 10

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## clear

```TypeScript
clear(animated?: boolean): void
```

清除栈中所有页面。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| animated | boolean | No |  |

## constructor

```TypeScript
constructor()
```

创建NavPathStack对象。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## disableAnimation

```TypeScript
disableAnimation(value: boolean): void
```

关闭（true）或打开（false）当前Navigation中所有转场动画。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | boolean | Yes | 是否关闭转场动画， 默认值：false true：关闭转场动画。 false：不关闭转场动画。 |

## getAllPathName

```TypeScript
getAllPathName(): Array<string>
```

获取栈中所有NavDestination页面的名称。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;string> | 返回栈中所有NavDestination页面的名称。 |

## getIndexByName

```TypeScript
getIndexByName(name: string): Array<number>
```

获取全部名为name的NavDestination页面的位置索引。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;number> | 返回全部名为name的NavDestination页面的位置索引。 当路由栈中不存在此name，返回空数组。索引取值范围为[0, 路由栈大小-1] |

## getParamByIndex

```TypeScript
getParamByIndex(index: number): unknown | undefined
```

获取index指定的NavDestination页面的参数信息。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | NavDestination页面的位置索引。 索引值从0开始。 |

**Return value:**

| Type | Description |
| --- | --- |
| unknown | unknown: parameter information of the corresponding navigation destination  page. unknown can represent a user-defined type.  undefined: an invalid index is provided. |

## getParamByName

```TypeScript
getParamByName(name: string): Array<unknown>
```

获取所有名为name的NavDestination页面的参数信息，按页面索引从小到大排序。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;unknown> | 返回全部名为name的NavDestination页面的参数信息，unknown可以是用户自定义的类型。 |

## getParent

```TypeScript
getParent(): NavPathStack | null
```

获取父NavPathStack。 当出现Navigation嵌套Navigation的情况时（可以是直接嵌套，也可以是间接嵌套），内部Navigation的NavPathStack能够获取到外层Navigation的NavPathStack。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| NavPathStack | Navigation path stack of the outer Navigation component in which the current  Navigation component is nested. If there is no outer Navigation component., null is returned. |

## getPathStack

```TypeScript
getPathStack(): Array<NavPathInfo>
```

获取当前路由栈中的路由页面信息数组。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| Array&lt;NavPathInfo> | 当前路由栈中的路由页面信息数组。 |

## moveIndexToTop

```TypeScript
moveIndexToTop(index: number, animated?: boolean): void
```

将index指定的NavDestination页面移到栈顶。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | NavDestination页面的位置索引。索引值从0开始。 |
| animated | boolean | No |  |

## moveToTop

```TypeScript
moveToTop(name: string, animated?: boolean): number
```

将由栈底开始第一个名为name的NavDestination页面移到栈顶。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的当前索引，否则返回-1。 |

## pop

```TypeScript
pop(animated?: boolean): NavPathInfo | undefined
```

弹出路由栈栈顶元素。 > **说明：** > > 连续调用多个导航控制器方法时，中间被pop的页面会被缓存，后续push同名页面时会优先复用该页面，不会走新的页面创建流程。 > 例如： > pathStack: NavPathStack = new NavPathStack() > // 初始页面栈为：[A] > pathStack.pop() > pathStack.pushPath(A) > pathStack.pushPath(B) > // 操作后页面栈为：[A B] > 此时A页面会被复用，不会走新的创建流程。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| NavPathInfo | NavPathInfo: information about the navigation destination page at the top  of the stack.  undefined: the routing stack is empty. |

## pop

```TypeScript
pop(result: Object, animated?: boolean): NavPathInfo | undefined
```

弹出路由栈栈顶元素，并触发onPop回调传入页面处理结果。 > **说明：** > > 连续调用多个导航控制器方法时，中间被pop的页面会被缓存，后续push同名页面时会优先复用该页面，不会走新的页面创建流程。 > 例如： > pathStack: NavPathStack = new NavPathStack() > // 初始页面栈为：[A] > pathStack.pop() > pathStack.pushPath(A) > pathStack.pushPath(B) > // 操作后页面栈为：[A B] > 此时A页面会被复用，不会走新的创建流程。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| result | Object | Yes | 页面自定义处理结果。不支持boolean类型。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| NavPathInfo | NavPathInfo: information about the navigation destination page at the top  of the stack.  undefined: the routing stack is empty. |

## popToIndex

```TypeScript
popToIndex(index: number, animated?: boolean): void
```

回退路由栈到index指定的NavDestination页面。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | NavDestination页面的位置索引。索引值从0开始。 |
| animated | boolean | No |  |

## popToIndex

```TypeScript
popToIndex(index: number, result: Object, animated?: boolean): void
```

回退路由栈到index指定的NavDestination页面，并触发onPop回调传入页面处理结果。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| index | number | Yes | NavDestination页面的位置索引。索引值从0开始。 |
| result | Object | Yes | 页面自定义处理结果。不支持boolean类型。 |
| animated | boolean | No |  |

## popToName

```TypeScript
popToName(name: string, animated?: boolean): number
```

回退路由栈到由栈底开始第一个名为name的NavDestination页面。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。 |

## popToName

```TypeScript
popToName(name: string, result: Object, animated?: boolean): number
```

回退路由栈到由栈底开始第一个名为name的NavDestination页面，并触发onPop回调传入页面处理结果。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| result | Object | Yes | 页面自定义处理结果。不支持boolean类型。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| number | 如果栈中存在名为name的NavDestination页面，则返回由栈底开始第一个名为name的NavDestination页面的索引，否则返回-1。 |

## pushDestination

```TypeScript
pushDestination(info: NavPathInfo, animated?: boolean): Promise<void>
```

将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果。 > **说明：** > > 不建议在[aboutToAppear]BaseCustomComponent#aboutToAppear中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | NavDestination页面的信息。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异步返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |

## pushDestination

```TypeScript
pushDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

将info指定的NavDestination页面信息入栈，使用Promise异步回调返回接口调用结果，具体根据options中指定不同的[LaunchMode](arkts-launchmode-e.md#LaunchMode)，来实现不同的行为。 > **说明：** > > 不建议在[aboutToAppear]BaseCustomComponent#aboutToAppear中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | NavDestination页面的信息。 |
| options | NavigationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |

## pushDestinationByName

```TypeScript
pushDestinationByName(name: string, param: Object, animated?: boolean): Promise<void>
```

将name指定的NavDestination页面信息入栈，传递的数据为param，使用Promise异步回调返回接口调用结果。 > **说明：** > > 不建议在[aboutToAppear]BaseCustomComponent#aboutToAppear中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| param | Object | Yes | 开发者设置的NavDestination页面详细参数。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |

## pushDestinationByName

```TypeScript
pushDestinationByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): Promise<void>
```

将name指定的NavDestination页面信息入栈，传递的数据为param，并且添加用于页面出栈时处理返回结果的onPop回调，使用Promise异步回调返回接口调用结果。 > **说明：** > > 不建议在[aboutToAppear]BaseCustomComponent#aboutToAppear中使用栈操作，此时的页面还未构建完成，会导致白屏或跳转失败等问题。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| param | Object | Yes | 开发者设置的NavDestination页面详细参数。 |
| onPop | import('../api/@ohos.base').Callback&lt;PopInfo> | Yes | Callback回调，用于页面出栈时处理返回结果。仅  [pop]NavPathStack#pop(result: Object, animated?: boolean)、  [popToName](arkts-navpathstack-c.md#popToName)、  [popToIndex](arkts-navpathstack-c.md#popToIndex)中设置result参数后触发。 |
| animated | boolean | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |

## pushPath

```TypeScript
pushPath(info: NavPathInfo, animated?: boolean): void
```

将info指定的NavDestination页面信息入栈。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | NavDestination页面的信息。 |
| animated | boolean | No |  |

## pushPath

```TypeScript
pushPath(info: NavPathInfo, options?: NavigationOptions): void
```

将info指定的NavDestination页面信息入栈，具体根据options中指定不同的[LaunchMode](arkts-launchmode-e.md#LaunchMode)，来实现不同的行为。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | NavDestination页面的信息。 |
| options | NavigationOptions | No |  |

## pushPathByName

```TypeScript
pushPathByName(name: string, param: unknown, animated?: boolean): void
```

将name指定的NavDestination页面信息入栈，传递的数据为param。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| param | unknown | Yes | 开发者设置的NavDestination页面详细参数，unknown可以是用户自定义的类型。 |
| animated | boolean | No |  |

## pushPathByName

```TypeScript
pushPathByName(name: string, param: Object, onPop: import('../api/@ohos.base').Callback<PopInfo>, animated?: boolean): void
```

将name指定的NavDestination页面信息入栈，传递的数据为param，添加onPop回调接收入栈页面出栈时的返回结果，并进行处理。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| param | Object | Yes | 开发者设置的NavDestination页面详细参数。 |
| onPop | import('../api/@ohos.base').Callback&lt;PopInfo> | Yes | Callback回调，用于页面出栈时触发该回调处理返回结果。仅  [pop]NavPathStack#pop(result: Object, animated?: boolean)、  [popToName](arkts-navpathstack-c.md#popToName)、  [popToIndex](arkts-navpathstack-c.md#popToIndex)中设置result参数后触发。 |
| animated | boolean | No |  |

## removeByIndexes

```TypeScript
removeByIndexes(indexes: Array<number>): number
```

将路由栈内索引值在indexes中的NavDestination页面删除。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| indexes | Array&lt;number> | Yes | 待删除NavDestination页面的索引值数组。索引值从0开始。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回删除的NavDestination页面数量。 |

## removeByName

```TypeScript
removeByName(name: string): number
```

将路由栈内指定name的NavDestination页面删除。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | 删除的NavDestination页面的名字。 |

**Return value:**

| Type | Description |
| --- | --- |
| number | 返回删除的NavDestination页面数量。 |

## removeByNavDestinationId

```TypeScript
removeByNavDestinationId(navDestinationId: string): boolean
```

将路由栈内指定navDestinationId的NavDestination页面删除。navDestinationId可以在NavDestination的 [onReady]NavDestinationAttribute#onReady回调中获取，也可以在 [NavDestinationInfo](arkts-uiobserver-navdestinationinfo-i.md#NavDestinationInfo)中获取。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| navDestinationId | string | Yes | 删除的NavDestination页面的唯一标识符navDestinationId。 |

**Return value:**

| Type | Description |
| --- | --- |
| boolean | 返回是否成功删除该页面， true：删除成功。 false：删除失败。 |

## replaceDestination

```TypeScript
replaceDestination(info: NavPathInfo, options?: NavigationOptions): Promise<void>
```

替换路由栈操作。使用Promise异步回调返回接口调用结果，具体根据options中指定不同的[LaunchMode](arkts-launchmode-e.md#LaunchMode)，来实现不同的行为。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | NavDestination页面的信息。 |
| options | NavigationOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 异常返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes:  1. Mandatory parameters are left unspecified.  2. Incorrect parameters types.  3. Parameter verification failed. |
| 100001 | Internal error. |
| 100005 | Builder function not registered. |
| 100006 | NavDestination not found. |

## replacePath

```TypeScript
replacePath(info: NavPathInfo, animated?: boolean): void
```

将当前路由栈栈顶退出，将info指定的NavDestination页面信息入栈。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | 新栈顶页面参数信息。 |
| animated | boolean | No |  |

## replacePath

```TypeScript
replacePath(info: NavPathInfo, options?: NavigationOptions): void
```

替换路由栈操作，具体根据options中指定不同的[LaunchMode](arkts-launchmode-e.md#LaunchMode)，来实现不同的行为。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| info | NavPathInfo | Yes | 新栈顶页面参数信息。 |
| options | NavigationOptions | No |  |

## replacePathByName

```TypeScript
replacePathByName(name: string, param: Object, animated?: boolean): void
```

将当前路由栈栈顶退出，将name指定的页面入栈。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 12 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| name | string | Yes | NavDestination页面名称。 |
| param | Object | Yes | 开发者设置的NavDestination页面详细参数。 |
| animated | boolean | No |  |

## setInterception

```TypeScript
setInterception(interception: NavigationInterception): void
```

设置Navigation页面跳转拦截回调。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| interception | NavigationInterception | Yes | 设置Navigation跳转拦截对象。 |

## setPathStack

```TypeScript
setPathStack(pathStack: Array<NavPathInfo>, animated?: boolean): void
```

将当前路由栈中的路由页面信息数组更新为指定内容，并实现路由转场。 > **说明：** > > 1. 开发者可以在原有栈的基础上批量添加或删除页面。批量入栈的页面中，只有可见的页面会触发创建，其他页面虽已入栈但不会立即创建，当这些页面变为可见时，才会触发创建。 > > 2. 通过批量入栈功能更新的路由栈，各页面的生命周期事件触发顺序为从栈顶到底部依次触发，这与其它入栈接口从栈底到顶部的触发顺序不同。 > > 3. 开发者可以通过[NavPathInfo](arkts-navpathinfo-c.md#NavPathInfo)中的页面唯一标识符navDestinationId来操作已有页面，该id由系统默认生成且全局唯一（可以通过 > [getPathStack](arkts-navpathstack-c.md#getPathStack)接口获取，不可主动赋新值）。若该id在当前路由栈中不存在，则表示新增页面，若在当前路由栈中存在，同时对应的name相同，则表示复用已 > 有页面。

**Since:** 19

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pathStack | Array&lt;NavPathInfo> | Yes | 设置当前路由栈中的路由页面信息数组。 说明： 数组长度无限制。 |
| animated | boolean | No |  |

## size

```TypeScript
size(): number
```

获取栈大小。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Return value:**

| Type | Description |
| --- | --- |
| number | Stack size.  Value range: [0, +∞) |

