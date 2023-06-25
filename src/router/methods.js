import {h} from "vue";
import {RouterLink} from "vue-router";
import {NIcon} from "naive-ui";

export function R(item) {
  return {
    label: () => h(
      RouterLink,
      {
        to: {
          name: item.name,
          params: {
            lang: "zh-CN"
          }
        }
      },
      {default: () => item.label}
    ),
    key: item.name,
    icon: () => h(NIcon, null, {default: () => h(item.icon)}),
    name: item.name,
    path: item.path,
    component: item.component,
  }
}
