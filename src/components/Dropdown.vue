<template>
  <MDBDropdown class="text-center" v-model="dropdown1">
    <MDBDropdownToggle @click="dropdown1 = !dropdown1">
      Dropdown button
    </MDBDropdownToggle>
    <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
      <MDBDropdownItem
        v-for="(item, index) in dropdownItems"
        :key="index"
        @click.prevent="selectItem(index)"
        href="#"
      >{{ item }}</MDBDropdownItem>
    </MDBDropdownMenu>
  </MDBDropdown>
</template>

<script>
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdb-vue-ui-kit";
import { ref, watch } from 'vue';

export default {
  props: ['dropdownItems'],
  components: {
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
  },
  setup(props, { emit }) {
    const dropdown1 = ref(false);

    const selectItem = (index) => {
      emit('select-item', index);
    };

    // Watch for changes in dropdownItems prop and emit 'select-item' event with the first index
    watch(() => props.dropdownItems, (newItems) => {
      if (newItems && newItems.length > 0) {
        emit('select-item', 0);
      }
    }, { immediate: true });

    return {
      dropdown1,
      selectItem
    };
  },
};
</script>
