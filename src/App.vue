<template>
    <h1 class="title">后台管理系统</h1>
    <ManagerPanel class="rooter"></ManagerPanel>
</template>

<script>
import ManagerPanel from './components/ManagerPanel'

export default {
    name: 'App',
    components: {
        "ManagerPanel": ManagerPanel
    },
}
</script>

<style scoped>
h1 {
    text-align: center;
}

.rooter {
    background: #e7efca;
}
</style>
