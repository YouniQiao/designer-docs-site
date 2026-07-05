# WorkSchedulerExtensionContext

WorkSchedulerExtensionContext是WorkSchedulerExtensionAbility的上下文环境，继承自 [ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-extensioncontext-c.md#ExtensionContext)。 WorkSchedulerExtensionContext可直接作为WorkSchedulerExtension的上下文环境，提供允许访问特定于WorkSchedulerExtensionAbility的资源的能力。

**Inheritance:** WorkSchedulerExtensionContextextends: ExtensionContext.

**Since:** 10

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

## startServiceExtensionAbility

```TypeScript
startServiceExtensionAbility(want: Want): Promise<void>
```

启动ServiceExtensionAbility，使用Promise异步回调。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Can not start invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

## stopServiceExtensionAbility

```TypeScript
stopServiceExtensionAbility(want: Want): Promise<void>
```

停止ServiceExtensionAbility，使用Promise异步回调。

**Since:** 13

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.ResourceSchedule.WorkScheduler

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 停止Ability的want信息。 |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 201 | The application does not have permission to call the interface. |
| 202 | The application is not system-app, can not use system-api. |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;  2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Can not start invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000011 | The context does not exist. |
| 16000050 | Internal error. |
| 16200001 | The caller has been released. |

