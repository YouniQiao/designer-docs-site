# FormEditExtensionContext

FormEditExtensionContext**, inherited from [UIExtensionContext]./application/UIExtensionContext:UIExtensionContext, is the context of [FormEditExtensionAbility](arkts-formeditextensionability-c.md#FormEditExtensionAbility). > **NOTE** > - The APIs of this module can be used only in the stage model.

**Inheritance:** FormEditExtensionContextextends: UIExtensionContext.

**Since:** 18

**System capability:** SystemCapability.Ability.Form

## startSecondPage

```TypeScript
startSecondPage(want: Want): Promise<AbilityResult>
```

Starts the widget provider page to be edited. This API uses a promise to return the result.

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Information about the editing page that needs to be started by the home screen of a third-party  application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;AbilityResult> | Promise used to return the ability result. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 202 | The application is not a system application. |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |

## startUIAbility

```TypeScript
startUIAbility(want: Want): Promise<void>
```

Starts UIAbility of the application to which a widget belongs. This API uses a promise to return the result.

**Since:** 23

**Model restriction:** This API can be used only in the Stage model.

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| want | Want | Yes | Want information of the UIAbility of the application. |

**Return value:**

| Type | Description |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**Error codes:**

| Error Code ID | Error Message |
| --- | --- |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16000130 | The target UIAbility does not belong to the caller. |
| 16501014 | The form edit page is not in the foreground. The current operation is  not supported. |
| 16000121 | The target component type is not a UIAbility. |

