# CompletionHandler

CompletionHandler provides two callback functions, [onRequestSuccess](arkts-ability-completionhandler-c.md#onrequestsuccess-1) and [onRequestFailure](arkts-ability-completionhandler-c.md#onrequestfailure-1), to handle the results of successful and failed application launch requests, respectively.

**Since:** 20

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

## Modules to Import

```TypeScript
import { CompletionHandler } from '@ohos.app.ability.CompletionHandler';
```

## onRequestFailure

```TypeScript
onRequestFailure(elementName: ElementName, message: string): void
```

Called when the application fails to be launched.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | **ElementName** information used to identify the target application.- Typically, **ElementName** includes only **abilityName** and **bundleName**. The presence of **moduleName** and**deviceId** depends on whether the caller provides them. **shortName** and **uri** are empty.- **ElementName** information cannot be obtained if the implicit startup fails. |
| message | string | Yes | Message displayed when the application fails to be launched. This message is in JSON format,as follows:{?"errMsg": "xxx"}The value of *xxx* is described as follows:Failed to call &lt;api-name&gt;: An error occurs when calling the API. &lt;api-name&gt; is the specific API name, for example,**startAbility**.User refused redirection: The user has closed the application redirection dialog box.User closed the implicit startup picker: The user has closed the dialog box for selecting an application forimplicit startup.User closed the app clone picker: The user has closed the dialog box for selecting a cloned application.Free installation failed: The free installation fails. |

**Example**

See [Usage of CompletionHandler](#usage-of-completionhandler).

## onRequestSuccess

```TypeScript
onRequestSuccess(elementName: ElementName, message: string): void
```

Called when the application is successfully launched.

**Since:** 20

**Model restriction:** This API can be used only in the stage model.

**Atomic service API:** This API can be used in atomic services since API version 20.

**System capability:** SystemCapability.Ability.AbilityRuntime.Core

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| elementName | ElementName | Yes | **ElementName** information used to identify the target application. Typically,**ElementName** includes only **abilityName** and **bundleName**. The presence of **moduleName** and **deviceId**depends on whether the caller provides them. **shortName** and **uri** are empty. |
| message | string | Yes | Message displayed when the application is successfully launched. This message is in JSONformat, as follows:{?"errMsg": "Succeeded."} |

**Example**

See [Usage of CompletionHandler](#usage-of-completionhandler).

