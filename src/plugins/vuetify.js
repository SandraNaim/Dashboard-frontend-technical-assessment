import Vue from "vue";
import en from "../lang/en";

import Vuetify, {
  VCol,
  VRow,
  VApp,
  VFooter,
  VBtn,
  VTextarea,
  VTextField,
  VLabel,
  VForm,
  VContainer,
  VImg,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VExpansionPanel,
  VExpansionPanels,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VListItem,
  VListItemTitle,
  VListItemGroup,
  VList,
  VNavigationDrawer,
  VMain,
  VAppBar,
  VAppBarNavIcon,
  VSpacer,
  VCarousel,
  VCarouselItem,
  VToolbarItems,
  VMenu,
  VListItemContent,
  VListGroup,
  VCardText,
  VDivider,
  VProgressLinear,
  VDataTable,
  VChip,
  VRadio,
  VRadioGroup,
  VCheckbox
} from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  components: {
    VApp,
    VCol,
    VRow,
    VFooter,
    VBtn,
    VTextarea,
    VTextField,
    VLabel,
    VForm,
    VContainer,
    VImg,
    VCard,
    VCardTitle,
    VCardSubtitle,
    VExpansionPanel,
    VExpansionPanels,
    VExpansionPanelHeader,
    VExpansionPanelContent,
    VListItem,
    VListItemTitle,
    VListItemGroup,
    VList,
    VNavigationDrawer,
    VMain,
    VAppBar,
    VAppBarNavIcon,
    VSpacer,
    VCarousel,
    VCarouselItem,
    VToolbarItems,
    VMenu,
    VListItemContent,
    VListGroup,
    VCardText,
    VDivider,
    VProgressLinear,
    VDataTable,
    VChip,
    VRadio,
    VRadioGroup,
    VCheckbox
  }
});

export default new Vuetify({
  lang: {
    locales: { en },
    current: "en"
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#1CDBAF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
