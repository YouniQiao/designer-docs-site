# PhotoEditorExtensionAbility

Class of the photo editor ExtensionAbility, which provides APIs for you to edit photos.

**Inheritance/Implementation:** PhotoEditorExtensionAbility extends [ExtensionAbility](arkts-ability-app-ability-extensionability-extensionability-c.md)

**Since:** 12

<!--Device-unnamed-declare class PhotoEditorExtensionAbility extends ExtensionAbility--><!--Device-unnamed-declare class PhotoEditorExtensionAbility extends ExtensionAbility-End-->

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

## Modules to Import

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';
```

<a id="onbackground"></a>
## onBackground

```TypeScript
onBackground(): void
```

Called back when the state of an UI extension changes to background.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-onBackground(): void--><!--Device-PhotoEditorExtensionAbility-onBackground(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onBackground() {
    console.info(TAG, `onBackground`);
  }
}


```

<a id="oncreate"></a>
## onCreate

```TypeScript
onCreate(): void
```

Called back when an UI extension is started for initialization.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-onCreate(): void--><!--Device-PhotoEditorExtensionAbility-onCreate(): void-End-->

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**Example**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onCreate() {
    console.info(TAG, `onCreate`);
  }
}


```

<a id="ondestroy"></a>
## onDestroy

```TypeScript
onDestroy(): void | Promise<void>
```

Called back before an UI extension is destroyed.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-onDestroy(): void | Promise<void>--><!--Device-PhotoEditorExtensionAbility-onDestroy(): void | Promise<void>-End-->

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**Example**

A synchronous callback example is as follows:

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onDestroy() {
    console.info(TAG, `onDestroy`);
    // Call the synchronous function.
  }
}


```

A promise asynchronous callback example is as follows:

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  async onDestroy() {
    console.info(TAG, `onDestroy`);
    // Call the asynchronous function.
  }
}


```

<a id="onforeground"></a>
## onForeground

```TypeScript
onForeground(): void
```

Called back when the state of an UI extension changes to foreground.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-onForeground(): void--><!--Device-PhotoEditorExtensionAbility-onForeground(): void-End-->

**System capability:** SystemCapability.Ability.AbilityRuntime.AbilityCore

**Example**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onForeground() {
    console.info(TAG, `onForeground`);
  }
}


```

<a id="onstartcontentediting"></a>
## onStartContentEditing

```TypeScript
onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void
```

Called back when an UI extension session is created and original image is ready.

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void--><!--Device-PhotoEditorExtensionAbility-onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void-End-->

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| uri | string | Yes | Indicates the uri info of the original image. |
| want | [Want](../../apis-arkui/arkts-apis/arkts-arkui-want-t-sys.md) | Yes | Indicates the want info of the UI extension. |
| session | [UIExtensionContentSession](arkts-ability-app-ability-uiextensioncontentsession-uiextensioncontentsession-c.md) | Yes | Indicates the session of the UI extension page. |

**Example**

```TypeScript
import { PhotoEditorExtensionAbility, Want, UIExtensionContentSession } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession) {
    console.info(TAG, `onStartContentEditing want: ${JSON.stringify(want)}, uri: ${uri}`);
  }
}


```

## context

```TypeScript
context: PhotoEditorExtensionContext
```

Indicates configuration information about an Photo editor extension ability context.

**Type:** PhotoEditorExtensionContext

**Since:** 12

**Model restriction:** This API can be used only in the stage model.

<!--Device-PhotoEditorExtensionAbility-context: PhotoEditorExtensionContext--><!--Device-PhotoEditorExtensionAbility-context: PhotoEditorExtensionContext-End-->

**System capability:** SystemCapability.Ability.AppExtension.PhotoEditorExtension

