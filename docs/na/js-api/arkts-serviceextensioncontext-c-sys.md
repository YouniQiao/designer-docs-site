# ServiceExtensionContext

ServiceExtensionContext模块是ServiceExtensionAbility的上下文环境，继承自ExtensionContext。 ServiceExtensionContext模块提供ServiceExtensionAbility具有的能力，包括启动、停止、绑定、解绑Ability。 > **说明：** > > - 本模块接口需要在主线程中使用，不要在Worker、TaskPool等子线程中使用。

**Inheritance:** ServiceExtensionContextextends: ExtensionContext.

**Since:** 9

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

## connectServiceExtensionAbility

```TypeScript
connectServiceExtensionAbility(want: Want, options: ConnectOptions): long
```

将当前Ability连接到一个ServiceExtensionAbility。仅支持在主线程调用。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。 |
| options | ConnectOptions | Yes | ConnectOptions类型的回调函数，返回服务连接成功、断开或连接失败后的信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 返回一个number，后续根据这个number去断开连接。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000005 | The specified process does not have the permission. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000002 | Incorrect ability type. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000006 | Cross-user operations are not allowed. [since 10] |
| 16000008 | The crowdtesting application expires. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000053 | The ability is not on the top of the UI. [since 10] |
| 16000055 | Installation-free timed out. [since 10] |

## connectServiceExtensionAbilityWithAccount

```TypeScript
connectServiceExtensionAbilityWithAccount(want: Want, accountId: int, options: ConnectOptions): long
```

将当前Ability连接到一个指定account的ServiceExtensionAbility。仅支持在主线程调用。 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回16000006错误码。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 当accountId为当前用户时，无需进行权限校验。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |
| options | ConnectOptions | Yes | 远端对象实例。 |

**Return value:**

| Type | Description |
| --- | --- |
| long | 返回Ability连接的结果code。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000005 | The specified process does not have the permission. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000002 | Incorrect ability type. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000006 | Cross-user operations are not allowed. [since 10] |
| 16000008 | The crowdtesting application expires. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000053 | The ability is not on the top of the UI. [since 10] |
| 16000055 | Installation-free timed out. [since 10] |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long, callback: AsyncCallback<void>): void
```

将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空。仅支持在主线程调用。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | long | Yes | 在connectServiceExtensionAbility中返回的number。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当Ability与绑定服务类型的Ability解绑成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## disconnectServiceExtensionAbility

```TypeScript
disconnectServiceExtensionAbility(connection: long): Promise<void>
```

将一个Ability与绑定的服务类型的Ability解绑，断开连接之后需要将连接成功时返回的remote对象置空。仅支持在主线程调用。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| connection | long | Yes | 在connectServiceExtensionAbility中返回的number。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## openAtomicService

```TypeScript
openAtomicService(appId: string, options?: AtomicServiceOptions): Promise<void>
```

通过应用ID，拉起原子化服务。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| appId | string | Yes | 应用的唯一标识，由云端统一分配。 |
| options | AtomicServiceOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.  2.Incorrect parameter types. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

## openLink

```TypeScript
openLink(link: string, options?: OpenLinkOptions): Promise<void>
```

通过AppLinking启动UIAbility。仅支持在主线程调用。使用Promise异步回调。 通过在link字段中传入标准格式的URL，基于隐式Want匹配规则拉起目标UIAbility。目标方必须具备以下过滤器特征，才能处理AppLinking链接： - "actions"列表中包含"ohos.want.action.viewData"。 - "entities"列表中包含"entity.system.browsable"。 - "uris"列表中包含"scheme"为"https"且"domainVerify"为true的元素。 传入的参数不合法时，如未设置必选参数或link字符串不是标准格式的URL，接口会直接抛出异常。参数校验通过，拉起目标方时出现的错误通过promise返回错误信息。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| link | string | Yes | 指示要打开的标准格式URL。 |
| options | OpenLinkOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Failed to start the invisible ability. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16200001 | The caller has been released. |
| 16000136 | The UIAbility is prohibited from launching itself via App Linking. [since 23] |

## preStartMission

```TypeScript
preStartMission(bundleName: string, moduleName: string, abilityName: string, startTime: string): Promise<void>
```

打开原子化服务跳过loading框并预打开窗口，使用Promise异步回调。 参数校验通过，拉起目标方时出现的错误需要通过异常机制捕获。

**Since:** 12

**Required permissions:** 

 ohos.permission.PRE_START_ATOMIC_SERVICE

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| bundleName | string | Yes | 打开原子化服务对应的包名。 |
| moduleName | string | Yes | 打开原子化服务对应的模块名。 |
| abilityName | string | Yes | 打开原子化服务对应的能力名。 |
| startTime | string | Yes | 打开原子化服务对应的开始时间，单位为毫秒级的时间戳。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16300007 | The target free-installation task does not exist. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## requestModalUIExtension

```TypeScript
requestModalUIExtension(pickerWant: Want, callback: AsyncCallback<void>): void
```

请求在指定的获焦应用上拉起对应类型的UIExtensionAbility。其中，获焦应用通过want.parameters中bundleName来指定，如果未指定获焦应用或指定的应用未获焦，则在系统界面上直接拉起 UIExtensionAbility；被拉起的UIExtensionAbility通过Want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的 ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。仅支持在主线程调用。使用callback形式异步回调。 在获焦应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败。应用可通过监听页面加载状态来判断拉起UIExtensionAbility的时机。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | Want | Yes | 拉起UIExtension的Want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当拉起UIExtension成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. [since 11 - 11] |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. [since 11 - 11] |
| 16000002 | Incorrect ability type. [since 11 - 11] |
| 16000004 | Cannot start an invisible component. [since 11 - 11] |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. [since 11 - 11] |

## requestModalUIExtension

```TypeScript
requestModalUIExtension(pickerWant: Want): Promise<void>
```

请求在指定的获焦应用上拉起对应类型的UIExtensionAbility。其中，获焦应用通过want.parameters中bundleName来指定，如果未指定获焦应用或指定的应用未获焦，则在系统界面上直接拉起 UIExtensionAbility；被拉起的UIExtensionAbility通过Want中bundleName、abilityName、moduleName字段共同确定，同时需要通过want.parameters中的 ability.want.params.uiExtensionType字段配置UIExtensionAbility的类型。仅支持在主线程调用。使用promise形式异步回调。 在获焦应用上拉起UIExtensionAbility之前，必须确保该应用已完成页面初始化，否则将导致拉起失败。应用可通过监听页面加载状态来判断拉起UIExtensionAbility的时机。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 11

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | Want | Yes | 拉起UIExtension的Want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. [since 11 - 11] |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. [since 11 - 11] |
| 16000002 | Incorrect ability type. [since 11 - 11] |
| 16000004 | Cannot start an invisible component. [since 11 - 11] |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. [since 11 - 11] |

## requestModalUIExtensionWithAccount

```TypeScript
requestModalUIExtensionWithAccount(pickerWant: Want, accountId: int): Promise<void>
```

请求指定的焦点应用程序启动对应类型的UIExtensionAbility 指定用户。焦点应用由**want.parameters**中的**bundleName**指定。如果**bundleName** > **说明** > > > 关于stage模型中组件的启动规则，请参见 > 【组件启动规则（阶段模型）】(docroot://application-models/component-startup-rules.md)。

**Since:** 26.0.0

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| pickerWant | Want | Yes | 需要用于启动UIExtensionAbility的信息 |
| accountId | int | Yes | 要请求的帐户  取值范围为全体整数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 不会返回任何值的Promise。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 16000050 | Internal error. Possible causes: 1.Connect to system service failed;  2.Send restart message to system service failed; 3.System service failed to communicate with dependency module.  4.The logical screen corresponding to the specified accountId is not in the foreground. |

## startAbility

```TypeScript
startAbility(want: Want, callback: AsyncCallback<void>): void
```

启动Ability。仅支持在主线程调用。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbility

```TypeScript
startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

启动Ability。仅支持在主线程调用。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| options | StartOptions | Yes | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is  forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

启动Ability。仅支持在主线程调用。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的Ability的信息，如Ability名称，Bundle名称等。 |
| options | StartOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, callback: AsyncCallback<void>): void
```

使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的 caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的 caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| options | StartOptions | Yes | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityAsCaller

```TypeScript
startAbilityAsCaller(want: Want, options?: StartOptions): Promise<void>
```

使用设置的caller信息启动一个Ability，caller信息由Want携带，在系统服务层识别，Ability可以在onCreate生命周期的Want参数中获取到caller信息。使用该接口启动一个Ability时，Want的 caller信息不会被当前自身的应用信息覆盖，系统服务层可获取到初始caller的信息。仅支持在主线程调用。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 10

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| options | StartOptions | No | 启动Ability所携带的参数。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityByCall

```TypeScript
startAbilityByCall(want: Want): Promise<Caller>
```

启动指定Ability至前台或后台，同时获取其Caller通信接口，调用方可使用Caller与被启动的Ability进行通信。仅支持在主线程调用。使用Promise异步回调。 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。 使用规则： - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。 - 跨应用场景下，目标Ability的exported属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限。 - 同设备与跨设备场景下，该接口的使用规则存在差异，详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Required permissions:** 

 ohos.permission.ABILITY_BACKGROUND_COMMUNICATION

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 传入需要启动的Ability的信息，包含abilityName、moduleName、bundleName、deviceId、parameters(可选)，parameters缺省或为  空表示后台启动Ability。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Caller> | Promise对象，返回要通讯的caller对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. [since 9 - 9] |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. [since 9 - 9] |

## startAbilityByCallWithAccount

```TypeScript
startAbilityByCallWithAccount(want: Want, accountId: int): Promise<Caller>
```

根据accountId对指定的Ability进行call调用，并且可以使用返回的Caller通信接口与被调用方进行通信。仅支持在主线程调用。使用Promise异步回调。 该接口不支持拉起启动模式为[specified模式](docroot://application-models/uiability-launch-type.md#specified启动模式)的UIAbility。 使用规则： - 跨用户场景下，Call调用目标Ability时，调用方应用需同时申请`ohos.permission.ABILITY_BACKGROUND_COMMUNICATION`与` ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS`权限。 - 调用方应用位于后台时，使用该接口启动Ability需申请`ohos.permission.START_ABILITIES_FROM_BACKGROUND`权限。 - 跨应用场景下，目标Ability的exported属性若配置为false，调用方应用需申请`ohos.permission.START_INVISIBLE_ABILITY`权限。 - 同设备与跨设备场景下，该接口的使用规则存在差异，详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 10

**Required permissions:** 

 ohos.permission.ABILITY_BACKGROUND_COMMUNICATION and ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 传入需要启动的Ability的信息，包含abilityName、moduleName、bundleName、deviceId(可选)、parameters(可选)，其中deviceId  缺省或为空表示启动本地Ability，parameters缺省或为空表示后台启动Ability。 |
| accountId | int | Yes | 系统账号的账号ID，-1表示当前活动用户。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;Caller> | Promise对象，返回要通讯的caller对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void
```

根据accountId启动Ability。仅支持在主线程调用。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当根据accountId启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: int, options: StartOptions, callback: AsyncCallback<void>): void
```

根据accountId启动Ability。仅支持在主线程调用。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |
| options | StartOptions | Yes | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当根据accountId启动Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. [since 9 - 9] |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is  forbidden. [since 9 - 9] |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startAbilityWithAccount

```TypeScript
startAbilityWithAccount(want: Want, accountId: int, options?: StartOptions): Promise<void>
```

根据accountId启动Ability。仅支持在主线程调用。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |
| options | StartOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 16000019 | No matching ability is found. [since 12] |
| 16000073 | The app clone index is invalid. [since 12] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, callback: AsyncCallback<void>): void
```

启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。仅支持在主线程调用。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 需要启动Ability的Want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动一个指定的Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 202 | The application is not system-app, can not use system-api. [since 14] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000073 | The app clone index is invalid. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。仅支持在主线程调用。使用callback异步回调。 当开发者需要携带启动参数时可以选择此API。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 需要启动Ability的Want信息。 |
| options | StartOptions | Yes | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动一个指定的Ability成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. [since 9 - 9] |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is  forbidden. [since 9 - 9] |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 202 | The application is not system-app, can not use system-api. [since 14] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000073 | The app clone index is invalid. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startRecentAbility

```TypeScript
startRecentAbility(want: Want, options?: StartOptions): Promise<void>
```

启动一个指定的Ability，如果该Ability有多个实例，将拉起最近启动的那个实例。使用Promise异步回调。仅支持在主线程调用。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 需要启动Ability的Want信息。 |
| options | StartOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | The promise returned by the function. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 202 | The application is not system-app, can not use system-api. [since 14] |
| 16000071 | App clone is not supported. [since 14] |
| 16000072 | App clone or multi-instance is not supported. [since 14] |
| 16000073 | The app clone index is invalid. [since 14] |
| 16000076 | The app instance key is invalid. [since 14] |
| 16000077 | The number of app instances reaches the limit. [since 14] |
| 16000078 | The multi-instance is not supported. [since 14] |
| 16000079 | The APP_INSTANCE_KEY cannot be specified. [since 14] |
| 16000080 | Creating a new instance is not supported. [since 14] |

## startServiceExtensionAbility

```TypeScript
startServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void
```

启动一个新的ServiceExtensionAbility。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动一个新的ServiceExtensionAbility成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |

## startServiceExtensionAbility

```TypeScript
startServiceExtensionAbility(want: Want): Promise<void>
```

启动一个新的ServiceExtensionAbility。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |

## startServiceExtensionAbilityWithAccount

```TypeScript
startServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void
```

启动一个新的ServiceExtensionAbility。使用callback异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 当accountId为当前用户时，无需进行权限校验。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当启动一个新的ServiceExtensionAbility成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |

## startServiceExtensionAbilityWithAccount

```TypeScript
startServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>
```

启动一个新的ServiceExtensionAbility。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。 > > 当accountId为当前用户时，无需进行权限校验。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的Want信息。 |
| accountId | int | Yes | 系统账号的账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |
| 16000012 | The application is controlled. [since 10] |
| 16000013 | The application is controlled by EDM. [since 10] |
| 16000019 | No matching ability is found. [since 12] |

## startUIAbilities

```TypeScript
startUIAbilities(wantList: Array<Want>): Promise<void>
```

同时启动多个UIAbility。使用Promise异步回调。 开发者可以传入多个UIAbility对应的Want信息，这些UIAbility可以指向一个或多个应用。当所有的UIAbility都能启动成功时，系统会通过多个窗口同时展示这些UIAbility。根据窗口的处理，不同设备上可能会有不 同的展示效果（包括窗口形态、数量和排版布局）。 该接口在Phone、Tablet中可正常调用，在其他设备类型中返回801错误码。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 20

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| wantList | Array&lt;Want> | Yes | 需要被同时拉起的多个UIAbility的启动参数列表，最多支持传入4个Want。启动参数Want不支持隐式启动、跨用户启动、分布式、免安装和按需加载，不指明分身的  情况下默认启动主应用。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象，无返回结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | Not system application. |
| 801 | Capability not supported. |
| 16000001 | The specified ability does not exist. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000073 | The app clone index is invalid. |
| 16000076 | The app instance key is invalid. |
| 16000080 | Creating a new instance is not supported. |
| 16000120 | A maximum of four UIAbility instances can be started simultaneously.  The current parameter exceeds the maximum number or is less than 1. |
| 16000121 | The target component type is not a UIAbility. |
| 16000122 | The target component is blocked by the system module and  does not support startup. |
| 16000123 | Implicit startup is not supported. |
| 16000124 | Starting a remote UIAbility is not supported. |
| 16000125 | Starting a plugin UIAbility is not supported. |
| 16000126 | Starting DLP files is not supported. |

## startUIServiceExtensionAbility

```TypeScript
startUIServiceExtensionAbility(want: Want): Promise<void>
```

启动一个新的[UIServiceExtensionAbility]./../@ohos.app.ability.UIServiceExtensionAbility:UIServiceExtensionAbility 。使用Promise异步回调。 > **说明：** > > 组件启动规则详见：[组件启动规则（Stage模型）](docroot://application-models/component-startup-rules.md)。

**Since:** 14

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Indicates the want info to start. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 801 | Capability not supported. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

## stopServiceExtensionAbility

```TypeScript
stopServiceExtensionAbility(want: Want, callback: AsyncCallback<void>): void
```

停止指定的ServiceExtensionAbility后台服务。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 停止Ability的Want信息。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止同一应用程序内的服务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |

## stopServiceExtensionAbility

```TypeScript
stopServiceExtensionAbility(want: Want): Promise<void>
```

停止指定的ServiceExtensionAbility后台服务。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 停止Ability的Want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 201 | The application does not have permission to call the interface. [since 10] |
| 16000004 | Cannot start an invisible component. [since 10] |

## stopServiceExtensionAbilityWithAccount

```TypeScript
stopServiceExtensionAbilityWithAccount(want: Want, accountId: int, callback: AsyncCallback<void>): void
```

停止指定账号下指定的ServiceExtensionAbility后台服务。使用callback异步回调。 > **说明：** > > 当accountId为当前用户时，无需进行权限校验。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 停止Ability的Want信息。 |
| accountId | int | Yes | 需要停止的系统账号的账号ID。 |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当使用账户停止同一应用程序内的服务成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |

## stopServiceExtensionAbilityWithAccount

```TypeScript
stopServiceExtensionAbilityWithAccount(want: Want, accountId: int): Promise<void>
```

停止指定账号下指定的ServiceExtensionAbility后台服务。使用Promise异步回调。 > **说明：** > > 当accountId为当前用户时，无需进行权限校验。

**Since:** 9

**Required permissions:** 

 ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 停止Ability的Want信息。 |
| accountId | int | Yes | 需要停止的系统账号的账号ID。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |
| 16000004 | Cannot start an invisible component. [since 10] |

## terminateSelf

```TypeScript
terminateSelf(callback: AsyncCallback<void>): void
```

停止Ability自身。仅支持在主线程调用。使用callback异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| callback | AsyncCallback&lt;void> | Yes | 回调函数。当停止Ability自身成功，err为undefined，否则为错误对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. [since 9 - 9] |
| 16000004 | Cannot start an invisible component. [since 9 - 9] |
| 16000005 | The specified process does not have the permission. [since 9 - 9] |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

## terminateSelf

```TypeScript
terminateSelf(): Promise<void>
```

停止Ability自身。仅支持在主线程调用。使用Promise异步回调。

**Since:** 9

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**System API:** This is a system API.

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise对象。无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16000001 | The specified ability does not exist. [since 9 - 9] |
| 16000004 | Cannot start an invisible component. [since 9 - 9] |
| 16000005 | The specified process does not have the permission. [since 9 - 9] |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |

