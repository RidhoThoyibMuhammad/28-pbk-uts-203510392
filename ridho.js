<template>
  <div class="app">
    <h1>My Activity Tracker</h1>
    <div class="form-container">
      <input v-model="newActivity" @keyup.enter="addActivity" placeholder="Tambahkan kegiatan baru...">
      <button @click="addActivity">Tambah</button>
    </div>
    <ul class="activity-list">
      <li v-for="activity in activities" :key="activity.id" :class="{ 'completed': activity.completed }">
        <span class="activity-name">{{ activity.name }}</span>
        <div class="activity-actions">
          <button @click="toggleCompletion(activity)">Selesai</button>
          <button @click="cancelActivity(activity)">Batal</button>
        </div>
      </li>
    </ul>
    <div class="filter-container">
      <label for="filter">Tampilkan yang belum selesai:</label>
      <input type="checkbox" id="filter" v-model="showOnlyUncompleted">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
      newActivity: '',
      showOnlyUncompleted: false
    };
  },
  computed: {
    filteredActivities() {
      if (this.showOnlyUncompleted) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity !== '') {
        const activity = {
          id: new Date().getTime(),
          name: this.newActivity,
          completed: false
        };
        this.activities.push(activity);
        this.newActivity = '';
      }
    },
    toggleCompletion(activity) {
      activity.completed = !activity.completed;
    },
    cancelActivity(activity) {
      const index = this.activities.indexOf(activity);
      this.activities.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

.form-container {
  display: flex;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid #000;
}

button {
  padding: 0.5rem;
  background-color: #007