<template>
  <div class="wrapper">
    <h1>Employee Data</h1>
    <div class="add-employee">
      <button>Add Employee</button>
      <div class="employee-opt">
        <input type="text" placeholder>
        <span>
          <input type="submit" value>
        </span>
      </div>
    </div>
    <EmployeeTable :tableUsers="dbUsers"></EmployeeTable>
  </div>
</template>

<script>
//@=src folder
import EmployeeTable from "@/components/EmployeeTable";
export default {
  components: {
    //'app-employee-table': EmployeeTable //<app-employee-table>
    EmployeeTable
  },
  computed: {
    dbUsers() {
      return this.$store.getters.getUsers;
    }
  },
  created() {
    this.$store.dispatch("fetchUsers");
  }
};
</script>

<style>
.wrapper {
  margin: 0 auto;
  max-width: 600px;
}
.add-employee {
  margin: 0 0 20px;
}
.add-employee:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
}
.add-employee button {
}
.employee-opt {
  float: right;
}
.employee-opt input[type="text"] {
}
.employee-opt span {
  display: inline-block;
}
</style>
