# TabContentAttribute

��֧��[ͨ������]common�⣬��֧���������ԣ� ��֧��[ͨ���¼�]common�⣬��֧�������¼���

**Inheritance:** TabContentAttributeextends: CommonMethod<TabContentAttribute>.

**Since:** 7

**System capability:** SystemCapability.ArkUI.ArkUI.Full

## onWillHide

```TypeScript
onWillHide(event: VoidCallback)
```

�߼��ص���TabContent��Ҫ���ص�ʱ�򴥷��ûص�����������TabContent�л���ҳ���л�������ǰ��̨�л��� > **˵����** > ��API version 20��ʼ���ýӿ�֧����[attributeModifier]CommonMethod#attributeModifier�е��á�

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | TabContent��Ҫ���صĻص������� |

## onWillShow

```TypeScript
onWillShow(event: VoidCallback)
```

�߼��ص���TabContent��Ҫ��ʾ��ʱ�򴥷��ûص�����������TabContent�״���ʾ��TabContent�л���ҳ���л�������ǰ��̨�л��� > **˵����** > ��API version 20��ʼ���ýӿ�֧����[attributeModifier]CommonMethod#attributeModifier�е��á�

**Since:** 12

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| event | VoidCallback | Yes | TabContent��Ҫ��ʾ�Ļص������� |

## tabBar

```TypeScript
tabBar(options: string | Resource | CustomBuilder | TabBarOptions)
```

����TabBar����ʾ���ݡ� ���icon����svg��ʽͼԴ����ɾ��svgͼԴ���õĿ�������ֵ������icon��С��ʹ��svgͼԴ���õĿ�������ֵ�� ���õ����ݳ���tabBarҳǩʱ���в��С�

**Since:** 7

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| options | string \| Resource \| CustomBuilder \| TabBarOptions | Yes | TabBar����ʾ���ݡ� CustomBuilder��?���������ڲ����Դ������  ��API version 8�汾�������ã��� [since 18] |

## tabBar

```TypeScript
tabBar(value: SubTabBarStyle | BottomTabBarStyle)
```

����TabBar����ʾ���ݡ��ײ���ʽû���»���Ч����icon�쳣ʱ��ʾ��ɫͼ�顣 > **˵����** > - ��ҳǩ��[SubTabBarStyle](arkts-subtabbarstyle-c.md#SubTabBarStyle)����ʽ��ͨ��Ϊ����+�»��ߣ�����+�����ҳǩ������������ı���ʽ����������ڶ������ߵײ�ʹ�á��л�ҳǩʱĬ��֧�ֶ�����תЧ������������Ѷ > ��Ӧ�õĶ������ࣨ��"��ע����Ƶ������"��������ģ��Ķ������������� > > - �ײ�ҳǩ/���ҳǩ��[BottomTabBarStyle](arkts-bottomtabbarstyle-c.md#BottomTabBarStyle)����ʽ�����»��ߺͱ���Ч����ҳǩ��ʽͨ��Ϊͼ��+���ֵ���Ϸ�ʽ���л�ҳǩʱĬ���޶�����תЧ�����ײ�ҳǩͨ������Ӧ�� > ������������ҳ�����֡��Ƽ��������ҳǩ�����ڿ���������������vertical(true)�������򲼾֣���ҳǩ�ڲ����ʾ��Ĭ�������ʾ��

**Since:** 9

**Atomic service API:** From API version 11 this API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| value | SubTabBarStyle \| BottomTabBarStyle | Yes | TabBar����ʾ���ݡ� SubTabBarStyle��?��ҳǩ��ʽ��  BottomTabBarStyle��?�ײ�ҳǩ�Ͳ��ҳǩ��ʽ�� |

## tabBar

```TypeScript
tabBar(content: ComponentContent | SubTabBarStyle | BottomTabBarStyle | string | Resource | CustomBuilder | 
    TabBarOptions)
```

����TabBar����ʾ���ݡ� ʹ��BottomTabBarStyle��TabBarOptions������Ϊ��β�����icon��icon�쳣ʱ��ʾ��ɫͼ�顣���icon����svg��ʽͼԴ����ɾ��svgͼԴ���õĿ�������ֵ������icon��С��ʹ��svgͼԴ���õĿ� ������ֵ�� ���õ����ݳ���TabBarҳǩʱ���в��С�

**Since:** 18

**Model restriction:** This API can be used only in the Stage model.

**Atomic service API:** This API can be used in atomic services.

**System capability:** SystemCapability.ArkUI.ArkUI.Full

**Parameters:**

| Name | Type | Mandatory | Description |
| --- | --- | --- | --- |
| content | ComponentContent \| SubTabBarStyle \| BottomTabBarStyle \| string \| Resource \| CustomBuilder \| TabBarOptions | Yes | Content displayed on the tab bar. ComponentContent: encapsulation of the component content,  which can be customized. SubTabBarStyle: subtab style. BottomTabBarStyle: style of the bottom and  side tabs. The bottom style does not have the underline effect. string: string type. Resource:  resource reference for importing strings from system or application resources. CustomBuilder: builder  that can take components as arguments. TabBarOptions: options for configuring images and text content on  the tabs. |

