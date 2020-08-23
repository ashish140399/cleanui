<template>
  <div :class="$style.topbar">
    <div class="mr-2">
      <cui-search />
    </div>
    <div class="mr-auto">
      <cui-fav-pages />
    </div>
    <div class="mr-4 d-none d-md-block" style="display:none !important">
      <cui-issues-history />
    </div>
      <div class="mr-auto mt-n3 d-none d-md-block">
      <Breadcrumb />
    </div>
    <div class="mb-0 mr-auto d-xl-block d-none" style="display:none !important">
      <cui-project-management />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-language-switcher />
    </div>
    <div class="mr-4 d-none d-sm-block">
      <cui-actions />
    </div>
    <div>
      <cui-user-menu />
    </div>
  </div>
</template>

<script>
import CuiIssuesHistory from './IssuesHistory'
import CuiProjectManagement from './ProjectManagement'
import CuiSearch from './Search'
import CuiLanguageSwitcher from './LanguageSwitcher'
import CuiActions from './Actions'
import CuiUserMenu from './UserMenu'
import CuiFavPages from './FavPages'
import Breadcrumb from '../Breadcrumbs'

export default {
  components: {
    Breadcrumb,
    CuiIssuesHistory,
    CuiProjectManagement,
    CuiSearch,
    CuiLanguageSwitcher,
    CuiActions,
    CuiUserMenu,
    CuiFavPages,
  },
}
</script>

<style lang="scss" module>
@import "./style.module.scss";
</style>
