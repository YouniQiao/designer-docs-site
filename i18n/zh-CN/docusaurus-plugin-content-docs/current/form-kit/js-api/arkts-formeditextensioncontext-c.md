# FormEditExtensionContext

FormEditExtensionContext**, inherited from [UIExtensionContext]./application/UIExtensionContext:UIExtensionContext, is the context of [FormEditExtensionAbility](arkts-formeditextensionability-c.md#FormEditExtensionAbility). > **NOTE** > - The APIs of this module can be used only in the stage model.

**继承实现关系：** FormEditExtensionContext继承自：UIExtensionContext。

**起始版本：** 18

**系统能力：** SystemCapability.Ability.Form

## startSecondPage

```TypeScript
startSecondPage(want: Want): Promise<AbilityResult>
```

Starts the widget provider page to be edited. This API uses a promise to return the result.

**起始版本：** 18

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Information about the editing page that needs to be started by the home screen of a third-party  application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;AbilityResult> | Promise used to return the ability result. |

**错误码：**

| 错误码ID | 错误信息 |
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

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.Form

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | Want | 是 | Want information of the UIAbility of the application. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 16500050 | An IPC connection error happened. |
| 16500100 | Failed to obtain the configuration information. |
| 16000130 | The target UIAbility does not belong to the caller. |
| 16501014 | The form edit page is not in the foreground. The current operation is  not supported. |
| 16000121 | The target component type is not a UIAbility. |

