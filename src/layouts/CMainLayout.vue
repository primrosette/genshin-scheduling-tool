<template>
  <q-layout view="hhh lpR fFf">
    <q-header class="text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Genshin Impact
        </q-toolbar-title>

        <q-tabs>
          <q-route-tab to="/calculators" label="Calculators"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer v-if="$q.screen.lt.sm" class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div> TODO: For mobile users </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
}
</script>