# PhotoEditorExtensionAbility

Class of the photo editor ExtensionAbility, which provides APIs for you to edit photos.

**继承实现关系：** PhotoEditorExtensionAbility继承自：ExtensionAbility。

**起始版本：** 12

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

## 导入模块

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';
```

## onBackground

```TypeScript
onBackground(): void
```

Called back when the state of an UI extension changes to background.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**示例：**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onBackground() {
    console.info(TAG, `onBackground`);
  }
}


```

## onCreate

```TypeScript
onCreate(): void
```

Called back when an UI extension is started for initialization.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**示例：**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onCreate() {
    console.info(TAG, `onCreate`);
  }
}


```

## onDestroy

```TypeScript
onDestroy(): void | Promise<void>
```

Called back before an UI extension is destroyed.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**示例：**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onDestroy() {
    console.info(TAG, `onDestroy`);
    // 调用同步函数...
  }
}



import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  async onDestroy() {
    console.info(TAG, `onDestroy`);
    // 调用异步函数...
  }
}


```

## onDestroy

```TypeScript
onDestroy(): Promise<void> | undefined
```

Called back before an UI extension is destroyed.

**起始版本：** 23

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**返回值：**

| 类型 | 说明 |
| --- | --- |
| Promise&lt;void> | the promise returned by the function. |

## onForeground

```TypeScript
onForeground(): void
```

Called back when the state of an UI extension changes to foreground.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AbilityRuntime.AbilityCore

**示例：**

```TypeScript
import { PhotoEditorExtensionAbility } from '@kit.AbilityKit';

const TAG: string = '[testTag] ExamplePhotoEditorAbility';

export default class ExamplePhotoEditorAbility extends PhotoEditorExtensionAbility {
  onForeground() {
    console.info(TAG, `onForeground`);
  }
}


```

## onStartContentEditing

```TypeScript
onStartContentEditing(uri: string, want: Want, session: UIExtensionContentSession): void
```

Called back when an UI extension session is created and original image is ready.

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

**参数：**

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uri | string | 是 | Indicates the uri info of the original image. |
| want | Want | 是 | Indicates the want info of the UI extension. |
| session | UIExtensionContentSession | 是 | Indicates the session of the UI extension page. |

**示例：**

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

**类型：** PhotoEditorExtensionContext

**起始版本：** 12

**模型约束：** 此接口仅可在Stage模型下使用。

**系统能力：** SystemCapability.Ability.AppExtension.PhotoEditorExtension

