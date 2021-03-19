<template>
<div>
    <h2>Nominate a Book</h2>
    <form v-on:submit.prevent="addBook">
        <input v-model="addedBookName" placeholder="Book name"><br/>
        <input v-model="addedPrice" placeholder="Price"><br/>
        <input v-model="addedAuthor" placeholder="Author"><br/>
        <input v-model="addedGenre" placeholder="Genre"><br/>
        <input v-model="addedLanguage" placeholder="Language"><br/>
        <button type="submit">Add</button>
    </form>
    <h2>Book List</h2>
      <div v-for="list in nominatelist" :key="list.id">
        <hr>
        <p>{{list.name}}</p>
        <p><i>-- {{list.author}}</i></p>
      </div>  
</div>
    
</template>

<script>
export default {
  name: 'NominateList',
  props: {
    nominatelist: Array
  },
  data () {
      return {
        name: '',
        genre: '',
        author: '',
        price: '',
        language: '',
      }
  },
  methods: {
    addBook() {
      this.$root.$data.nominatelist.push({
        name: this.addedBookName,
        genre: this.addedGenre,
        author: this.addedAuthor,
        price: this.addedPrice,
        language: this.addedLanguage
      });
      this.addedBookName = '';
      this.addedGenre = '';
      this.addedAuthor = '';
      this.addedPrice = '';
      this.addedLanguage = '';
    }
  }
}
</script>

  name: 'create',
  data() {
    return {
      creating: true,
      name: '',
      problem: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    addTicket() {
      this.$root.$data.addTicket(this.name, this.problem);
      this.name = "";
      this.problem = "";
      this.creating = false;
    },
  }
}