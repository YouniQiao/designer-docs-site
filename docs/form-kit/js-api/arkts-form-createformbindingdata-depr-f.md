# createFormBindingData

## createFormBindingData

```TypeScript
function createFormBindingData(obj?: Object | string): FormBindingData
```

Creates a **FormBindingData** object.

**Since:** 8

**Deprecated since:** 9

**Substitutes:** [createFormBindingData](arkts-form-createformbindingdata-f.md#createformbindingdata-1)

**System capability:** SystemCapability.Ability.Form

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| obj | Object \| string | No | Data to be displayed on the JS widget. The value can be an object containing multiplekey-value pairs or a string in JSON format. The image data is identified by **'formImages'**, and the content ismultiple key-value pairs, each of which consists of an image identifier and image file descriptor. The final formatis {'formImages': {'key1': fd1, 'key2': fd2}}. |

**Return value:**

| Type | Description |
| --- | --- |
| FormBindingData | **FormBindingData** object created based on the passed data. |

**Example**

```TypeScript
import { formBindingData } from '@kit.FormKit';
import { fileIo } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';

@Entry
@Component
struct Index {
  content = this.getUIContext().getHostContext() as common.UIAbilityContext;
  pathDir: string = this.content.filesDir;

  createFormBindingData() {
    try {
      let filePath = this.pathDir + "/form.png";
      let file = fileIo.openSync(filePath);
      let formImagesParam: Record<string, number> = {
        'image': file.fd
      };
      let createFormBindingDataParam: Record<string, string | Record<string, number>> = {
        'name': '21°',
        'imgSrc': 'image',
        'formImages': formImagesParam
      };
      formBindingData.createFormBindingData(createFormBindingDataParam);
    } catch (error) {
      console.error(`catch error, error: ${JSON.stringify(error)}`);
    }
  }

  build() {
    Button('createFormBindingData')
      .onClick((event: ClickEvent) => {
        this.createFormBindingData();
      })
  }
}

```

