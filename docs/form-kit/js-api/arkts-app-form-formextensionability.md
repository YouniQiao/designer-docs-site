# @ohos.app.form.FormExtensionAbility

## Modules to Import

```TypeScript
import { FormExtensionAbility } from '@kit.FormKit';
```

## Summary

### Classes

| Name | Description |
| --- | --- |
| [FormExtensionAbility](arkts-formextensionability-c.md) | Widget extension class. It provides APIs to notify the widget provider that a widget is being created or the widget visibility status is being changed. |

### Types

| Name | Description |
| --- | --- |
| <!--DelRow-->[OnAcquireFormDataFn](arkts-onacquireformdatafn-t.md) | Called when the system acquire the form data. |
| [OnAcquireFormStateFn](arkts-onacquireformstatefn-t.md) | Called to return a {@link FormState} object. <p>You must override this callback if you want this ability to return the actual form state. Otherwise, this method returns {@link FormState#DEFAULT} by default.</p> |
| <!--DelRow-->[OnShareFormFn](arkts-onshareformfn-t.md) | Called when the system shares the form. |
| [OnStopFn](arkts-onstopfn-t.md) | Called when this ability breaks the last link, notifying the provider that the provider process is about to stop. |

