<template>
  <div>
    <table border="1" style="border-collapse: collapse" width="600">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th colspan="2">Description</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="tableUsers.length > 0">
          <tr v-for="user in tableUsers" :key="user.key">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.description }}</td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="4">No record found</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tableUsers: Array
  }
};
</script>

<style>
</style>
