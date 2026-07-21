# FormEditExtensionContext

**FormEditExtensionContext**, inherited from [UIExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-uiextensioncontext-c.md), is the context of [FormEditExtensionAbility](arkts-form-app-form-formeditextensionability-formeditextensionability-c.md).

> **NOTE**

> - The APIs of this module can be used only in the stage model.

**Inheritance/Implementation:** FormEditExtensionContext extends [UIExtensionContext](../../apis-ability-kit/arkts-apis/arkts-ability-uiextensioncontext-c.md)

**Since:** 18

<!--Device-unnamed-declare class FormEditExtensionContext extends UIExtensionContext--><!--Device-unnamed-declare class FormEditExtensionContext extends UIExtensionContext-End-->

**System capability:** SystemCapability.Ability.Form

<a id="startsecondpage"></a>
## startSecondPage

```TypeScript
startSecondPage(want: Want): Promise<AbilityResult>
```

Starts the widget provider page to be edited. This API uses a promise to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the stage model.

<!--Device-FormEditExtensionContext-startSecondPage(want: Want): Promise<AbilityResult>--><!--Device-FormEditExtensionContext-startSecondPage(want: Want): Promise<AbilityResult>-End-->

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Information about the editing page that needs to be started by the home screen of a third-party application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult&gt; | Promise used to return the ability result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [202](../../errorcode-universal.md#202-permission-verification-failed-for-calling-a-system-api) | The application is not a system application. |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | An IPC connection error happened. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| [16501000](../errorcode-form.md#16501000-internal-function-error) | An internal functional error occurred. |

<a id="startuiability"></a>
## startUIAbility

```TypeScript
startUIAbility(want: Want): Promise<void>
```

Starts UIAbility of the application to which a widget belongs. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the stage model.

<!--Device-FormEditExtensionContext-startUIAbility(want: Want): Promise<void>--><!--Device-FormEditExtensionContext-startUIAbility(want: Want): Promise<void>-End-->

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Want information of the UIAbility of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void&gt; | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| [16500050](../errorcode-form.md#16500050-ipc-failure) | An IPC connection error happened. |
| [16500100](../errorcode-form.md#16500100-failed-to-obtain-widget-configuration-information) | Failed to obtain the configuration information. |
| [16000130](../../apis-ability-kit/errorcode-ability.md#16000130-uiability-does-not-belong-to-the-caller) | The target UIAbility does not belong to the caller. |
| [16501014](../errorcode-form.md#16501014-semimodal-widget-editing-page-not-in-foreground) | The form edit page is not in the foreground. The current operation is not supported. |
| [16000121](../../apis-ability-kit/errorcode-ability.md#16000121-target-component-is-not-a-uiability) | The target component type is not a UIAbility. |

