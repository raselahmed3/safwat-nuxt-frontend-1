import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "D:/my work/Documents/safwat-nuxt-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}