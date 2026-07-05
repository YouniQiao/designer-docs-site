# deactivateSceneAnimation

## deactivateSceneAnimation

```TypeScript
function deactivateSceneAnimation(formId: string): Promise<void>
```

Requests to deactivate a widget. This API takes effect only for [scene-based widgets](docroot://form/arkts-ui-widget-configuration.md#sceneanimationparams-field). This API uses a promise to return the result. An interactive widget can be in the active or inactive state. In the inactive state, the widget is the same as a common widget. In the active state, the widget can start the **LiveFormExtensionAbility** process developed by the widget host to implement animations.

**起始版本：** 20

**系统能力：** SystemCapability.Ability.Form

**系统接口：** 此接口为系统接口。

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| formId | string | 是 | Widget ID. |

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | Promise that returns no value. |

**错误码：**

| 错误码ID | 错误信息 |
| --- | --- |
| 202 | The application is not a system application. |
| 801 | Capability not supported.function deactivateSceneAnimation can  not work correctly due to limited device capabilities. |
| 16500050 | IPC connection error. |
| 16500060 | Service connection error. |
| 16500100 | Failed to obtain the configuration information. |
| 16501000 | An internal functional error occurred. |
| 16501001 | The ID of the form to be operated does not exist. |
| 16501003 | The form cannot be operated by the current application. |
| 16501011 | The form cannot support this operation. |

