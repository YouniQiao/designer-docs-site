# WindowExtensionContext

WindowExtensionContext模块是WindowExtensionAbility的上下文环境，继承自[ExtensionContext](../../apis-ability-kit/arkts-apis/arkts-extensioncontext-c.md#ExtensionContext)。 WindowExtensionContext模块提供[WindowExtensionAbility]./../@ohos.application.WindowExtensionAbility具有的能力，包括启动 Ability。 > **说明：** > > - 从API version 21开始废弃，推荐使用[UIExtensionContext](../../apis-ability-kit/arkts-apis/arkts-uiextensioncontext-c.md#UIExtensionContext)。 > > - 本模块接口为系统接口。 > > - 本模块接口仅可在Stage模型下使用。

**Inheritance:** WindowExtensionContextextends: ExtensionContext.

**Since:** 9

**Deprecated since:** 21

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

## startAbility

```TypeScript
startAbility(want: Want, options: StartOptions, callback: AsyncCallback<void>): void
```

启动Ability，使用callback异步回调。 > **说明：** > > - 从API version 9开始支持，从API version 21开始废弃，推荐使用 > [UIExtensionContext.startability](../../apis-ability-kit/arkts-apis/arkts-uiextensioncontext-c.md#startAbility) > 。

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | 启动Ability的want信息。 |
| options | StartOptions | Yes | 启动Ability所携带的参数。 |
| callback | AsyncCallback&lt;void> | Yes | callback形式返回启动结果。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

## startAbility

```TypeScript
startAbility(want: Want, options?: StartOptions): Promise<void>
```

启动Ability，使用Promise异步回调。 > **说明：** > > - 从API version 9开始支持，从API version 21开始废弃，推荐使用 > [UIExtensionContext.startability](../../apis-ability-kit/arkts-apis/arkts-uiextensioncontext-c.md#startAbility) > 。

**Since:** 9

**Deprecated since:** 21

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.WindowManager.WindowManager.Core

**System API:** This is a system API.

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。 |
| options | StartOptions | No |  |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | 无返回结果的Promise对象。 |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | Permission verification failed. A non-system application calls a system  API. [since 12] |
| 401 | Parameter error. Possible cause: 1.Mandatory parameters are left unspecified;  2.Incorrect parameter types. |

